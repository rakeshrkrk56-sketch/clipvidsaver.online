import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function Safety() {
  return (
    <>
      <SEO title="Safety & Responsible Use" description="Read our safety guidelines and responsible use policy for ClipVidSaver.online." />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-emerald-500/20">
          <ShieldCheck size={18} />
          Safety & Responsible Use
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-black text-center text-white mb-4 tracking-tight">Safe Use Guidelines</h1>
      <p className="text-xl text-slate-400 text-center mb-4">ClipVidSaver.online is designed to help users save AI-generated content responsibly and legally.</p>
      <p className="text-sm font-bold text-center text-slate-500 uppercase tracking-wider mb-12">Last Updated: January 2026</p>

      <div className="space-y-8">
        <div className="bg-amber-500/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-amber-500/20">
          <h2 className="text-2xl font-bold text-amber-500 mb-3">Important Notice</h2>
          <p className="text-amber-200/80 text-lg">This tool is intended only for downloading content you personally created or content you have explicit permission to access and save.</p>
          <p className="text-amber-200/80 text-lg mt-4">Downloading copyrighted material without authorization may violate laws or the terms of the original platform.</p>
        </div>

        <section className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">What You CAN Do</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-400">
            <li>Download AI-generated videos you personally created</li>
            <li>Save your own generated content for backup or offline access</li>
            <li>Use downloaded files in your own creative projects</li>
            <li>Download shared content when permission has been granted</li>
            <li>Archive your own AI-generated media safely</li>
          </ul>
        </section>

        <section className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">What You CANNOT Do</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-400">
            <li>Download copyrighted videos without authorization</li>
            <li>Redistribute protected content illegally</li>
            <li>Use downloaded content to harm, impersonate, or deceive others</li>
            <li>Use the service for automated scraping or abuse</li>
            <li>Share illegal, hateful, or harmful material</li>
          </ul>
        </section>

        <section className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Copyright & Ownership</h2>
          <p className="text-lg text-slate-400 mb-4">AI-generated media may still be subject to platform rules, ownership rights, or licensing restrictions depending on the source platform and applicable laws.</p>
          <p className="text-lg text-slate-400 mb-4">ClipVidSaver.online does not claim ownership over any content processed through the service.</p>
          <p className="text-lg text-slate-400">If you believe any content violates your rights, please contact us immediately through the contact page or via:</p>
          <p className="text-indigo-400 font-semibold text-lg mt-2"><a href="mailto:claire9360@gmail.com" className="hover:text-indigo-300 transition-colors">claire9360@gmail.com</a></p>
        </section>

        <section className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Your Privacy & Data</h2>
          <p className="text-lg text-slate-400 mb-4">We take privacy seriously.</p>
          <p className="text-lg text-slate-400 mb-4">ClipVidSaver.online does not permanently store processed video files. Downloads are temporarily handled only during processing and are not retained after delivery.</p>
          <p className="text-lg text-slate-400">Basic analytics data may be collected to improve platform performance and user experience.</p>
        </section>

        <section className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-black/10 border border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Report Misuse or a Problem</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto">
            If you believe this tool is being misused for copyright infringement, privacy violations, or harmful activity, please contact us immediately.<br/><br/>We review reports as quickly as possible.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-4 px-8 rounded-xl transition-colors shadow-lg shadow-indigo-600/30 text-lg w-full sm:w-auto min-w-[200px]"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
    </>
  );
}
