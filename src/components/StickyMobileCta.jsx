import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../lib/contact';
import { PhoneIcon, WhatsAppIcon } from './icons/Icons';

export default function StickyMobileCta() {
  return (
    <div className="sticky-cta" role="region" aria-label="Быстрая связь">
      <a href={PHONE_TEL} className="btn btn-cta sticky-cta__btn">
        <PhoneIcon width={20} height={20} />
        Позвонить
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp sticky-cta__btn"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <span className="visually-hidden">{PHONE_DISPLAY}</span>
    </div>
  );
}
