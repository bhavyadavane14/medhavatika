import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoForm from '../sections/DemoForm';
import SchoolCTA from '../sections/SchoolCTA';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      details: '+91 98765 43210',
      subtext: 'Mon-Sat from 9am to 6pm IST',
      action: 'tel:+919876543210',
      actionText: 'Call now',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Mail,
      title: 'Email Our Team',
      details: 'contact@medhavatika.com',
      subtext: 'We respond within 24 hours',
      action: 'mailto:contact@medhavatika.com',
      actionText: 'Send email',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      icon: MapPin,
      title: 'Registered Office',
      details: 'Pune / Mumbai, Maharashtra',
      subtext: 'India',
      action: '#',
      actionText: 'View location',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'School Demo Hours',
      details: 'Flexible Scheduling',
      subtext: 'Live in-person or online Zoom setup',
      action: '#demo',
      actionText: 'Schedule below',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <div className="pt-24">
      {/* Page Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
              <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-blue font-semibold">Contact & Demo</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-4"
            >
              <MessageSquare className="w-4 h-4 text-brand-blue" />
              <span>Connect With Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            >
              Let’s Transform Learning at{' '}
              <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-green bg-clip-text text-transparent">
                Your School
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              Have questions about MedhaLab, Language Lab, or MedhaGames? Book an interactive demonstration or reach out directly to our education advisory team.
            </motion.p>

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {contactInfo.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.color} mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-base">{card.title}</h3>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{card.details}</p>
                    <p className="text-xs text-gray-500 mb-4">{card.subtext}</p>
                    {card.action !== '#' && (
                      <a
                        href={card.action}
                        className={`text-xs font-bold ${card.color} hover:underline inline-flex items-center gap-1`}
                      >
                        {card.actionText} →
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Demo & Inquiry Form */}
      <DemoForm />

      {/* School Partnership CTA */}
      <SchoolCTA />
    </div>
  );
}
