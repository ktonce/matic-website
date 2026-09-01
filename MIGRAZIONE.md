# Stato della migrazione, route per route

| Route | Shell | SEO statica | Contenuti | Note |
|---|---|---|---|---|
| `/` | ✅ | ✅ | ✅ completo | hero, servizi (5 righe linkate), portfolio, clienti, testimonial, CTA intermedia, PERCHÉ MATIC, MATIC DIGITAL (solo rimando), 2 casi studio, processo, chi siamo, contatti + form |
| `/insegne` | ✅ | ✅ | ✅ completo | hero, tipologie, altre tipologie, portfolio (2 foto reali), PERCHÉ MATIC, processo 5 step con assistenza, materiali, cross-sell, testimonial Andrea F. + Lorella M., territorio, FAQ, form |
| `/decorazione-automezzi` | ✅ | ✅ | ✅ completo | hero, portfolio (2 foto reali), categorie + altre categorie (furgoni, flotte), modalità, PERCHÉ MATIC, processo, flotte, WhatsApp contestuale, FAQ, form, territorio + testimonial Federico T., cross-sell |
| `/stampa-grande-formato` | ✅ | ✅ | ✅ completo | hero (banda tipografica), 5 prodotti, supporti con PVC, sezione file, processo, WhatsApp, form, FAQ, territorio, cross-sell. Portfolio nascosto (vuoto) |
| `/vetrofanie` | ✅ | ✅ | ✅ completo | hero, 2 soluzioni confermate, coordinamento con insegna + testimonial Paola F., processo, perché, WhatsApp, form, FAQ, territorio, cross-sell. Portfolio e prima/dopo nascosti (vuoti) |
| `/allestimenti` | ✅ | ✅ | ✅ completo | hero, 5 ambiti (spazi aziendali incluso), portfolio (1 foto reale), cosa coordiniamo, processo con montaggio e assistenza, PERCHÉ MATIC, CTA intermedia, form, FAQ, territorio, cross-sell. Case study nascosto (vuoto) |
| `/incisioni-laser-cnc` | ✅ | ✅ | ✅ completo | hero, due percorsi utente, 5 lavorazioni, fattibilità con materiali confermati, file tecnico, privato/B2B, processo, form su fondo scuro, FAQ, territorio, cross-sell. Portfolio nascosto (vuoto) |
| `/lavori` | ✅ | ✅ | ✅ completo | 6 lavori reali, filtri, lightbox |
| `/privacy` | ✅ | ✅ | ⚠️ placeholder | CONTENUTO LEGALE DA APPROVARE |
| `/cookie` | ✅ | ✅ | ⚠️ placeholder | CONTENUTO LEGALE DA APPROVARE |
| `/404` | ✅ | — | ✅ completo | aggiunto: prima non esisteva |

`/digital` **non creata**. Il blocco MATIC DIGITAL in homepage è solo il rimando presente nel prototipo.

## Sezioni nascoste perché prive di contenuti reali

Rese condizionali, non eliminate: ricompaiono da sole appena l'array viene popolato.

| Sezione | Route | Cosa serve |
|---|---|---|
| Portfolio | `/stampa-grande-formato` | fotografie di lavori di stampa |
| Portfolio | `/vetrofanie` | fotografie di vetrine realizzate |
| Prima / dopo | `/vetrofanie` | coppia reale di foto dello stesso intervento |
| Portfolio | `/incisioni-laser-cnc` | fotografie di targhe, incisioni, componenti |
| Case study | `/allestimenti` | 4-8 foto di un progetto + contesto, esigenza, interventi |
| Specifiche file | `/stampa-grande-formato` | formati, risoluzione, profili colore, abbondanze (DA CONFERMARE) |
| Capacità tecniche | `/incisioni-laser-cnc` | materiali, spessori, area di lavoro, potenza, tolleranze (DA CONFERMARE) |
| Formati file accettati | `/incisioni-laser-cnc` | elenco formati (DA CONFERMARE) |

## Claim mantenuti esclusi

- `/decorazione-automezzi`: nessun "full wrap", nessuna "decorazione integrale", SARDELLI non nominato.
- `/stampa-grande-formato`: roll-up, materiali per fiere ed eventi, specifiche file, tempi e formati massimi esclusi. Striscioni mantenuti (confermati dalla recensione di Stefano B.).
- `/vetrofanie`: pellicole privacy/satinate, decorazioni stagionali e prespaziati esclusi.
- `/allestimenti`: arredi, strutture, carpenteria, falegnameria, impianti, illuminazione, segnaletica normata, project management di cantiere esclusi.
- `/incisioni-laser-cnc`: marcature, tolleranze, spessori, area macchina, potenza, formati file e certificazioni esclusi.

## Come migrare una sezione (se ne emergono altre)

1. Apri il prototipo corrispondente.
2. Copia il testo **senza modificarlo** in `src/data/`.
3. Rendi il markup nella pagina `.astro`, riusando le classi di `service.css`.
4. Ogni valore che nel prototipo veniva da `{{ xCols }}` / `state.isNarrow` diventa
   una media query: `isNarrow` → `max-width: 899px`, `vw < 1180` → `max-width: 1179px`.
5. `<sc-for list="{{ x }}">` → `{x.map(...)}`; `<sc-if value="{{ y }}">` → `{y && (...)}`.

## Differenze volontarie rispetto ai prototipi

| Prototipo | Astro | Motivo |
|---|---|---|
| Colonne da `state.vw` in JS | media query CSS, stessi valori | il server non conosce il viewport |
| Reveal on scroll (`state.revealed`) | rimosso | contenuto visibile subito: meglio per SEO e reduced-motion |
| Parallasse hero | rimosso | confermato dal cliente |
| Carosello testimonial (`tPage`) | griglia su desktop, scroll orizzontale manuale sotto 900px | più contenuto indicizzabile, nessun autoplay, zero JS |
| Lightbox in state React | `lightbox.js` | stesso comportamento, Escape e frecce incluse |
| `window.__resources` | percorsi `/media/...` | meccanismo del prototipo non più necessario |
| Contatore "1 / 3" dei testimonial | rimosso | senza carosello non ha significato |
