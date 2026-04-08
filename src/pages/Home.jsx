import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Craciunoiu Petru | Freelance Web Developer & Software Engineer</title>
        <meta name="description" content="Expert freelance web developer from Romania. I build fast, high-performance websites for businesses, restaurants, and law firms using React, Tailwind, and Node.js." />
        <meta name="keywords" content="freelance web developer, Romania, web development, React, Tailwind CSS, professional business websites, SEO optimization" />
        
        {/* Open Graph / Social */}
        <meta property="og:title" content="Craciunoiu Petru | Freelance Web Developer" />
        <meta property="og:description" content="Premium web development services tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
      </Helmet>
      
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
    </>
  );
}
