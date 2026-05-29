import { useState, useEffect } from 'react';
import { ArrowUp, Download } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Focus the input if possible
    setTimeout(() => {
      const input = document.querySelector('input[type="url"]') as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t border-slate-200 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex justify-center pb-[max(env(safe-area-inset-bottom),12px)]">
      <button
        onClick={scrollToTop}
        className="w-full max-w-[300px] bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
      >
        <Download size={20} />
        <span>Download Video</span>
      </button>
    </div>
  );
}
