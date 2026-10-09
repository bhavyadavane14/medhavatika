import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import MedhaLabPage from './pages/MedhaLabPage';
import LanguageLabPage from './pages/LanguageLabPage';
import MedhaGamesPage from './pages/MedhaGamesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 bg-brand-blue text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-blue-dark hover:-translate-y-1 transition-all duration-200 z-40 cursor-pointer"
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
    <div className="min-h-screen overflow-x-hidden flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medhalab" element={<MedhaLabPage />} />
          <Route path="/language-lab" element={<LanguageLabPage />} />
          <Route path="/medhagames" element={<MedhaGamesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
