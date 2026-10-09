import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, BookOpen, Atom, Calculator, Globe } from 'lucide-react';

const floatingElements = [
  { icon: '⚛️', size: 'text-3xl', position: 'top-12 left-10', delay: 0, className: 'float-element' },
  { icon: '📐', size: 'text-2xl', position: 'top-20 right-16', delay: 1, className: 'float-element-delayed' },
  { icon: '🔬', size: 'text-3xl', position: 'bottom-28 left-8', delay: 2, className: 'float-element-slow' },
  { icon: '🌍', size: 'text-2xl', position: 'top-40 left-1/4', delay: 0.5, className: 'float-element' },
  { icon: '💡', size: 'text-3xl', position: 'bottom-20 right-12', delay: 1.5, className: 'float-element-delayed' },
  { icon: '📚', size: 'text-2xl', position: 'top-8 right-1/3', delay: 2.5, className: 'float-element-slow' },
  { icon: '🔭', size: 'text-2xl', position: 'bottom-40 left-1/3', delay: 0.8, className: 'float-element' },
  { icon: '✏️', size: 'text-xl', position: 'top-32 right-8', delay: 1.2, className: 'float-element-delayed' },
];

const badges = [
  { label: 'State Board', color: 'bg-blue-100 text-brand-blue' },
  { label: 'CBSE', color: 'bg-green-100 text-brand-green' },
  { label: 'ICSE', color: 'bg-orange-100 text-orange-700' },
  { label: 'IB', color: 'bg-purple-100 text-purple-700' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-20"
      aria-label="Hero section"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-50 rounded-full opacity-30 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #1a56a8 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating educational elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {floatingElements.map((el, i) => (
          <span
            key={i}
            className={`absolute ${el.size} ${el.position} ${el.className} opacity-60 select-none`}
            style={{ animationDelay: `${el.delay}s` }}
          >
            {el.icon}
          </span>
        ))}
      </div>

      <div className="section-container relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-brand-blue/20 rounded-full px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              Aligned with State Board • CBSE • ICSE • IB
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-4"
            >
              A Transformative{' '}
              <span className="gradient-text">Digital Learning</span>{' '}
              Ecosystem
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-brand-blue mb-3"
            >
              Gamified. Story-Driven. Multilingual. Rooted in Bharat.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              Where curiosity meets creativity through interactive Science, Math and Language learning — for students from Pre-School to Grade 12.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="#medhalab"
                onClick={(e) => { e.preventDefault(); document.querySelector('#medhalab')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary text-base px-8 py-4"
                id="hero-start-learning"
              >
                Start Learning
                <ArrowRight size={18} />
              </a>
              <a
                href="#demo"
                onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary text-base px-8 py-4"
                id="hero-book-demo"
              >
                <Play size={16} className="fill-brand-blue" />
                Book a Free Demo
              </a>
            </motion.div>

            {/* Pricing hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span>Plans starting from <strong className="text-gray-800">₹599/year</strong> · No credit card required</span>
            </motion.div>
          </div>

          {/* Right: Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-full">
              {/* Main illustration card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-6 md:p-8">
                  {/* Illustration */}
                  <div className="text-center py-4">
                    {/* SVG Illustration of learning */}
                    <svg viewBox="0 0 400 320" className="w-full max-w-sm mx-auto" aria-label="Children learning with digital tools">
                      {/* Background circle */}
                      <circle cx="200" cy="160" r="140" fill="#EBF5FF" opacity="0.6" />
                      
                      {/* Central screen/tablet */}
                      <rect x="130" y="80" width="140" height="100" rx="12" fill="#1a56a8" />
                      <rect x="136" y="86" width="128" height="88" rx="8" fill="#EBF5FF" />
                      
                      {/* Screen content - atom */}
                      <circle cx="200" cy="115" r="12" fill="none" stroke="#1a56a8" strokeWidth="2" />
                      <circle cx="200" cy="115" r="4" fill="#f5a623" />
                      <ellipse cx="200" cy="115" rx="22" ry="10" fill="none" stroke="#3a8c3f" strokeWidth="1.5" />
                      <ellipse cx="200" cy="115" rx="22" ry="10" fill="none" stroke="#3a8c3f" strokeWidth="1.5" transform="rotate(60 200 115)" />
                      <ellipse cx="200" cy="115" rx="22" ry="10" fill="none" stroke="#3a8c3f" strokeWidth="1.5" transform="rotate(-60 200 115)" />
                      
                      {/* Math symbols on screen */}
                      <text x="148" y="158" fontSize="11" fontFamily="monospace" fill="#1a56a8" fontWeight="bold">∑</text>
                      <text x="163" y="158" fontSize="11" fontFamily="monospace" fill="#3a8c3f" fontWeight="bold">π</text>
                      <text x="178" y="158" fontSize="11" fontFamily="monospace" fill="#f5a623" fontWeight="bold">∫</text>
                      <text x="193" y="158" fontSize="11" fontFamily="monospace" fill="#6e3ab7" fontWeight="bold">√</text>
                      <text x="208" y="158" fontSize="11" fontFamily="monospace" fill="#e53935" fontWeight="bold">∞</text>
                      <text x="223" y="158" fontSize="11" fontFamily="monospace" fill="#1a56a8" fontWeight="bold">Δ</text>
                      <text x="238" y="158" fontSize="11" fontFamily="monospace" fill="#3a8c3f" fontWeight="bold">λ</text>
                      
                      {/* Tablet stand */}
                      <rect x="190" y="178" width="20" height="8" rx="2" fill="#1a56a8" />
                      <rect x="178" y="184" width="44" height="4" rx="2" fill="#0d3b7a" />
                      
                      {/* Left child */}
                      <circle cx="110" cy="140" r="20" fill="#FFD5A8" />
                      <circle cx="110" cy="128" r="12" fill="#F4A460" />
                      {/* Hair */}
                      <ellipse cx="110" cy="120" rx="12" ry="8" fill="#5C3317" />
                      {/* Face features */}
                      <circle cx="106" cy="129" r="1.5" fill="#333" />
                      <circle cx="114" cy="129" r="1.5" fill="#333" />
                      <path d="M106 134 Q110 137 114 134" fill="none" stroke="#333" strokeWidth="1.2" />
                      {/* Body */}
                      <rect x="96" y="158" width="28" height="36" rx="8" fill="#3b82f6" />
                      {/* Arms */}
                      <rect x="76" y="160" width="22" height="8" rx="4" fill="#FFD5A8" />
                      <rect x="122" y="160" width="22" height="8" rx="4" fill="#FFD5A8" />
                      {/* Book in left hand */}
                      <rect x="60" y="156" width="20" height="16" rx="2" fill="#f5a623" />
                      <line x1="70" y1="156" x2="70" y2="172" stroke="#d97706" strokeWidth="1" />
                      
                      {/* Right child */}
                      <circle cx="290" cy="140" r="20" fill="#FFD5A8" />
                      <circle cx="290" cy="128" r="12" fill="#8B4513" />
                      {/* Hair with ponytail */}
                      <ellipse cx="290" cy="120" rx="12" ry="8" fill="#4a2c0a" />
                      <circle cx="300" cy="117" r="4" fill="#4a2c0a" />
                      {/* Face features */}
                      <circle cx="286" cy="129" r="1.5" fill="#333" />
                      <circle cx="294" cy="129" r="1.5" fill="#333" />
                      <path d="M286 134 Q290 137 294 134" fill="none" stroke="#333" strokeWidth="1.2" />
                      {/* Body */}
                      <rect x="276" y="158" width="28" height="36" rx="8" fill="#e91e8c" />
                      {/* Arms */}
                      <rect x="256" y="160" width="22" height="8" rx="4" fill="#FFD5A8" />
                      <rect x="302" y="160" width="22" height="8" rx="4" fill="#FFD5A8" />
                      {/* Magnifying glass */}
                      <circle cx="318" cy="154" r="10" fill="none" stroke="#1a56a8" strokeWidth="3" />
                      <line x1="325" y1="161" x2="332" y2="168" stroke="#1a56a8" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Teacher/Guide at top */}
                      <circle cx="200" cy="48" r="18" fill="#FFD5A8" />
                      <ellipse cx="200" cy="36" rx="14" ry="9" fill="#2C1810" />
                      <circle cx="195" cy="49" r="1.5" fill="#333" />
                      <circle cx="205" cy="49" r="1.5" fill="#333" />
                      <path d="M195 54 Q200 57 205 54" fill="none" stroke="#333" strokeWidth="1.2" />
                      <rect x="186" y="64" width="28" height="30" rx="8" fill="#3a8c3f" />
                      
                      {/* Stars/sparkles */}
                      <text x="148" y="68" fontSize="14">⭐</text>
                      <text x="230" y="72" fontSize="12">✨</text>
                      <text x="160" y="240" fontSize="12">💫</text>
                      <text x="228" y="246" fontSize="14">🌟</text>
                      
                      {/* Floating elements */}
                      <text x="60" y="100" fontSize="16">📊</text>
                      <text x="320" y="220" fontSize="16">🧪</text>
                      <text x="68" y="220" fontSize="16">अ</text>
                      <text x="310" y="90" fontSize="14">🔢</text>
                    </svg>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white">
                  <div className="py-4 px-4 text-center">
                    <div className="font-bold text-lg text-brand-blue">10K+</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="py-4 px-4 text-center">
                    <div className="font-bold text-lg text-brand-green">500+</div>
                    <div className="text-xs text-gray-500">Simulations</div>
                  </div>
                  <div className="py-4 px-4 text-center">
                    <div className="font-bold text-lg text-warm-400">Pre-12</div>
                    <div className="text-xs text-gray-500">All Grades</div>
                  </div>
                </div>
              </div>

              {/* Floating feature badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-16 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2 border border-gray-100"
              >
                <span className="text-2xl">🎮</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Gamified</div>
                  <div className="text-xs text-gray-500">Learning</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 top-24 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2 border border-gray-100"
              >
                <span className="text-2xl">🌏</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Multilingual</div>
                  <div className="text-xs text-gray-500">Platform</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-4 bottom-24 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2 border border-gray-100"
              >
                <span className="text-2xl">📖</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Story-Driven</div>
                  <div className="text-xs text-gray-500">Concepts</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
