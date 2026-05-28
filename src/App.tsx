import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import AdPlaceholder from './components/AdPlaceholder';
import ScrollToTop from './components/ScrollToTop';
import StickyCTA from './components/StickyCTA';

// Lazy Loaded Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const Founder = React.lazy(() => import('./pages/Founder'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Copyright = React.lazy(() => import('./pages/Copyright'));
const Safety = React.lazy(() => import('./pages/Safety'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function LanguageLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const firstPart = pathParts[1];
    const isLangPrefix = ['es', 'pt', 'de'].includes(firstPart);
    const currentLang = isLangPrefix ? firstPart : 'en';

    if (location.pathname === '/') {
      const savedLang = localStorage.getItem('preferred_language');
      if (savedLang && ['es', 'pt', 'de'].includes(savedLang)) {
        navigate(`/${savedLang}`, { replace: true });
        return;
      }
    }

    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
    document.documentElement.lang = currentLang;
  }, [location.pathname, i18n, navigate]);

  return <Outlet />;
}

export default function App() {
  const innerRoutes = (
    <>
      <Route index element={<Home isHomePage={true} />} />
      <Route path="meta-ai-video-downloader" element={<Home isHomePage={false} />} />
      <Route path="about" element={<About />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="founder" element={<Founder />} />
      <Route path="contact" element={<Contact />} />
      <Route path="copyright" element={<Copyright />} />
      <Route path="safety" element={<Safety />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<BlogPost />} />
    </>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 relative">
        <Header />
        
        {/* Top Banner Ad Container */}
        <AdPlaceholder id="ad-top-banner" className="w-full max-w-5xl mx-auto py-2 px-4 mt-2 shrink-0" />

        <main className="flex-1">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route element={<LanguageLayout />}>
                <Route path="/">
                  {innerRoutes}
                </Route>
                <Route path="/:lang">
                   {innerRoutes}
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <StickyCTA />

        {/* Bottom Sticky Ad Container */}
        <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none flex justify-center pb-16 md:pb-0">
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
