import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyMedhavatika from '../sections/WhyMedhavatika';
import Statistics from '../sections/Statistics';
import Testimonials from '../sections/Testimonials';
import SchoolCTA from '../sections/SchoolCTA';
import DemoForm from '../sections/DemoForm';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
              <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-blue font-semibold">About Us</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-4"
            >
              <Heart className="w-4 h-4 text-brand-blue fill-brand-blue" />
              <span>Our Mission & Vision</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            >
              Where Curiosity Meets{' '}
              <span className="bg-gradient-to-r from-brand-blue via-teal-600 to-brand-green bg-clip-text text-transparent">
                Creativity & Intellect
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              MedhāVatika is a garden of intellect designed to nurture young thinkers from Pre-School to Grade 12. We replace rote memorization with joyful inquiry, experiential simulations, and multilingual comprehension.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Medhavatika Section */}
      <WhyMedhavatika />

      {/* Impact Statistics */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* School Setup CTA */}
      <SchoolCTA />

      {/* Book Demo Form */}
      <DemoForm />
    </div>
  );
}
