/*
  Adapter email. Nessuna credenziale nel codice: la chiave arriva
  esclusivamente da process.env.EMAIL_PROVIDER_API_KEY.

  EMAIL_PROVIDER:
    'resend' → provider di produzione (https://resend.com/docs/api-reference/emails/send-email)
    'log'    → scrive il lead nei log della function, non invia nulla (staging)

  L'errore restituito da questa funzione NON viene mai propagato al client:
  api/lead.js lo logga server-side e risponde 500 { ok:false, error:'send-failed' }.
*/

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const SEND_TIMEOUT = 10000;

function withTimeout(ms) {
  if (typeof AbortController !== 'function') return { signal: undefined, clear: () => {} };
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return { signal: c.signal, clear: () => clearTimeout(t) };
}

export async function sendLeadEmail({ to, from, subject, text, html, replyTo }) {
  const provider = (process.env.EMAIL_PROVIDER || 'log').toLowerCase();
  const key = process.env.EMAIL_PROVIDER_API_KEY;

  if (provider === 'log' || !key) {
    // Modalità di staging esplicita: nessuna email inviata, nessun errore.
    if (provider !== 'log') console.warn('[MATIC][lead] EMAIL_PROVIDER_API_KEY assente → fallback provider=log');
    console.log('[MATIC][lead] provider=log — email NON inviata');
    console.log('[MATIC][lead] to=%s from=%s replyTo=%s subject=%s', to, from, replyTo || '-', subject);
    console.log('[MATIC][lead] body:\n%s', text);
    return { ok: true, delivered: false, provider: 'log' };
  }

  if (provider === 'resend') {
    const payload = { from, to: [to], subject, text, html };
    // Reply-To solo se il cliente ha lasciato un'email valida.
    if (replyTo) payload.reply_to = [replyTo];

    const { signal, clear } = withTimeout(SEND_TIMEOUT);
    let res;
    try {
      res = await fetch(RESEND_ENDPOINT, {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal
      });
    } catch (err) {
      clear();
      // Timeout o errore di rete: nessun dettaglio esce dalla function.
      throw new Error('resend-network:' + (err && err.name === 'AbortError' ? 'timeout' : 'fetch-failed'));
    }
    clear();

    if (!res.ok) {
      // Il body di Resend resta nei log, mai nella risposta al client.
      let detail = '';
      try { detail = (await res.text()).slice(0, 500); } catch (err) { detail = '(body non leggibile)'; }
      console.error('[MATIC][lead] resend HTTP %s — %s', res.status, detail);
      throw new Error('resend-http:' + res.status);
    }

    let id = '';
    try { id = ((await res.json()) || {}).id || ''; } catch (err) { /* risposta senza JSON */ }
    console.log('[MATIC][lead] resend ok id=%s', id || '-');
    return { ok: true, delivered: true, provider: 'resend', id };
  }

  throw new Error('unknown-email-provider:' + provider);
}
