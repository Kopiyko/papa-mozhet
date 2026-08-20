import { motion } from 'framer-motion';
import { waLink } from '../lib/contact';

export default function Quiz({ title, lead, options }) {
  return (
    <section className="quiz section" id="quiz">
      <div className="container">
        <h2>{title}</h2>
        {lead && <p className="quiz__lead">{lead}</p>}

        <div className="quiz__grid">
          {options.map((opt, i) => (
            <motion.a
              key={opt.label}
              href={waLink(opt.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="quiz__btn"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="quiz__btn-icon">{opt.icon}</span>
              {opt.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
