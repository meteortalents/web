import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logoPNG from '../assets/images/logo2.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Left Section - Logo and Title */}
        <div className='footer-logo'>
          <img rel="icon" src={logoPNG} alt="Diverse Talent Solutions Logo" className='footer-img' />
          <span className='footer-text-highlight'>Diverse Talent Solutions</span>
        </div>

        {/* Middle Section - Connect with Us */}
        <div className='social-media'>
          <h4>Connect with Us</h4>
          <div className='social-icons'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* Right Section - Contact Information */}
        <div className='contact-info'>
  <h4>Feel free to contact us for any inquiries or to schedule a consultation.</h4>
  <p><FaEnvelope /> <a href='mailto:nikhil@diversetalentsolutions.com'>support@diversetalentsolutions.com</a></p>
  <p><FaPhoneAlt /> <a href='tel:+919164940642'>+91 91649 40642</a>, <a href='tel:+919840671879'>98406 71879</a></p>
  <p><FaMapMarkerAlt /> #New No. 767, Old No. 194, 2nd Floor, Velachery Main Rd, Selaiyur, Chennai-600073</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;