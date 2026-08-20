import { motion } from 'framer-motion';
import { PhoneIcon } from './icons/Icons';
import { PHONE_TEL } from '../lib/contact';

export default function PriceBlock({ title, amount, unit, note, disclaimer, tone }) {
  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`} id="price">
      <div className="container">
        <h2>{title}</h2>

        <motion.div
          className="price-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <div className="price-card__amount">
            {amount}
            <span>{unit}</span>
          </div>
          <div>
            <p style={{ marginBottom: 10, fontWeight: 600 }}>{note}</p>
            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{disclaimer}</p>
            <a href={PHONE_TEL} className="btn btn-cta" style={{ marginTop: 16 }}>
              <PhoneIcon width={18} height={18} />
              Узнать точную цену
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
