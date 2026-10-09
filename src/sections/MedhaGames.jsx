import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const games = [
  {
    id: 'math-quest',
    title: 'Math Quest',
    category: 'Mathematics',
    difficulty: 'All Levels',
    emoji: '🧮',
    description: 'Embark on an epic mathematical adventure solving puzzles and equations to save the kingdom.',
    color: 'from-blue-500 to-indigo-600',
    tag: '🔥 Popular',
    players: '2.4K playing',
  },
  {
    id: 'science-explorer',
    title: 'Science Explorer',
    category: 'Science',
    difficulty: 'Grades 4–8',
    emoji: '🔭',
    description: 'Explore the cosmos, biology and chemistry through exciting simulation-based missions.',
    color: 'from-green-500 to-teal-600',
    tag: '⭐ Top Rated',
    players: '1.8K playing',
  },
  {
    id: 'memory-challenge',
    title: 'Memory Challenge',
    category: 'Brain Training',
    difficulty: 'All Grades',
    emoji: '🧠',
    description: 'Train your memory with science facts, math formulas and language vocabulary in a fun format.',
    color: 'from-purple-500 to-pink-600',
    tag: '💡 Brain Booster',
    players: '1.2K playing',
  },
  {
    id: 'logic-lab',
    title: 'Logic Lab',
    category: 'Critical Thinking',
    difficulty: 'Grades 5–12',
    emoji: '⚙️',
    description: 'Build logical reasoning and problem-solving skills through engineering and coding puzzles.',
    color: 'from-orange-500 to-red-600',
    tag: '🚀 Trending',
    players: '956 playing',
  },
  {
    id: 'word-explorer',
    title: 'Word Explorer',
    category: 'Language',
    difficulty: 'All Grades',
    emoji: '📝',
    description: 'Discover the power of words across multiple languages — English, Hindi, Sanskrit and more.',
    color: 'from-pink-500 to-rose-600',
    tag: '🌏 Multilingual',
    players: '1.5K playing',
  },
  {
    id: 'atom-adventure',
    title: 'Atom Adventure',
    category: 'Chemistry',
    difficulty: 'Grades 7–12',
    emoji: '⚛️',
    description: 'Dive into the world of atoms, elements and molecules through an exciting adventure game.',
    color: 'from-cyan-500 to-blue-600',
    tag: '🔬 Science',
    players: '780 playing',
  },
];

export default function MedhaGames() {
  return (
    <section id="medhagames" className="py-20 bg-gradient-to-b from-indigo-950 to-blue-950 relative overflow-hidden" aria-label="MedhaGames section">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-800 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-800 rounded-full opacity-20 blur-3xl" />
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-white/20">
            <span>🎮</span> Educational Gaming
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MedhaGames<sup className="text-yellow-400 text-2xl">™</sup>
          </h2>
          <p className="text-xl font-semibold text-yellow-400 mb-3">Learning that feels like play.</p>
          <p className="text-blue-200 max-w-xl mx-auto">
            Six thrilling educational games that transform Science, Math and Language into epic adventures students can't stop playing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((game, idx) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="game-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Game header */}
              <div className={`bg-gradient-to-br ${game.color} p-6 relative`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{game.emoji}</span>
                  <span className="text-xs font-bold bg-white/20 text-white px-2 py-1 rounded-full border border-white/30">
                    {game.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
                <div className="flex items-center gap-3 text-white/80 text-xs">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">{game.category}</span>
                  <span>·</span>
                  <span>{game.difficulty}</span>
                </div>
              </div>

              {/* Game body */}
              <div className="p-5">
                <p className="text-blue-200 text-sm leading-relaxed mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {game.players}
                  </span>
                  <button
                    className="flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-200"
                    aria-label={`Play ${game.title}`}
                    id={`play-${game.id}`}
                  >
                    <Play size={14} className="fill-current" />
                    Play
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#demo"
            onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary bg-yellow-400 text-gray-900 hover:bg-yellow-300 border-yellow-400 text-base px-8 py-4"
            id="medhagames-cta"
          >
            Explore All Games
            <span>🎮</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
