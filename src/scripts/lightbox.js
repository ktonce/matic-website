/* Lightbox portfolio, accessibile: role="dialog", aria-modal, Escape,
   frecce, focus restituito all'elemento che l'ha aperta.               */
export function initLightbox() {
  const box = document.querySelector('[data-lightbox]');
  if (!box) return;

  const img = box.querySelector('[data-lightbox-img]');
  const tag = box.querySelector('[data-lightbox-tag]');
  const title = box.querySelector('[data-lightbox-title]');
  const closeBtns = box.querySelectorAll('[data-lightbox-close]');
  const prevBtn = box.querySelector('[data-lightbox-prev]');
  const nextBtn = box.querySelector('[data-lightbox-next]');

  let index = -1;
  let opener = null;

  const visible = () => Array.from(document.querySelectorAll('[data-work]:not([hidden])'));

  function render() {
    const items = visible();
    const el = items[index];
    if (!el) return;
    img.src = el.dataset.img;
    img.alt = el.dataset.alt || '';
    tag.textContent = el.dataset.tag || '';
    title.textContent = el.dataset.title || '';
    box.setAttribute('aria-label', el.dataset.title || 'Lavoro');
  }

  function open(i, from) {
    index = i;
    opener = from || null;
    render();
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    const first = box.querySelector('[data-lightbox-close]');
    if (first) first.focus();
  }

  function close() {
    box.hidden = true;
    document.documentElement.style.overflow = '';
    if (opener) opener.focus();
  }

  function step(dir) {
    const n = visible().length;
    if (!n) return;
    index = (index + dir + n) % n;
    render();
  }

  document.querySelectorAll('[data-work-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('[data-work]');
      open(visible().indexOf(card), btn);
    });
  });

  closeBtns.forEach(b => b.addEventListener('click', close));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  if (prevBtn) prevBtn.addEventListener('click', () => step(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => step(1));

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'Tab') {
      const f = box.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}
