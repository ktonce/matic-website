import { trackLead } from './analytics.js';

/* Invio del lead. Payload identico al prototipo approvato.
   - endpoint /api/lead (serverless function su Vercel)
   - timeout 15s
   - guard sul doppio invio
   - i dati restano nel form in caso di errore
   - il successo viene mostrato SOLO se il server risponde { ok: true }   */
const ENDPOINT = '/api/lead';
const TIMEOUT = 15000;

function utm() {
  const out = {};
  try {
    const q = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k => {
      const v = q.get(k);
      if (v) out[k] = v;
    });
  } catch (err) { /* URL senza query */ }
  return out;
}

function validate(data) {
  const errors = {};
  if (!String(data.nome || '').trim()) errors.nome = 'Inserisci nome e cognome.';
  const tel = String(data.telefono || '').trim();
  if (!tel) errors.telefono = 'Inserisci un numero di telefono.';
  else if (tel.replace(/[^0-9]/g, '').length < 8) errors.telefono = 'Il numero di telefono non sembra completo.';
  const mail = String(data.email || '').trim();
  if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) errors.email = "Controlla l'indirizzo email.";
  return errors;
}

export function initLeadForm() {
  // Stato iniziale esplicito: nessun box di conferma visibile al load, su ogni pagina.
  document.querySelectorAll('[data-form-success]').forEach(el => { el.hidden = true; });
  document.querySelectorAll('[data-form-fallback]').forEach(el => { el.hidden = true; });

  const form = document.querySelector('[data-lead-form]');
  if (!form) return;

  // Il box di conferma è il fratello precedente del form: lookup scoped, non globale.
  const success = form.parentElement
    ? form.parentElement.querySelector('[data-form-success]')
    : document.querySelector('[data-form-success]');
  const status = form.querySelector('[data-form-status]');
  const fallback = form.querySelector('[data-form-fallback]');
  const submit = form.querySelector('[type="submit"]');
  const submitLabel = submit ? submit.textContent : '';
  let sending = false;

  const showErrors = (errors) => {
    form.querySelectorAll('[data-error-for]').forEach(el => {
      const k = el.getAttribute('data-error-for');
      el.textContent = errors[k] || '';
      el.hidden = !errors[k];
      const input = form.querySelector('[name="' + k + '"]');
      if (input) input.setAttribute('aria-invalid', errors[k] ? 'true' : 'false');
    });
  };

  form.addEventListener('input', () => { if (status) status.textContent = ''; });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return;

    const fd = new FormData(form);
    const data = {};
    fd.forEach((v, k) => { data[k] = typeof v === 'string' ? v.trim() : v; });

    const errors = validate(data);
    showErrors(errors);
    if (Object.keys(errors).length) {
      if (status) status.textContent = 'Controlla i campi segnalati.';
      if (fallback) fallback.hidden = true;
      return;
    }

    const payload = Object.assign({}, data, {
      form_id: form.dataset.formId,
      pagina: window.location.href,
      referrer: document.referrer || '',
      timestamp: new Date().toISOString()
    }, utm());

    sending = true;
    if (submit) { submit.disabled = true; submit.textContent = 'Invio in corso…'; }
    if (status) status.textContent = '';
    if (fallback) fallback.hidden = true;

    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(), TIMEOUT) : null;

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined
      });
      if (timer) window.clearTimeout(timer);

      let body = null;
      try { body = await res.json(); } catch (err) { body = null; }

      // Errori applicativi: messaggio dedicato, dati conservati nel form.
      if (res.status === 429) {
        if (status) status.textContent = 'Hai già inviato più richieste. Riprova fra qualche minuto oppure contattaci direttamente.';
        if (fallback) fallback.hidden = false;
        return;
      }
      if (res.status === 400 && body && body.fields) {
        const srv = {};
        Object.keys(body.fields).forEach(k => { srv[k] = 'Controlla questo campo.'; });
        showErrors(srv);
        if (status) status.textContent = 'Controlla i campi segnalati.';
        return;
      }

      // Successo dichiarato solo con conferma esplicita del server.
      if (!res.ok || !body || body.ok !== true) throw new Error('lead-not-confirmed');

      trackLead(payload);
      if (success) { success.hidden = false; form.hidden = true; }
    } catch (err) {
      if (timer) window.clearTimeout(timer);
      // I dati inseriti restano nel form: si può riprovare senza riscriverli.
      if (status) status.textContent = 'Non siamo riusciti a inviare la richiesta. Puoi riprovare oppure contattarci direttamente.';
      if (fallback) fallback.hidden = false;
    } finally {
      sending = false;
      if (submit) { submit.disabled = false; submit.textContent = submitLabel; }
    }
  });
}
