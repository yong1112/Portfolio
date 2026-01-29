import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Capabilities' },
    { path: '/projects', label: 'Research' },
    { path: '/blog', label: 'Writing' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <div className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
        <Link to="/" style={{ fontSize: 16, fontWeight: 600 }}>
          Portfolio
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: location.pathname === link.path ? 'var(--primary-color, #9A0000)' : 'inherit',
                fontWeight: location.pathname === link.path ? 600 : 400,
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
