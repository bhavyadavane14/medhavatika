import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'MedhaLab', path: '/medhalab' },
  { label: 'Language Lab', path: '/language-lab' },
  { label: 'MedhaGames', path: '/medhagames' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-soft py-2 bg-white/90 backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-sm py-4 shadow-xs'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="MedhāVatika - Home"
            >
              <img
                src="/logo.png"
                alt="MedhāVatika Logo"
                className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active
                        ? 'text-brand-blue bg-blue-50 font-bold shadow-xs'
                        : 'text-gray-700 hover:text-brand-blue hover:bg-blue-50/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="btn-primary text-sm shadow-sm hover:shadow-md"
              >
                Book a Free Demo
              </Link>
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
                  <Link to="/" onClick={() => setMobileOpen(false)}>
                    <img src="/logo.png" alt="MedhāVatika" className="h-11 w-auto" />
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-xl text-gray-700 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-5 space-y-1.5" aria-label="Mobile navigation">
                  {navLinks.map((link) => {
                    const active = isActive(link.path);
                    return (
                      <Link
                        key={link.label}
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                          active
                            ? 'bg-blue-50 text-brand-blue font-bold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="p-5 space-y-3 border-t bg-gray-50">
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center py-3 px-4 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition-colors shadow-sm"
                  >
                    Book a Free Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
