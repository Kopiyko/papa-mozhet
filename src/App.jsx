import { Routes, Route } from 'react-router-dom';
import Zamki from './pages/Zamki';
import FloatingContactRail from './components/FloatingContactRail';

export default function App() {
  return (
    <>
      <div className="page-frame" aria-hidden="true" />
      <FloatingContactRail />
      <Routes>
        <Route path="/" element={<Zamki />} />
        <Route path="/zamki" element={<Zamki />} />
      </Routes>
    </>
  );
}
