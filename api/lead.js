import { normalize, validate, buildEmail, replyToFor } from './_lib/lead.js';
import { sendLeadEmail } from './_lib/email.js';
import { rateLimit, rateLimitMode } from './_lib/rate-limit.js';

/*
  POST /api/lead — Vercel Serverless Function (Node).

  Contratto di risposta, sempre JSON e sempre uno di questi:
    200 { ok: true }
    400 { ok: false, error: 'invalid', fields: { campo: 'motivo' } }
    403 { ok: false, error: 'forbidden' }
    405 { ok: false, error: 'method-not-allowed' }
    429 { ok: false, error: 'rate-limit' }
    500 { ok: false, error: 'send-failed' }

  Il frontend mostra il successo SOLO su { ok: true }.
  Nessun dettaglio interno (provider, stack, env, body Resend) esce dalla
  function: i dettagli finiscono esclusivamente nei log della function.
*/

const SITE_ORIGIN = () => (process.env.SITE_ORIGIN || '').replace(/\/$/, '');

/* Origin ammessi:
   - SITE_ORIGIN (produzione);
   - il deployment corrente su Vercel (VERCEL_URL), per i Preview;
   - i sottodomini *.vercel.app del progetto, solo quando l'ambiente
     NON è production.
   Mai wildcard. */
function isAllowedOrigin(origin) {
  if (!origin) return true; // same-origin: il browser non invia Origin su POST same-site
  const site = SITE_ORIGIN();
  if (site && origin === site) return true;

  const env = process.env.VERCEL_ENV || '';
  if (env && env !== 'production') {
    if (process.env.VERCEL_URL && origin === 'https://' + process.env.VERCEL_URL) return true;
    if (/^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin)) return true;
    if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  }
  return false;
}

function cors(res, origin) {
  if (origin && isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

const json = (res, status, body) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(status).send(JSON.stringify(body));
};

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  cors(res, origin);

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method-not-allowed' });

  if (!isAllowedOrigin(origin)) {
    console.warn('[MATIC][lead] origin rifiutato:', origin);
    return json(res, 403, { ok: false, error: 'forbidden' });
  }

  // Rate limiting per IP (Redis se configurato, altrimenti in-memory).
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const rl = await rateLimit(ip);
  if (!rl.allowed) {
    res.setHeader('Retry-After', String(rl.retryAfter || 600));
    console.warn('[MATIC][lead] rate limit (%s) ip=%s', rl.mode || rateLimitMode(), ip);
    return json(res, 429, { ok: false, error: 'rate-limit' });
  }

  let raw;
  try {
    raw = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch (err) {
    return json(res, 400, { ok: false, error: 'invalid', fields: { body: 'json non valido' } });
  }

  const data = normalize(raw);

  // Honeypot: risposta identica al successo, nessuna email inviata.
  if (data.website) {
    console.log('[MATIC][lead] honeypot ip=%s form=%s', ip, data.form_id);
    return json(res, 200, { ok: true });
  }

  // Validazione server-side: quella client è bypassabile.
  const errors = validate(data);
  if (Object.keys(errors).length) {
    console.warn('[MATIC][lead] payload non valido:', Object.keys(errors).join(', '));
    return json(res, 400, { ok: false, error: 'invalid', fields: errors });
  }

  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.EMAIL_FROM;
  if (!to || !from) {
    console.error('[MATIC][lead] LEAD_TO_EMAIL o EMAIL_FROM non configurate');
    return json(res, 500, { ok: false, error: 'send-failed' });
  }

  const { subject, text, html } = buildEmail(data);
  const replyTo = replyToFor(data);

  try {
    await sendLeadEmail({ to, from, subject, text, html, replyTo });
    return json(res, 200, { ok: true });
  } catch (err) {
    console.error('[MATIC][lead] invio fallito:', err && err.message);
    return json(res, 500, { ok: false, error: 'send-failed' });
  }
}
