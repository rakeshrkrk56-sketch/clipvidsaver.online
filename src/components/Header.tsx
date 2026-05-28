import { Download, Menu, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
];

export default function Header() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentLang, setCurrentLang] = useState(
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]
  );

  useEffect(() => {
    setCurrentLang(LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]);
  }, [i18n.language]);

  const changeLanguage = (langInfo: typeof LANGUAGES[0]) => {
    setLangMenuOpen(false);
    
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

  return (
    <header className="flex items-center justify-between py-3 px-3 md:px-4 md:py-4 bg-slate-900 border-b border-slate-800 shadow-sm sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2 relative z-10 hover:opacity-80 transition-opacity shrink-0 min-w-0 mr-2">
        <div className="bg-indigo-600 text-white p-1.5 md:p-2 rounded-lg shadow-lg shadow-indigo-600/30 shrink-0 flex items-center justify-center">
          <Download size={20} className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
        </div>
        <span className="font-bold text-base sm:text-lg md:text-xl text-slate-100 tracking-tight truncate">ClipVidSaver</span>
      </Link>
      
      <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
        <nav className="hidden md:flex items-center space-x-6 mr-2">
          <Link to="/how-it-works" className="text-slate-300 hover:text-white font-medium transition-colors">{t('nav.howItWorks')}</Link>
          <Link to="/blog" className="text-slate-300 hover:text-white font-medium transition-colors">{t('nav.blog')}</Link>
        </nav>
        
        <div className="relative">
          <button 
            aria-label="Select Language" 
            aria-expanded={langMenuOpen}
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center space-x-1 md:space-x-2 border border-slate-700 bg-slate-800/50 px-2 py-1 md:px-3 md:py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <span className="text-base md:text-xl">{currentLang.flag}</span>
            <ChevronDown size={16} className={`w-3 h-3 md:w-4 md:h-4 text-slate-400 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {langMenuOpen && (
            <div className="absolute top-12 right-0 bg-slate-800 border border-slate-700 rounded-xl shadow-xl w-36 overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-700 transition-colors flex items-center gap-2 ${currentLang.code === lang.code ? 'bg-slate-700/50 text-white' : 'text-slate-300'}`}
                  onClick={() => changeLanguage(lang)}
                >
                  <span>{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button aria-label="Menu" className="md:hidden p-1.5 md:p-2 border border-slate-700 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 flex items-center justify-center">
          <Menu size={24} className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </header>
  );
}
