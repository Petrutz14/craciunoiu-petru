import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
