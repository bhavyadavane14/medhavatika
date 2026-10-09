import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'Happy Students',
    sublabel: 'across India',
    icon: '😊',
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
  },
  {
    value: 90,
    suffix: '%+',
    label: 'Increase in Engagement',
    sublabel: 'reported by teachers',
    icon: '📈',
    color: 'text-brand-green',
    bg: 'bg-green-50',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Interactive Simulations',
    sublabel: 'across all grades',
    icon: '🔬',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    value: 2,
    suffix: '×',
    label: 'Faster Comprehension',
    sublabel: 'verified by educators',
    icon: '🚀',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

function useCountUp(target, duration = 2000, isInView) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

function StatCard({ stat, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className={`${stat.bg} w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-soft`}>
        {stat.icon}
      </div>
      <div className={`text-4xl md:text-5xl font-bold counter-value ${stat.color} mb-1`}>
        {count.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="text-gray-900 font-semibold text-lg mb-1">{stat.label}</div>
      <div className="text-gray-400 text-sm">{stat.sublabel}</div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50" aria-label="MedhāVatika impact statistics">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>📊</span> Our Impact
          </div>
          <h2 className="section-heading mb-4">
            Not Just Education —{' '}
            <span className="gradient-text">Transformation</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Numbers that reflect real change in how students learn, understand and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} delay={idx * 0.1} />
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100 text-center max-w-3xl mx-auto"
        >
          <div className="text-4xl mb-4">💬</div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-4 leading-relaxed">
            "Where curiosity meets creativity — a garden of intellect where knowledge, creativity and critical thinking bloom."
          </blockquote>
          <div className="text-brand-blue font-semibold">— The MedhāVatika Promise</div>
        </motion.div>
      </div>
    </section>
  );
}
