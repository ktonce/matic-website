/* Filtri categoria di /lavori. Progressive enhancement: senza JS tutti i
   lavori restano visibili e indicizzabili, i bottoni semplicemente non filtrano. */
export function initFilters() {
  const bar = document.querySelector('[data-filters]');
  if (!bar) return;
  const cards = Array.from(document.querySelectorAll('[data-work]'));

  bar.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      bar.querySelectorAll('[data-filter]').forEach(b =>
        b.setAttribute('aria-pressed', String(b === btn))
      );
      cards.forEach(c => { c.hidden = cat !== 'Tutti' && c.dataset.cat !== cat; });
    });
  });
}
