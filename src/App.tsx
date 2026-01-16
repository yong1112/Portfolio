import { ConfigProvider } from 'antd';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9A0000',
          colorLink: '#9A0000',
          colorSuccess: '#9A0000',
          fontFamily: 'Tahoma, Verdana, Geneva, sans-serif',
          borderRadius: 8,
        },
      }}
    >
      <Router>
        <div className="relative min-h-screen">
          <StarField />
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
