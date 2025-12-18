import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { to: '/', label: 'Overview', icon: '📊' },
  { to: '/analytics', label: 'Analytics', icon: '📈' },
  { to: '/sales', label: 'Sales', icon: '💳' },
  { to: '/entities', label: 'Entities', icon: '🗂️' },
  { to: '/reports', label: 'Reports', icon: '📝' },
  { to: '/team', label: 'Team', icon: '👥' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__brand">
      <div className="logo">PB</div>
      <div>
        <p className="brand">Pulseboard</p>
        <p className="muted">Intelligence layer</p>
      </div>
    </div>
    <nav className="sidebar__nav">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')} end={item.to === '/'}>
          <span className="icon" aria-hidden>
            {item.icon}
          </span>
          {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="sidebar__cta">
      <p>Need a tailored view?</p>
      <button>Request demo</button>
    </div>
  </aside>
);

export default Sidebar;
