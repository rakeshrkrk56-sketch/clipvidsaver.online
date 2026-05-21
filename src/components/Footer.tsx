import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-4 text-center">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg shadow-indigo-600/30">
          <Download size={24} className="stroke-[2.5]" />
        </div>
        <span className="font-bold text-2xl text-slate-100 tracking-tight">ClipVidSaver.online</span>
      </div>
      
      <p className="text-slate-400 max-w-md mx-auto mb-12 text-lg">
        Simple and reliable AI video downloading platform
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-slate-400 font-medium max-w-3xl mx-auto mb-12">
        <Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link>
        <Link to="/how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</Link>
        <Link to="/" className="hover:text-indigo-400 transition-colors">FAQ</Link>
        <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link>
        <Link to="/founder" className="hover:text-indigo-400 transition-colors">About the Founder</Link>
        <Link to="/copyright" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
        <Link to="/copyright" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
        <Link to="/copyright" className="hover:text-indigo-400 transition-colors">Copyright Policy</Link>
        <Link to="/safety" className="hover:text-indigo-400 transition-colors">Safety</Link>
      </div>

      <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
        © 2026 ClipVidSaver.online. All rights reserved.<br/>
        We are not affiliated with or endorsed by any video platform. Always respect copyright and platform terms of service.
      </p>
    </footer>
  );
}
