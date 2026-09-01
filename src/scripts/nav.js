/* Header + menu mobile. Vanilla JS, ~1 KB.
   Riproduce esattamente il comportamento approvato:
   - hamburger sotto 1180px (la visibilità è gestita in CSS, qui solo lo stato)
   - focus trap dentro il menu aperto
   - Escape chiude
   - alla chiusura il focus torna al bottone che ha aperto             */
export function initNav() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!header || !toggle || !menu) return;

  const FOCUSABLE = 'a[href], button:not([disabled])';
  let open = false;

  function setOpen(next) {
    open = next;
    menu.hidden = !next;
    toggle.setAttribute('aria-expanded', String(next));
    document.documentElement.style.overflow = next ? 'hidden' : '';
    if (next) {
      const first = menu.querySelector(FOCUSABLE);
      if (first) first.focus();
    } else {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => setOpen(!open));
  menu.querySelectorAll('[data-nav-close]').forEach(el =>
    el.addEventListener('click', () => setOpen(false))
  );
  menu.querySelectorAll('a[href]').forEach(a =>
    a.addEventListener('click', () => { open = false; menu.hidden = true; document.documentElement.style.overflow = ''; })
  );

  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') { setOpen(false); return; }
    if (e.key !== 'Tab') return;
    const f = menu.querySelectorAll(FOCUSABLE);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Header compatto allo scroll — stesso valore del prototipo (60px)
  const onScroll = () => header.setAttribute('data-scrolled', String(window.scrollY > 60));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Sopra 1180px il menu non deve restare aperto dopo un resize
  window.addEventListener('resize', () => {
    if (open && window.innerWidth >= 1180) setOpen(false);
  });
}
