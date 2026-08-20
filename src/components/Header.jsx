import Logo from './Logo';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../lib/contact';
import { PhoneIcon, WhatsAppIcon } from './icons/Icons';

export default function Header({ minimal = false }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo size={36} />

        {!minimal && (
          <nav className="header__nav" aria-label="Разделы">
            <a href="/#uslugi">Услуги</a>
            <a href="/#kontakty">Контакты</a>
          </nav>
        )}

        <div className="header__contacts">
          <a href={PHONE_TEL} className="header__phone">
            <PhoneIcon width={18} height={18} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp header__wa"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
