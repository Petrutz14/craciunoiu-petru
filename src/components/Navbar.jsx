import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { key: 'projects', href: '#projects' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact-form' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ro' : 'en');
  };

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
          {t('navbar.logo')}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setActive(link.key)}
              className={`font-manrope text-sm tracking-wide uppercase font-bold transition-colors ${
                active === link.key
                  ? 'text-[#0066FF] border-b-2 border-[#0066FF] pb-1'
                  : 'text-[#e5e2e1] hover:text-[#0066FF]'
              }`}
            >
              {t(`navbar.${link.key}`)}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase hover:scale-95 transition-all duration-300 shadow-lg shadow-[#0066ff]/20"
          >
            {t('navbar.work_with_me')}
          </a>
          <div 
            onClick={toggleLanguage}
            className="flex items-center bg-[#1c1b1b] p-1 rounded-full border border-white/5 cursor-pointer ml-2 hover:border-white/10 transition-colors"
          >
            <div className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all ${i18n.language === 'en' ? 'bg-[#0066ff] text-white shadow-md shadow-[#0066ff]/20' : 'text-[#c2c6d8] hover:text-white'}`}>
              EN
            </div>
            <div className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all ${i18n.language === 'ro' ? 'bg-[#0066ff] text-white shadow-md shadow-[#0066ff]/20' : 'text-[#c2c6d8] hover:text-white'}`}>
              RO
            </div>
          </div>
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
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-center text-lg font-black uppercase tracking-[0.1em] text-[#e5e2e1] hover:text-[#0066FF] transition-colors"
                >
                  {t(`navbar.${link.key}`)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest text-center shadow-lg shadow-[#0066ff]/10"
              >
                {t('navbar.work_with_me')}
              </a>
              <div className="flex justify-center mt-2">
                <div 
                  onClick={() => {
                    toggleLanguage();
                    setMenuOpen(false);
                  }}
                  className="flex items-center bg-[#1c1b1b] p-1.5 rounded-full border border-white/5 cursor-pointer"
                >
                  <div className={`px-6 py-2.5 rounded-full text-xs tracking-widest font-black transition-all ${i18n.language === 'en' ? 'bg-[#0066ff] text-white shadow-lg shadow-[#0066ff]/30' : 'text-[#c2c6d8]'}`}>
                    EN
                  </div>
                  <div className={`px-6 py-2.5 rounded-full text-xs tracking-widest font-black transition-all ${i18n.language === 'ro' ? 'bg-[#0066ff] text-white shadow-lg shadow-[#0066ff]/30' : 'text-[#c2c6d8]'}`}>
                    RO
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
