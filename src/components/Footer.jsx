import Logo from './Logo';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, CITY } from '../lib/contact';
import { MapPinIcon, ClockIcon } from './icons/Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="kontakty">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={34} />
          <p className="footer__tagline">Бытовые поломки решаем быстро — Алматы и пригород.</p>
        </div>

        <div className="footer__col">
          <h3>Контакты</h3>
          <p>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          </p>
          <p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Написать в WhatsApp
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h3>Зона обслуживания</h3>
          <p className="footer__meta">
            <MapPinIcon width={18} height={18} /> {CITY} и пригород
          </p>
          <p className="footer__meta">
            <ClockIcon width={18} height={18} /> Круглосуточно, без выходных
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Папа Может. Все права защищены.</p>
      </div>
    </footer>
  );
}
