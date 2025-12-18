import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname === '/' ? 'Overview' : pathname.replace('/', '').replace(/(^|\s)\S/g, (s) => s.toUpperCase());

  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">Pulseboard</p>
        <h1 className="title">{pageTitle}</h1>
      </div>
      <div className="header-actions">
        <button className="ghost">Export</button>
        <button className="primary">New Report</button>
      </div>
    </header>
  );
};

export default Header;
