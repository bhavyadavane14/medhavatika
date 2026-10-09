import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'MedhaLab', href: '#medhalab' },
  { label: 'Language Lab', href: '#language-lab' },
  { label: 'MedhaGames', href: '#medhagames' },
  { label: 'BrainSetu', href: '#brainsetu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-soft py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="MedhāVatika - Home"
            >
              <img
                src="/logo.png"
                alt="MedhāVatika Logo"
                className="h-12 md:h-16 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#login"
                className="text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Login
              </a>
              <a
                href="#demo"
                onClick={(e) => { e.preventDefault(); handleNavClick('#demo'); }}
                className="btn-primary text-sm"
              >
                Book a Free Demo
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-white z-50 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b">
                  <img src="/logo.png" alt="MedhāVatika" className="h-11 w-auto" />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-xl text-gray-700 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-5 space-y-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="flex items-center px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-blue-50 hover:text-brand-blue transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="p-5 space-y-3 border-t bg-gray-50">
                  <a href="#login" className="block w-full text-center py-3 px-4 rounded-full border-2 border-brand-blue text-brand-blue font-semibold hover:bg-blue-50 transition-colors">
                    Login
                  </a>
                  <a
                    href="#demo"
                    onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="block w-full text-center py-3 px-4 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition-colors"
                  >
                    Book a Free Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
