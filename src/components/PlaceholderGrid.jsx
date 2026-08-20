import { motion } from 'framer-motion';
import { ImagePlaceholderIcon } from './icons/Icons';

export default function PlaceholderGrid({ title, lead, count = 3, note, tone, images }) {
  const items = images && images.length > 0 ? images : Array.from({ length: count }).map(() => null);

  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`}>
      <div className="container">
        <h2>{title}</h2>
        {lead && <p className="hero__subtitle">{lead}</p>}

        <div className="grid-3">
          {items.map((item, i) => (
            <motion.div
              className={item ? 'photo-box' : 'placeholder-box'}
              key={item?.src || i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              {item ? (
                <img src={item.src} alt={item.alt || ''} loading="lazy" />
              ) : (
                <>
                  <ImagePlaceholderIcon width={30} height={30} />
                  <span>{note}</span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
