import { motion } from 'framer-motion';
import { CheckIcon } from './icons/Icons';

export default function Guarantee({ title, lead, items, tone }) {
  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`}>
      <div className="container">
        <h2>{title}</h2>
        {lead && <p className="hero__subtitle">{lead}</p>}

        <div className="guarantee">
          <div className="guarantee__list">
            {items.map((item, i) => (
              <motion.div
                className="guarantee__item"
                key={item.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                {item.icon || <CheckIcon width={18} height={18} />}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
