import '../assets/styles/herosection.css';

const HeroSection = ({ scrollToSection }) => {
  const handleNavClick = (section) => {
    scrollToSection(section);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Bridging Talent with Opportunities
        </h1>
        <p className="hero-subtitle">
          Your trusted partner in connecting people and businesses.
        </p>
        <button className="hero-button" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
