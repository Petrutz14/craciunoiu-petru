import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '25+', label: 'Happy Clients' },
  { value: '100%', label: 'Client Satisfaction' },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'GraphQL',
  'Framer Motion', 'Stripe', 'Vercel', 'Docker',
];

const highlights = [
  'Clean, maintainable code with best practices',
  'On-time delivery, every time',
  'Clear communication throughout the project',
  'Post-launch support & maintenance',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Crafting Digital <span className="gradient-text">Experiences</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-5"
            >
              I'm a passionate freelance web developer based in Romania, specializing in building 
              fast, beautiful, and functional websites. With 3+ years of experience, I've helped 
              startups and businesses launch and scale their online presence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              I believe great web development is about more than just writing code — it's about 
              understanding your business goals and delivering a product that actually drives results.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="inline-flex px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Let's Work Together
            </motion.a>
          </div>

          {/* Right: stats + tech stack */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-blue rounded-2xl p-6 text-center"
                >
                  <div className="font-grotesk text-4xl font-black gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-7"
            >
              <h4 className="font-grotesk font-semibold text-white mb-5 text-sm uppercase tracking-widest">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium glass-blue text-blue-300 hover:text-blue-200 hover:border-blue-400/30 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
