import { useState } from 'react';
import { Download, Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg shadow-indigo-600/30">
            <Download size={20} className="stroke-[2.5]" />
          </div>
          <span className="font-bold text-xl text-slate-100 tracking-tight">ClipVidSaver</span>
        </Link>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 border border-slate-700 bg-slate-800/50 px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">
            <span className="text-xl">🇺🇸</span>
            <ChevronDown size={16} className="text-slate-400" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-slate-700 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors text-slate-300">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-900 px-4 py-3 flex flex-col space-y-1">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">🏠 Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">ℹ️ About</Link>
          <Link to="/how-it-works" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">⚙️ How It Works</Link>
          <Link to="/founder" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">👤 About the Founder</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">📧 Contact</Link>
          <a href="/blog/how-to-download-meta-ai-video-without-watermark" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">📝 Blog</a>
        </nav>
      )}
    </header>
  );
}
