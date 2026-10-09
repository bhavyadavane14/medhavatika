import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MedhaGames from '../sections/MedhaGames';
import LearningExperience from '../sections/LearningExperience';
import SchoolCTA from '../sections/SchoolCTA';
import DemoForm from '../sections/DemoForm';

export default function MedhaGamesPage() {
  return (
    <div className="pt-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-amber-50/70 via-white to-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
              <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-600 font-semibold">MedhaGames</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-semibold text-xs uppercase tracking-wider mb-4"
            >
              <Gamepad2 className="w-4 h-4 text-amber-600" />
              <span>Cognitive & Gamified Learning</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            >
              Learning That Feels Like{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                Pure Adventure & Play
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Transform screen time into brain-building time. MedhaGames fuses science puzzles, mathematical logic duels, speed drills, and cultural trivia into thrilling gamified quests students love to repeat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-700"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Leaderboards & Achievement Badges</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Cognitive Speed & Reasoning Drills</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Multiplayer Classroom Tournaments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main MedhaGames Section */}
      <MedhaGames />

      {/* Learning Experience Section */}
      <LearningExperience />

      {/* School Setup CTA */}
      <SchoolCTA />

      {/* Book Demo Form */}
      <DemoForm />
    </div>
  );
}
