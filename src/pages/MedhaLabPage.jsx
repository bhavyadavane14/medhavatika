import { motion } from 'framer-motion';
import { Microscope, Atom, Calculator, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MedhaLab from '../sections/MedhaLab';
import LearningExperience from '../sections/LearningExperience';
import HowItWorks from '../sections/HowItWorks';
import SchoolCTA from '../sections/SchoolCTA';
import DemoForm from '../sections/DemoForm';

export default function MedhaLabPage() {
  return (
    <div className="pt-24">
      {/* MedhaLab Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
              <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-blue font-semibold">MedhaLab</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-4"
            >
              <Atom className="w-4 h-4 text-brand-blue" />
              <span>Digital Science & Math Lab</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            >
              Experience Science & Math Through{' '}
              <span className="bg-gradient-to-r from-brand-blue to-teal-600 bg-clip-text text-transparent">
                Interactive Digital Labs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Transform theoretical formulas into hands-on virtual experiments. MedhaLab brings curriculum-aligned Physics, Chemistry, Biology, and Mathematics simulations directly to school classrooms and home computers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-700"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>500+ Virtual Experiments</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>CBSE, ICSE & State Board Aligned</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Grades Pre-K to 12</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main MedhaLab Interactive Explorer */}
      <MedhaLab />

      {/* Interactive Experience Pillars */}
      <LearningExperience />

      {/* Implementation Process */}
      <HowItWorks />

      {/* School Setup CTA */}
      <SchoolCTA />

      {/* Book Demo Form */}
      <DemoForm />
    </div>
  );
}
