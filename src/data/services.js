// Copy delle pagine servizio — verbatim dai prototipi approvati.
// Dove una voce manca, la sezione è ancora da migrare: NON inventare testo.

export const servizi = [
  'Insegne',
  'Vetrofanie e decorazione vetrine',
  'Decorazione automezzi',
  'Stampa e grande formato',
  'Allestimenti',
  'Incisioni e lavorazioni',
  'Non so quale servizio scegliere'
];

// ─────────────────────────────────────────────────────────────────────────────
// /insegne — fonte: "Insegne - Pagina servizio.dc.html"
// ─────────────────────────────────────────────────────────────────────────────
export const insegne = {
  hero: {
    eyebrow: 'INSEGNE · PROGETTAZIONE, PRODUZIONE E INSTALLAZIONE',
    h1: 'Insegne progettate, prodotte e installate da noi.',
    lead: "Dall'idea al montaggio, realizziamo insegne su misura per negozi, aziende, uffici e attività commerciali. Progettiamo e produciamo nel nostro laboratorio di Fucecchio e seguiamo direttamente l'installazione.",
    ctaLabel: 'Richiedi un sopralluogo gratuito',
    secondaryHref: '#lavori',
    secondaryLabel: 'Guarda le insegne realizzate',
    image: '/media/portfolio-cm.jpg',
    alt: 'Insegna luminosa da esterno realizzata e installata da MATIC',
    imageCaption: 'INSEGNA LUMINOSA · LAVORO MATIC',
    facts: ['20+ anni di esperienza', 'Produzione interna', 'Progettazione', 'Installazione']
  },

  tipologieHead: {
    eyebrow: 'COSA REALIZZIAMO',
    h2: "L'insegna giusta per ogni attività.",
    lead: 'Ogni attività ha vincoli diversi: spazio disponibile, visibilità, orari di apertura, immagine da rispettare. Da qui parte la scelta della tipologia.'
  },

  // Solo tipologie documentabili con una fotografia reale di quel lavoro.
  // "Cassonetti luminosi" NON inserito: non confermato.
  tipologie: [
    { num: '01', title: 'Insegne luminose', desc: 'Insegne illuminate per esterni, visibili anche di sera e con poca luce.', image: '/media/portfolio-cm.jpg', alt: 'Insegna luminosa da esterno realizzata e installata da MATIC' },
    { num: '02', title: 'Insegne non luminose e segnaletica', desc: 'Pannelli e insegne su misura per facciate, ingressi, stabilimenti e aree esterne.', image: '/media/portfolio-waste.jpg', alt: 'Insegna a pannello stampato per uno stabilimento, realizzata da MATIC' }
  ],

  // Tipologie realizzate ma senza foto: restano elenco testuale.
  altreTipologie: [
    { title: 'Lettere scatolate', desc: 'Lettere e loghi tridimensionali applicati a parete o su struttura.' },
    { title: 'Targhe', desc: 'Targhe per uffici, studi professionali e ingressi aziendali.' },
    { title: 'Segnaletica interna', desc: 'Indicazioni e cartellistica per uffici, stabilimenti e spazi aperti al pubblico.' }
  ],

  portfolioHead: { eyebrow: 'INSEGNE REALIZZATE', h2: 'Il nostro lavoro si vede.', link: 'Tutti i lavori realizzati' },

  // settore vuoto finché non confermato da MATIC: la meta mostra solo i campi valorizzati.
  works: [
    { tag: 'INSEGNA LUMINOSA',    title: 'Insegna per attività commerciale',     settore: '', localita: 'Toscana', img: '/media/portfolio-cm.jpg',    ratio: '4 / 3', alt: "Insegna luminosa da esterno per un'attività commerciale, realizzata e installata da MATIC" },
    { tag: 'SEGNALETICA ESTERNA', title: 'Insegna a pannello per stabilimento',  settore: '', localita: 'Toscana', img: '/media/portfolio-waste.jpg', ratio: '4 / 3', alt: 'Insegna a pannello stampato installata su uno stabilimento' }
  ],

  percheHead: { eyebrow: 'PERCHÉ MATIC', h2: 'Dal sopralluogo al montaggio, un solo interlocutore.' },
  perks: [
    { num: '01', title: 'Progettazione',      desc: 'Studiamo proporzioni, grafica e soluzione in relazione allo spazio.' },
    { num: '02', title: 'Produzione interna', desc: 'La realizzazione viene seguita nel nostro laboratorio di Fucecchio.' },
    { num: '03', title: 'Installazione',      desc: 'Seguiamo il progetto fino alla posa finale.' },
    { num: '04', title: 'Esperienza',         desc: "Da oltre vent'anni lavoriamo con aziende, negozi e professionisti." }
  ],

  processoH2: "Come nasce un'insegna MATIC.",
  steps: [
    { num: '01', title: 'Sopralluogo',   desc: 'Valutiamo spazio, misure, visibilità ed esigenze.' },
    { num: '02', title: 'Progettazione', desc: 'Definiamo grafica, proporzioni e soluzione tecnica.' },
    { num: '03', title: 'Produzione',    desc: "Realizziamo l'insegna nel nostro laboratorio." },
    { num: '04', title: 'Installazione', desc: 'Seguiamo direttamente il montaggio con i nostri mezzi.' },
    { num: '05', title: 'Assistenza',    desc: 'Restiamo il riferimento per manutenzione e aggiornamenti nel tempo.' }
  ],

  materiali: {
    h2: 'Materiali scelti in base al progetto.',
    text: "Ogni insegna viene progettata in funzione dello spazio, dell'utilizzo interno o esterno, della resa estetica e delle esigenze dell'attività."
  },

  cross: {
    h2: 'Non solo insegna.',
    text: "Possiamo coordinare l'insegna con la vetrina, la grafica del punto vendita, la decorazione degli automezzi e gli altri elementi visivi dell'attività.",
    links: [
      { href: '/vetrofanie', label: 'Vetrofanie e decorazione vetrine' },
      { href: '/allestimenti', label: 'Allestimenti' },
      { href: '/decorazione-automezzi', label: 'Decorazione automezzi' },
      { href: '/incisioni-laser-cnc', label: 'Targhe, incisioni e lavorazioni' }
    ]
  },

  territorio: {
    h2: 'Da Fucecchio alle aziende del territorio.',
    text: "Il laboratorio MATIC si trova a Fucecchio. Seguiamo progetti per aziende e attività del Comprensorio del Cuoio e delle aree tra Firenze e Pisa, con interventi anche in altre zone della Toscana e d'Italia quando il progetto lo richiede.",
    link: "Via Ragazzi del '99, 16 — Fucecchio (FI)"
  },

  faqHead: { eyebrow: 'DOMANDE FREQUENTI', h2: 'Prima di iniziare.' },
  // FAQ su autorizzazioni, consumi, materiali, durata e sostituzione LED omesse:
  // richiederebbero risposte non confermate da MATIC.
  faqs: [
    { q: 'Fate anche il sopralluogo?', a: 'Sì. Partiamo dal sopralluogo per rilevare misure, spazio disponibile e condizioni di visibilità: è il modo più affidabile per capire quale soluzione ha senso.' },
    { q: 'Vi occupate anche del montaggio?', a: "Sì. Seguiamo il progetto fino all'installazione e coordiniamo direttamente il montaggio finale." },
    { q: 'Posso partire da un logo che possiedo già?', a: "Sì. Lavoriamo sul logo e sull'immagine che già usi, adattandoli alle proporzioni e ai vincoli dell'insegna." },
    { q: 'Realizzate anche insegne su misura?', a: "Sì. Ogni insegna viene progettata e prodotta su misura in funzione dello spazio e dell'attività, non scelta da un catalogo." },
    { q: 'Lavorate anche fuori da Fucecchio?', a: "Sì. Il laboratorio è a Fucecchio e seguiamo progetti nel Comprensorio del Cuoio e nelle aree tra Firenze e Pisa, con interventi anche in altre zone della Toscana e d'Italia quando il progetto lo richiede." },
    { q: 'Posso coordinare insegna e vetrofania?', a: 'Sì, ed è una richiesta frequente. Insegna, vetrina e grafica del punto vendita possono essere progettate insieme e realizzate nello stesso intervento.' }
  ],

  form: {
    h2: 'Hai bisogno di una nuova insegna?',
    lead: 'Raccontaci la tua attività e dove deve essere installata. Partiamo da un sopralluogo per individuare la soluzione più adatta.',
    ctaPrimary: 'Richiedi un sopralluogo gratuito',
    submitLabel: 'Richiedi il sopralluogo',
    aziendaLabel: 'AZIENDA O ATTIVITÀ',
    extra: [{ name: 'localita', label: 'LOCALITÀ DI INSTALLAZIONE', placeholder: 'Es. Fucecchio' }]
  },

  waText: "Buongiorno, vorrei chiedere informazioni per la realizzazione di un'insegna."
};

// ─────────────────────────────────────────────────────────────────────────────
// /decorazione-automezzi — fonte: "Decorazione automezzi - Pagina servizio.dc.html"
// Nessun "full wrap", nessuna "decorazione integrale", SARDELLI non nominato.
// ─────────────────────────────────────────────────────────────────────────────
export const decorazioneAutomezzi = {
  hero: {
    eyebrow: 'AUTOMEZZI · GRAFICA E DECORAZIONE',
    h1: 'Decorazione di automezzi e flotte aziendali.',
    lead: "Trasformiamo auto, furgoni e mezzi aziendali in strumenti di comunicazione riconoscibili, dalla progettazione grafica all'applicazione finale.",
    ctaLabel: 'Richiedi un preventivo',
    secondaryHref: '#lavori',
    secondaryLabel: 'Guarda i mezzi realizzati',
    image: '/media/portfolio-volvo.jpg',
    alt: 'Mezzo pesante decorato con grafica aziendale, realizzato da MATIC',
    facts: ['Progettazione grafica', 'Produzione', 'Applicazione', 'Un unico referente']
  },

  portfolioHead: { eyebrow: 'AUTOMEZZI REALIZZATI', h2: 'Il tuo brand, anche su strada.', link: 'Tutti i lavori realizzati' },

  // Solo lavori reali su automezzi già presenti negli asset. Nessun nome cliente:
  // i marchi visibili nelle foto non sono autorizzati alla pubblicazione.
  works: [
    { tag: 'MEZZO PESANTE',  title: 'Decorazione grafica di un mezzo pesante', localita: 'Italia',  img: '/media/portfolio-volvo.jpg',     ratio: '16 / 9', wide: true,  alt: 'Mezzo pesante decorato con grafica aziendale' },
    { tag: 'AUTO AZIENDALE', title: "Personalizzazione di un'auto aziendale",  localita: 'Toscana', img: '/media/portfolio-parentini.jpg', ratio: '4 / 3',  wide: false, alt: 'Auto aziendale personalizzata con grafica e logo' }
  ],

  mezziHead: {
    h2: 'Dal singolo furgone alla flotta aziendale.',
    lead: 'Ogni tipo di mezzo ha superfici, curve e vincoli diversi: la grafica va adattata al veicolo, non il contrario.'
  },

  // Categorie con fotografia reale del lavoro corrispondente.
  categorie: [
    { title: 'Mezzi pesanti',  desc: 'Motrici, rimorchi e cabine: superfici ampie, con grafiche progettate per restare leggibili anche in movimento.', image: '/media/portfolio-volvo.jpg',     alt: 'Mezzo pesante con decorazione grafica realizzata da MATIC' },
    { title: 'Auto aziendali', desc: 'Vetture usate ogni giorno per il lavoro, personalizzate con logo, contatti e grafica coordinata.',                image: '/media/portfolio-parentini.jpg', alt: 'Auto aziendale con grafica personalizzata realizzata da MATIC' }
  ],

  // Categorie dichiarate ma senza fotografia disponibile: restano testuali.
  altreCategorie: [
    { title: 'Furgoni', desc: 'Personalizzazione di furgoni e veicoli commerciali con loghi, scritte e composizioni grafiche coordinate sulle superfici disponibili.' },
    { title: 'Flotte',  desc: 'Più mezzi con la stessa identità visiva, adattata alle forme di ogni veicolo.' }
  ],

  modalita: {
    h2: 'Ogni mezzo richiede una soluzione diversa.',
    text: 'La decorazione viene progettata in funzione del veicolo, della superficie disponibile e del risultato visivo desiderato.'
  },

  percheHead: { eyebrow: 'PERCHÉ MATIC', h2: 'Dalla grafica al mezzo finito.' },
  perks: [
    { num: '01', title: 'Progettazione', desc: 'Adattiamo la grafica alle forme e alle proporzioni del veicolo.' },
    { num: '02', title: 'Coerenza',      desc: "Manteniamo riconoscibile l'immagine aziendale sui diversi mezzi." },
    { num: '03', title: 'Realizzazione', desc: 'Seguiamo internamente la preparazione del progetto e della decorazione.' },
    { num: '04', title: 'Esperienza',    desc: "Da oltre vent'anni lavoriamo con aziende e attività del territorio." }
  ],

  processoH2: 'Come nasce la decorazione di un automezzo.',
  steps: [
    { num: '01', title: 'Analisi del mezzo',      desc: 'Raccogliamo misure, fotografie e caratteristiche del veicolo.' },
    { num: '02', title: 'Progettazione grafica',  desc: 'Adattiamo la comunicazione alla superficie disponibile.' },
    { num: '03', title: 'Preparazione',           desc: 'Prepariamo gli elementi grafici necessari alla decorazione.' },
    { num: '04', title: 'Applicazione',           desc: 'Completiamo la personalizzazione del mezzo.' }
  ],

  flotte: {
    h2: "Un'immagine coordinata su tutta la flotta.",
    text: "Quando un'azienda utilizza più mezzi, possiamo adattare la stessa identità visiva ai diversi veicoli mantenendo riconoscibilità e coerenza.",
    link: 'Parlaci della tua flotta'
  },

  whatsapp: {
    h2: 'Hai già il mezzo? Inviaci una foto su WhatsApp.',
    text: 'Dalla foto del veicolo capiamo subito superfici e possibilità, e possiamo darti un\'indicazione più precisa.',
    cta: 'Invia una foto del mezzo'
  },

  faqHead: { eyebrow: 'DOMANDE FREQUENTI', h2: 'Prima di iniziare.' },
  // FAQ su durata, lavaggio, rimozione, leasing, protezione vernice, marche di
  // pellicola, garanzie e tempi: omesse, DA CONFERMARE CON MATIC.
  faqs: [
    { q: 'Potete partire dal logo che utilizziamo già?', a: "Sì. Lavoriamo sul logo e sull'immagine che l'azienda già usa, adattandoli alle superfici e alle proporzioni del mezzo." },
    { q: 'Posso decorare anche un solo mezzo?', a: 'Sì. Realizziamo interventi su un singolo veicolo come su più mezzi.' },
    { q: 'Realizzate grafiche coordinate per più automezzi?', a: 'Sì. Quando i mezzi sono più di uno, la stessa identità visiva viene adattata ai diversi veicoli mantenendo riconoscibilità e coerenza.' },
    { q: 'Posso inviarvi una fotografia del veicolo prima di chiedere il preventivo?', a: 'Sì, ed è il modo più rapido per iniziare: puoi mandarci una foto del mezzo su WhatsApp e valutiamo insieme le possibilità.' },
    { q: 'Vi occupate anche della progettazione grafica?', a: "Sì. La grafica viene progettata da noi in funzione del veicolo e dell'immagine dell'azienda." }
  ],

  territorio: {
    h2: 'Decorazione automezzi nel nostro laboratorio di Fucecchio.',
    text: "La lavorazione dei mezzi avviene nella nostra sede di Fucecchio. Lavoriamo per aziende e attività del Comprensorio del Cuoio e delle aree tra Firenze e Pisa, e seguiamo progetti anche in altre zone della Toscana e d'Italia quando il lavoro lo richiede."
  },

  cross: {
    h2: 'La stessa immagine, anche fuori dal veicolo.',
    text: 'Insegna, vetrina, materiali stampati e allestimenti possono seguire la stessa identità visiva dei mezzi.',
    links: [
      { href: '/insegne', label: 'Insegne' },
      { href: '/vetrofanie', label: 'Vetrofanie e decorazione vetrine' },
      { href: '/stampa-grande-formato', label: 'Stampa grande formato' },
      { href: '/allestimenti', label: 'Allestimenti' }
    ]
  },

  form: {
    h2: 'Vuoi personalizzare un mezzo aziendale?',
    lead: 'Raccontaci che veicolo hai e che tipo di comunicazione vuoi realizzare.',
    ctaPrimary: 'Richiedi un preventivo',
    ctaSecondary: 'Invia una foto su WhatsApp',
    submitLabel: 'Richiedi un preventivo',
    aziendaLabel: 'AZIENDA O ATTIVITÀ',
    extra: [
      { name: 'tipo_mezzo',   label: 'TIPO DI MEZZO',   type: 'select', options: ['Auto', 'Furgone', 'Mezzo pesante', 'Più mezzi / flotta', 'Altro'], value: 'Furgone' },
      { name: 'numero_mezzi', label: 'NUMERO DI MEZZI', type: 'select', options: ['1', '2', '3-5', '6-10', 'Più di 10'], value: '1' }
    ]
  },

  waText: 'Buongiorno, vorrei chiedere informazioni per la decorazione di un automezzo.'
};

// ─────────────────────────────────────────────────────────────────────────────
// /stampa-grande-formato — fonte: "Stampa grande formato - Pagina servizio.dc.html"
// Esclusi: roll-up, specifiche tecniche file, tempi, formati massimi.
// "Striscioni" mantenuto: confermato dalla recensione reale di Stefano B.
// ─────────────────────────────────────────────────────────────────────────────
export const stampaGrandeFormato = {
  hero: {
    eyebrow: 'STAMPA · GRANDE FORMATO',
    h1: 'Stampa grande formato su misura.',
    lead: "Realizziamo materiali stampati per aziende, negozi, eventi e attività commerciali, dalla grafica al prodotto pronto all'uso.",
    ctaLabel: 'Richiedi un preventivo',
    secondaryHref: '#prodotti',
    secondaryLabel: 'Guarda cosa stampiamo',
    // TODO FOTO — nessuna fotografia reale di stampa disponibile: al posto
    // dell'immagine hero resta la banda tipografica dei prodotti.
    keywords: ['Striscioni', 'Banner', 'Pannelli', 'Adesivi', 'Materiali promozionali'],
    facts: ['Produzione interna', 'Lavorazioni su misura', 'Un unico referente']
  },

  prodottiHead: {
    eyebrow: 'PRODOTTI',
    h2: 'Tutto ciò che serve per comunicare in grande.',
    lead: 'Indicaci prodotto, misure e quantità: sono le tre informazioni che servono per preparare un preventivo.'
  },

  // Voci testuali: nessuna fotografia per categoria disponibile negli asset.
  prodotti: [
    { num: '01', title: 'Striscioni',             desc: 'Comunicazione temporanea per aperture, promozioni, manifestazioni ed eventi.' },
    { num: '02', title: 'Banner',                 desc: 'Materiali per stand, punti vendita e presentazioni, stampati sulla misura richiesta.' },
    { num: '03', title: 'Pannelli',               desc: 'Elementi stampati per pareti, totem, segnalazioni e comunicazione interna.' },
    { num: '04', title: 'Adesivi',                desc: 'Loghi, scritte e grafiche adesive realizzate sulla misura richiesta.' },
    { num: '05', title: 'Materiali promozionali', desc: "Materiali stampati per promozioni, comunicazioni e occasioni specifiche dell'attività." }
  ],
  prodottiNota: 'Se il materiale che ti serve non è in elenco, scrivilo nella richiesta: valutiamo insieme la soluzione.',

  // Predisposti ma NON mostrati: nessuna fonte MATIC li conferma.
  // DA CONFERMARE: 'Roll up', 'Materiali per fiere ed eventi'.

  supporti: {
    h2: "Supporti scelti in base all'utilizzo.",
    text: "La soluzione viene definita in funzione del progetto, dell'ambiente interno o esterno, delle dimensioni e del risultato desiderato. Tra i supporti utilizzati anche il PVC, in funzione del lavoro da realizzare."
  },

  file: {
    h2: 'Hai già il file?',
    text: 'Se disponi già della grafica, puoi inviarcela per una verifica prima della produzione. Se non hai un file pronto, segnalacelo nella richiesta: valuteremo insieme come procedere.',
    link: 'Segnalacelo nella richiesta',
    // fileRequirements resta vuoto: formati, risoluzione, profili colore e
    // abbondanze NON confermati. La sezione specifiche non viene mostrata.
    requirements: [],
    noFileH2: 'Non hai una grafica pronta?',
    noFileText: 'Indicalo nella richiesta, insieme al logo e ai contenuti che già utilizzi: valuteremo insieme come procedere in funzione del prodotto scelto.'
  },

  processoH2: 'Come lavoriamo.',
  steps: [
    { num: '01', title: 'Richiesta',        desc: 'Ci racconti cosa ti serve, misure e quantità.' },
    { num: '02', title: 'Verifica',         desc: 'Controlliamo il progetto e il materiale da realizzare.' },
    { num: '03', title: 'Produzione',       desc: 'Realizziamo la stampa e le lavorazioni necessarie.' },
    { num: '04', title: 'Materiale pronto', desc: 'Ti avvisiamo quando il lavoro è finito e concordiamo insieme i passaggi successivi.' }
  ],

  whatsapp: {
    h2: 'Hai già misure e idea del lavoro? Scrivici su WhatsApp.',
    text: 'Prodotto, misure e quantità sono già abbastanza per iniziare a ragionare sul preventivo.',
    cta: 'Scrivici su WhatsApp'
  },

  faqHead: { eyebrow: 'DOMANDE FREQUENTI', h2: 'Prima di iniziare.' },
  // FAQ su tempi, formati massimi, materiali specifici, resistenza esterna,
  // spedizioni, risoluzione, profili colore e prezzi: omesse. DA CONFERMARE.
  faqs: [
    { q: 'Fate anche un singolo pezzo?', a: 'Sì. Realizziamo sia il pezzo singolo che quantità ripetute dello stesso materiale.' },
    { q: 'Posso chiedere un preventivo senza avere il file pronto?', a: "Sì. Indicaci prodotto, misure e quantità: se la grafica non c'è ancora, segnalalo nella richiesta e ne parliamo." },
    { q: 'Posso partire dal mio logo?', a: 'Sì. Indicalo nella richiesta insieme ai contenuti che già utilizzi: valuteremo insieme come procedere in funzione del prodotto scelto.' },
    { q: 'Posso indicarvi misure e quantità nel form?', a: 'Sì, e conviene farlo: sono le informazioni che ci servono per preparare il preventivo senza ulteriori passaggi.' },
    { q: 'Realizzate anche materiali per manifestazioni?', a: 'Raccontaci di che occasione si tratta e cosa ti serve: valutiamo la richiesta e ti diciamo come possiamo procedere.' }
  ],

  territorio: {
    h2: 'Stampa grande formato a Fucecchio.',
    text: "La produzione avviene nella nostra sede di Fucecchio, a pochi minuti da Empoli. Lavoriamo per aziende, negozi e organizzatori di eventi del Comprensorio del Cuoio e delle aree tra Firenze e Pisa, e seguiamo progetti anche in altre zone della Toscana e d'Italia quando il lavoro lo richiede."
  },

  cross: {
    h2: "Dalla stampa all'allestimento.",
    text: "Spesso il materiale stampato è una parte di un lavoro più ampio: uno spazio da allestire, una vetrina, un mezzo o un'insegna.",
    links: [
      { href: '/allestimenti', label: 'Allestimenti per fiere ed eventi' },
      { href: '/vetrofanie', label: 'Vetrofanie e decorazione vetrine' },
      { href: '/decorazione-automezzi', label: 'Decorazione automezzi' },
      { href: '/insegne', label: 'Insegne' }
    ]
  },

  form: {
    h2: 'Hai un lavoro da stampare?',
    lead: 'Indicaci cosa ti serve, le misure e la quantità. Ti ricontattiamo per definire il progetto.',
    submitLabel: 'Richiedi il preventivo',
    aziendaLabel: 'AZIENDA O ATTIVITÀ',
    extra: [
      { name: 'prodotto', label: 'PRODOTTO RICHIESTO', type: 'select', options: ['Striscione', 'Banner', 'Pannello', 'Adesivo', 'Materiale promozionale', 'Altro'], value: 'Striscione' },
      { name: 'quantita', label: 'QUANTITÀ',           type: 'select', options: ['1', '2', '3-5', '6-10', 'Più di 10'], value: '1' },
      { name: 'misure',   label: 'MISURE',              placeholder: 'Es. 200 × 100 cm' },
      { name: 'file',     label: 'HAI GIÀ IL FILE?',    type: 'select', options: ['Sì', 'No', 'Da verificare'], value: 'Da verificare' }
    ]
  },

  // Portfolio: nessun lavoro reale di stampa negli asset. La sezione NON viene
  // mostrata. TODO FOTO — servono fotografie di lavori di stampa realizzati.
  lavori: [],

  waText: 'Buongiorno, vorrei chiedere un preventivo per un lavoro di stampa grande formato.'
};

// ─────────────────────────────────────────────────────────────────────────────
// /vetrofanie — fonte: "Vetrofanie - Pagina servizio.dc.html"
// Non aggiunte pellicole privacy/satinate, decorazioni stagionali e prespaziati:
// non confermate. Portfolio e prima/dopo restano nascosti perché vuoti.
// ─────────────────────────────────────────────────────────────────────────────
export const vetrofanie = {
  hero: {
    eyebrow: 'VETROFANIE · DECORAZIONE VETRINE',
    h1: 'Vetrofanie e decorazione di vetrine.',
    lead: "Trasformiamo vetrine e superfici in vetro in strumenti di comunicazione coordinati con l'immagine della tua attività.",
    ctaLabel: 'Richiedi un preventivo',
    // Senza lavori reali il CTA secondario punta alle soluzioni, non al portfolio.
    secondaryHref: '#soluzioni',
    secondaryLabel: 'Scopri cosa realizziamo',
    facts: ['Progettazione', 'Produzione', 'Applicazione']
    // TODO FOTO — slot fotografia hero: manca la foto reale di una vetrina.
  },

  soluzioniHead: {
    eyebrow: 'COSA REALIZZIAMO',
    h2: 'La vetrina diventa parte della tua identità.',
    lead: 'La soluzione viene definita in funzione della vetrina, dello spazio disponibile e di cosa vuoi comunicare.'
  },
  soluzioni: [
    { title: 'Vetrofanie grafiche',      desc: 'Grafiche applicate sul vetro per comunicare attività, servizi e messaggi promozionali, progettate sulla vetrina esistente.' },
    { title: 'Scritte e loghi adesivi',  desc: "Nome dell'attività, logo, orari e contatti applicati sul vetro in modo leggibile e ordinato." }
  ],
  // DA CONFERMARE, non mostrate: pellicole privacy o satinate, decorazioni
  // promozionali stagionali, adesivi prespaziati.

  coordinamento: {
    eyebrow: 'IMMAGINE COORDINATA',
    h2: 'Vetrina e insegna possono parlare la stessa lingua.',
    text: "Quando insegna, vetrina e comunicazione del punto vendita vengono progettate insieme, l'attività risulta più riconoscibile e coerente.",
    link: 'Scopri le insegne MATIC',
    linkHref: '/insegne'
  },

  processoH2: 'Come lavoriamo.',
  steps: [
    { num: '01', title: 'Rilievo',     desc: 'Valutiamo dimensioni, superfici ed esigenze della vetrina.' },
    { num: '02', title: 'Progetto',    desc: "Adattiamo la grafica allo spazio e all'immagine dell'attività." },
    { num: '03', title: 'Applicazione', desc: 'Completiamo la decorazione della vetrina.' }
  ],

  percheH2: "Dalla grafica all'applicazione.",
  perks: [
    { num: '01', title: 'Progettazione', desc: 'La grafica viene adattata alla vetrina reale.' },
    { num: '02', title: 'Coerenza',      desc: 'Possiamo coordinare vetrina, insegna e comunicazione del punto vendita.' },
    { num: '03', title: 'Realizzazione', desc: "Seguiamo il progetto fino all'applicazione." },
    { num: '04', title: 'Esperienza',    desc: "Da oltre vent'anni lavoriamo con aziende, negozi e professionisti." }
  ],

  whatsapp: {
    h2: 'Hai già una vetrina da decorare? Inviaci una foto su WhatsApp.',
    text: "Dalla foto della vetrina capiamo subito spazi e proporzioni, e possiamo darti un'indicazione più precisa.",
    cta: 'Invia una foto della vetrina'
  },

  faqHead: { eyebrow: 'DOMANDE FREQUENTI', h2: 'Prima di iniziare.' },
  // FAQ su durata, rimozione, esposizione solare, materiali, pellicole
  // satinate, privacy, resistenza, manutenzione, tempi e prezzi: omesse.
  faqs: [
    { q: 'Posso partire dal logo che utilizzo già?', a: "Sì. Lavoriamo sul logo e sull'immagine che l'attività già utilizza, adattandoli alla vetrina." },
    { q: 'Realizzate vetrofanie su misura?', a: 'Sì. Ogni intervento viene progettato sulle dimensioni e sulle caratteristiche della vetrina esistente.' },
    { q: 'Potete coordinare vetrofania e insegna?', a: "Sì. Quando insegna e vetrina vengono progettate insieme, l'immagine dell'attività risulta più coerente." },
    { q: 'Posso inviarvi una foto della vetrina prima del preventivo?', a: 'Sì, ed è il modo più rapido per iniziare: puoi mandarcela su WhatsApp e valutiamo insieme le possibilità.' },
    { q: 'Lavorate anche su vetrine già esistenti?', a: 'Sì. La maggior parte degli interventi riguarda vetrine già in uso, sulle quali la grafica viene progettata a partire dallo spazio disponibile.' }
  ],

  territorio: {
    h2: 'Vetrofanie e decorazione vetrine a Fucecchio.',
    text: "Lavoriamo dalla nostra sede di Fucecchio, a pochi minuti da Empoli, per negozi, studi e uffici del Comprensorio del Cuoio e delle aree tra Firenze e Pisa, con interventi anche in altre zone della Toscana e d'Italia quando il progetto lo richiede."
  },

  cross: {
    h2: "Completa l'immagine della tua attività.",
    links: [
      { href: '/insegne', label: 'Insegne' },
      { href: '/allestimenti', label: 'Allestimenti' },
      { href: '/stampa-grande-formato', label: 'Stampa grande formato' }
    ]
  },

  form: {
    h2: 'Vuoi valorizzare la tua vetrina?',
    lead: 'Raccontaci cosa vuoi comunicare e inviaci, se vuoi, una foto della vetrina.',
    submitLabel: 'Richiedi il preventivo',
    aziendaLabel: 'AZIENDA O ATTIVITÀ',
    extra: [
      { name: 'intervento', label: 'TIPO DI INTERVENTO', type: 'select', options: ['Vetrofania', 'Decorazione vetrina', 'Non so / Da valutare'], value: 'Vetrofania' },
      { name: 'localita',   label: 'LOCALITÀ' }
    ]
  },

  // Portfolio e prima/dopo: nessuna fotografia reale di vetrine negli asset.
  // Le sezioni NON vengono mostrate. TODO FOTO.
  lavori: [],
  primaDopo: [],

  waText: 'Buongiorno, vorrei chiedere informazioni per una vetrofania o decorazione della mia vetrina.'
};

// ─────────────────────────────────────────────────────────────────────────────
// /allestimenti — fonte: "Allestimenti - Pagina servizio.dc.html"
// Non dichiarati: arredi, strutture, carpenteria, falegnameria, impianti,
// illuminazione, segnaletica normata, project management di cantiere.
// Case study predisposto ma vuoto: la sezione non viene renderizzata.
// ─────────────────────────────────────────────────────────────────────────────
export const allestimenti = {
  hero: {
    eyebrow: 'ALLESTIMENTI · SPAZI E COMUNICAZIONE',
    h1: 'Allestimenti per punti vendita, fiere ed eventi.',
    lead: "Coordiniamo gli elementi visivi di uno spazio, dalla progettazione alla realizzazione, per creare ambienti coerenti con l'identità dell'attività.",
    ctaLabel: 'Parlaci del tuo progetto',
    secondaryHref: '#lavori',
    secondaryLabel: 'Guarda i lavori realizzati',
    facts: ['Progettazione', 'Produzione', 'Coordinamento', 'Installazione']
    // TODO FOTO — slot fotografia hero: manca la foto reale di un allestimento.
  },

  ambitiHead: {
    eyebrow: 'DOVE INTERVENIAMO',
    h2: 'Uno spazio deve comunicare in modo coerente.',
    lead: 'Ogni ambiente ha superfici, percorsi e vincoli diversi: gli elementi visivi vanno pensati insieme, non uno alla volta.'
  },
  // Ambiti sostenuti dai contenuti MATIC approvati (title, meta description,
  // elenco servizi della homepage). "Spazi aziendali" incluso: confermato.
  ambiti: [
    { title: 'Punti vendita',   desc: 'Negozi da aprire o da rinnovare: insegna, vetrina e comunicazione interna pensate come un insieme.' },
    { title: 'Showroom',        desc: 'Spazi espositivi dove il prodotto va accompagnato da una comunicazione visiva ordinata.' },
    { title: 'Fiere',           desc: 'Stand e spazi temporanei che devono risultare riconoscibili anche in un contesto affollato.' },
    { title: 'Eventi',          desc: 'Occasioni con una data precisa, in cui gli elementi grafici vanno preparati per essere pronti insieme.' },
    { title: 'Spazi aziendali', desc: "Uffici e aree interne, dove la comunicazione visiva deve restare coerente con l'immagine dell'azienda." }
  ],

  portfolioHead: { eyebrow: 'ALLESTIMENTI REALIZZATI', h2: 'Spazi che diventano riconoscibili.', link: 'Tutti i lavori realizzati' },
  // Un solo lavoro reale disponibile. Nessun nome cliente: il marchio visibile
  // nella fotografia non è autorizzato alla pubblicazione.
  lavori: [
    { tipologia: 'PUNTO VENDITA', title: 'Allestimento interno di un punto vendita', localita: '', cliente: '', img: '/media/portfolio-soldaini.jpg', ratio: '3 / 4', alt: 'Interno di un punto vendita allestito con lettere e grafica su misura realizzate da MATIC' }
  ],
  portfolioNota: 'Altri allestimenti realizzati sono raccolti nella pagina dei lavori.',

  // CASE STUDY — richiede un progetto reale documentato da 4-8 fotografie dello
  // stesso intervento più contesto, esigenza e interventi. Vuoto: non renderizzato.
  caseStudyBlocks: [],
  caseStudyPhotos: [],

  coordiniamo: {
    h2: "Più elementi, un'unica immagine.",
    lead: 'Gli elementi che realizziamo possono essere progettati come parti dello stesso allestimento, con la stessa grafica e lo stesso referente.',
    links: [
      { title: 'Insegne', href: '/insegne' },
      { title: 'Vetrofanie e decorazione vetrine', href: '/vetrofanie' },
      { title: 'Materiali stampati e grande formato', href: '/stampa-grande-formato' },
      { title: 'Incisioni, targhe e lavorazioni', href: '/incisioni-laser-cnc' }
    ]
  },

  processoH2: 'Come affrontiamo un allestimento.',
  steps: [
    { num: '01', title: 'Confronto',    desc: 'Raccogliamo esigenze, obiettivi e caratteristiche dello spazio.' },
    { num: '02', title: 'Progetto',     desc: 'Coordiniamo gli elementi visivi e definiamo la soluzione.' },
    { num: '03', title: 'Produzione',   desc: 'Realizziamo i materiali e le lavorazioni previste.' },
    { num: '04', title: 'Installazione', desc: 'Seguiamo la fase finale di posa e montaggio con i nostri mezzi, e restiamo il riferimento per assistenza e aggiornamenti successivi.' }
  ],

  percheH2: 'Un solo coordinamento per più elementi.',
  perks: [
    { num: '01', title: 'Progettazione', desc: 'Coordinazione degli elementi visivi dello spazio.' },
    { num: '02', title: 'Produzione',    desc: 'Realizzazione interna delle lavorazioni previste.' },
    { num: '03', title: 'Integrazione',  desc: 'Insegna, vetrina, stampa e lavorazioni possono essere coordinate nello stesso progetto.' },
    { num: '04', title: 'Esperienza',    desc: "Da oltre vent'anni lavoriamo con aziende, attività commerciali e professionisti." }
  ],

  ctaIntermedia: {
    h2: 'Stai aprendo o rinnovando uno spazio?',
    text: 'Raccontaci cosa vuoi realizzare e quali elementi devono essere coordinati.',
    primary: 'Parlaci del tuo progetto',
    secondary: 'Scrivici su WhatsApp'
  },

  faqHead: { eyebrow: 'DOMANDE FREQUENTI', h2: 'Prima di iniziare.' },
  // FAQ su tempi, budget, arredi, strutture, smontaggi, permessi, gestione
  // cantiere, trasferte, consegne e fiere fuori Toscana: omesse.
  faqs: [
    { q: 'Vi occupate anche della progettazione?', a: 'Sì. La parte grafica e il coordinamento degli elementi visivi vengono definiti da noi insieme al cliente.' },
    { q: 'Potete coordinare insegna, vetrina e grafica interna?', a: 'Sì. Sono lavorazioni che seguiamo direttamente, quindi possono essere progettate come parti dello stesso allestimento.' },
    { q: 'Posso contattarvi anche se il progetto è ancora da definire?', a: 'Sì. Nel form puoi indicare che il progetto è da definire: partiamo dal confronto sullo spazio e sugli obiettivi.' },
    { q: 'Lavorate anche su spazi già esistenti?', a: 'Sì. Buona parte degli interventi riguarda spazi già in uso, dove gli elementi visivi vengono rinnovati o resi coerenti tra loro.' },
    { q: 'Posso inviarvi foto o planimetrie via WhatsApp?', a: 'Sì, ed è il modo più rapido per farci capire lo spazio. Puoi scriverci su WhatsApp e allegare quello che hai.' }
  ],

  territorio: {
    h2: 'Allestimenti dal nostro laboratorio di Fucecchio.',
    text: "Progettazione e produzione avvengono nella nostra sede di Fucecchio, a pochi minuti da Empoli. Lavoriamo per attività del Comprensorio del Cuoio e delle aree tra Firenze e Pisa, e seguiamo progetti anche in altre zone della Toscana e d'Italia quando il progetto lo richiede."
  },

  cross: {
    h2: 'Gli elementi di un allestimento, uno per uno.',
    links: [
      { href: '/insegne', label: 'Insegne' },
      { href: '/vetrofanie', label: 'Vetrofanie e decorazione vetrine' },
      { href: '/stampa-grande-formato', label: 'Stampa grande formato' },
      { href: '/incisioni-laser-cnc', label: 'Incisioni, targhe e lavorazioni' }
    ]
  },

  form: {
    h2: 'Hai uno spazio da trasformare?',
    lead: 'Raccontaci il progetto: ti aiutiamo a coordinare gli elementi visivi in modo coerente.',
    submitLabel: 'Parlaci del progetto',
    aziendaLabel: 'AZIENDA O ATTIVITÀ',
    extra: [
      { name: 'spazio',   label: 'TIPO DI SPAZIO',     type: 'select', options: ['Negozio / punto vendita', 'Showroom', 'Fiera / evento', 'Spazio aziendale', 'Altro'], value: 'Negozio / punto vendita' },
      { name: 'stato',    label: 'STATO DEL PROGETTO', type: 'select', options: ['Da definire', "Ho già un'idea", 'Ho già grafica o materiali', 'Da valutare insieme'], value: 'Da definire' },
      { name: 'localita', label: 'LOCALITÀ' }
    ]
  },

  waText: 'Buongiorno, vorrei parlare di un progetto di allestimento.'
};

// ─────────────────────────────────────────────────────────────────────────────
// /incisioni-laser-cnc — fonte: "Incisioni laser e CNC - Pagina servizio.dc.html"
// Esclusi: marcature, tolleranze, spessori, area macchina, potenza, formati
// file, certificazioni. Materiali confermati: legno, plexiglass, alluminio, ottone.
// ─────────────────────────────────────────────────────────────────────────────
export const incisioni = {
  hero: {
    eyebrow: 'INCISIONI · LASER · CNC',
    h1: 'Incisioni e lavorazioni laser e CNC su misura.',
    lead: 'Realizziamo lavorazioni personalizzate per aziende, professionisti e attività che hanno bisogno di targhe, incisioni o componenti lavorati su misura.',
    ctaLabel: 'Richiedi una valutazione',
    secondaryHref: '#percorsi',
    secondaryLabel: 'Parlaci del progetto',
    facts: ['Lavorazioni su misura', 'Produzione interna', 'Un unico referente']
    // TODO FOTO — slot fotografia hero: manca la foto reale di una lavorazione.
  },

  percorsiH2: 'Due esigenze, un unico laboratorio.',
  percorsoRetail: {
    eyebrow: 'TARGHE E PRODOTTI FINITI',
    h3: 'Ti serve un oggetto finito.',
    items: ['Targhe e elementi incisi', 'Personalizzazioni su misura', 'Piccoli prodotti finiti', 'Elementi di identificazione'],
    cta: 'Devo realizzare una targa o un prodotto'
  },
  percorsoTech: {
    eyebrow: 'LAVORAZIONI TECNICHE',
    h3: 'Hai un pezzo, un materiale o un disegno.',
    text: 'Aziende e professionisti che devono far lavorare un componente o partire da un progetto tecnico: valutiamo la richiesta a partire dalle informazioni sul materiale e sulla lavorazione.',
    cta: 'Ho una lavorazione tecnica da valutare'
  },

  lavorazioniHead: {
    eyebrow: 'LAVORAZIONI',
    h2: 'Lavorazioni costruite intorno al progetto.',
    lead: 'Ogni richiesta parte dal risultato che serve, non da un catalogo di prodotti standard.'
  },
  // Fonte di conferma: elenco servizi della homepage MATIC approvata, meta
  // description e ragione sociale Matic Incisioni Srl.
  lavorazioni: [
    { title: 'Targhe',                 desc: 'Targhe realizzate sulla misura richiesta, con il testo e la grafica definiti insieme al cliente.' },
    { title: 'Incisioni',              desc: 'Incisione di testi, loghi e riferimenti su elementi da personalizzare.' },
    { title: 'Punzoni',                desc: 'Punzoni personalizzati realizzati a partire dal segno o dal marchio da riprodurre.' },
    { title: 'Taglio',                 desc: 'Taglio di elementi secondo il profilo richiesto, definito insieme al progetto.' },
    { title: 'Lavorazioni su misura',  desc: 'Elementi lavorati a partire da un progetto o da un pezzo esistente, valutati caso per caso.' }
  ],
  // NON mostrate: 'Marcature' — non nominata in nessun contenuto MATIC. DA CONFERMARE.

  fattibilita: {
    h2: 'Materiale e lavorazione vengono valutati caso per caso.',
    text: 'Per capire se il lavoro è realizzabile servono informazioni sul materiale, sulle dimensioni, sulla lavorazione richiesta e, quando disponibile, un disegno o un file tecnico. Tra i materiali lavorati: legno, plexiglass, alluminio e ottone.',
    // Capacità tecniche: vuote. Materiali, spessori, area di lavoro, potenza e
    // tolleranze NON confermati: l'elenco non viene mostrato.
    capabilities: [],
    fileH2: 'Hai già un disegno o un file?',
    fileText: 'Se hai un file tecnico o un disegno, segnalalo nella richiesta: ci aiuta a capire meglio la lavorazione da valutare.',
    // Formati file accettati: vuoti, nessun formato dichiarato. DA CONFERMARE.
    acceptedFiles: [],
    fileLink: 'Segnalalo nella richiesta'
  },

  b2b: {
    h2: 'Dal singolo pezzo alla richiesta aziendale.',
    text: 'Lavoriamo con professionisti che hanno bisogno di un pezzo specifico e con aziende che devono far lavorare componenti o realizzare elementi ripetuti. In entrambi i casi partiamo dalla stessa domanda: che risultato deve avere il pezzo finito.'
  },

  processoH2: 'Come valutiamo una lavorazione.',
  steps: [
    { num: '01', title: 'Richiesta',     desc: 'Ci descrivi il lavoro, il materiale e le dimensioni.' },
    { num: '02', title: 'Verifica',      desc: 'Valutiamo la fattibilità della lavorazione.' },
    { num: '03', title: 'Produzione',    desc: 'Realizziamo il lavoro secondo quanto definito.' },
    { num: '04', title: 'Completamento', desc: 'Ti avvisiamo quando il lavoro è pronto.' }
  ],

  faqHead: { eyebrow: 'DOMANDE FREQUENTI', h2: 'Prima di iniziare.' },
  // FAQ su materiali specifici, formati, spessori, tolleranze, precisione,
  // potenza, tempi, prezzi, quantità minime e certificazioni: omesse.
  faqs: [
    { q: 'Posso chiedere una lavorazione su misura?', a: "Sì. La maggior parte delle richieste parte da un'esigenza specifica e non da un prodotto di catalogo." },
    { q: 'Posso partire da un disegno che ho già?', a: 'Sì. Se hai un disegno o un file tecnico, segnalalo nella richiesta: ci aiuta a valutare meglio la lavorazione.' },
    { q: 'Realizzate anche pezzi singoli?', a: 'Sì. Valutiamo sia il pezzo singolo che richieste con più elementi uguali.' },
    { q: 'Posso chiedere prima una verifica di fattibilità?', a: 'Sì, ed è il modo più utile per iniziare: descrivi materiale, dimensioni e risultato che ti serve, e ti diciamo come possiamo procedere.' },
    { q: 'Lavorate anche per aziende?', a: 'Sì. Seguiamo richieste di aziende e professionisti oltre a quelle di attività commerciali e privati.' }
  ],

  territorio: {
    h2: 'Incisioni e lavorazioni nel laboratorio MATIC di Fucecchio.',
    text: "Le lavorazioni vengono eseguite nella nostra sede di Fucecchio, a pochi minuti da Empoli. Lavoriamo per aziende e professionisti del territorio circostante e seguiamo richieste anche da altre zone della Toscana e d'Italia."
  },

  cross: {
    h2: 'Altri servizi del laboratorio.',
    links: [
      { href: '/insegne', label: 'Insegne' },
      { href: '/stampa-grande-formato', label: 'Stampa grande formato' },
      { href: '/allestimenti', label: 'Allestimenti' }
    ]
  },

  form: {
    h2: 'Hai una lavorazione da valutare?',
    lead: 'Indicaci materiale, dimensioni e risultato che vuoi ottenere. Partiamo da queste informazioni per capire come procedere.',
    submitLabel: 'Richiedi la valutazione',
    aziendaLabel: 'AZIENDA O ATTIVITÀ',
    extra: [
      { name: 'tipo',       label: 'TIPO RICHIESTA',             type: 'select', options: ['Targa / prodotto finito', 'Incisione', 'Lavorazione tecnica', 'Non so / Da valutare'], value: 'Non so / Da valutare' },
      { name: 'file',       label: 'HAI GIÀ UN FILE O DISEGNO?', type: 'select', options: ['Sì', 'No', 'Da verificare'], value: 'Da verificare' },
      { name: 'materiale',  label: 'MATERIALE',            placeholder: 'Es. materiale da verificare' },
      { name: 'dimensioni', label: 'DIMENSIONI INDICATIVE', placeholder: 'Es. 30 × 15 cm' },
      { name: 'quantita',   label: 'QUANTITÀ' }
    ]
  },

  // PORTFOLIO — nessuna fotografia di targhe, incisioni o componenti lavorati
  // negli asset. Sezione e lightbox nascosti. TODO FOTO.
  lavori: [],

  waText: 'Buongiorno, vorrei far valutare una lavorazione di incisione o CNC.'
};

// MIGRAZIONE CONTENUTI COMPLETATA per tutte e sei le pagine servizio.
// I prototipi .dc.html restano la fonte editoriale di riferimento.
//   incisioni              ← "Incisioni laser e CNC - Pagina servizio.dc.html"
