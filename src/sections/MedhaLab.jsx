import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const grades = [
  {
    id: 'preschool',
    label: 'Pre School',
    emoji: '🌱',
    color: 'from-green-400 to-emerald-500',
    bgLight: 'bg-green-50',
    description: 'Begin the learning journey through play, stories and exploration. Develop foundational curiosity through interactive activities.',
    subjects: ['Science Discovery', 'Number Play', 'Language Basics', 'Art & Creativity'],
    highlight: 'Play-based Learning',
    icon: '🎨',
  },
  {
    id: 'grade1',
    label: 'Grade 1',
    emoji: '🌿',
    color: 'from-teal-400 to-cyan-500',
    bgLight: 'bg-teal-50',
    description: 'Explore the world of Science and Mathematics through stories, animations and fun activities that make concepts come alive.',
    subjects: ['Basic Science', 'Numbers & Shapes', 'Environmental Studies', 'Language Skills'],
    highlight: 'Story-Based Learning',
    icon: '📖',
  },
  {
    id: 'grade2',
    label: 'Grade 2',
    emoji: '🌻',
    color: 'from-yellow-400 to-orange-500',
    bgLight: 'bg-yellow-50',
    description: 'Build strong foundations in Science and Math through interactive simulations and engaging visual learning.',
    subjects: ['Living & Non-Living Things', 'Addition & Subtraction', 'Measurement', 'Sentence Building'],
    highlight: 'Visual Exploration',
    icon: '🔭',
  },
  {
    id: 'grade3',
    label: 'Grade 3',
    emoji: '🌸',
    color: 'from-pink-400 to-rose-500',
    bgLight: 'bg-pink-50',
    description: 'Dive deeper into scientific concepts and mathematical thinking with hands-on digital experiments.',
    subjects: ['Plants & Animals', 'Multiplication & Division', 'Forces & Motion', 'Creative Writing'],
    highlight: 'Digital Experiments',
    icon: '🧪',
  },
  {
    id: 'grade4',
    label: 'Grade 4',
    emoji: '🦋',
    color: 'from-purple-400 to-violet-500',
    bgLight: 'bg-purple-50',
    description: 'Explore complex ideas through simulations, games and story-driven learning that connects concepts to real life.',
    subjects: ['Human Body', 'Fractions & Geometry', 'Weather & Climate', 'Reading Comprehension'],
    highlight: 'Concept Connections',
    icon: '🧠',
  },
  {
    id: 'grade5',
    label: 'Grade 5',
    emoji: '⚡',
    color: 'from-blue-400 to-indigo-500',
    bgLight: 'bg-blue-50',
    description: 'Explore Science and Mathematics through stories, simulations and interactive activities that ignite curiosity.',
    subjects: ['Solar System', 'Decimals & Percentages', 'Matter & Energy', 'Language & Grammar'],
    highlight: 'Simulation Learning',
    icon: '🚀',
  },
  {
    id: 'grade6',
    label: 'Grade 6',
    emoji: '🔬',
    color: 'from-emerald-400 to-green-600',
    bgLight: 'bg-emerald-50',
    description: 'Transition to deeper scientific thinking with lab simulations, algebraic concepts and analytical reasoning.',
    subjects: ['Biology Basics', 'Algebra Introduction', 'Physics Concepts', 'Environmental Science'],
    highlight: 'Lab Simulations',
    icon: '⚗️',
  },
  {
    id: 'grade7',
    label: 'Grade 7',
    emoji: '🧬',
    color: 'from-cyan-400 to-blue-500',
    bgLight: 'bg-cyan-50',
    description: 'Explore the foundations of Physics, Chemistry and Biology through visual experiments and story narratives.',
    subjects: ['Cell Biology', 'Rational Numbers', 'Heat & Temperature', 'Acid & Bases'],
    highlight: 'Visual Science',
    icon: '🔭',
  },
  {
    id: 'grade8',
    label: 'Grade 8',
    emoji: '⚛️',
    color: 'from-orange-400 to-red-500',
    bgLight: 'bg-orange-50',
    description: 'Master critical science and math concepts with interactive problem-solving and conceptual simulations.',
    subjects: ['Force & Pressure', 'Linear Equations', 'Microorganisms', 'Chemical Reactions'],
    highlight: 'Problem Solving',
    icon: '🧩',
  },
  {
    id: 'grade9',
    label: 'Grade 9',
    emoji: '🌌',
    color: 'from-indigo-400 to-purple-600',
    bgLight: 'bg-indigo-50',
    description: 'Prepare for board exams with deep conceptual understanding through engaging simulations and practice.',
    subjects: ['Motion & Laws', 'Coordinate Geometry', 'Atoms & Molecules', 'Heredity'],
    highlight: 'Board Prep Focus',
    icon: '📊',
  },
  {
    id: 'grade10',
    label: 'Grade 10',
    emoji: '🏆',
    color: 'from-brand-blue to-blue-700',
    bgLight: 'bg-blue-50',
    description: 'Excel in board examinations with comprehensive simulations, conceptual clarity and exam-focused practice.',
    subjects: ['Light & Optics', 'Trigonometry', 'Chemical Bonding', 'Life Processes'],
    highlight: 'Exam Excellence',
    icon: '🎯',
  },
  {
    id: 'grade11',
    label: 'Grade 11',
    emoji: '🌟',
    color: 'from-rose-400 to-pink-600',
    bgLight: 'bg-rose-50',
    description: 'Build strong foundations for JEE, NEET and other competitive exams through visual learning and simulations.',
    subjects: ['Mechanics', 'Calculus', 'Organic Chemistry', 'Cell Division'],
    highlight: 'Competitive Prep',
    icon: '⭐',
  },
  {
    id: 'grade12',
    label: 'Grade 12',
    emoji: '🎓',
    color: 'from-brand-green to-green-700',
    bgLight: 'bg-green-50',
    description: 'Achieve mastery with advanced concept simulations, revision tools and comprehensive learning modules.',
    subjects: ['Electromagnetism', 'Integral Calculus', 'Electrochemistry', 'Genetics'],
    highlight: 'Advanced Mastery',
    icon: '🏅',
  },
];

export default function MedhaLab() {
  const [activeGrade, setActiveGrade] = useState(grades[4]); // Grade 5 default
  const [activeIdx, setActiveIdx] = useState(4);

  const handleSelect = (grade, idx) => {
    setActiveGrade(grade);
    setActiveIdx(idx);
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + grades.length) % grades.length;
    setActiveGrade(grades[prev]);
    setActiveIdx(prev);
  };

  const handleNext = () => {
    const next = (activeIdx + 1) % grades.length;
    setActiveGrade(grades[next]);
    setActiveIdx(next);
  };

  return (
    <section id="medhalab" className="py-20 bg-white" aria-label="MedhaLab section">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🔬</span> Digital Science & Math Lab
          </div>
          <h2 className="section-heading mb-4">
            MedhaLab<sup className="text-brand-blue text-2xl">™</sup>
          </h2>
          <p className="text-xl font-semibold text-brand-green mb-3">Digital Science & Math Lab for Future Innovators</p>
          <p className="section-subheading max-w-2xl mx-auto">
            Transform the way students understand concepts through simulations, stories, activities and interactive learning — from Pre-School to Grade 12.
          </p>
        </motion.div>

        {/* Grade Selector — horizontal scroll chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="flex-shrink-0 p-2 rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white text-gray-600 transition-colors"
              aria-label="Previous grade"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 overflow-x-auto pb-2 flex-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {grades.map((grade, idx) => (
                <button
                  key={grade.id}
                  onClick={() => handleSelect(grade, idx)}
                  className={`grade-chip flex-shrink-0 ${idx === activeIdx ? 'grade-chip-active' : 'grade-chip-inactive'}`}
                  aria-pressed={idx === activeIdx}
                  aria-label={`Select ${grade.label}`}
                >
                  <span className="mr-1">{grade.emoji}</span>
                  {grade.label}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="flex-shrink-0 p-2 rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white text-gray-600 transition-colors"
              aria-label="Next grade"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Grade Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGrade.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl overflow-hidden border border-gray-100 shadow-card`}
          >
            <div className={`grid md:grid-cols-2 gap-0`}>
              {/* Left: Info */}
              <div className="p-8 md:p-10 bg-white">
                <div className={`inline-flex items-center gap-2 text-sm font-bold px-3 py-1.5 rounded-full mb-4 bg-gradient-to-r ${activeGrade.color} text-white`}>
                  <span>{activeGrade.icon}</span>
                  {activeGrade.highlight}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-4xl">{activeGrade.emoji}</span>
                  {activeGrade.label}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {activeGrade.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Topics Covered</p>
                  <div className="grid grid-cols-2 gap-2">
                    {activeGrade.subjects.map((subject) => (
                      <div key={subject} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`#${activeGrade.id}`}
                  className="btn-primary"
                  id={`explore-${activeGrade.id}`}
                >
                  Explore {activeGrade.label} →
                </a>
              </div>

              {/* Right: Visual */}
              <div className={`${activeGrade.bgLight} p-8 md:p-10 flex flex-col items-center justify-center min-h-64`}>
                <div className="text-center">
                  <div className={`text-8xl md:text-9xl mb-6 pulse-bounce`}>{activeGrade.emoji}</div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{activeGrade.label}</div>

                  {/* Subject icons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="bg-white rounded-2xl p-3 shadow-soft text-center">
                      <div className="text-2xl mb-1">⚗️</div>
                      <div className="text-xs font-semibold text-gray-600">Science</div>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-soft text-center">
                      <div className="text-2xl mb-1">📐</div>
                      <div className="text-xs font-semibold text-gray-600">Math</div>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-soft text-center">
                      <div className="text-2xl mb-1">🎯</div>
                      <div className="text-xs font-semibold text-gray-600">Activities</div>
                    </div>
                    <div className="bg-white rounded-2xl p-3 shadow-soft text-center">
                      <div className="text-2xl mb-1">🎮</div>
                      <div className="text-xs font-semibold text-gray-600">Games</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 mb-4">Explore all grades and discover personalized learning paths</p>
          <a href="#demo" onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary"
            id="medhalab-cta"
          >
            Explore All Grade Content
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
