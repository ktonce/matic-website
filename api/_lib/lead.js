/* Sanitizzazione, validazione e composizione dell'email del lead.
   Nessuna fiducia nel client: tutto ciò che arriva viene normalizzato,
   troncato e confrontato con whitelist prima di finire nell'email. */

const MAX = {
  nome: 120, azienda: 160, telefono: 40, email: 160, servizio: 120,
  servizio_scelto: 120, progetto: 4000, pagina: 500, referrer: 500,
  timestamp: 40, form_id: 60, utm: 120, generic: 300
};

// ── Whitelist ────────────────────────────────────────────────────────────────

/* form_id ammessi: uno per pagina con form. Qualunque altro valore → 400. */
export const FORM_IDS = [
  'preventivo',
  'sopralluogo-insegne',
  'preventivo-automezzi',
  'preventivo-stampa',
  'preventivo-vetrofanie',
  'preventivo-allestimenti',
  'valutazione-incisioni'
];

/* Unione delle option "servizio" presenti nei form:
   src/data/home.js (homepage) + src/data/services.js (pagine servizio). */
export const SERVIZI = [
  'Insegne',
  'Insegne e vetrofanie',
  'Vetrofanie e decorazione vetrine',
  'Decorazione automezzi',
  'Stampa e grande formato',
  'Allestimenti',
  'Incisioni e lavorazioni',
  'Sito web',
  'Comunicazione digitale',
  'Non so quale servizio scegliere'
];

/* Campi specifici di pagina ammessi, con l'etichetta usata nell'email.
   Fonte: `form.extra` di ogni pagina in src/data/services.js. */
const LABELS = {
  localita: 'Località',
  tipo_mezzo: 'Tipo di mezzo',
  numero_mezzi: 'Numero di mezzi',
  prodotto: 'Prodotto richiesto',
  quantita: 'Quantità',
  misure: 'Misure',
  file: 'File / disegno già disponibile',
  intervento: 'Tipo di intervento',
  spazio: 'Tipo di spazio',
  stato: 'Stato del progetto',
  tipo: 'Tipo richiesta',
  materiale: 'Materiale',
  dimensioni: 'Dimensioni indicative'
};
export const EXTRA_KEYS = Object.keys(LABELS);
const MAX_EXTRA = 12;

// ── Sanitizzazione ───────────────────────────────────────────────────────────

export function clean(v, max = MAX.generic) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return '';
  return String(v)
    .replace(/[\u0000-\u001f\u007f]/g, ' ')   // caratteri di controllo
    .trim()
    .slice(0, max);
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const KNOWN = ['form_id','servizio','servizio_scelto','nome','azienda','telefono','email','progetto','pagina','referrer','timestamp','website'];
const UTM = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];

export function normalize(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  const out = {};
  for (const k of KNOWN) out[k] = clean(src[k], MAX[k] || MAX.generic);
  for (const k of UTM) out[k] = clean(src[k], MAX.utm);

  // Campi specifici: solo chiavi in whitelist, massimo MAX_EXTRA.
  out.extra = {};
  let n = 0;
  for (const k of EXTRA_KEYS) {
    if (n >= MAX_EXTRA) break;
    const v = clean(src[k], MAX.generic);
    if (v) { out.extra[k] = v; n++; }
  }
  return out;
}

export function validate(d) {
  const errors = {};

  if (!FORM_IDS.includes(d.form_id)) errors.form_id = 'non valido';

  const servizio = d.servizio_scelto || d.servizio;
  if (servizio && !SERVIZI.includes(servizio)) errors.servizio = 'non valido';

  if (!d.nome) errors.nome = 'obbligatorio';
  if (!d.telefono) errors.telefono = 'obbligatorio';
  else if (d.telefono.replace(/[^0-9]/g, '').length < 8) errors.telefono = 'non valido';

  if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errors.email = 'non valida';

  if (Object.keys(d.extra || {}).length > MAX_EXTRA) errors.extra = 'troppi campi';

  return errors;
}

// ── Composizione email ───────────────────────────────────────────────────────

const label = (k) => LABELS[k] || (k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' '));

/* Costruisce le sezioni dell'email. I campi vuoti vengono omessi,
   tranne quelli strutturalmente sempre presenti (nome, telefono, servizio). */
function sections(d) {
  const servizio = d.servizio_scelto || d.servizio || 'Richiesta generica';
  const when = (() => {
    try { return new Date(d.timestamp || Date.now()).toLocaleString('it-IT'); }
    catch (err) { return d.timestamp || ''; }
  })();

  const keep = (pairs) => pairs.filter(([, v]) => v);

  const out = [];

  out.push(['Richiesta', keep([
    ['Servizio', servizio],
    ['Pagina', d.pagina],
    ['Form ID', d.form_id]
  ])]);

  out.push(['Contatto', keep([
    ['Nome', d.nome],
    ['Azienda', d.azienda],
    ['Telefono', d.telefono],
    ['Email', d.email]
  ])]);

  const extra = keep(Object.entries(d.extra || {}).map(([k, v]) => [label(k), v]));
  if (extra.length) out.push(['Dettagli richiesta', extra]);

  if (d.progetto) out.push(['Messaggio / progetto', [['', d.progetto]]]);

  const tracking = keep([
    ['UTM source', d.utm_source],
    ['UTM medium', d.utm_medium],
    ['UTM campaign', d.utm_campaign],
    ['UTM content', d.utm_content],
    ['UTM term', d.utm_term],
    ['Referrer', d.referrer],
    ['Data e ora', when]
  ]);
  if (tracking.length) out.push(['Tracking', tracking]);

  return { servizio, out };
}

export function buildEmail(d) {
  const { servizio, out } = sections(d);
  const subject = '[MATIC] Nuova richiesta — ' + servizio;

  const text = out
    .map(([title, rows]) =>
      title.toUpperCase() + '\n' +
      '----------------------------------------\n' +
      rows.map(([k, v]) => (k ? k + ': ' + v : v)).join('\n')
    )
    .join('\n\n');

  const html =
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1A1D23;line-height:1.6">' +
    '<h2 style="font-size:18px;margin:0 0 20px">Nuova richiesta dal sito</h2>' +
    out
      .map(([title, rows]) =>
        '<h3 style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#FF6B35;margin:22px 0 6px">' +
        escapeHtml(title) +
        '</h3><table style="border-collapse:collapse;width:100%">' +
        rows
          .map(([k, v]) =>
            k
              ? '<tr><td style="padding:4px 16px 4px 0;color:#6B7280;vertical-align:top;white-space:nowrap">' +
                escapeHtml(k) +
                '</td><td style="padding:4px 0">' + escapeHtml(v) + '</td></tr>'
              : '<tr><td style="padding:4px 0;white-space:pre-wrap">' + escapeHtml(v) + '</td></tr>'
          )
          .join('') +
        '</table>'
      )
      .join('') +
    '</div>';

  return { subject, text, html };
}

/* Reply-To dinamico solo con email cliente valida e presente. */
export function replyToFor(d) {
  return d.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) ? d.email : '';
}
