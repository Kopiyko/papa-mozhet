import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from './icons/Icons';

export default function Faq({ title, items, tone }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`} id="faq">
      <div className="container">
        <h2>{title}</h2>
        <div className="faq">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                className="faq__item"
                data-open={open}
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <button
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className="faq__question-text">
                    {item.icon && <span className="faq__icon">{item.icon}</span>}
                    {item.q}
                  </span>
                  <ChevronDownIcon width={20} height={20} />
                </button>
                {open && <p className="faq__answer">{item.a}</p>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
