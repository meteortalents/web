// const HeroSection = () => {
//     return (
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Bridging Talent with Opportunities</h1>
//           <p className="white-text">Your trusted partner in connecting people and businesses.</p>
//           <button className="cta-button">Explore Our Services</button>
//         </div>
//       </section>
//     );
//   };
  
//   export default HeroSection;
import '../assets/styles/herosection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Bridging Talent with Opportunities
        </h1>
        <p className="hero-subtitle">
          Your trusted partner in connecting people and businesses.
        </p>
        <button className="hero-button">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;