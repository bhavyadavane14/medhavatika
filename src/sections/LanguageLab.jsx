import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const languages = [
  {
    id: 'sanskrit',
    flag: '🕉️',
    name: 'Sanskrit',
    subtitle: 'The Language of Knowledge',
    description: 'Rediscover the ancient language of India. Learn Sanskrit through stories, grammar games and cultural connections that bring this timeless language to life.',
    features: ['Classical Grammar', 'Shloka Learning', 'Cultural Stories', 'Vocabulary Building'],
    color: 'from-orange-400 to-red-500',
    bgLight: 'bg-gradient-to-br from-orange-50 to-red-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    character: 'अ आ इ',
    script: 'Devanagari',
  },
  {
    id: 'german',
    flag: '🇩🇪',
    name: 'German',
    subtitle: 'The Language of Engineering',
    description: 'Learn German with confidence through interactive dialogues, cultural stories and fun exercises. Open doors to global education and career opportunities.',
    features: ['Conversational German', 'Grammar Basics', 'Culture & Society', 'Professional Skills'],
    color: 'from-yellow-400 to-red-600',
    bgLight: 'bg-gradient-to-br from-yellow-50 to-gray-50',
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-200',
    character: 'A B C',
    script: 'Latin',
  },
  {
    id: 'japanese',
    flag: '🇯🇵',
    name: 'Japanese',
    subtitle: 'The Language of Innovation',
    description: 'Explore the beautiful Japanese language through manga-inspired learning, anime culture and practical everyday conversations.',
    features: ['Hiragana & Katakana', 'Basic Kanji', 'Daily Conversations', 'Anime Culture'],
    color: 'from-pink-400 to-red-500',
    bgLight: 'bg-gradient-to-br from-pink-50 to-red-50',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-200',
    character: 'あ い う',
    script: 'Hiragana',
  },
];

export default function LanguageLab() {
  return (
    <section id="language-lab" className="py-20 bg-gradient-to-b from-purple-50 via-white to-white" aria-label="Language Lab">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🌐</span> Language Learning
          </div>
          <h2 className="section-heading mb-4">
            Language Lab<sup className="text-purple-600 text-2xl">™</sup>
          </h2>
          <p className="text-xl font-semibold text-purple-700 mb-3">Learn Languages. Discover Cultures.</p>
          <p className="section-subheading max-w-2xl mx-auto">
            Master new languages through immersive stories, cultural exploration and interactive exercises that make language learning a joyful journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`language-card card overflow-hidden group`}
            >
              {/* Top gradient band */}
              <div className={`bg-gradient-to-r ${lang.color} h-2`} />

              {/* Card body */}
              <div className={`${lang.bgLight} p-6 border-b ${lang.borderColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{lang.flag}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800 font-mono">{lang.character}</div>
                    <div className="text-xs text-gray-500">{lang.script} script</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{lang.name}</h3>
                <p className={`text-sm font-semibold ${lang.textColor} mb-3`}>{lang.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{lang.description}</p>
              </div>

              {/* Features */}
              <div className="p-6 bg-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">What you'll learn</p>
                <div className="space-y-2 mb-6">
                  {lang.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={`#${lang.id}`}
                  className={`inline-flex items-center gap-2 text-sm font-bold ${lang.textColor} hover:gap-3 transition-all duration-200`}
                  id={`explore-${lang.id}`}
                >
                  Explore {lang.name} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href="#demo" onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary bg-purple-600 hover:bg-purple-700 border-purple-600"
            id="language-lab-cta"
          >
            Start Your Language Journey
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
