// Navigazione uniforme su tutte le pagine. Un solo elenco: header desktop,
// menu mobile e footer leggono da qui.
export const services = [
  { slug: '/insegne',                 short: 'Insegne',      label: 'Insegne' },
  { slug: '/vetrofanie',              short: 'Vetrofanie',   label: 'Vetrofanie' },
  { slug: '/decorazione-automezzi',   short: 'Automezzi',    label: 'Decorazione automezzi' },
  { slug: '/stampa-grande-formato',   short: 'Stampa',       label: 'Stampa grande formato' },
  { slug: '/allestimenti',            short: 'Allestimenti', label: 'Allestimenti' },
  { slug: '/incisioni-laser-cnc',     short: 'Incisioni',    label: 'Incisioni e lavorazioni' }
];

export const mainNav = [...services, { slug: '/lavori', short: 'Lavori', label: 'Lavori' }];

export const companyNav = [
  { slug: '/lavori',    label: 'Lavori' },
  { slug: '/#chi-siamo', label: 'Chi siamo' },
  { slug: '/#contatti',  label: 'Richiedi un preventivo' }
];

export const legalNav = [
  { slug: '/privacy', label: 'Privacy policy' },
  { slug: '/cookie',  label: 'Cookie policy' }
];
