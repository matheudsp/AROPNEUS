export const WHATSAPP_NUMBER = '5589994136771';
export const MAPS_URL = 'https://maps.app.goo.gl/YjywScP3CVo4v81R9';
export function whatsappUrl(message = 'Olá! Vim pelo site da Aro Pneus e gostaria de um orçamento.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
