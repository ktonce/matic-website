import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// Sito statico (SSG). L'unica parte server-side è /api/lead, che su Vercel
// vive come serverless function in api/lead.js (fuori da Astro).
export default defineConfig({
  site: 'https://www.maticpubblicita.it',
  output: 'static',
  adapter: vercel({
    imageService: false,
    webAnalytics: { enabled: false }
  }),
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true
});
