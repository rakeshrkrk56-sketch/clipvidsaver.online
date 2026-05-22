import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdPlaceholder from './components/AdPlaceholder';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import Copyright from './pages/Copyright';
import Safety from './pages/Safety';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 relative">
        <Header />
        
        {/* Top Banner Ad Container */}
        <AdPlaceholder id="ad-top-banner" className="w-full max-w-5xl mx-auto py-2 px-4 mt-2 shrink-0" />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/meta-ai-video-downloader" replace />} />
            <Route path="/meta-ai-video-downloader" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </main>
        
        <Footer />

        {/* Bottom Sticky Ad Container */}
        <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none flex justify-center">
          <AdPlaceholder 
            id="ad-bottom-sticky" 
            className="pointer-events-auto bg-slate-900/95 backdrop-blur-sm shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.3)] border-t border-slate-800 w-full" 
          />
        </div>

        {/* Popup/Modal Ad Container */}
        <AdPlaceholder 
          id="ad-popup-modal" 
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]" 
        />
      </div>
    </BrowserRouter>
  );
}
