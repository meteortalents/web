import React from 'react';
import { FaBullseye, FaRocket } from 'react-icons/fa';
import growthSvg from '../assets/images/image5.jpg';
import '../assets/styles/about.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="header-title">
        <h2>Who We Are!</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            We are a growing IT Product & Services Management, Healthcare,
            Data AI and ESG  recruitment  consulting  specialist  organization
            with
            an advantageous standing, capable of delivering exceptional
            Recruitment Services  We  specialize  in  providing  contracting  &
            permanent placement services to companies in Healthcare, IT,
            Data AI, ESG focus industries.          </p>
        </div>
        <div className="about-image">
          <img src={growthSvg} alt="Growth" />
        </div>
      </div>
      <div className="about-vision-mission">
        <div className="about-vision">
          <h3>Vision:</h3>
          <FaBullseye size={40} color="#2A5298" />
          <p>
            Be a catalyst in the growth for our esteemed clients with the ideology “Transforming the Way You Hire.”
          </p>
        </div>
        <div className="about-mission">
          <h3>Mission:</h3>
          <FaRocket size={40} color="#2A5298" />
          <p>
            To become a top global recruitment partner and the most trusted service provider for our clients.
          </p>
        </div>
        <div className="about-values">
          <h3>Core Values:</h3>
          <FaBullseye size={40} color="#2A5298" />
          <p>Customer Centricity | Continuous Improvement | Speed | Quality | Transparency</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
