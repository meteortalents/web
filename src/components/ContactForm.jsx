import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/footer.css'

const ContactFooter = () => {
  return (
    <footer className='contact-footer'>
      <div className='footer-container'>
        <div className='header-logo'>
        <img rel="icon" type="image/svg+xml" src="/vite.svg" alt="Nautics Logo" className='logo-img' />
        <span className='logo-text-highlight'>Nautics</span>
        <span className='logo-text-sub'>HR Solutions</span>
        </div>
        <div className='footer-links'>
          <div className='quick-links'>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Employer Home</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='support'>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className='social-media'>
          <h4>Connect with Us</h4>
          <div className='social-icons'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
