import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Trophy,
  Target,
  BookOpen,
  TrendingUp,
  GraduationCap,
  Smile,
  ArrowRight,
  Star
} from 'lucide-react';

const coreValues = [
  {
    title: 'Better Retention',
    description: 'Help students remember concepts for longer, not just until the exam.',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-100',
    iconColor: 'text-blue-600',
    tag: 'Long-term Memory'
  },
  {
    title: 'Smart Learning',
    description: 'Replace rote learning with practical memory techniques and learning strategies.',
    icon: Sparkles,
    gradient: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-100',
    iconColor: 'text-amber-600',
    tag: 'Practical Strategies'
  },
  {
    title: 'Confidence',
    description: 'Build confidence so students can recall what they have learned during exams and presentations.',
    icon: Trophy,
    gradient: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-100',
    iconColor: 'text-emerald-600',
    tag: 'Exam Readiness'
  },
  {
    title: 'Focus & Concentration',
    description: 'Develop the ability to stay attentive and reduce distractions while studying.',
    icon: Target,
    gradient: 'from-purple-500 to-indigo-500',
    bgLight: 'bg-purple-50',
    borderLight: 'border-purple-100',
    iconColor: 'text-purple-600',
    tag: 'Deep Focus'
  },
  {
    title: 'Understanding Before Memorising',
    description: 'Encourage students to understand concepts and then use techniques to retain them.',
    icon: BookOpen,
    gradient: 'from-indigo-500 to-blue-600',
    bgLight: 'bg-indigo-50',
    borderLight: 'border-indigo-100',
    iconColor: 'text-indigo-600',
    tag: 'Conceptual Clarity'
  },
  {
    title: 'Consistency & Continuous Improvement',
    description: 'Make memory and learning skills stronger through regular practice.',
    icon: TrendingUp,
    gradient: 'from-rose-500 to-pink-500',
    bgLight: 'bg-rose-50',
    borderLight: 'border-rose-100',
    iconColor: 'text-rose-600',
    tag: 'Daily Habit'
  },
  {
    title: 'Independent Learning',
    description: 'Teach students techniques they can use on their own across different subjects.',
    icon: GraduationCap,
    gradient: 'from-sky-500 to-teal-600',
    bgLight: 'bg-sky-50',
    borderLight: 'border-sky-100',
    iconColor: 'text-sky-600',
    tag: 'Self-Reliance'
  },
  {
    title: 'Joy of Learning',
    description: 'Make studying engaging, interesting and less stressful.',
    icon: Smile,
    gradient: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-100',
    iconColor: 'text-orange-600',
    tag: 'Stress-free'
  },
];

export default function BrainSetuProgram() {
  const handleScrollToDemo = () => {
    const el = document.querySelector('#demo') || document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="brainsetu" className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/60 text-brand-blue text-sm font-semibold mb-4 shadow-sm"
          >
            <Brain className="w-4 h-4 text-brand-blue" />
            <span>BrainSetu Memory Science Program</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4"
          >
            BrainSetu Memory Science Program –{' '}
            <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-green bg-clip-text text-transparent">
              Core Values
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Empowering students with scientifically backed memory techniques, metacognitive habits, and smart learning methods to excel without academic burnout.
          </motion.p>
        </div>

        {/* 🌟 Highlight Banner: One-line Value Proposition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative max-w-4xl mx-auto mb-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-brand-blue/90 via-blue-700 to-indigo-900 text-white shadow-xl shadow-blue-900/15 overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
              <Star className="w-8 h-8 text-amber-300 fill-amber-300" />
            </div>
            <div className="flex-1">
              <div className="inline-block text-xs uppercase tracking-wider font-bold text-amber-300 mb-1">
                🌟 One-line value proposition
              </div>
              <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed text-white">
                “BrainSetu transforms the way students learn—from memorising under pressure to understanding, remembering and recalling with confidence.”
              </blockquote>
            </div>
            <button
              onClick={handleScrollToDemo}
              className="flex-shrink-0 px-6 py-3.5 rounded-full bg-white text-brand-blue font-bold text-sm shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>Experience It</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Core Values Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${value.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <div
                      className={`w-12 h-12 rounded-xl ${value.bgLight} border ${value.borderLight} flex items-center justify-center ${value.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      {value.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 group-hover:text-brand-blue transition-colors">
                  <span className="font-medium">Core Value 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
