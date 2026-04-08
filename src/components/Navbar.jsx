import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact-form' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-hidden ${
        scrolled ? 'glass-nav shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}
    >
      {/* Container - Enforced strict symmetric horizontal padding */}
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg md:text-xl font-black tracking-tighter text-[#e5e2e1] hover:text-[#0066FF] transition-colors"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Craciunoiu Petru
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`font-manrope text-sm tracking-wide uppercase font-bold transition-colors ${
                active === link.label
                  ? 'text-[#0066FF] border-b-2 border-[#0066FF] pb-1'
                  : 'text-[#e5e2e1] hover:text-[#0066FF]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase hover:scale-95 transition-all duration-300 shadow-lg shadow-[#0066ff]/20"
          >
            Work with Me
          </a>
        </div>

        {/* Mobile Toggle - Perfectly symmetric right-alignment */}
        <button
          className="md:hidden text-[#e5e2e1] hover:text-white transition-all active:scale-90 relative z-[60] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'circOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#1c1b1b]/98 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          >
            <div className="px-8 py-8 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-center text-lg font-black uppercase tracking-[0.1em] text-[#e5e2e1] hover:text-[#0066FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest text-center shadow-lg shadow-[#0066ff]/10"
              >
                Work with Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
