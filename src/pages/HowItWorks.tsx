import SEO from '../components/SEO';

export default function HowItWorks() {
  return (
    <>
      <SEO title="How It Works" description="Learn how to use ClipVidSaver.online to download AI-generated videos in HD MP4 format for free." />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">How ClipVidSaver.online Works</h1>
      <p className="text-xl text-slate-400 mb-12">Download videos in just a few simple steps.</p>

      <div className="space-y-8">
        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <div className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">Step 1</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Copy the Video URL</h2>
          <p className="text-slate-400 text-lg">Find the AI-generated video you want to save and copy its full link directly from your browser or sharing page.</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <div className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">Step 2</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Paste the Link</h2>
          <p className="text-slate-400 text-lg">Paste the copied URL into the ClipVidSaver.online downloader input field.</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <div className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">Step 3</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Choose Your Format</h2>
          <p className="text-slate-400 text-lg">Select the video quality and format that works best for your device and storage needs.</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <div className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">Step 4</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Download & Save</h2>
          <p className="text-slate-400 text-lg">Click download and save your video directly to your device instantly.</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Simple, Fast & Reliable</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          ClipVidSaver.online is designed to make AI video downloading easy for everyone without unnecessary steps or confusion.
        </p>
      </div>
    </div>
    </>
  );
}
