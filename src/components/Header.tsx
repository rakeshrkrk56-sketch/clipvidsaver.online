import { Download, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 shadow-sm sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2 relative z-10 hover:opacity-80 transition-opacity">
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
        <button className="p-2 border border-slate-700 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors text-slate-300">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
