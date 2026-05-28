import { ListOrdered, ShieldCheck } from 'lucide-react';

export default function Features() {
  return (
    <section className="max-w-3xl mx-auto px-4 mb-20 space-y-6" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">How to Download Meta AI Generated Videos</h2>
      
      <article className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
        <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
          <ListOrdered size={24} className="text-indigo-400 w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">How to Download Meta AI Generated Videos</h3>
        <ol className="list-decimal pl-5 space-y-3 text-slate-400 leading-relaxed text-lg">
          <li><strong>Copy the link</strong>: Get the URL of the Meta AI generated video you want to save.</li>
          <li><strong>Paste the URL</strong>: Insert it into the ClipVidSaver input box at the top of this page.</li>
          <li><strong>Download instantly</strong>: Click download and save your HD MP4 file without any watermarks.</li>
        </ol>
      </article>

      <article className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
        <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
          <ShieldCheck size={24} className="text-indigo-400 w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Why Use ClipVidSaver for Meta AI Videos?</h3>
        <p className="text-slate-400 leading-relaxed text-lg">
          ClipVidSaver is specifically built for the Meta AI format. While standard downloaders often fail to process dynamic video generations or leave intrusive branding, our engine natively extracts the raw source file. You get a pristine, <strong className="font-medium text-slate-200">watermark-free HD MP4</strong> that accurately preserves the original quality and audio.
        </p>
      </article>

    </section>
  );
}
