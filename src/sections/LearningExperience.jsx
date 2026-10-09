import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎮',
    title: 'Gamified Learning',
    description: 'Turn learning into an engaging experience through challenges, achievements and rewards that motivate students to explore more.',
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    tag: 'Engagement',
  },
  {
    icon: '📖',
    title: 'Story-Driven Concepts',
    description: 'Understand difficult concepts through relatable stories and narratives that connect abstract ideas to the real world.',
    color: 'from-orange-400 to-amber-500',
    bgLight: 'bg-orange-50',
    tag: 'Understanding',
  },
  {
    icon: '🔬',
    title: 'Interactive Simulations',
    description: 'Explore scientific and mathematical concepts through 500+ interactive simulations that make invisible phenomena visible.',
    color: 'from-green-500 to-emerald-600',
    bgLight: 'bg-green-50',
    tag: 'Exploration',
  },
  {
    icon: '🌏',
    title: 'Multilingual Learning',
    description: 'Learn through multiple languages while staying connected to Indian roots — Science in Sanskrit, Math in your mother tongue.',
    color: 'from-purple-500 to-violet-600',
    bgLight: 'bg-purple-50',
    tag: 'Multilingual',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LearningExperience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-label="Learning experience features">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>✨</span> What Makes Us Different
          </div>
          <h2 className="section-heading mb-4">
            Learning Beyond the Textbook
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Four pillars of transformative learning that make MedhāVatika the most engaging educational experience for students across India.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card p-6 group cursor-default"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${f.bgLight} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>

              {/* Tag */}
              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-to-r ${f.color} text-white mb-3 inline-block`}>
                {f.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
