import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent',
    childGrade: 'Grade 6',
    avatar: '👩',
    rating: 5,
    text: 'MedhāVatika has completely changed the way my daughter learns. Instead of memorising, she now understands concepts deeply and enjoys studying every day. Her Science marks improved from 72% to 94%!',
    location: 'Pune, Maharashtra',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'Student',
    childGrade: 'Grade 9',
    avatar: '👦',
    rating: 5,
    text: 'The simulations are absolutely amazing! I used to hate Physics but now I actually look forward to it. The way topics like Motion and Electricity are shown through interactive experiments — I finally GET it.',
    location: 'Mumbai, Maharashtra',
  },
  {
    id: 3,
    name: 'Ms. Kavitha Nair',
    role: 'Science Teacher',
    childGrade: 'Grade 7-10',
    avatar: '👩‍🏫',
    rating: 5,
    text: 'As an educator with 15 years of experience, I\'ve never seen a platform that engages students this deeply. The simulations complement classroom teaching perfectly. My students\' conceptual clarity has improved remarkably.',
    location: 'Bengaluru, Karnataka',
  },
  {
    id: 4,
    name: 'Rohan Gupta',
    role: 'Parent',
    childGrade: 'Grade 4',
    avatar: '👨',
    rating: 5,
    text: 'My son used to dread Math. After just two months of MedhāVatika, he actually asked me to buy him extra practice time! The gamified approach makes difficult concepts feel like adventures.',
    location: 'Delhi, NCR',
  },
  {
    id: 5,
    name: 'Ananya Krishnan',
    role: 'Student',
    childGrade: 'Grade 11',
    avatar: '👧',
    rating: 5,
    text: 'Preparing for NEET is stressful but MedhāVatika makes Biology and Chemistry so much clearer. The 3D simulations of cell processes and chemical reactions are incredible — like having a virtual lab at home!',
    location: 'Chennai, Tamil Nadu',
  },
  {
    id: 6,
    name: 'Mr. Ramesh Patil',
    role: 'School Principal',
    childGrade: 'K-12 School',
    avatar: '👨‍💼',
    rating: 5,
    text: 'We partnered with MedhāVatika for our school last year. The impact has been phenomenal — teacher engagement improved, student performance improved and most importantly, children are excited to come to school.',
    location: 'Pune, Maharashtra',
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[activeIdx];

  return (
    <section className="py-20 bg-white" aria-label="Testimonials">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>⭐</span> Stories of Transformation
          </div>
          <h2 className="section-heading mb-4">Learning That Changed Lives</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Real stories from students, parents and teachers who experienced the MedhāVatika difference.
          </p>
        </motion.div>

        {/* Main testimonial - large */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4 }}
              className="testimonial-card relative"
            >
              <Quote size={40} className="text-brand-blue/10 absolute top-6 left-6" aria-hidden="true" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative z-10">
                "{active.text}"
              </p>

              {/* Person */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center text-3xl">
                    {active.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{active.name}</div>
                    <div className="text-sm text-brand-blue font-semibold">{active.role}</div>
                    <div className="text-xs text-gray-400">{active.childGrade} · {active.location}</div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-blue hover:text-brand-blue transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-blue hover:text-brand-blue transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6" aria-label="Testimonial navigation dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx > activeIdx ? 1 : -1); setActiveIdx(idx); }}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIdx ? 'w-6 h-2 bg-brand-blue' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === activeIdx}
              />
            ))}
          </div>
        </div>

        {/* Mini testimonial thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-10 max-w-3xl mx-auto">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => { setDirection(idx > activeIdx ? 1 : -1); setActiveIdx(idx); }}
              className={`p-3 rounded-2xl text-center transition-all duration-200 ${
                idx === activeIdx
                  ? 'bg-blue-50 border-2 border-brand-blue'
                  : 'bg-gray-50 border-2 border-transparent hover:border-gray-200'
              }`}
              aria-label={`View testimonial from ${t.name}`}
            >
              <div className="text-2xl mb-1">{t.avatar}</div>
              <div className="text-xs font-semibold text-gray-700 truncate">{t.name.split(' ')[0]}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
