import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { i18n } = useTranslation();
  const getLink = (path: string) => {
    return i18n.language === 'en' ? path : `/${i18n.language}${path === '/' ? '' : path}`;
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-4 text-center">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg shadow-indigo-600/30">
          <Download size={24} className="stroke-[2.5]" />
        </div>
        <span className="font-bold text-2xl text-slate-100 tracking-tight">ClipVidSaver</span>
      </div>
      
      <p className="text-slate-400 max-w-md mx-auto mb-12 text-lg">
        The #1 Meta AI Video Downloader
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-slate-400 font-medium max-w-3xl mx-auto mb-12">
        <Link to={getLink("/about")} className="hover:text-indigo-400 transition-colors">About</Link>
        <Link to={getLink("/how-it-works")} className="hover:text-indigo-400 transition-colors">How It Works</Link>
        <Link to={getLink("/blog")} className="hover:text-indigo-400 transition-colors">Blog</Link>
        <Link to={getLink("/")} className="hover:text-indigo-400 transition-colors">FAQ</Link>
        <Link to={getLink("/contact")} className="hover:text-indigo-400 transition-colors">Contact Us</Link>
        <Link to={getLink("/founder")} className="hover:text-indigo-400 transition-colors">About the Founder</Link>
        <Link to={getLink("/copyright")} className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
        <Link to={getLink("/copyright")} className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
        <Link to={getLink("/copyright")} className="hover:text-indigo-400 transition-colors">Copyright Policy</Link>
        <Link to={getLink("/safety")} className="hover:text-indigo-400 transition-colors">Safety</Link>
      </div>

      <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
        © 2026 ClipVidSaver. The #1 Meta AI Video Downloader. All rights reserved.<br/>
        We are not affiliated with or endorsed by any video platform. Always respect copyright and platform terms of service.
      </p>
    </footer>
  );
}
