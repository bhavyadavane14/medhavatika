import { motion } from 'framer-motion';
import { Building2, Phone, ArrowRight } from 'lucide-react';

export default function SchoolCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue via-blue-700 to-brand-green relative overflow-hidden" aria-label="Partner with us - Schools">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full" />
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-6 border border-white/30">
              <Building2 size={14} />
              For Schools & Institutions
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Empower Your School with MedhāVatika
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-4">
              "Let students not just learn, but explore, create and thrive."
            </p>

            <p className="text-blue-200 mb-8 leading-relaxed">
              Transform your school's Science and Math labs with cutting-edge digital simulations, gamified learning modules and multilingual content — all aligned to your curriculum.
            </p>

            {/* School benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: '🏫', label: 'School-Wide Deployment' },
                { icon: '📊', label: 'Teacher Dashboard' },
                { icon: '📈', label: 'Progress Analytics' },
                { icon: '🎓', label: 'Curriculum Integration' },
                { icon: '🌐', label: 'Multilingual Support' },
                { icon: '📱', label: 'Device Agnostic' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <span>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-white text-brand-blue font-bold px-6 py-3.5 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg"
                id="school-partner-cta"
              >
                <Building2 size={18} />
                Partner With Us
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border-2 border-white/50 text-white font-bold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                id="school-contact-cta"
              >
                <Phone size={18} />
                Contact Our Team
              </a>
            </div>
          </motion.div>

          {/* Right: School illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Classroom SVG illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <svg viewBox="0 0 380 300" className="w-full max-w-sm" aria-label="Modern digital classroom with students learning">
                  {/* Whiteboard / Smart board */}
                  <rect x="40" y="20" width="300" height="140" rx="8" fill="#1E40AF" />
                  <rect x="46" y="26" width="288" height="128" rx="5" fill="#3B82F6" />
                  
                  {/* Board content - digital learning */}
                  <text x="80" y="60" fontSize="14" fill="white" fontWeight="bold">Science Lab — Grade 8</text>
                  {/* Atom on board */}
                  <circle cx="130" cy="100" r="15" fill="none" stroke="#60A5FA" strokeWidth="2" />
                  <circle cx="130" cy="100" r="5" fill="#FCD34D" />
                  <ellipse cx="130" cy="100" rx="28" ry="12" fill="none" stroke="#34D399" strokeWidth="1.5" />
                  <ellipse cx="130" cy="100" rx="28" ry="12" fill="none" stroke="#34D399" strokeWidth="1.5" transform="rotate(60 130 100)" />
                  {/* Graph on board */}
                  <polyline points="200,130 220,100 240,115 260,80 280,95 300,60 320,75" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
                  <line x1="200" y1="135" x2="330" y2="135" stroke="white" strokeWidth="1" opacity="0.5" />
                  <line x1="200" y1="60" x2="200" y2="135" stroke="white" strokeWidth="1" opacity="0.5" />
                  
                  {/* Teacher */}
                  <circle cx="50" cy="180" r="20" fill="#FFD5A8" />
                  <ellipse cx="50" cy="166" rx="14" ry="9" fill="#2C1810" />
                  <circle cx="46" cy="181" r="1.5" fill="#333" />
                  <circle cx="54" cy="181" r="1.5" fill="#333" />
                  <rect x="36" y="198" width="28" height="35" rx="8" fill="#1a56a8" />
                  {/* Pointer */}
                  <line x1="62" y1="195" x2="90" y2="160" stroke="#1a56a8" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Desk row 1 */}
                  <rect x="100" y="200" width="50" height="8" rx="2" fill="#D4A657" />
                  <rect x="170" y="200" width="50" height="8" rx="2" fill="#D4A657" />
                  <rect x="240" y="200" width="50" height="8" rx="2" fill="#D4A657" />
                  <rect x="310" y="200" width="50" height="8" rx="2" fill="#D4A657" />
                  
                  {/* Students at desks */}
                  {[115, 185, 255, 325].map((x, i) => (
                    <g key={x}>
                      <circle cx={x} cy={190} r={12} fill="#FFD5A8" />
                      <ellipse cx={x} cy={182} rx={9} ry={6} fill={['#5C3317', '#2C1810', '#8B4513', '#4a2c0a'][i]} />
                      {/* Tablet on desk */}
                      <rect cx={x + 5} cy={200} x={x + 2} y={200} width={22} height={16} rx={3} fill="#1a56a8" opacity="0.8" />
                    </g>
                  ))}
                  
                  {/* Desk row 2 */}
                  <rect x="100" y="255" width="50" height="8" rx="2" fill="#D4A657" />
                  <rect x="170" y="255" width="50" height="8" rx="2" fill="#D4A657" />
                  <rect x="240" y="255" width="50" height="8" rx="2" fill="#D4A657" />
                  
                  {[115, 185, 255].map((x, i) => (
                    <g key={`row2-${x}`}>
                      <circle cx={x} cy={245} r={12} fill="#FFD5A8" />
                      <ellipse cx={x} cy={237} rx={9} ry={6} fill={['#8B4513', '#5C3317', '#2C1810'][i]} />
                    </g>
                  ))}
                  
                  {/* Stars/achievements */}
                  <text x="330" y="175" fontSize="16">⭐</text>
                  <text x="60" y="280" fontSize="14">📊</text>
                  <text x="340" y="270" fontSize="14">🎯</text>
                </svg>

                {/* Stats overlay */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { value: '200+', label: 'Schools' },
                    { value: '15K+', label: 'Students' },
                    { value: '98%', label: 'Satisfaction' },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-white/10 rounded-xl p-3">
                      <div className="text-xl font-bold text-white">{s.value}</div>
                      <div className="text-xs text-blue-200">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
