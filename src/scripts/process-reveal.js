/*
  Reveal leggero per la timeline del processo (progressive enhancement).
  Il contenuto è già visibile nell'HTML: la classe di partenza viene applicata
  solo da JS, quindi senza JavaScript non c'è nulla da rivelare.
  Con prefers-reduced-motion: reduce lo script esce subito.
*/
export function initProcessReveal() {
  const list = document.querySelector('[data-process-timeline]');
  if (!list) return;
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const steps = Array.from(list.querySelectorAll('.timeline__step'));
  if (!steps.length) return;

  list.dataset.revealReady = 'true';
  let done = 0;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      // Stagger breve: l'ordine di lettura resta quello del documento.
      const delay = Math.min(steps.indexOf(el), 4) * 90;
      setTimeout(() => {
        el.dataset.revealed = 'true';
        done += 1;
        list.style.setProperty('--process-progress', (done / steps.length).toFixed(3));
      }, delay);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.25 });

  steps.forEach((s) => io.observe(s));
}
