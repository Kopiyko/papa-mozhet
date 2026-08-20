import { motion } from 'framer-motion';
import { PHONE_TEL, WHATSAPP_URL } from '../lib/contact';
import { PhoneIcon, WhatsAppIcon } from './icons/Icons';

export default function FloatingContactRail() {
  return (
    <motion.div
      className="floating-rail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <a href={PHONE_TEL} className="floating-rail__btn floating-rail__btn--call" aria-label="Позвонить">
        <PhoneIcon width={22} height={22} />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-rail__btn floating-rail__btn--wa"
        aria-label="Написать в WhatsApp"
      >
        <WhatsAppIcon width={24} height={24} />
      </a>
    </motion.div>
  );
}
