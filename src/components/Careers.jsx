import React from 'react';
import { FaSearch, FaUserCheck, FaClipboardList, FaThumbsUp, FaComments, FaFileInvoice } from 'react-icons/fa';
import '../assets/styles/careers.css'

const Careers = () => {
  const steps = [
    { icon: <FaSearch />, title: 'Job Analysis', description: 'Understanding role requirements and expectations.' },
    { icon: <FaUserCheck />, title: 'Scouting of Candidates', description: 'Identifying and attracting top talent.' },
    { icon: <FaClipboardList />, title: 'Interview & Skill Assessment', description: 'Evaluating skills and cultural fit.' },
    { icon: <FaThumbsUp />, title: 'Endorse & Schedule Interview', description: 'Recommending and coordinating client interviews.' },
    { icon: <FaComments />, title: 'Client Feedback & Offer Management', description: 'Managing feedback and offers seamlessly.' },
    { icon: <FaFileInvoice />, title: 'Invoicing for Billing', description: 'Ensuring accurate and timely invoicing.' }
  ];

  return (
    <section className="careers">
      <div className="careers-title">
        <h2>Join Our Team</h2>
        <p>Explore opportunities and become part of our mission.</p>
      </div>
      <div className="recruitment-process">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="careers-content">
        <div className="careers-item">
          <h3>Open Positions</h3>
          <p>Find your perfect role and grow with us.</p>
        </div>
        <div className="careers-item">
          <h3>Our Culture</h3>
          <p>We value collaboration, innovation, and growth.</p>
        </div>
        <div className="careers-item">
          <h3>Recruitment Process</h3>
          <p>Our streamlined process ensures the right fit for every role.</p>
        </div>
      </div>
    </section>
  );
};

export default Careers;

