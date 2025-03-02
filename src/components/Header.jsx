import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/styles/global.css';
import '../assets/styles/header.css';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (offset > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className='header-logo'>
        <img rel="icon" type="image/svg+xml" src="./vite.svg" alt="Nautics Logo" className='logo-img' />
        <span className='logo-text-highlight'>Nautics</span>
        <span className='logo-text-sub'>HR Solutions</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className='menu-icon-white' size={24} /> : <FaBars className='menu-icon-white' size={24} />}
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Us</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a></li>
          <li><a href="#careers" onClick={(e) => { e.preventDefault(); handleNavClick('careers'); }}>Careers</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;