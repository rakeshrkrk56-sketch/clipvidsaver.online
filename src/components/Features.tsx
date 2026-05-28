import { ListOrdered, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="max-w-3xl mx-auto px-4 mb-20 space-y-6" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">{t('features.step1Title')}</h2>
      
      <article className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
        <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
          <ListOrdered size={24} className="text-indigo-400 w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{t('features.step1Title')}</h3>
        <ol className="list-decimal pl-5 space-y-3 text-slate-400 leading-relaxed text-lg">
          <li><strong>{t('features.stepLabel1')}</strong>: {t('features.step1Item1')}</li>
          <li><strong>{t('features.stepLabel2')}</strong>: {t('features.step1Item2')}</li>
          <li><strong>{t('features.stepLabel3')}</strong>: {t('features.step1Item3')}</li>
        </ol>
      </article>

      <article className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
        <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
          <ShieldCheck size={24} className="text-indigo-400 w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{t('features.step2Title')}</h3>
        <p className="text-slate-400 leading-relaxed text-lg">
          {t('features.step2Desc1')} <strong className="font-medium text-slate-200">{t('features.watermarkFree')}</strong> {t('features.step2Desc2')}
        </p>
      </article>

    </section>
  );
}
