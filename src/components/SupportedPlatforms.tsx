import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PLATFORMS, PlatformConfig } from '../data/platforms';
import { Sparkles, ArrowRight, Layers, ShieldCheck, Play } from 'lucide-react';

export default function SupportedPlatforms() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  
  const currentLang = i18n.language || 'en';

  const getLink = (slug: string) => {
    return currentLang === 'en' ? `/${slug}` : `/${currentLang}/${slug}`;
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" aria-labelledby="platforms-title">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          Supported Networks
        </span>
        <h2 id="platforms-title" className="text-3xl md:text-4xl font-black text-slate-800 mt-3 tracking-tight">
          Supported AI Video Platforms
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          ClipVidSaver extraction nodes are custom-tailored for each leading artificial intelligence model to ensure pixel-perfect, watermark-free delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLATFORMS.map((platform) => {
          const CardContent = (
            <div className="h-full flex flex-col justify-between p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              {/* Decorative side accent */}
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${platform.gradient}`} />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                    {platform.name}
                  </h3>
                  {platform.isSupported ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1 shrink-0">
                      <ShieldCheck size={12} className="stroke-[2.5]" /> Live
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 shrink-0">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                {platform.isSupported ? (
                  <>
                    <span className="text-indigo-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Open Downloader <ArrowRight size={14} className="stroke-[2.5]" />
                    </span>
                    <span className="bg-indigo-50 p-2 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Play size={14} className="fill-current stroke-none" />
                    </span>
                  </>
                ) : (
                  <span className="text-slate-400 font-medium text-xs">
                    In development for Q3 2026
                  </span>
                )}
              </div>
            </div>
          );

          return platform.isSupported ? (
            <Link 
              key={platform.id} 
              to={getLink(platform.slug)}
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-2xl transition-all"
              title={`${platform.name} Video Downloader`}
            >
              {CardContent}
            </Link>
          ) : (
            <div key={platform.id} className="opacity-75">
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
