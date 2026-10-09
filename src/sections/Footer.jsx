import { MapPin, Phone, Mail } from 'lucide-react';

// Social media SVG icons (lucide-react doesn't include social icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M2 4h6l14 16h-6L2 4z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const footerLinks = {
  explore: [
    { label: 'MedhaLab', href: '#medhalab' },
    { label: 'BrainSetu Program', href: '#brainsetu' },
    { label: 'Language Lab', href: '#language-lab' },
    { label: 'MedhaGames', href: '#medhagames' },
    { label: 'About Us', href: '#about' },
  ],
  quickLinks: [
    { label: 'Login', href: '#login' },
    { label: 'Register', href: '#register' },
    { label: 'Become an Instructor', href: '#instructor' },
    { label: 'Affiliate Program', href: '#affiliate' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Refund Policy', href: '#refund' },
  ],
};

const socialLinks = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61578987110323', label: 'Facebook' },
  { icon: InstagramIcon, href: '#instagram', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#youtube', label: 'YouTube' },
  { icon: TwitterIcon, href: '#twitter', label: 'Twitter / X' },
  { icon: LinkedinIcon, href: '#linkedin', label: 'LinkedIn' },
];

export default function Footer() {
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-950 text-gray-300" aria-label="Footer">
      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.png" alt="MedhāVatika" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              "Where Curiosity Meets Creativity."
              <br /><br />
              A garden of intellect where creativity, critical thinking and knowledge bloom for students from Pre-School to Grade 12.
            </p>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support + Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-green flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-xs leading-relaxed">
                  Medhavatika Edlabs Pvt. Ltd.<br />
                  R6, Life Republic, Marunji-Hinjewadi,<br />
                  Pune – 411057, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-green flex-shrink-0" />
                <a href="tel:+918007614867" className="text-gray-400 hover:text-white text-xs transition-colors">
                  +91 8007614867
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-green flex-shrink-0" />
                <a href="mailto:info@medhavatika.com" className="text-gray-400 hover:text-white text-xs transition-colors">
                  info@medhavatika.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 MedhāVatika – Medhavatika Edlabs Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <span className="text-red-400">❤️</span>
              <span>in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
