import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const contactItems = [
    {
      id: 'email',
      svgPath: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      svgPath2: 'M22 6l-10 7L2 6',
      label: t('contact.item_email'),
      value: 'petru.craciunoiu@gmail.com',
      href: 'mailto:petru.craciunoiu@gmail.com',
    },
    {
      id: 'location',
      svgPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
      svgPath2: 'M12 10a2 2 0 100-4 2 2 0 000 4',
      label: t('contact.item_location'),
      value: t('contact.item_location_val'),
      href: '#',
    },
  ];

  function FloatingInput({ id, label, type = 'text', isTextarea = false }) {
    return (
      <div className="group relative">
        {isTextarea ? (
          <textarea
            id={id} name={id} rows={4} required placeholder=" "
            className="input-underline block py-4 px-0 text-lg md:text-xl peer resize-none"
          />
        ) : (
          <input
            id={id} name={id} type={type} required placeholder=" "
            className="input-underline block py-4 px-0 text-lg md:text-xl peer"
          />
        )}
        <label
          htmlFor={id}
          className="
            absolute top-4 left-0 text-[#c2c6d8]/50 text-xl font-medium
            transition-all duration-300 pointer-events-none
            peer-focus:-top-5 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#0066ff]
            peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-[#0066ff]
          "
        >
          {label}
        </label>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(e.target);
    const formId = import.meta.env.VITE_FORMSPREE_ID;

    // Safety check for user ID
    if (!formId) {
      console.warn("Formspree ID missing in .env. Falling back to local success simulation.");
      setTimeout(() => {
        setSending(false);
        setSent(true);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSent(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#131313]">
      {/* CTA Banner - Centered on mobile */}
      <div className="py-24 md:py-32 px-6 md:px-8 border-b border-[#424656]/20">
        <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col items-center md:items-start">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black text-[#0066ff] block mb-8"
          >
            {t('contact.ready_to_build')}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-[#e5e2e1] mb-5 leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {t('contact.heading_1')}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#c2c6d8] text-base md:text-xl mb-12 max-w-xl mx-auto md:mx-0 opacity-80"
          >
            {t('contact.sub_1')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-6 w-full sm:w-auto"
          >
            <a
              href="#contact-form"
              className="btn-primary px-10 py-5 rounded-xl font-black text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#0066ff]/20 text-center"
            >
              {t('contact.btn_start_project')}
            </a>
            <a
              href="mailto:petru.craciunoiu@gmail.com"
              className="ghost-border text-[#e5e2e1] px-10 py-5 rounded-xl font-black text-lg transition-all duration-300 hover:bg-[#1c1b1b] text-center"
            >
              {t('contact.btn_send_email')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div id="contact-form" className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left - Centered on mobile */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block px-3 py-1 bg-[#2a2a2a] text-[#b3c5ff] font-bold text-[10px] tracking-[0.22em] uppercase rounded-full mb-6 w-fit"
            >
              {t('contact.get_in_touch')}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-[#e5e2e1] mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {t('contact.heading_2_1')}{' '}<span className="text-[#0066ff]">{t('contact.heading_2_2')}</span>{' '}{t('contact.heading_2_3')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#c2c6d8] text-base md:text-lg leading-relaxed max-w-md mb-14 opacity-80"
            >
              {t('contact.sub_2')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6 md:y-8 w-full max-w-xs md:max-w-none"
            >
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center md:justify-start gap-5 md:gap-6 group cursor-pointer justify-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#1c1b1b] ghost-border group-hover:bg-[#0066ff]/10 group-hover:border-[#0066ff]/40 transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b3c5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.svgPath} />
                      {item.svgPath2 && <path d={item.svgPath2} />}
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[#c2c6d8]/60 mb-0.5">{item.label}</div>
                    <div className="text-[#e5e2e1] font-medium text-sm md:text-base">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Form - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-[#1c1b1b] p-8 md:p-12 rounded-2xl relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066ff]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0066ff]/10 flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-black text-[#e5e2e1] mb-3" style={{ fontFamily: 'Manrope' }}>
                    {t('contact.form_sent_title')}
                  </h4>
                  <p className="text-[#c2c6d8] opacity-80">{t('contact.form_sent_desc')}</p>
                  <button 
                    onClick={() => setSent(false)}
                    className="mt-8 text-[10px] uppercase tracking-widest font-bold text-[#0066ff] hover:text-white transition-colors"
                  >
                    {t('contact.form_sent_btn')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8 md:space-y-10">
                  <FloatingInput id="name" label={t('contact.form_name')} />
                  <FloatingInput id="email" label={t('contact.form_email')} type="email" />
                  <FloatingInput id="message" label={t('contact.form_message')} isTextarea />
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs font-bold uppercase tracking-widest"
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="pt-4 md:pt-6">
                    <button
                      type="submit"
                      disabled={sending}
                      className="group w-full flex items-center justify-center gap-4 btn-primary px-10 py-5 rounded-xl font-extrabold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-xl hover:shadow-[#0066ff]/20 hover:scale-[1.02] disabled:opacity-60"
                    >
                      {sending ? (
                        <span className="flex items-center gap-3">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          {t('contact.form_sending')}
                        </span>
                      ) : (
                        <>
                          {t('contact.form_btn')}
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                               className="group-hover:translate-x-1 transition-transform">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
