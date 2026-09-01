/* Helper analytics. Nessun tag installato: se GA4 / GTM / Pixel non ci sono,
   queste funzioni non fanno nulla e non producono errori.
   Il form funziona in modo del tutto indipendente da questo file.         */
export function trackLead(payload) {
  try {
    const data = {
      event: 'generate_lead',
      form_id: payload.form_id,
      servizio: payload.servizio,
      source: payload.utm_source || '',
      campaign: payload.utm_campaign || ''
    };
    if (window.dataLayer && typeof window.dataLayer.push === 'function') window.dataLayer.push(data);
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', data);
    if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: payload.servizio });
  } catch (err) {
    /* il tracciamento non deve mai bloccare o rompere l'invio */
  }
}
