
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/styles/header.css';
import logoPNG from '../assets/images/logo2.png';

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
        <img rel="icon" src={logoPNG} alt="Diverse Hiring Solutions Logo" className='logo-img' />
        <span className='logo-text-highlight'>Diverse Talent Solutions</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
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

