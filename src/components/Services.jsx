import React from 'react';
import { FaUserTie, FaHandshake, FaChalkboardTeacher, FaUsersCog } from 'react-icons/fa';
import '../assets/styles/services.css'

const servicesData = [
  {
    icon: <FaUserTie size={48} />, 
    title: 'Permanent Recruitment',
    description: 'We provide permanent staffing solutions with a quick and efficient process to help you find the best talent.'
  },
  {
    icon: <FaHandshake size={48} />, 
    title: 'Contract Recruitment',
    description: 'Flexible contract staffing services to meet your short-term and project-based hiring needs.'
  },
  {
    icon: <FaChalkboardTeacher size={48} />, 
    title: 'RPO (3 Models)',
    description: 'End-to-end Recruitment Process Outsourcing models tailored to your business needs.'
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="service-title">
        <h2>Our Services</h2>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
