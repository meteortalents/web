// import React from 'react';
// import { FaSearch, FaUserCheck, FaClipboardList, FaThumbsUp, FaComments, FaFileInvoice } from 'react-icons/fa';

// const Careers = () => {
//   const steps = [
//     { icon: <FaSearch />, title: 'Job Analysis', description: 'Understanding role requirements and expectations.' },
//     { icon: <FaUserCheck />, title: 'Scouting of Candidates', description: 'Identifying and attracting top talent.' },
//     { icon: <FaClipboardList />, title: 'Interview & Skill Assessment', description: 'Evaluating skills and cultural fit.' },
//     { icon: <FaThumbsUp />, title: 'Endorse & Schedule Interview', description: 'Recommending and coordinating client interviews.' },
//     { icon: <FaComments />, title: 'Client Feedback & Offer Management', description: 'Managing feedback and offers seamlessly.' },
//     { icon: <FaFileInvoice />, title: 'Invoicing for Billing', description: 'Ensuring accurate and timely invoicing.' }
//   ];

//   return (
//     <section className="careers">
//       <div className="about-header">
//         <h2>Join Our Team</h2>
//         <p>Explore opportunities and become part of our mission.</p>
//       </div>
//       <div className="recruitment-process" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
//         {steps.map((step, index) => (
//           <div key={index} className="process-step" style={{ textAlign: 'center', background: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', flex: '1' }}>
//             <div className="step-icon" style={{ fontSize: '2rem', color: '#2A5298' }}>{step.icon}</div>
//             <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{step.title}</h3>
//             <p style={{ fontSize: '0.9rem', color: '#555' }}>{step.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="careers-content" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
//         <div className="careers-item" style={{ textAlign: 'center', flex: '1', padding: '1rem' }}>
//           <h3>Open Positions</h3>
//           <p>Find your perfect role and grow with us.</p>
//         </div>
//         <div className="careers-item" style={{ textAlign: 'center', flex: '1', padding: '1rem' }}>
//           <h3>Our Culture</h3>
//           <p>We value collaboration, innovation, and growth.</p>
//         </div>
//         <div className="careers-item" style={{ textAlign: 'center', flex: '1', padding: '1rem' }}>
//           <h3>Recruitment Process</h3>
//           <p>Our streamlined process ensures the right fit for every role.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Careers;

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
      <div className="header-title">
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

