import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';

// Lazy load pages
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#131313] flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-[#0066ff]/20 border-t-[#0066ff] rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#131313] flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
