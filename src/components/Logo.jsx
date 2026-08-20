import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../lib/contact';
import { asset } from '../lib/asset';

export default function Logo({ size = 40, withText = true }) {
  return (
    <Link to="/" className="logo" aria-label={`${COMPANY_NAME} — на главную`}>
      <img src={asset('brand/logo-mark.webp')} alt="" width={size} height={size} style={{ borderRadius: '50%' }} />
      {withText && (
        <span className="logo__text">
          Папа <strong>Может</strong>
        </span>
      )}
    </Link>
  );
}
