import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

const grades = [
  'Pre School', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
];

const initialForm = {
  parentName: '',
  email: '',
  mobile: '',
  childName: '',
  grade: '',
};

const initialErrors = {};

function validate(form) {
  const errors = {};
  if (!form.parentName.trim()) errors.parentName = 'Parent/Guardian name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address';
  if (!form.mobile.trim()) errors.mobile = 'Mobile number is required';
  else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ''))) errors.mobile = 'Enter a valid 10-digit Indian mobile number';
  if (!form.childName.trim()) errors.childName = "Child's name is required";
  if (!form.grade) errors.grade = "Please select child's grade";
  return errors;
}

export default function DemoForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50" aria-label="Book a free demo">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration & text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span>🎯</span> Free Demo Class
            </div>
            <h2 className="section-heading mb-4">See Learning Come Alive</h2>
            <p className="text-xl font-semibold text-brand-green mb-4">Book a Free Demo Class for Your Child</p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Experience the magic of MedhāVatika first-hand. Our educators will guide your child through an interactive demo session personalised to their grade and interests.
            </p>

            {/* What to expect */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">What to expect in the demo</h3>
              <div className="space-y-3">
                {[
                  '🎮 Live interactive simulation session',
                  '📖 Story-driven concept walkthrough',
                  '🔬 Hands-on virtual lab experience',
                  '🎯 Personalised grade-level content',
                  '💬 Q&A with our learning expert',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:block">
              <svg viewBox="0 0 360 220" className="w-full max-w-sm" aria-label="Teacher guiding student in demo session">
                <circle cx="180" cy="110" r="100" fill="#EBF5FF" opacity="0.6" />
                {/* Laptop */}
                <rect x="100" y="80" width="160" height="100" rx="8" fill="#1a56a8" />
                <rect x="106" y="86" width="148" height="88" rx="5" fill="#60a5fa" />
                <rect x="80" y="178" width="200" height="8" rx="4" fill="#1a56a8" />
                <rect x="120" y="186" width="120" height="4" rx="2" fill="#0d3b7a" />
                {/* Screen content */}
                <circle cx="180" cy="115" r="15" fill="none" stroke="white" strokeWidth="2" />
                <line x1="180" y1="100" x2="180" y2="130" stroke="white" strokeWidth="2" />
                <line x1="165" y1="115" x2="195" y2="115" stroke="white" strokeWidth="2" />
                <text x="155" y="148" fontSize="10" fill="white" fontFamily="monospace">Interactive Demo</text>
                {/* Child */}
                <circle cx="140" cy="200" r="18" fill="#FFD5A8" />
                <ellipse cx="140" cy="188" rx="12" ry="8" fill="#5C3317" />
                <circle cx="136" cy="201" r="1.2" fill="#333" />
                <circle cx="144" cy="201" r="1.2" fill="#333" />
                <rect x="126" y="216" width="28" height="28" rx="8" fill="#4CAF50" />
                {/* Teacher */}
                <circle cx="230" cy="200" r="18" fill="#FFD5A8" />
                <ellipse cx="230" cy="188" rx="12" ry="8" fill="#2C1810" />
                <circle cx="226" cy="201" r="1.2" fill="#333" />
                <circle cx="234" cy="201" r="1.2" fill="#333" />
                <rect x="216" y="216" width="28" height="28" rx="8" fill="#2196F3" />
                {/* Stars */}
                <text x="100" y="70" fontSize="14">⭐</text>
                <text x="245" y="80" fontSize="12">✨</text>
                <text x="160" y="210" fontSize="10">🎓</text>
              </svg>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Book Your Free Demo</h3>
                  <form onSubmit={handleSubmit} noValidate aria-label="Demo booking form">
                    <div className="space-y-4">
                      {/* Parent Name */}
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Parent/Guardian Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          value={form.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Priya Sharma"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                            errors.parentName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-blue'
                          } focus:outline-none focus:ring-2 focus:ring-brand-blue/20`}
                          aria-describedby={errors.parentName ? 'parentName-error' : undefined}
                          aria-invalid={!!errors.parentName}
                        />
                        {errors.parentName && (
                          <p id="parentName-error" className="text-red-500 text-xs mt-1">{errors.parentName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-blue'
                          } focus:outline-none focus:ring-2 focus:ring-brand-blue/20`}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Mobile */}
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          value={form.mobile}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                            errors.mobile ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-blue'
                          } focus:outline-none focus:ring-2 focus:ring-brand-blue/20`}
                          aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                          aria-invalid={!!errors.mobile}
                        />
                        {errors.mobile && (
                          <p id="mobile-error" className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                        )}
                      </div>

                      {/* Child Name + Grade row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="childName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Child's Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="childName"
                            name="childName"
                            type="text"
                            value={form.childName}
                            onChange={handleChange}
                            placeholder="Child's name"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                              errors.childName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-blue'
                            } focus:outline-none focus:ring-2 focus:ring-brand-blue/20`}
                            aria-describedby={errors.childName ? 'childName-error' : undefined}
                            aria-invalid={!!errors.childName}
                          />
                          {errors.childName && (
                            <p id="childName-error" className="text-red-500 text-xs mt-1">{errors.childName}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Child's Grade <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="grade"
                            name="grade"
                            value={form.grade}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                              errors.grade ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-brand-blue'
                            } focus:outline-none focus:ring-2 focus:ring-brand-blue/20 bg-white`}
                            aria-describedby={errors.grade ? 'grade-error' : undefined}
                            aria-invalid={!!errors.grade}
                          >
                            <option value="">Select grade</option>
                            {grades.map((g) => (
                              <option key={g} value={g}>{g}</option>
                            ))}
                          </select>
                          {errors.grade && (
                            <p id="grade-error" className="text-red-500 text-xs mt-1">{errors.grade}</p>
                          )}
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                        id="demo-form-submit"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Booking your demo...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Book Free Demo
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        🔒 Your information is safe. No spam, ever.
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">You're all set! 🎉</h3>
                  <p className="text-gray-600 mb-2">
                    Thank you, <strong>{form.parentName}</strong>!
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our team will get in touch with you shortly at <strong>{form.email}</strong> or <strong>{form.mobile}</strong> to confirm your free demo class.
                  </p>
                  <div className="mt-6 bg-green-50 rounded-2xl p-4 text-sm text-green-700">
                    🌱 <strong>{form.childName}</strong> is about to begin an exciting learning journey!
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
