import { motion } from 'framer-motion';
import { SparkleDoodle } from './Doodles';

const BENTO_TONES = ['', 'tile--yellow', 'tile--ink'];

export default function TileGrid({ title, lead, items, eyebrow, tone, bento }) {
  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`}>
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <span className="section-heading" style={eyebrow ? { marginTop: 14 } : undefined}>
          <h2>{title}</h2>
          <SparkleDoodle className="doodle doodle--yellow" />
        </span>
        {lead && <p className="hero__subtitle">{lead}</p>}

        <div className="grid-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={`tile ${bento ? BENTO_TONES[i % BENTO_TONES.length] : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {item.icon && <div className="tile__icon">{item.icon}</div>}
              <h3>{item.title}</h3>
              {item.text && <p>{item.text}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
