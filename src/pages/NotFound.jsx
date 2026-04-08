import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#131313] relative overflow-hidden">
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-black text-[#e5e2e1] tracking-tighter mb-4 opacity-10 select-none">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-[#e5e2e1] mb-6 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Lost?
          </h2>
          <p className="text-[#c2c6d8] text-lg mb-10 opacity-80 leading-relaxed">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>

          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-xl font-extrabold text-sm uppercase tracking-widest transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#0066ff]/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
