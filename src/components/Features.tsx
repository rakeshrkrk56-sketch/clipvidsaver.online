import { PlaySquare, Unlock } from 'lucide-react';

export default function Features() {
  return (
    <section className="max-w-3xl mx-auto px-4 mb-20 space-y-6" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">Downloader Features</h2>
      
      <article className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
        <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
          <PlaySquare className="text-indigo-400 w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">HD MP4 & Audio Integration</h3>
        <p className="text-slate-400 leading-relaxed text-lg">
          We ensure you download files with crystal clear quality using our <strong className="font-medium text-slate-200">HD MP4 downloader</strong> technology. We automatically synchronize the visual and audio components for you.
        </p>
      </article>

      <article className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
        <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
          <Unlock className="text-indigo-400 w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">No Watermark Downloader</h3>
        <p className="text-slate-400 leading-relaxed text-lg">
          Get a clean <span className="font-semibold text-slate-200">video without any distractive elements</span>. Perfect for creators who need professional-looking files directly from AI generators.
        </p>
      </article>

    </section>
  );
}
