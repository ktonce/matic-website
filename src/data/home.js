// Copy della homepage — verbatim dal prototipo approvato
// "Homepage Matic Pubblicità.dc.html". NON riscrivere, NON sintetizzare.

export const heroCopy = {
  eyebrow: 'MATIC · STAMPA, INSEGNE E COMUNICAZIONE',
  h1: 'Diamo visibilità alla tua azienda.',
  claim: 'Insegne, stampa, allestimenti e soluzioni su misura.',
  lead: 'Progettiamo, produciamo e installiamo insegne, vetrofanie, stampe, decorazioni di automezzi e allestimenti. Da oltre 20 anni, dal nostro laboratorio di Fucecchio.',
  facts: ['20+ anni di esperienza', 'Produzione interna', 'Progettazione', 'Installazione'],
  note: 'Produciamo a Fucecchio. Lavoriamo in Toscana e in tutta Italia.'
};

// Ogni riga linka la pagina servizio corrispondente: nessuna pagina orfana.
export const prodCats = [
  { num: '01', title: 'Insegne e vetrofanie',    desc: 'Insegne luminose e non luminose, lettere scatolate, targhe, segnaletica e decorazione vetrine.',                       image: '/media/portfolio-cm.jpg',        href: '/insegne',               cta: 'Scopri le insegne' },
  { num: '02', title: 'Decorazione automezzi',   desc: 'Personalizzazione di auto, furgoni, camion e flotte aziendali.',                                                       image: '/media/portfolio-volvo.jpg',     href: '/decorazione-automezzi', cta: 'Scopri la decorazione automezzi' },
  { num: '03', title: 'Stampa e grande formato', desc: 'Banner, pannelli, adesivi, PVC, materiali promozionali e stampe professionali.',                                       image: '/media/portfolio-waste.jpg',     href: '/stampa-grande-formato', cta: 'Scopri la stampa grande formato' },
  { num: '04', title: 'Allestimenti',            desc: 'Punti vendita, showroom, fiere, eventi e spazi aziendali.',                                                            image: '/media/portfolio-soldaini.jpg',  href: '/allestimenti',          cta: 'Scopri gli allestimenti' },
  { num: '05', title: 'Incisioni e lavorazioni', desc: 'Targhe, punzoni, laser, CNC e lavorazioni su legno, plexiglass, alluminio, ottone e altri materiali.',                  image: '/media/portfolio-parentini.jpg', href: '/incisioni-laser-cnc',   cta: 'Scopri le incisioni e lavorazioni' }
];

// Clienti per cui MATIC ha realizzato lavori. Blocco corporate: NON attribuisce
// servizi a singoli clienti. Loghi ufficiali non disponibili: fascia tipografica.
export const clienti = ['FIGC', 'Sisal Matchpoint', 'Comune di Fucecchio', 'antoniolupi', 'Missardi', 'La Palagina', 'Macron', 'Rinati', 'Radio Bruno', 'PerDormire', 'Soldaini'];

export const perks = [
  { big: '20+',        kicker: 'ANNI',            title: 'Esperienza sul campo',        desc: "Da oltre vent'anni lavoriamo con aziende, negozi e professionisti." },
  { big: 'PRODUZIONE', kicker: 'INTERNA',         title: 'Realizziamo direttamente',    desc: 'Stampa, incisione, taglio, assemblaggio e lavorazioni vengono gestiti nel nostro laboratorio.' },
  { big: 'PROGETTO',   kicker: '+ INSTALLAZIONE', title: 'Seguiamo tutto il lavoro',    desc: 'Sopralluogo, progettazione, produzione, montaggio e assistenza.' },
  { big: 'REFERENTE',  kicker: 'UNICO',           title: 'Sai sempre con chi parlare',  desc: "Un unico interlocutore segue il progetto dall'inizio alla fine." }
];

// Blocco di rimando presente in homepage. NON è la pagina /digital, che non esiste.
export const digitalServices = ['Siti web', 'E-commerce', 'Google Business Profile', 'Social media', 'Pubblicità online', 'Marketing locale e acquisizione clienti'];

export const processSteps = [
  { num: '01', title: 'Ascolto',                        desc: 'Sopralluogo o incontro per capire obiettivi, spazi, vincoli e budget.' },
  { num: '02', title: 'Progettazione',                  desc: 'Bozze grafiche, scelta dei materiali e preventivo dettagliato prima di iniziare.' },
  { num: '03', title: 'Produzione',                     desc: 'Stampa, incisione, taglio e assemblaggio nel nostro laboratorio di Fucecchio.' },
  { num: '04', title: 'Installazione o pubblicazione',  desc: 'Montaggio in cantiere con i nostri mezzi, oppure messa online del sito e delle campagne.' },
  { num: '05', title: 'Assistenza',                     desc: 'Manutenzione, aggiornamenti e un unico referente a cui rivolgersi nel tempo.' }
];

export const cases = [
  {
    eyebrow: 'PUNTO VENDITA · INSEGNE E ALLESTIMENTI',
    title: ["Un'identità che parte", 'dallo spazio'],
    image: '/media/portfolio-soldaini.jpg',
    alt: 'Caso studio: allestimento e insegna per un punto vendita',
    esigenza: "Rinnovare l'immagine del punto vendita: insegna, vetrina e interni non erano coordinati.",
    soluzione: 'Sopralluogo, progetto grafico coordinato e scelta dei materiali prima della produzione.',
    lavorazioni: 'Insegna a parete, vetrofania e allestimento interno, prodotti e installati da noi.',
    risultato: "Insegna, vetrofania e allestimento interno coordinati in un'unica identità visiva, prodotti e installati da un solo referente.",
    imageFirst: true
  },
  {
    eyebrow: 'ATTIVITÀ LOCALE · SITO WEB E PRESENZA ONLINE',
    title: ['La stessa identità', 'anche online'],
    image: '/media/portfolio-geox.jpg',
    alt: 'Caso studio: identità coordinata anche online',
    esigenza: "Sito fermo da anni e nessuna presenza curata sulle mappe: online l'attività non si trovava.",
    soluzione: 'Nuovo sito coordinato con insegna e automezzi, scheda mappe e piano di contenuti.',
    lavorazioni: 'Sito vetrina con modulo preventivi, gestione scheda mappe, social e campagne locali.',
    risultato: "Sito, scheda mappe e contenuti social allineati all'immagine di insegna e automezzi, con un modulo preventivi come canale diretto di contatto.",
    imageFirst: false
  }
];

export const chiSiamo = {
  h2: ["DA OLTRE VENT'ANNI", 'TRASFORMIAMO IDEE', 'IN SEGNI VISIBILI.'],
  text: "Da oltre vent'anni aiutiamo aziende, negozi e professionisti a rendere riconoscibile la propria attività. Nel nostro laboratorio uniamo progettazione grafica, lavorazioni artigianali, tecnologie di stampa e installazione. Oggi affianchiamo alla comunicazione visiva anche strumenti digitali, per offrire ai clienti un'immagine coerente dentro e fuori dal web. Lavoriamo ogni giorno per le aziende di Fucecchio, del Comprensorio del Cuoio e delle zone tra Firenze, Pisa e Lucca.",
  bullets: ['Oltre 20 anni di esperienza', 'Produzione interna', 'Un unico referente', 'Progettazione e installazione', 'Assistenza diretta'],
  image: '/media/chi-siamo.jpg',
  alt: 'Il laboratorio Matic di Fucecchio'
};

export const servizi = [
  'Insegne e vetrofanie',
  'Decorazione automezzi',
  'Stampa e grande formato',
  'Allestimenti',
  'Incisioni e lavorazioni',
  'Sito web',
  'Comunicazione digitale',
  'Non so quale servizio scegliere'
];
