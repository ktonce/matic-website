// RECENSIONI REALI fornite dal cliente. NON riscrivere i testi.
// Fonte: array `testimonials` del prototipo homepage approvato.
export const testimonials = [
  { name: 'Federico T.', role: 'Azienda di produzione', text: 'Lavoriamo con MATIC da diversi anni per la personalizzazione dei mezzi e la cartellistica di stabilimento. Sempre una garanzia per la qualità dei materiali.' },
  { name: 'Andrea F.', role: 'Attività commerciale', text: 'Ci hanno seguito dalla progettazione fino al montaggio dell\'insegna. Tempi rispettati e lavoro molto pulito. Consigliati.' },
  { name: 'Gianluca P.', role: 'Servizi', text: 'Un solo interlocutore dalla bozza grafica al montaggio finale. Molto comodo non doversi preoccupare di nulla.' },
  { name: 'Lorella M.', role: 'Studio professionale', text: 'Avevamo bisogno di aggiornare la targa esterna e la segnaletica interna degli uffici. Precisi, disponibili e molto curati nei dettagli.' },
  { name: 'Andrea S.', role: 'Ristorazione', text: 'Insegna luminosa fatta benissimo e installata senza alcun intralcio all\'attività. Professionisti seri e locali.' },
  { name: 'Paola F.', role: 'Negozio / Retail', text: 'Ottima esperienza per il restyling della vetrina. Karim e il team sono stati disponibilissimi nel trovare la soluzione giusta per il nostro budget.' },
  { name: 'Elena V.', role: 'Struttura ricettiva', text: 'Lavoro impeccabile per i cartelli e la targa dell\'agriturismo. Finiture eleganti e resistenti alle intemperie.' },
  { name: 'Stefano B.', role: 'Società sportiva / Eventi', text: 'Ci hanno risolto una consegna urgente per uno striscione e la segnaletica di un evento in tempi record. Davvero efficienti.' }
];

// Associazioni testimonial → pagina, ammesse solo dove il testo documenta
// esplicitamente la lavorazione. Nessuna attribuzione per plausibilità.
export const byPage = {
  '/insegne': ['Andrea F.', 'Lorella M.'],
  '/decorazione-automezzi': ['Federico T.'],
  '/vetrofanie': ['Paola F.']
};

export const pick = (names) => testimonials.filter(t => names.includes(t.name));
