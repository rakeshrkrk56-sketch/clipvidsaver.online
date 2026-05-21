export default function Hero() {
  return (
    <section className="text-center pt-16 pb-10 px-4" aria-labelledby="hero-title">
      <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
        Free AI Video Link Downloader
      </div>
      <h1 id="hero-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
        Download AI <br className="md:hidden"/> Generated Video
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Simply paste your <span className="font-semibold text-slate-200">AI video link</span> below to save the file instantly. 
        Export your generated media as an <strong className="font-medium text-white">HD MP4</strong> file with audio — free and secure using our <strong className="font-medium text-white">no watermark downloader</strong>.
      </p>
    </section>
  );
}
