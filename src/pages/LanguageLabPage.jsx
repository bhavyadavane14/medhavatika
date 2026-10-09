import { motion } from 'framer-motion';
import { Languages, Volume2, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageLab from '../sections/LanguageLab';
import LearningExperience from '../sections/LearningExperience';
import SchoolCTA from '../sections/SchoolCTA';
import DemoForm from '../sections/DemoForm';

export default function LanguageLabPage() {
  return (
    <div className="pt-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-purple-50/70 via-white to-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
              <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
              <span>/</span>
              <span className="text-purple-600 font-semibold">Language Lab</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-xs uppercase tracking-wider mb-4"
            >
              <Languages className="w-4 h-4 text-purple-700" />
              <span>Multilingual Communication Lab</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            >
              Master Communication in{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                English & Regional Languages
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Building confident speakers, expressive writers, and avid readers. Combining interactive audio phonetics, cultural folklore storytelling, and structured grammar modules rooted in Bharat's linguistic heritage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-700"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Audio Pronunciation & Phonetics</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Multilingual & Mother-Tongue Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Story-Driven Comprehension</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Language Lab Section */}
      <LanguageLab />

      {/* Multimodal learning pillars */}
      <LearningExperience />

      {/* School Setup CTA */}
      <SchoolCTA />

      {/* Book Demo Form */}
      <DemoForm />
    </div>
  );
}
