export const PHONE_DISPLAY = '+7 706 414 45 13';
export const PHONE_TEL = 'tel:+77064144513';
export const WHATSAPP_URL = 'https://wa.me/77064144513';
export const CITY = 'Алматы';
export const COMPANY_NAME = 'Папа Может';

export function waLink(text) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
