import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    q: "Can I download Meta AI videos without a watermark?",
    a: "Yes! ClipVidSaver is specifically designed to remove watermarks from Meta AI generated videos. It extracts the raw HD MP4 file without any branding."
  },
  {
    q: "Is this Meta AI video downloader completely free?",
    a: "Absolutely. ClipVidSaver is 100% free to use for downloading Meta AI videos. There are no hidden fees, subscriptions, or limits."
  },
  {
    q: "Does ClipVidSaver work on mobile phones?",
    a: "Yes, our Meta AI video downloader works seamlessly on iPhone, Android, tablets, and desktop computers. You can save the video directly to your camera roll or downloads folder."
  },
  {
    q: "Will the downloaded Meta AI video be high quality?",
    a: "Yes, ClipVidSaver downloads the original HD MP4 quality directly from Meta AI, ensuring you get the crispest video possible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="max-w-3xl mx-auto px-4 mb-24" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Frequently Asked<br aria-hidden="true" />Questions
      </h2>
      <p className="text-center text-lg text-slate-400 mb-12">Common questions about ClipVidSaver.</p>
      
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
