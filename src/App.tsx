import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './index.css';
import { useEffect } from 'react';

const AppContent = () => {
  const { isHobbyMode } = useTheme();

  useEffect(() => {
    document.body.className = isHobbyMode ? 'hobby' : '';
  }, [isHobbyMode]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: isHobbyMode ? '#FFA5C9' : '#9A0000',
          colorLink: isHobbyMode ? '#FFA5C9' : '#9A0000',
          colorSuccess: isHobbyMode ? '#FFA5C9' : '#9A0000',
          fontFamily: 'Tahoma, Verdana, Geneva, sans-serif',
          borderRadius: 8,
          colorBgContainer: isHobbyMode ? '#fff5fa' : '#ffffff',
          colorText: isHobbyMode ? '#d63384' : '#090809',
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
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
