import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/AboutUs';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/ContactForm';
import HeroSection from './components/HeroSection';
import './assets/styles/global.css';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <section id="home"><HeroSection scrollToSection={scrollToSection} /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="careers"><Careers /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
