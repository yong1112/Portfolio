import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {
  const location = useLocation();
  
  const items = [
    { key: '/about', label: <Link to="/about">About</Link> },
    { key: '/skills', label: <Link to="/skills">Capabilities</Link> },
    { key: '/projects', label: <Link to="/projects">Research</Link> },
    { key: '/blog', label: <Link to="/blog">Writing</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
  ];
  
  return (
    <div className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: 16, fontWeight: 600 }}>
          <span className="gradient-text">Portfolio</span>
        </Link>
        <Menu mode="horizontal" selectedKeys={[location.pathname]} items={items} style={{ background: 'transparent', border: 'none', flex: 1, justifyContent: 'flex-end' }} />
      </div>
    </div>
  );
};

export default Navbar;
