import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    q: "Is ClipVidSaver.online free to use?",
    a: "Yes. ClipVidSaver.online is completely free to use with no hidden charges or subscriptions."
  },
  {
    q: "Do I need an account?",
    a: "No account or registration is required. Simply paste your video link and start downloading."
  },
  {
    q: "What video formats are supported?",
    a: "ClipVidSaver.online supports MP4 and other commonly used video formats depending on the original source."
  },
  {
    q: "Is ClipVidSaver.online safe?",
    a: "Yes. We use secure HTTPS connections and do not permanently store downloaded videos on our servers."
  },
  {
    q: "Why is my download slow?",
    a: "Download speed depends on your internet connection, server load, and the size of the original video file."
  },
  {
    q: "Can I save videos for offline use?",
    a: "Yes. Downloaded videos are saved directly to your device for offline viewing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="max-w-3xl mx-auto px-4 mb-24" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Frequently Asked<br aria-hidden="true" />Questions
      </h2>
      <p className="text-center text-lg text-slate-400 mb-12">Common questions about ClipVidSaver.online.</p>
      
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <div 
              key={idx} 
              className={`bg-slate-900 rounded-2xl overflow-hidden border transition-colors ${isOpen ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' : 'border-slate-800 shadow-sm'}`}
            >
              <button 
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <h3 className="font-semibold text-slate-200 text-lg pr-4 m-0">{faq.q}</h3>
                {isOpen ? (
                  <ChevronUp className="text-indigo-400 shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="text-slate-500 shrink-0" aria-hidden="true" />
                )}
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed text-lg border-t border-slate-800/50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
