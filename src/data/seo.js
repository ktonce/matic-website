// META APPROVATI — non modificare senza approvazione.
// Ogni voce viene resa staticamente da SEOHead.astro nell'HTML iniziale.
const OG_DEFAULT = '/media/sede-matic-1200.jpg';

export const seo = {
  '/': {
    title: 'MATIC | Stampa, insegne e comunicazione',
    description: 'Insegne, stampa, decorazione automezzi, vetrofanie, allestimenti e incisioni. Progettiamo, produciamo e installiamo soluzioni di comunicazione dal nostro laboratorio di Fucecchio.',
    ogImage: '/media/portfolio-cm.jpg'
  },
  '/insegne': {
    title: 'Insegne luminose e su misura a Fucecchio | MATIC',
    description: 'Progettiamo, produciamo e installiamo insegne luminose, lettere scatolate e soluzioni su misura per negozi e aziende. Sopralluogo in Toscana.',
    ogImage: '/media/portfolio-cm.jpg'
  },
  '/decorazione-automezzi': {
    title: 'Decorazione automezzi e flotte aziendali | MATIC',
    description: 'Personalizziamo auto, furgoni, camion e flotte aziendali con grafiche e decorazioni su misura, progettate e applicate nel nostro laboratorio in Toscana.',
    ogImage: '/media/portfolio-volvo.jpg'
  },
  '/stampa-grande-formato': {
    title: 'Stampa grande formato a Fucecchio ed Empoli | MATIC',
    description: 'Striscioni, banner, pannelli, adesivi e materiali promozionali su misura. Stampa grande formato professionale in Toscana. Richiedi un preventivo.',
    ogImage: OG_DEFAULT
  },
  '/vetrofanie': {
    title: 'Vetrofanie e decorazione vetrine su misura | MATIC',
    description: 'Vetrofanie, adesivi e soluzioni grafiche per vetrine di negozi, uffici e attività. Progettazione e applicazione su misura. Richiedi un preventivo.',
    ogImage: '/media/portfolio-geox.jpg'
  },
  '/allestimenti': {
    title: 'Allestimenti per negozi, fiere ed eventi | MATIC',
    description: 'Progettiamo e realizziamo allestimenti per punti vendita, showroom, fiere ed eventi: grafica, produzione e installazione coordinate.',
    ogImage: '/media/portfolio-soldaini.jpg'
  },
  '/incisioni-laser-cnc': {
    title: 'Incisioni laser e lavorazioni CNC su misura | MATIC',
    description: 'Incisioni, targhe e lavorazioni laser e CNC su misura per aziende e professionisti. Raccontaci il progetto e richiedi un preventivo.',
    ogImage: OG_DEFAULT
  },
  '/lavori': {
    title: 'Lavori realizzati | MATIC',
    description: 'Una selezione di insegne, vetrofanie, decorazioni di automezzi e allestimenti realizzati da MATIC nel laboratorio di Fucecchio.',
    ogImage: '/media/portfolio-soldaini.jpg'
  },
  '/privacy': {
    title: 'Informativa privacy | MATIC',
    description: 'Informativa sul trattamento dei dati personali raccolti tramite il sito di MATIC.',
    ogImage: OG_DEFAULT,
    noindex: false
  },
  '/cookie': {
    title: 'Cookie policy | MATIC',
    description: 'Informativa sui cookie utilizzati dal sito di MATIC.',
    ogImage: OG_DEFAULT,
    noindex: false
  }
};

export const seoFor = (path) => seo[path] || seo['/'];
