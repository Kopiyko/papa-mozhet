import { motion } from 'framer-motion';

export default function Steps({ title, items, tone }) {
  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`}>
      <div className="container">
        <h2>{title}</h2>
        <div className="steps">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="step__top">
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                {item.icon && <span className="step__icon">{item.icon}</span>}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
