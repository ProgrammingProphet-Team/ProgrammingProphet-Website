import { motion } from 'framer-motion';
import { Scale, Handshake, Copyright, UserCheck, AlertTriangle, Mail } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1000px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 text-blue-500 mb-6">
            <Scale size={32} />
            <span className="text-xl font-bold uppercase tracking-widest">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300">Service</span>
          </h1>

          <p className="text-slate-400 text-lg mb-12 border-b border-slate-800 pb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Handshake className="text-blue-500" /> 1. Agreement to Terms
              </h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ProgrammingProphet, powered by Gyanti Enterprises ("we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
              <p>
                You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Copyright className="text-blue-500" /> 2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
              </p>
              <p>
                The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <UserCheck className="text-blue-500" /> 3. User Representations
              </h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-blue-500">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <AlertTriangle className="text-blue-500" /> 4. Limitations of Liability
              </h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="space-y-4 border-t border-slate-800 pt-8 mt-12">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                <Mail className="text-blue-500" /> Contact Us
              </h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="bg-slate-900/80 p-6 rounded-lg border border-slate-800 mt-4 inline-block">
                <p className="font-bold text-white mb-1">ProgrammingProphet (Gyanti Enterprises)</p>
                <p className="text-slate-400">Email: contact@programmingprophet.com</p>
              </div>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
