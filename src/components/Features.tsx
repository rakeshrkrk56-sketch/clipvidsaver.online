import { ListOrdered, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PlatformConfig } from '../data/platforms';

interface FeaturesProps {
  platform?: PlatformConfig;
}

export default function Features({ platform }: FeaturesProps) {
  const { t } = useTranslation();
  
  const name = platform ? platform.name : 'Meta AI';

  const step1Title = platform 
    ? t('platform.step1Title', { name }) 
    : t('features.step1Title');

  const step1Item1 = platform 
    ? t('platform.step1Item1', { name }) 
    : t('features.step1Item1');

  const step1Item2 = platform 
    ? t('platform.step1Item2', { name }) 
    : t('features.step1Item2');

  const step1Item3 = platform 
    ? t('platform.step1Item3', { name }) 
    : t('features.step1Item3');

  const step2Title = platform 
    ? t('platform.step2Title', { name }) 
    : t('features.step2Title');

  const step2Desc1 = platform 
    ? t('platform.step2Desc1', { name }) 
    : t('features.step2Desc1');

  const step2Desc2 = platform 
    ? t('platform.step2Desc2', { name }) 
    : t('features.step2Desc2');

  const watermarkFree = platform 
    ? t('platform.watermarkFree', { name }) 
    : t('features.watermarkFree');

  return (
    <section className="max-w-3xl mx-auto px-4 mb-20 space-y-6">
      
      <article className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">
        <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-200">
          <ListOrdered size={24} className="text-indigo-600 w-6 h-6" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">{step1Title}</h2>
        <ol className="list-decimal pl-5 space-y-3 text-slate-600 leading-relaxed text-lg">
          <li><strong className="text-slate-900">{t('features.stepLabel1')}</strong>: {step1Item1}</li>
          <li><strong className="text-slate-900">{t('features.stepLabel2')}</strong>: {step1Item2}</li>
          <li><strong className="text-slate-900">{t('features.stepLabel3')}</strong>: {step1Item3}</li>
        </ol>
      </article>

      <article className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">
        <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-200">
          <ShieldCheck size={24} className="text-indigo-600 w-6 h-6" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-3">{step2Title}</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          {step2Desc1} <strong className="font-medium text-slate-900">{watermarkFree}</strong> {step2Desc2}
        </p>
      </article>

    </section>
  );
}
