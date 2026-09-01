// Dati aziendali — unica fonte di verità per NAP, contatti e URL.
export const site = {
  name: 'MATIC',
  legal: 'Matic Incisioni Srl',
  vat: '02279700484',
  origin: 'https://www.maticpubblicita.it',
  tel: { display: '0571 20572', href: 'tel:+39057120572' },
  whatsapp: { display: '329 232 4535', number: '393292324535', href: 'https://wa.me/393292324535' },
  email: { display: 'info@maticpubblicita.it', href: 'mailto:info@maticpubblicita.it' },
  address: { street: "Via Ragazzi del '99, 16", zip: '50054', city: 'Fucecchio', province: 'FI' },
  maps: 'https://maps.google.com/?q=Via+Ragazzi+del+99,+16,+50054+Fucecchio+FI',
  footerTagline: 'Insegne, stampa, allestimenti e comunicazione online per aziende, negozi e professionisti, da oltre vent\'anni.',
  copyright: '© 2026 Matic Incisioni Srl — P.IVA 02279700484'
};

export function waLink(text) {
  return text ? site.whatsapp.href + '?text=' + encodeURIComponent(text) : site.whatsapp.href;
}
