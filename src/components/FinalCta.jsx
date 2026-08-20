import { PHONE_TEL, WHATSAPP_URL } from '../lib/contact';
import { PhoneIcon, WhatsAppIcon } from './icons/Icons';

export default function FinalCta({ title, subtitle }) {
  return (
    <section className="section">
      <div className="container">
        <div className="final-cta">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          <div className="final-cta__actions">
            <a href={PHONE_TEL} className="btn btn-cta">
              <PhoneIcon width={20} height={20} />
              Позвонить сейчас
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <WhatsAppIcon />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
