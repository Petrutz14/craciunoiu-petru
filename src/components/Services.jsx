import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const offerings = [
  {
    icon: 'globe',
    title: 'Business Websites',
    desc: 'Professional presentation sites for law firms, medical offices, service companies, built for speed, SEO, and client trust.',
  },
  {
    icon: 'store',
    title: 'Hospitality & Local Businesses',
    desc: 'Restaurants, bars, cafes, online reservations, menus, social links, Google Maps, all designed to drive foot traffic.',
  },
  {
    icon: 'code',
    title: 'Web Applications',
    desc: 'Full-stack apps with React frontends, Node.js or Spring backends, PostgreSQL or MongoDB databases.',
  },
  {
    icon: 'lightning',
    title: 'Performance & SEO',
    desc: 'Speed audits, Core Web Vitals, structured data (Schema.org), and technical SEO to rank higher and load faster.',
  },
];

const checks = [
  'Clean, production-ready code',
  'Mobile-first responsive design',
  'Full SEO + structured data',
  'Fast delivery, clear communication',
];

function IconComp({ name }) {
  const icons = {
    globe: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />,
    store: <><path d="M20 4H4v2l16 .01V4zM4 20h16v-2H4v2zM4 14h16v-2H4v2z" /><path d="M4 8v2h12V8H4zm8 6v2h-2v-2h2z" /></>,
    code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    lightning: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={name === 'globe' || name === 'store' ? 'currentColor' : 'none'}
      stroke={name === 'globe' || name === 'store' ? 'none' : 'currentColor'} strokeWidth="2.5" strokeLinecap="round">
      {icons[name]}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="py-24 px-6 md:px-8 bg-[#1c1b1b]" ref={ref}>
      <div className="max-w-screen-xl mx-auto">
        {/* Header - Centered on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#0066ff] block mb-4"
            >
              What I Do
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-[#e5e2e1]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Built with{' '}
              <span className="text-[#0066FF]">Precision</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-md text-[#c2c6d8] text-base md:text-lg leading-relaxed opacity-80"
          >
            Every project starts with understanding your business — then delivering
            something that actually drives results.
          </motion.p>
        </div>

        {/* Main content: offerings grid + side card */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Offerings grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="p-6 rounded-xl bg-[#131313] ghost-border group hover:bg-[#1c1b1b] hover:border-[#0066ff]/20 transition-all duration-300"
              >
                <div className="text-[#0066ff] mb-4 group-hover:scale-110 transition-transform origin-left">
                  <IconComp name={item.icon} />
                </div>
                <h5 className="font-bold text-[#e5e2e1] mb-2">{item.title}</h5>
                <p className="text-[#c2c6d8] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Side: quality card */}
          <div className="lg:w-80 w-full flex-shrink-0 relative">
            <div className="absolute -top-16 -right-8 w-full h-full rounded-full bg-[#0066ff]/5 blur-3xl opacity-60 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative bg-[#131313] p-8 md:p-10 rounded-2xl ghost-border shadow-2xl shadow-black/50"
            >
              <div className="text-4xl md:text-5xl font-black text-[#0066ff] mb-2 text-center md:text-left" style={{ fontFamily: 'Manrope' }}>
                Over 99%
              </div>
              <p className="text-[#e5e2e1] font-bold uppercase tracking-[0.18em] text-[10px] md:text-[11px] mb-8 text-center md:text-left">
                Lighthouse Scores
              </p>
              <div className="space-y-4 md:space-y-5">
                {checks.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-[#c2c6d8] font-medium text-xs md:text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA inside card */}
              <div className="mt-10 pt-8 border-t border-[#424656]/20">
                <a
                  href="#contact"
                  className="btn-primary block text-center px-6 py-4 rounded-xl font-extrabold text-sm uppercase tracking-[0.15em] transition-all hover:shadow-lg hover:shadow-[#0066ff]/20"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
