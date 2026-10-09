import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const planFeatures = [
  'Access to all grade-level learning content',
  'Interactive science & math simulations',
  'Educational games & challenges',
  'Story-driven concept modules',
  'Language Lab access',
  'Grade-based personalised learning path',
  'Progress tracking & reports',
  'Mobile & desktop compatible',
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-label="Pricing and plans">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🌱</span> Affordable Learning
          </div>
          <h2 className="section-heading mb-4">Start Your Learning Journey</h2>
          <p className="section-subheading max-w-xl mx-auto">
            World-class EdTech education, made affordable for every Indian family and school.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-card border border-gray-100 overflow-hidden"
          >
            {/* Top header */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-green p-8 text-center text-white">
              <div className="text-6xl font-bold mb-2">₹599<span className="text-2xl font-medium opacity-80">/year</span></div>
              <div className="text-blue-100 text-lg">Plans starting from</div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mt-4 border border-white/30">
                🎉 Most popular plan for families
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Everything included</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {planFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-primary flex-1 justify-center py-4 text-base"
                  id="pricing-join-cta"
                >
                  Join MedhāVatika
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#demo"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-secondary flex-1 justify-center py-4 text-base"
                  id="pricing-demo-cta"
                >
                  Try Free Demo First
                </a>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                No credit card required · Cancel anytime · 7-day free trial
              </p>
            </div>
          </motion.div>

          {/* School plan mention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 bg-blue-50 rounded-2xl p-5 text-center border border-blue-100"
          >
            <p className="text-gray-700 text-sm">
              🏫 <strong>Are you a school?</strong> We offer special institutional pricing with advanced teacher dashboards and analytics.{' '}
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-brand-blue font-bold hover:underline"
              >
                Contact us for school plans →
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
