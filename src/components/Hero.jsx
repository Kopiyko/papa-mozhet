import { motion } from 'framer-motion';
import { PHONE_TEL, WHATSAPP_URL } from '../lib/contact';
import { PhoneIcon, WhatsAppIcon } from './icons/Icons';
import { SparkleDoodle, StarDoodle, SquiggleDoodle, GearDoodle, BoltDoodle } from './Doodles';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Hero({ eyebrow, title, subtitle, bullets = [], chips = [], image, imageAlt, live }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <motion.div className="hero__content" initial="hidden" animate="show">
          {live && (
            <motion.span className="live-badge" variants={fadeUp} custom={0}>
              <span className="live-badge__dot" />
              {live}
            </motion.span>
          )}
          {eyebrow && (
            <motion.span className="eyebrow" variants={fadeUp} custom={0.3} style={live ? { marginTop: 10 } : undefined}>
              {eyebrow}
            </motion.span>
          )}
          <motion.h1 variants={fadeUp} custom={1} style={{ marginTop: 14 }}>
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p className="hero__subtitle" variants={fadeUp} custom={2}>
              {subtitle}
            </motion.p>
          )}

          {bullets.length > 0 && (
            <motion.ul className="hero__bullets" variants={fadeUp} custom={3}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </motion.ul>
          )}

          <motion.div className="hero__cta" variants={fadeUp} custom={4}>
            <a href={PHONE_TEL} className="btn btn-cta">
              <PhoneIcon width={20} height={20} />
              Позвонить сейчас
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <WhatsAppIcon />
              Написать в WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <SparkleDoodle className="doodle" style={{ top: '-6%', left: '4%' }} />
          <StarDoodle className="doodle doodle--yellow" style={{ top: '2%', right: '-2%' }} />
          <GearDoodle className="doodle" style={{ bottom: '10%', left: '-6%' }} />
          <BoltDoodle className="doodle doodle--yellow" style={{ bottom: '-4%', right: '8%' }} />
          <SquiggleDoodle className="doodle" style={{ top: '38%', left: '-10%' }} />

          <div className="hero__visual-frame">
            <img src={image} alt={imageAlt || ''} loading="eager" />
          </div>

          {chips.map((chip, i) => (
            <motion.span
              key={chip.label}
              className="chip chip--yellow hero__floating-chip"
              style={chip.style}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              {chip.icon}
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
