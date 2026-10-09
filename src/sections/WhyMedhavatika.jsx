import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'Conceptual understanding over rote learning',
  'Dramatically increased student engagement',
  'Interactive, hands-on digital learning',
  'Curriculum aligned with all major boards',
  'Multilingual education in your language',
  'Learning through stories and narratives',
  'Simulation-based science exploration',
  'Truly student-centric learning experience',
];

export default function WhyMedhavatika() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50" aria-label="Why MedhāVatika">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 overflow-hidden">
              {/* SVG illustration */}
              <svg viewBox="0 0 400 380" className="w-full" aria-label="Students thriving with MedhāVatika learning">
                {/* Background elements */}
                <circle cx="200" cy="190" r="160" fill="#EBF5FF" opacity="0.5" />
                
                {/* Central lightbulb / idea */}
                <ellipse cx="200" cy="100" rx="40" ry="50" fill="#FFD700" opacity="0.9" />
                <rect x="188" y="148" width="24" height="12" rx="4" fill="#C0C0C0" />
                {/* Light rays */}
                <line x1="200" y1="40" x2="200" y2="20" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                <line x1="250" y1="65" x2="265" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                <line x1="150" y1="65" x2="135" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                <line x1="265" y1="100" x2="285" y2="100" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                <line x1="135" y1="100" x2="115" y2="100" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                {/* Bulb filament */}
                <path d="M185 115 Q190 120 195 115 Q200 120 205 115 Q210 120 215 115" fill="none" stroke="#FFA500" strokeWidth="2" />
                
                {/* 3 children arranged around */}
                {/* Child 1 - left */}
                <circle cx="100" cy="220" r="22" fill="#FFD5A8" />
                <ellipse cx="100" cy="206" rx="14" ry="10" fill="#5C3317" />
                <circle cx="95" cy="221" r="1.5" fill="#333" />
                <circle cx="105" cy="221" r="1.5" fill="#333" />
                <path d="M95 226 Q100 229 105 226" fill="none" stroke="#333" strokeWidth="1.2" />
                <rect x="85" y="240" width="30" height="35" rx="10" fill="#4CAF50" />
                
                {/* Child 2 - center */}
                <circle cx="200" cy="240" r="22" fill="#FFD5A8" />
                <ellipse cx="200" cy="226" rx="14" ry="10" fill="#2C1810" />
                <circle cx="195" cy="241" r="1.5" fill="#333" />
                <circle cx="205" cy="241" r="1.5" fill="#333" />
                <path d="M195 246 Q200 249 205 246" fill="none" stroke="#333" strokeWidth="1.2" />
                <rect x="185" y="260" width="30" height="35" rx="10" fill="#2196F3" />
                
                {/* Child 3 - right */}
                <circle cx="300" cy="220" r="22" fill="#FFD5A8" />
                <ellipse cx="300" cy="206" rx="14" ry="10" fill="#8B4513" />
                <circle cx="295" cy="221" r="1.5" fill="#333" />
                <circle cx="305" cy="221" r="1.5" fill="#333" />
                <path d="M295 226 Q300 229 305 226" fill="none" stroke="#333" strokeWidth="1.2" />
                <rect x="285" y="240" width="30" height="35" rx="10" fill="#E91E8C" />
                
                {/* Subject icons around */}
                {/* Math */}
                <circle cx="80" cy="170" r="24" fill="#E3F2FD" />
                <text x="68" y="176" fontSize="16" fontWeight="bold" fill="#1a56a8">∑π</text>
                {/* Science */}
                <circle cx="320" cy="170" r="24" fill="#E8F5E9" />
                <text x="308" y="176" fontSize="16">⚗️</text>
                {/* Language */}
                <circle cx="200" cy="350" r="24" fill="#FCE4EC" />
                <text x="190" y="356" fontSize="16">अ🌐</text>
                
                {/* Connection lines */}
                <line x1="104" y1="170" x2="100" y2="198" stroke="#1a56a8" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
                <line x1="296" y1="170" x2="300" y2="198" stroke="#3a8c3f" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
                <line x1="200" y1="326" x2="200" y2="295" stroke="#e91e8c" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
                
                {/* Stars/achievements */}
                <text x="60" y="310" fontSize="18">⭐</text>
                <text x="328" y="310" fontSize="18">🏆</text>
                <text x="55" y="140" fontSize="14">📈</text>
                <text x="328" y="140" fontSize="14">🎯</text>
              </svg>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 bg-white rounded-2xl shadow-card p-3 text-center"
              >
                <div className="text-2xl font-bold text-brand-blue">2×</div>
                <div className="text-xs text-gray-500">Better Scores</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-card p-3 text-center"
              >
                <div className="text-2xl font-bold text-brand-green">90%</div>
                <div className="text-xs text-gray-500">Engagement ↑</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span>🌱</span> A Garden of Intellect
            </div>

            <h2 className="section-heading mb-4">
              Why MedhāVatika?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe every child is a natural scientist, mathematician and storyteller. MedhāVatika provides the fertile ground where these innate talents bloom into deep understanding and lifelong curiosity.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#demo"
              onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-200 group"
              id="why-medhavatika-cta"
            >
              Discover the MedhāVatika Difference
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
