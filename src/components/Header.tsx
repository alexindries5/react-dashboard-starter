import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const pageTitle = pathname === '/' ? 'Overview' : pathname.replace('/', '').replace(/(^|\s)\S/g, (s) => s.toUpperCase());

  const handleSignOut = () => {
    logout();
    navigate('/signin');
  };

  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">Pulseboard</p>
        <h1 className="title">{pageTitle}</h1>
      </div>
      <div className="header-actions">
        <div className="user-chip">
          <div className="avatar">{user?.name?.[0]?.toUpperCase()}</div>
          <div>
            <p className="strong">{user?.name ?? 'Signed in'}</p>
            <p className="muted">{user?.role ?? 'Admin'}</p>
          </div>
        </div>
        <button className="ghost" onClick={() => navigate('/settings')}>
          Preferences
        </button>
        <button className="primary" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
