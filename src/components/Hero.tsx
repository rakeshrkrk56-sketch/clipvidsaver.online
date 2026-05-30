import { useTranslation } from 'react-i18next';
import { PlatformConfig } from '../data/platforms';

interface HeroProps {
  platform?: PlatformConfig;
}

export default function Hero({ platform }: HeroProps) {
  const { t } = useTranslation();

  const title1 = platform 
    ? t('platform.title1', { name: platform.name }) 
    : "Download AI Videos";

  const title2 = platform 
    ? t('platform.title2') 
    : "Without Watermark";

  return (
    <section className="text-center pt-16 pb-10 px-4" aria-labelledby="hero-title">
      <div className={`inline-block border px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ${platform ? platform.badgeBg : 'bg-indigo-50 border-indigo-200 text-indigo-700'}`}>
        {platform ? t('platform.tag') : t('hero.tag')}
      </div>
      <h1 id="hero-title" className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight drop-shadow-sm">
        {title1} <br className="md:hidden"/> {title2}
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        {platform ? (
          <>
            {t('platform.desc1')}{' '}
            <strong className="font-medium text-slate-900">
              {t('platform.watermarks', { name: platform.name })}
            </strong>{' '}
            {t('platform.desc2', { name: platform.name })}{' '}
            <strong className="font-medium text-slate-900">
              {t('platform.hdMp4')}
            </strong>.
          </>
        ) : (
          <>
            ClipVidSaver is the best free online tool to download premium, watermark-free{' '}
            <strong className="font-medium text-slate-900">HD MP4 files</strong> directly from{' '}
            <strong className="font-medium text-slate-900">Meta AI</strong>,{' '}
            <strong className="font-medium text-slate-900">Kling AI</strong>, and more.
          </>
        )}
      </p>
    </section>
  );
}
