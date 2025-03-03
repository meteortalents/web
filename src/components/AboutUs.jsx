import React from 'react';
import '../assets/styles/about.css';
import { FaBullseye, FaRocket } from 'react-icons/fa';
import growthSvg from '../assets/images/image5.jpg';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Who We Are!</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are a growing IT Product & Services Management, Healthcare,
              Data AI and ESG  recruitment  consulting  specialist  organization with
              an advantageous standing, capable of delivering exceptional
              Recruitment Services  We  specialize  in  providing  contracting  &
              permanent placement services to companies in Healthcare, IT, ITES, GCC,
              Data AI, ESG focus industries.
            </p>
          </div>
          <div className="about-image">
            <img src={growthSvg} alt="Growth" />
          </div>
        </div>
        <div className="about-cards">
          {['Vision', 'Mission', 'Core Values'].map((title, index) => (
            <div key={index} className="about-card">
              
              {title === 'Vision' && <FaBullseye size={40} color="#31708E" />}
              {title === 'Mission' && <FaRocket size={40} color="#31708E" />}
              {title === 'Core Values' && <FaBullseye size={40} color="#31708E" />}
              <h3 className="card-title">{title}</h3>
              <p className="card-text">
                {title === 'Vision' && 'Be a catalyst in the growth of our esteemed clients with the ideology “Transforming the Way You Hire.”'}
                {title === 'Mission' && 'To become a top global recruitment partner and the most trusted service provider for our clients.'}
                {title === 'Core Values' && 'Customer Centricity | Continuous Improvement | Speed | Quality | Transparency'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

