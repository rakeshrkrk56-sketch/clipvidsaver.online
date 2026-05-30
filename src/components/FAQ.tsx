import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { PlatformConfig } from '../data/platforms';

interface FAQProps {
  platform?: PlatformConfig;
}

export default function FAQ({ platform }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { t } = useTranslation();

  const FAQS = useMemo(() => {
    const name = platform ? platform.name : 'Meta AI';
    if (platform) {
      return [
        {
          q: t('platform.q1', { name }),
          a: t('platform.a1', { name })
        },
        {
          q: t('platform.q2', { name }),
          a: t('platform.a2', { name })
        },
        {
          q: t('platform.q3', { name }),
          a: t('platform.a3', { name })
        },
        {
          q: t('platform.q4', { name }),
          a: t('platform.a4', { name })
        },
        {
          q: t('platform.q5', { name }),
          a: t('platform.a5', { name })
        }
      ];
    }

    return [
      {
        q: t('faq.q1'),
        a: t('faq.a1')
      },
      {
        q: t('faq.q2'),
        a: t('faq.a2')
      },
      {
        q: t('faq.q3'),
        a: t('faq.a3')
      },
      {
        q: t('faq.q4'),
        a: t('faq.a4')
      },
      ...(t('faq.q5') !== 'faq.q5' && t('faq.q5') ? [{
        q: t('faq.q5'),
        a: t('faq.a5')
      }] : [])
    ];
  }, [t, platform]);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }), [FAQS]);

  return (
    <section className="max-w-3xl mx-auto px-4 mb-24" aria-labelledby="faq-heading">
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
        {platform ? t('platform.faqTitle', { name: platform.name }) : t('faq.title')}
      </h2>
      <p className="text-center text-lg text-slate-600 mb-12">
        Common questions about {platform ? platform.name : 'ClipVidSaver'}.
      </p>
      
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-button-${idx}`;
          return (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl overflow-hidden border transition-colors ${isOpen ? 'border-indigo-400 shadow-lg shadow-indigo-500/10' : 'border-slate-200 shadow-sm'}`}
            >
              <button 
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <h3 className="font-semibold text-slate-800 text-lg pr-4 m-0">{faq.q}</h3>
                {isOpen ? (
                  <ChevronUp className="text-indigo-600 shrink-0" aria-hidden="true" />
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
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-lg border-t border-slate-100 mt-2">
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
