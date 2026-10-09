import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TrustStrip from './sections/TrustStrip';
import MedhaLab from './sections/MedhaLab';
import LearningExperience from './sections/LearningExperience';
import HowItWorks from './sections/HowItWorks';
import LanguageLab from './sections/LanguageLab';
import MedhaGames from './sections/MedhaGames';
import WhyMedhavatika from './sections/WhyMedhavatika';
import BrainSetuProgram from './sections/BrainSetuProgram';
import Statistics from './sections/Statistics';
import Testimonials from './sections/Testimonials';
import DemoForm from './sections/DemoForm';
import SchoolCTA from './sections/SchoolCTA';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';

function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 bg-brand-blue text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-blue-dark hover:-translate-y-1 transition-all duration-200 z-40"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default function App() {
  useEffect(() => {
    // Add smooth scroll polyfill behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <MedhaLab />
        <LearningExperience />
        <HowItWorks />
        <LanguageLab />
        <MedhaGames />
        <WhyMedhavatika />
        <BrainSetuProgram />
        <Statistics />
        <Testimonials />
        <DemoForm />
        <SchoolCTA />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
