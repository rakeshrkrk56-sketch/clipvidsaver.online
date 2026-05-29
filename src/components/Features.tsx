import { ListOrdered, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="max-w-3xl mx-auto px-4 mb-20 space-y-6">
      
      <article className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">
        <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-200">
          <ListOrdered size={24} className="text-indigo-600 w-6 h-6" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">{t('features.step1Title')}</h2>
        <ol className="list-decimal pl-5 space-y-3 text-slate-600 leading-relaxed text-lg">
          <li><strong className="text-slate-900">{t('features.stepLabel1')}</strong>: {t('features.step1Item1')}</li>
          <li><strong className="text-slate-900">{t('features.stepLabel2')}</strong>: {t('features.step1Item2')}</li>
          <li><strong className="text-slate-900">{t('features.stepLabel3')}</strong>: {t('features.step1Item3')}</li>
        </ol>
      </article>

      <article className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">
        <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-200">
          <ShieldCheck size={24} className="text-indigo-600 w-6 h-6" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">{t('features.step2Title')}</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          {t('features.step2Desc1')} <strong className="font-medium text-slate-900">{t('features.watermarkFree')}</strong> {t('features.step2Desc2')}
        </p>
      </article>

    </section>
  );
}
