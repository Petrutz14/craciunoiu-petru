import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';



function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`${project.span} group relative overflow-hidden rounded-xl bg-[#1c1b1b] ghost-border transition-all duration-500 hover:bg-[#201f1f] flex flex-col`}
    >
      {/* Visual area - Made primary link area */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${project.aspect} w-full overflow-hidden relative flex-shrink-0 cursor-pointer block group-hover:opacity-90 transition-opacity`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

        {/* Domain badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse block" />
          <span className="text-[10px] md:text-[11px] font-bold text-white tracking-wide" style={{ fontFamily: 'Manrope' }}>
            {project.url.replace('https://', '')}
          </span>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <div className="px-6 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2">
            {t('work.launch_site')} <ArrowIcon size={14} />
          </div>
        </div>

        {/* Big number watermark */}
        <span className="absolute bottom-3 right-5 text-[5rem] md:text-[6rem] font-black leading-none select-none tracking-tighter"
          style={{ color: project.accentColor, opacity: 0.1 }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </a>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
          <span className="px-3 py-1 rounded text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-white/10 text-[#0066ff] shadow-sm border border-[#0066ff]/20">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-[#2a2a2a] text-[#c2c6d8] border border-white/5">
            {project.stack}
          </span>
        </div>

        <h3 className={`font-black tracking-tighter text-[#e5e2e1] mb-3 md:mb-4 leading-tight ${project.large ? 'text-2xl md:text-4xl' : 'text-xl md:text-3xl'}`}
          style={{ fontFamily: 'Manrope, sans-serif' }}>
          {project.title}
        </h3>

        <p className="text-[#c2c6d8] leading-relaxed mb-6 md:mb-8 text-xs md:text-sm flex-1 opacity-90">
          {project.desc}
        </p>

        <div className="flex gap-8 mt-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] text-[#0066ff] hover:text-white transition-all"
          >
            {t('work.visit_live_site')} <ArrowIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  const projects = [
    {
      id: 'bej',
      span: 'lg:col-span-7',
      aspect: 'aspect-[16/9]',
      category: t('work.p1_category'),
      stack: 'React • Tailwind • Vercel',
      title: t('work.p1_title'),
      desc: t('work.p1_desc'),
      url: 'https://bejifrimremus.ro',
      gradient: 'from-[#003366]/40 via-[#001033]/60 to-[#0e0e0e]',
      accentColor: '#0066ff', // Brighter blue for better contrast on mobile
      large: true,
    },
    {
      id: 'traian',
      span: 'lg:col-span-5',
      aspect: 'aspect-[4/3]',
      category: t('work.p2_category'),
      stack: 'React • Tailwind • Supabase • Vercel',
      title: t('work.p2_title'),
      desc: t('work.p2_desc'),
      url: 'https://la-povesti-in-traian.vercel.app',
      gradient: 'from-[#664d00]/40 via-[#1a1200]/60 to-[#0e0e0e]',
      accentColor: '#d4af37', // Gold
      large: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8 bg-[#131313]">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6 md:gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#0066ff] block mb-4"
            >
              {t('work.selected_works')}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-[#e5e2e1]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {t('work.heading')}
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-md text-[#c2c6d8] text-base md:text-lg leading-relaxed opacity-80"
          >
            {t('work.sub')}
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Tech capabilities row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              label: t('work.frontend'),
              items: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
            },
            {
              label: t('work.backend_db'),
              items: ['Node.js / Express', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
            },
            {
              label: t('work.platforms_tools'),
              items: ['Supabase', 'Vercel', 'MERN Stack', 'REST APIs'],
            },
          ].map((group) => (
            <div
              key={group.label}
              className="bg-[#1c1b1b] rounded-xl p-6 md:p-7 ghost-border group hover:bg-[#201f1f] transition-colors duration-300"
            >
              <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-black text-[#0066ff] mb-4">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1.5 rounded text-[10px] font-semibold bg-[#2a2a2a] text-[#c2c6d8] hover:text-white hover:bg-[#353534] transition-colors cursor-default border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
