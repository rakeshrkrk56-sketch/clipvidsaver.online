import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Contact ClipVidSaver.online for support, feedback, copyright concerns, and partnership requests." />
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Contact Us</h1>
      <p className="text-xl text-slate-400 mb-12">Need help with the AI Video Downloader?</p>

      <div className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-black/10 border border-slate-800 flex flex-col items-center">
        <p className="text-lg text-slate-400 mb-8 max-w-lg">
          For support, feedback, copyright concerns, partnership requests, or bug reports, contact us anytime and we’ll respond as soon as possible.
        </p>
        
        <a 
          href="mailto:claire9360@gmail.com" 
          className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 px-8 rounded-xl transition-all shadow-lg shadow-indigo-600/30 mb-6 text-lg w-full sm:w-auto min-w-[200px]"
        >
          Send Email
        </a>
        
        <p className="text-indigo-400 font-semibold mb-4">{`claire9360@gmail.com`}</p>
        
        <p className="text-sm text-slate-500 font-medium tracking-wide">Usually replies within 24–48 hours.</p>
      </div>
    </div>
    </>
  );
}
