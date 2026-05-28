import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-center pt-16 pb-10 px-4" aria-labelledby="hero-title">
      <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
        {t('hero.tag')}
      </div>
      <h1 id="hero-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
        {t('hero.title1')} <br className="md:hidden"/> {t('hero.title2')}
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        {t('hero.desc1')} <strong className="font-medium text-white">{t('hero.metaAiWatermarks')}</strong> {t('hero.desc2')} <strong className="font-medium text-white">{t('hero.hdMp4')}</strong>.
      </p>
    </section>
  );
}
