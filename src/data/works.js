// PORTFOLIO — un elemento per ogni fotografia realmente disponibile in /public/media.
// Titoli, categoria, settore e località dal portfolio approvato.
// `cliente` resta vuoto: nessuna autorizzazione all'uso dei marchi visibili.
export const works = [
  { id: 'soldaini',  cat: 'Allestimenti', tag: 'ALLESTIMENTI', settore: 'Retail',    localita: 'Toscana', cliente: '', title: 'Allestimento punto vendita',        desc: 'Allestimento interno ed esterno del punto vendita.', ratio: '16 / 10', href: '/allestimenti',          hrefLabel: 'Vedi gli allestimenti',            img: '/media/portfolio-soldaini.jpg',  alt: 'Allestimento interno ed esterno di un punto vendita realizzato da MATIC' },
  { id: 'waste',     cat: 'Insegne',      tag: 'INSEGNE',      settore: 'Industria', localita: 'Toscana', cliente: '', title: 'Insegna per attività industriale',    desc: 'Segnaletica esterna su misura per uno stabilimento.', ratio: '3 / 4',  href: '/insegne',               hrefLabel: 'Vedi le insegne',                  img: '/media/portfolio-waste.jpg',     alt: 'Insegna a pannello stampato installata su uno stabilimento industriale' },
  { id: 'cm',        cat: 'Insegne',      tag: 'INSEGNE',      settore: 'Retail',    localita: 'Toscana', cliente: '', title: 'Insegna per attività commerciale',    desc: 'Insegna luminosa da esterno, visibile giorno e notte.', ratio: '1 / 1', href: '/insegne',               hrefLabel: 'Vedi le insegne',                  img: '/media/portfolio-cm.jpg',        alt: "Insegna luminosa da esterno per un'attività commerciale" },
  { id: 'geox',      cat: 'Vetrofanie',   tag: 'VETROFANIE',   settore: 'Retail',    localita: 'Toscana', cliente: '', title: 'Vetrofania coordinata',               desc: "Vetrina coordinata con l'immagine del negozio.", ratio: '4 / 5',       href: '/vetrofanie',            hrefLabel: 'Vedi le vetrofanie',               img: '/media/portfolio-geox.jpg',      alt: 'Vetrina di un negozio decorata con vetrofania coordinata' },
  { id: 'parentini', cat: 'Automezzi',    tag: 'AUTOMEZZI',    settore: '',          localita: 'Toscana', cliente: '', title: 'Decorazione automezzo aziendale',     desc: 'Personalizzazione grafica per un veicolo aziendale.', ratio: '4 / 3',  href: '/decorazione-automezzi', hrefLabel: 'Vedi la decorazione automezzi',    img: '/media/portfolio-parentini.jpg', alt: 'Veicolo aziendale personalizzato con grafica applicata da MATIC' },
  { id: 'volvo',     cat: 'Automezzi',    tag: 'AUTOMEZZI',    settore: '',          localita: 'Italia',  cliente: '', title: 'Decorazione mezzo pesante',           desc: 'Decorazione grafica di un mezzo pesante.', ratio: '16 / 9',         href: '/decorazione-automezzi', hrefLabel: 'Vedi la decorazione automezzi',    img: '/media/portfolio-volvo.jpg',     alt: 'Mezzo pesante personalizzato con grafica realizzata da MATIC' }
];

// Solo le categorie effettivamente presenti: nessun filtro vuoto.
export function categories(list = works) {
  const order = ['Insegne', 'Vetrofanie', 'Automezzi', 'Allestimenti', 'Altro'];
  return ['Tutti', ...order.filter(c => list.some(w => w.cat === c))];
}

export const byCategory = (cat) => works.filter(w => w.cat === cat);
export const metaLine = (w) => [w.settore, w.localita, w.cliente].filter(Boolean).join(' · ').toUpperCase();
