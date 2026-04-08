import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Craciunoiu Petru | Freelance Web Development",
    "image": "https://yourportfolio.com/og-image.jpg",
    "@id": "https://yourportfolio.com",
    "url": "https://yourportfolio.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Timisoara",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.7489,
      "longitude": 21.2087
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/crăciunoiu-petru",
      "https://github.com/Petrutz14"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Craciunoiu Petru | Freelance Web Developer & Software Engineer</title>
        <link rel="canonical" href="https://yourportfolio.com" />
        <meta name="description" content="Expert freelance web developer from Romania. I build fast, high-performance websites for businesses, restaurants, and law firms using React, Tailwind, and Node.js." />
        <meta name="keywords" content="freelance web developer, Romania, web development, React, Tailwind CSS, professional business websites, SEO optimization" />
        
        {/* Open Graph / Social */}
        <meta property="og:title" content="Craciunoiu Petru | Freelance Web Developer" />
        <meta property="og:description" content="Premium web development services tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
