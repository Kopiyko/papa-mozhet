import { StarDoodle } from './Doodles';

export default function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" role="presentation" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span className="marquee__item" key={i}>
            <StarDoodle width={16} height={16} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
