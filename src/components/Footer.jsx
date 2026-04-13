import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { label: 'Email', href: 'mailto:petru.craciunoiu@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/crăciunoiu-petru' },
    { label: 'GitHub', href: 'https://github.com/Petrutz14' },
    { label: 'Resume', href: 'onstruiesc Site-uri Care Funcționează pentru Afacerea Ta' },
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-8 bg-[#131313] border-t border-[#424656]/20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <div
            className="text-lg font-black tracking-tighter text-[#e5e2e1]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Craciunoiu Petru
          </div>
          <div className="text-[10px] font-medium text-[#c2c6d8] uppercase tracking-widest opacity-60">
            © {year} {t('footer.rights_reserved')}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? "_blank" : undefined}
              rel={link.label !== 'Email' ? "noopener noreferrer" : undefined}
              className="text-xs font-bold uppercase tracking-widest text-[#c2c6d8] hover:text-[#0066ff] transition-all"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 text-[#c2c6d8] text-[9px] font-bold uppercase tracking-[0.2em] opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] animate-pulse block shadow-[0_0_8px_rgba(0,102,255,0.6)]" />
          {t('footer.system_status')}
        </div>
      </div>
    </footer>
  );
}
