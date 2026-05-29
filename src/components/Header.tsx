import { Download, Menu, ChevronDown, X, Home, Video, BookOpen, Info, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
];

export default function Header() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentLang, setCurrentLang] = useState(
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]
  );

  useEffect(() => {
    setCurrentLang(LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]);
  }, [i18n.language]);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const changeLanguage = (langInfo: typeof LANGUAGES[0]) => {
    setLangMenuOpen(false);
    localStorage.setItem('preferred_language', langInfo.code);
    
    const isLangPrefix = /^\/(en|es|pt|de)(\/|$)/;
    let newPath = location.pathname;
    
    if (langInfo.code === 'en') {
      newPath = location.pathname.replace(isLangPrefix, '/');
    } else {
      if (isLangPrefix.test(location.pathname)) {
        newPath = location.pathname.replace(isLangPrefix, `/${langInfo.code}$2`);
      } else {
        newPath = `/${langInfo.code}${location.pathname === '/' ? '' : location.pathname}`;
      }
    }
    
    if (newPath === '') newPath = '/';
    navigate(newPath);
  };

  const getLink = (path: string) => {
    return currentLang.code === 'en' ? path : `/${currentLang.code}${path === '/' ? '' : path}`;
  };

  const isActive = (path: string) => {
    const linkPath = getLink(path);
    if (path === '/') {
      return location.pathname === linkPath || location.pathname === `/${currentLang.code}`;
    }
    return location.pathname.startsWith(linkPath);
  };

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Meta AI Downloader', path: '/meta-ai-video-downloader', icon: Video },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'How It Works', path: '/how-it-works', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <header className="flex items-center justify-between py-3 px-3 md:px-4 md:py-4 bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <Link to={getLink("/")} className="flex items-center space-x-2 relative z-10 hover:opacity-80 transition-opacity shrink-0 min-w-0 mr-2">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-1.5 md:p-2 rounded-lg shadow-sm shrink-0 flex items-center justify-center">
          <Download size={20} className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
        </div>
        <span className="font-bold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight truncate">ClipVidSaver</span>
      </Link>
      
      <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
        <nav className="hidden md:flex items-center space-x-6 mr-2">
          <Link to={getLink("/meta-ai-video-downloader")} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Downloader</Link>
          <Link to={getLink("/how-it-works")} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">{t('nav.howItWorks')}</Link>
          <Link to={getLink("/blog")} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">{t('nav.blog')}</Link>
        </nav>
        
        <div className="relative">
          <button 
            aria-label="Select Language" 
            aria-expanded={langMenuOpen}
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center space-x-1 md:space-x-2 border border-slate-200 bg-slate-50 px-2 py-1 md:px-3 md:py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="text-base md:text-xl">{currentLang.flag}</span>
            <ChevronDown size={16} className={`w-3 h-3 md:w-4 md:h-4 text-slate-400 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {langMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute top-12 right-0 bg-white border border-slate-200 rounded-xl shadow-xl w-36 overflow-hidden z-20"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors flex items-center gap-2 ${currentLang.code === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700'}`}
                    onClick={() => changeLanguage(lang)}
                  >
                    <span>{lang.flag}</span>
                    <span className="font-medium text-sm">{lang.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button 
          aria-label="Menu" 
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-1.5 border border-slate-200 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 flex items-center justify-center relative z-10"
        >
          <Menu size={24} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <span className="font-bold text-lg text-slate-900 tracking-tight">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {menuItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={getLink(item.path)} 
                    className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-colors ${
                      isActive(item.path) 
                        ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                        : 'text-slate-700 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <item.icon size={20} className={isActive(item.path) ? "text-indigo-600" : "text-slate-400"} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-center space-x-2 text-indigo-600 mb-2">
                  <Download size={24} className="stroke-[2.5]" />
                </div>
                <p className="text-center text-sm text-slate-500 font-medium">ClipVidSaver</p>
                <p className="text-center text-xs text-slate-400 mt-1">The #1 AI Downloader</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
