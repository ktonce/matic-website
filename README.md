# MATIC — sito Production (Astro + Vercel)

Migrazione dei prototipi `.dc.html` a sito statico indicizzabile.
Design, palette, tipografia e copy sono quelli approvati: **non modificarli**.

---

## Struttura

```
astro/
├── api/                        # Serverless functions Vercel (fuori da Astro)
│   ├── lead.js                 # POST /api/lead
│   └── _lib/
│       ├── lead.js             # sanitizzazione, validazione, composizione email
│       ├── email.js            # adapter provider email (log | resend)
│       └── rate-limit.js       # 5 richieste / 10 min per IP (Redis o in-memory)
├── public/
│   ├── media/                  # fotografie reali (copiare da ../media)
│   └── fonts/                  # .woff2 quando si passa al self-hosting
├── src/
│   ├── components/
│   │   ├── SEOHead.astro       │ Filters.astro
│   │   ├── SkipLink.astro      │ LeadForm.astro
│   │   ├── Header.astro        │ Testimonial.astro
│   │   ├── Navigation.astro    │ PortfolioGrid.astro
│   │   ├── MobileMenu.astro    │ Lightbox.astro
│   │   ├── Footer.astro        │ FAQ.astro
│   │   ├── StickyBar.astro     │ CTA.astro
│   ├── data/                   # unica fonte di verità dei contenuti
│   │   ├── site.js             # NAP, telefono, WhatsApp, email, indirizzo
│   │   ├── navigation.js       # nav uniforme (header, menu, footer)
│   │   ├── seo.js              # title / description / canonical / og per route
│   │   ├── home.js             # copy homepage
│   │   ├── services.js         # copy pagine servizio
│   │   ├── testimonials.js     # recensioni reali + associazioni per pagina
│   │   └── works.js            # portfolio (solo foto realmente disponibili)
│   ├── layouts/
│   │   ├── Base.astro          # html lang="it", head, skip-link, header, footer
│   │   └── ServicePage.astro   # scheletro comune delle 6 pagine servizio
│   ├── pages/                  # una route per file
│   ├── scripts/                # JS vanilla, nessun React
│   │   ├── nav.js              # hamburger 1180px, focus trap, Escape, focus return
│   │   ├── lead-form.js        # invio a /api/lead, timeout 15s, guard doppio invio
│   │   ├── lightbox.js         # lightbox accessibile
│   │   ├── filters.js          # filtri /lavori (progressive enhancement)
│   │   └── analytics.js        # generate_lead, no-op se analytics assente
│   └── styles/
│       ├── tokens.css          # colori, font, scala tipografica, reset, focus
│       └── components.css      # stili dei componenti condivisi
├── astro.config.mjs
├── vercel.json
└── .env.example
```

---

## Avvio locale

```bash
cd astro
npm install
cp .env.example .env      # EMAIL_PROVIDER=log: nessuna email inviata
npm run dev               # http://localhost:4321
```

Le foto vanno copiate una volta sola:

```bash
mkdir -p public/media && cp ../media/* public/media/
```

---

## Deploy su Vercel

1. **Repository** — push della cartella `astro/` su GitHub.
2. **Import** — Vercel → *Add New Project* → seleziona il repo.
3. **Impostazioni build** (Vercel le rileva da `@astrojs/vercel`):
   - Framework preset: **Astro**
   - Root Directory: `astro` (se il repo contiene anche i prototipi)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Environment Variables** — Settings → Environment Variables, per
   *Production* e *Preview*:

   | Nome | Valore | Note |
   |---|---|---|
   | `LEAD_TO_EMAIL` | `info@matic.vip` | destinatario dei lead |
   | `EMAIL_FROM` | `MATIC <noreply@matic.vip>` | dominio verificato su Resend |
   | `EMAIL_PROVIDER` | `log` → poi `resend` | `log` non invia: usare in staging |
   | `EMAIL_PROVIDER_API_KEY` | *(segreto)* | API key Resend, solo server-side |
   | `SITE_ORIGIN` | `https://www.maticpubblicita.it` | CORS + controllo Origin |

   Opzionali, per il rate limiting distribuito: `UPSTASH_REDIS_REST_URL` +
   `UPSTASH_REDIS_REST_TOKEN` (oppure `KV_REST_API_URL` + `KV_REST_API_TOKEN`).

5. **Domini** — Settings → Domains: aggiungi `maticpubblicita.it` e
   `www.maticpubblicita.it`, imposta il redirect verso **www** (i canonical
   puntano a `https://www.maticpubblicita.it`).
6. **Deploy** e verifica:
   - `curl -s https://<dominio>/insegne | grep -c "<h1"` → deve restituire `1`
     (contenuto nell'HTML iniziale, non generato dal JS)
   - form: invio → `{"ok":true}` e email ricevuta
   - `/privacy` e `/cookie` rispondono 200

### Verifica del rendering statico
```bash
npm run build
grep -o '<title>[^<]*' dist/insegne.html
grep -c 'canonical' dist/index.html
```
Se title e canonical compaiono nell'HTML compilato, il requisito SEO è soddisfatto.

---

## Configurazione Resend (email dei form)

1. **Account** — registrarsi su [resend.com](https://resend.com) con un indirizzo
   aziendale MATIC.
2. **Dominio mittente** — Domains → *Add Domain* → `matic.vip`.
3. **DNS** — inserire nel pannello DNS di `matic.vip` i record indicati da
   Resend: DKIM (TXT `resend._domainkey`), SPF sul sottodominio di invio
   (TXT `v=spf1 include:amazonses.com ~all`), MX del sottodominio `send` per
   il return-path e, se richiesto, DMARC (`_dmarc`). I valori esatti sono
   quelli mostrati da Resend: copiarli senza modificarli.
4. **Verifica** — attendere lo stato **Verified** nella dashboard Resend
   (di norma pochi minuti, fino a 24-48h in base al TTL del DNS). Finché il
   dominio non è verificato gli invii da `noreply@matic.vip` falliscono e la
   function risponde `500 send-failed`.
5. **API key** — API Keys → *Create API Key* dedicata al sito MATIC
   (es. `matic-sito-production`), permesso *Sending access*, dominio
   `matic.vip`. La chiave si vede una sola volta: copiarla subito. Non va mai
   committata nel repository né esposta lato client.
6. **Env vars su Vercel** — Settings → Environment Variables, per *Production*
   e *Preview*:
   `EMAIL_PROVIDER=resend`, `EMAIL_PROVIDER_API_KEY=re_...` (solo qui),
   `EMAIL_FROM=MATIC <noreply@matic.vip>`,
   `LEAD_TO_EMAIL=info@matic.vip`,
   `SITE_ORIGIN=https://www.maticpubblicita.it`.
7. **Deploy** — le variabili vengono lette al runtime della function: dopo
   averle aggiunte serve un nuovo deploy (o *Redeploy*).
8. **Test dal sito** — compilare un form (es. `/insegne`) con dati di prova.
   Atteso: messaggio "Richiesta ricevuta" e risposta `{"ok":true}`.
9. **Controllo email** — la mail arriva a `info@matic.vip` con oggetto
   `[MATIC] Nuova richiesta — <servizio>`; il *Rispondi* deve puntare
   all'email del cliente, se l'ha lasciata. Verificare anche lo spam.
10. **Log della function** — Vercel → Deployment → *Functions* → `api/lead`.
   Ogni invio riuscito logga `resend ok id=…`; gli errori loggano stato HTTP e
   risposta di Resend (che non viene mai mostrata al visitatore).

### Test con curl

```bash
curl -i https://www.maticpubblicita.it/api/lead \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://www.maticpubblicita.it' \
  -d '{
    "form_id": "sopralluogo-insegne",
    "servizio": "Insegne",
    "nome": "Test Test",
    "telefono": "0000000000",
    "email": "test@example.com",
    "localita": "Fucecchio",
    "progetto": "Invio di prova",
    "pagina": "https://www.maticpubblicita.it/insegne",
    "timestamp": "2026-01-01T10:00:00.000Z"
  }'
```

Risposte attese: `200 {"ok":true}`; `400 {"ok":false,"error":"invalid",...}`
con `form_id` fuori whitelist o telefono mancante; `403
{"ok":false,"error":"forbidden"}` con un `Origin` estraneo; `429
{"ok":false,"error":"rate-limit"}` dalla sesta richiesta in 10 minuti.
Aggiungendo `"website": "x"` la risposta resta `200 {"ok":true}` ma nessuna
email viene inviata (honeypot).

### Rate limiting

Di default il limite (5 richieste / 10 minuti per IP) è **in-memory**. Su
serverless la memoria non è condivisa fra le istanze e sparisce al cold start:
il limite vale per singola istanza e **non garantisce un rate limiting globale**.
Per un limite reale collegare Upstash Redis o Vercel KV e impostare le
variabili REST elencate sopra; senza di esse il codice ricade automaticamente
sull'in-memory, quindi il build non richiede dipendenze aggiuntive.

---

## Regole di contenuto (vincolanti)

- Non scrivere copy nuovo: portare verbatim quello approvato nei prototipi.
- Nessuna fotografia stock. Solo i file in `public/media`.
- Nessuna attribuzione cliente → servizio: i clienti restano un blocco
  corporate in homepage, senza collegamento al servizio della pagina.
- I testimonial compaiono solo dove il testo documenta la lavorazione
  (vedi `byPage` in `src/data/testimonials.js`).

## TODO aperti

- **Fotografie**: `/stampa-grande-formato`, `/vetrofanie`, `/incisioni-laser-cnc`
  non hanno lavori propri.
- **Autorizzazioni marchi**: SARDELLI su `/decorazione-automezzi`, marchio
  visibile nella foto allestimento, clienti in homepage.
- **Testi legali**: `/privacy` e `/cookie` contengono solo placeholder.
- **Migrazione copy**: sezioni marcate `DA MIGRARE` nelle pagine servizio e
  in `index.astro`.
- **Immagini**: generare WebP/AVIF e `srcset` (vedi PERFORMANCE.md).
