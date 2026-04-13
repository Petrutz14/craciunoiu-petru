import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-8 hero-gradient relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,102,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,102,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="max-w-screen-xl mx-auto w-full pt-32 pb-24 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Badge - Centered on mobile */}
        <motion.div {...fadeUp(0.1)}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2a2a] ghost-border mb-8 md:mb-10">
            <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse block" />
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-[#c2c6d8]">
              Available for New Projects
            </span>
          </div>
        </motion.div>

        {/* H1 - Centered on mobile */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.95] md:leading-[0.93] text-[#e5e2e1] max-w-5xl mb-8 md:mb-10 pr-0 md:pr-4"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          I Build Sites{' '}
          <span className="text-[#0066FF]">That Work</span>{' '}
          for Your Business
        </motion.h1>

        {/* Sub - Centered on mobile */}
        <motion.p
          {...fadeUp(0.32)}
          className="text-base md:text-2xl text-[#c2c6d8] max-w-2xl font-medium leading-relaxed mb-10 md:mb-14 px-0 md:px-0 opacity-90 mx-auto md:mx-0"
        >
          Freelance web developer from Romania — crafting fast, modern websites
          for businesses, restaurants, legal firms, and startups. React, Tailwind,
          Supabase &amp; more.
        </motion.p>

        {/* CTA row - Centered on mobile */}
        <motion.div {...fadeUp(0.44)} className="flex flex-col sm:flex-row items-stretch sm:items-center md:items-start gap-4 md:gap-8 w-full sm:w-auto mx-auto md:mx-0">
          <a
            href="#projects"
            className="btn-primary group flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-extrabold text-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-2xl hover:shadow-[#0066ff]/20"
          >
            View My Work
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className="group-hover:translate-y-0.5 transition-transform">
              <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
          <a
            href="#contact-form"
            className="ghost-border group flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-extrabold text-lg text-[#e5e2e1] transition-all duration-300 hover:bg-[#1c1b1b]"
          >
            Let's Talk
          </a>

          {/* Stats - Centered on mobile */}

        </motion.div>
      </div>


    </section>
  );
}
