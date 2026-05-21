import SEO from '../components/SEO';

export default function Copyright() {
  return (
    <>
      <SEO title="Copyright Policy & DMCA" description="Read our copyright policy and DMCA takedown procedure. We respect intellectual property rights." />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Copyright Policy & DMCA</h1>
      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-12">Last Updated: January 2026</p>

      <div className="prose prose-lg text-slate-400 max-w-none space-y-8">
        <p>ClipVidSaver.online respects intellectual property rights and applicable copyright laws. This page explains how copyright-related concerns and DMCA requests are handled on our platform.</p>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Copyright Respect</h2>
          <p>ClipVidSaver.online operates as a technical utility that allows users to process and download publicly accessible video content using direct URLs they provide themselves.</p>
          <p>We respect the rights of creators, copyright holders, and digital platforms. The service is not intended to promote copyright infringement or unauthorized redistribution of protected content.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">User Responsibility</h2>
          <p>Users are fully responsible for ensuring that their use of ClipVidSaver.online complies with applicable laws and the terms of the original content platform.</p>
          <p>We strongly encourage users to only download content they personally created, own, or have permission to access and save.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">No Storage or Hosting</h2>
          <p>ClipVidSaver.online does not permanently host, archive, or catalog downloaded videos.</p>
          <p>The service functions only as a temporary processing bridge between the original source and the user’s device.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">No Content Indexing</h2>
          <p>ClipVidSaver.online does not provide any searchable database, media library, discovery system, or indexing service for copyrighted material.</p>
          <p>Users must submit their own direct URLs for processing.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">DMCA Takedown Procedure</h2>
          <p>If you believe content associated with ClipVidSaver.online violates your copyright, you may submit a DMCA request containing:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Identification of copyrighted work</li>
            <li>Exact infringing URL</li>
            <li>Your contact information</li>
            <li>Proof of ownership or authorization</li>
            <li>Good-faith declaration statement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">DMCA Contact</h2>
          <p>Send copyright or DMCA-related notices to:</p>
          <p className="mt-2"><a href="mailto:claire9360@gmail.com" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">claire9360@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Response Policy</h2>
          <p>All valid notices are reviewed as quickly as possible. Appropriate action may be taken after verification.</p>
          <p>False, misleading, or abusive claims may result in legal responsibility for the sender.</p>
        </section>
      </div>
    </div>
    </>
  );
}
