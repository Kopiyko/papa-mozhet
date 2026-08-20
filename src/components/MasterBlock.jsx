import { motion } from 'framer-motion';
import { ToolIcon } from './icons/Icons';

export default function MasterBlock({ title, name, role, bio, tone, image, imageAlt }) {
  return (
    <section className={`section ${tone === 'white' ? 'section--white' : ''}`}>
      <div className="container">
        <h2>{title}</h2>

        <motion.div
          className="master"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <div className="master__avatar">
            {image ? (
              <img src={image} alt={imageAlt || name} />
            ) : (
              <ToolIcon width={36} height={36} aria-hidden="true" />
            )}
          </div>
          <div>
            <h3>{name}</h3>
            <p className="master__role">{role}</p>
            <p style={{ margin: 0 }}>{bio}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
