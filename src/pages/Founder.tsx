import SEO from '../components/SEO';

export default function Founder() {
  return (
    <>
      <SEO title="About the Founder" description="Learn about the independent developer behind ClipVidSaver.online." />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">About the Founder</h1>
      <p className="text-xl text-slate-600 mb-12">Built independently with a focus on simplicity and creator freedom.</p>

      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-black/10 border border-slate-200 mb-12">
        <h2 className="text-2xl font-bold text-slate-100 mb-1">ClipVidSaver.online Founder</h2>
        <p className="text-indigo-600 font-medium mb-4">Independent Developer & Creator</p>
        <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Building tools for digital creators since 2026</p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why I Built This</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">I started exploring AI-generated content and quickly noticed how difficult it was to reliably save generated videos before links expired or content disappeared.</p>
            <p className="mb-4">That frustration inspired me to build ClipVidSaver.online — a lightweight platform focused on speed, simplicity, and accessibility.</p>
            <p>The goal was never to create a complicated platform. I wanted a tool that works instantly for creators who simply need quick and reliable downloads.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What This Site Is</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">ClipVidSaver.online is an independently developed project focused on helping users save and manage AI-generated video content more efficiently.</p>
            <p>Every improvement, update, and feature is built with simplicity and usability in mind.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">My Commitment to Users</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-600">
            <li>I do not permanently store processed videos</li>
            <li>I do not sell user data</li>
            <li>I continuously improve the platform based on feedback</li>
            <li>I encourage responsible and legal content downloading</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-4">
            If you have suggestions, bug reports, partnership requests, or copyright concerns, contact:
          </p>
          <a href="mailto:claire9360@gmail.com" className="text-indigo-600 font-semibold hover:text-indigo-500 transition-colors text-lg">claire9360@gmail.com</a>
        </section>
      </div>
    </div>
    </>
  );
}
