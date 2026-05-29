import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Contact ClipVidSaver.online for support, feedback, copyright concerns, and partnership requests." />
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Contact Us</h1>
      <p className="text-xl text-slate-600 mb-12">Need help with the AI Video Downloader?</p>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/10 border border-slate-200 flex flex-col items-center">
        <p className="text-lg text-slate-600 mb-8 max-w-lg">
          For support, feedback, copyright concerns, partnership requests, or bug reports, contact us anytime and we’ll respond as soon as possible.
        </p>
        
        <a 
          href="mailto:claire9360@gmail.com" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium py-4 px-8 rounded-xl transition-all shadow-sm mb-6 text-lg w-full sm:w-auto min-w-[200px]"
        >
          Send Email
        </a>
        
        <p className="text-indigo-600 font-semibold mb-4">{`claire9360@gmail.com`}</p>
        
        <p className="text-sm text-slate-500 font-medium tracking-wide">Usually replies within 24–48 hours.</p>
      </div>
    </div>
    </>
  );
}
