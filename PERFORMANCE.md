# Performance — stato e cosa manca

## Eliminato con la migrazione

| Problema del prototipo | Stato |
|---|---|
| Babel standalone nel client | rimosso |
| React full-page rendering | rimosso: HTML statico + ~4 KB di JS vanilla |
| Asset base64 embedded nei bundle standalone | rimosso: immagini come file reali in `/public/media` |
| Colonne calcolate in JS (`state.isNarrow`) | sostituite da media query CSS |
| CSS inline duplicato su ogni elemento | due fogli condivisi con token |

JS totale spedito al browser: `nav.js` + `lead-form.js` + `lightbox.js` +
`filters.js` + `analytics.js`. Nessuna libreria.

## Immagini — TODO

Peso attuale dei file in `media/`:

| File | Peso | Dimensioni | Azione |
|---|---|---|---|
| `logo-matic.png` | **800 KB** | 1254×1254 | **priorità massima**: renderizzato a 36px. Ricomprimere a ≤20 KB o esportare SVG |
| `chi-siamo.jpg` | 163 KB | 1600×1200 | WebP |
| `portfolio-waste.jpg` | 107 KB | 2048×1152 | ridimensionare + WebP |
| `portfolio-soldaini.jpg` | 95 KB | 1200×1600 | WebP |
| `hero-sede.jpg` | 94 KB | 960×720 | **sottodimensionata** per un hero: serve un originale più grande |
| `portfolio-cm.jpg` | 70 KB | 720×960 | WebP |
| `portfolio-parentini.jpg` | 73 KB | 480×360 | **troppo piccola** per il portfolio |
| `portfolio-volvo.jpg` | 66 KB | 480×360 | **troppo piccola** per il portfolio |
| `portfolio-geox.jpg` | 42 KB | 640×480 | WebP |

### srcset — pattern da applicare
Quando esistono le varianti, sostituire `<img>` con:

```astro
<picture>
  <source type="image/avif" srcset="/media/x-640.avif 640w, /media/x-1280.avif 1280w" sizes="(max-width:899px) 100vw, 33vw" />
  <source type="image/webp" srcset="/media/x-640.webp 640w, /media/x-1280.webp 1280w" sizes="(max-width:899px) 100vw, 33vw" />
  <img src="/media/x-1280.jpg" alt="…" loading="lazy" decoding="async" width="1280" height="960" />
</picture>
```

Alternativa: abilitare `imageService` nell'adapter Vercel e usare
`<Image />` di `astro:assets`, che genera le varianti in build.

### Già applicato
- `loading="eager"` + `fetchpriority="high"` sull'immagine hero di ogni pagina.
- `loading="lazy"` + `decoding="async"` su tutto ciò che è sotto la fold.
- `width`/`height` sulle immagini con dimensioni note: nessun layout shift.

## Font
Oggi da Google Fonts con `display=swap`. Per il self-hosting: `.woff2` in
`public/fonts`, decommentare i `@font-face` in `src/styles/tokens.css`,
rimuovere il `<link>` in `SEOHead.astro`. Struttura già pronta, nessuna
modifica di layout necessaria.
