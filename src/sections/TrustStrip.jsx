import { motion } from 'framer-motion';

const curriculums = [
  { label: 'State Board', icon: '🏫', color: 'text-brand-blue bg-blue-50 border-blue-100' },
  { label: 'CBSE', icon: '📘', color: 'text-green-700 bg-green-50 border-green-100' },
  { label: 'ICSE', icon: '📙', color: 'text-orange-700 bg-orange-50 border-orange-100' },
  { label: 'IB', icon: '🌐', color: 'text-purple-700 bg-purple-50 border-purple-100' },
];

const features = [
  { icon: '🎯', label: 'Conceptual Understanding', color: 'text-brand-blue' },
  { icon: '🚀', label: '500+ Simulations', color: 'text-brand-green' },
  { icon: '🌏', label: 'Multilingual', color: 'text-brand-orange' },
  { icon: '🎮', label: 'Gamified Learning', color: 'text-brand-purple' },
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-b border-gray-100" aria-label="Curriculum alignment">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Aligned With</p>
          <div className="flex flex-wrap justify-center gap-3">
            {curriculums.map((c) => (
              <span
                key={c.label}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-bold ${c.color} shadow-sm`}
              >
                <span>{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium">
            One platform. Multiple learning journeys.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className={f.color}>{f.icon}</span>
              {f.label}
              <span className="text-gray-300 last:hidden">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
