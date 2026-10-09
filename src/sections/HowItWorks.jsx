import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: '🎯',
    title: 'Choose Your Learning Path',
    description: 'Select your grade and subject. MedhāVatika creates a personalised learning journey just for you.',
    color: 'from-brand-blue to-blue-600',
    bgLight: 'bg-blue-50',
  },
  {
    number: '02',
    icon: '🚀',
    title: 'Explore',
    description: 'Learn through captivating stories, interactive simulations and hands-on activities that make concepts crystal clear.',
    color: 'from-brand-green to-green-600',
    bgLight: 'bg-green-50',
  },
  {
    number: '03',
    icon: '🎮',
    title: 'Play & Practice',
    description: 'Solve exciting challenges, play educational games and test your understanding through MedhaGames.',
    color: 'from-orange-400 to-amber-500',
    bgLight: 'bg-orange-50',
  },
  {
    number: '04',
    icon: '🌟',
    title: 'Grow',
    description: 'Build deep conceptual understanding, lasting confidence and an unquenchable curiosity for learning.',
    color: 'from-purple-500 to-violet-600',
    bgLight: 'bg-purple-50',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" aria-label="How MedhāVatika works">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🗺️</span> Your Learning Journey
          </div>
          <h2 className="section-heading mb-4">How It Works</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Four simple steps to transform how students learn Science, Math and Languages forever.
          </p>
        </motion.div>

        {/* Desktop: Horizontal journey */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-green via-orange-400 to-purple-500" aria-hidden="true" />
            
            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg mb-6 z-10 relative border-4 border-white`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>

                  {/* Step number badge */}
                  <div className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}>
                    Step {step.number}
                  </div>

                  {/* Content card */}
                  <div className={`${step.bgLight} rounded-2xl p-5 text-center`}>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex gap-4"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-md flex-shrink-0`}>
                  {step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-0.5 h-full mt-2 bg-gray-200 flex-shrink-0" />
                )}
              </div>

              {/* Content */}
              <div className={`${step.bgLight} rounded-2xl p-4 flex-1 mb-2`}>
                <div className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1`}>
                  Step {step.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
