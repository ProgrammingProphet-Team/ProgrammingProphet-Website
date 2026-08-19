import { motion } from 'framer-motion';
import { Shield, Lock, Info, Database, Activity, Mail } from 'lucide-react';

export const PrivacyPolicy = () => {
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
            <Shield size={32} />
            <span className="text-xl font-bold uppercase tracking-widest">Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300">Policy</span>
          </h1>

          <p className="text-slate-400 text-lg mb-12 border-b border-slate-800 pb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Info className="text-blue-500" /> 1. Introduction
              </h2>
              <p>
                Welcome to ProgrammingProphet, powered by Gyanti Enterprises ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
              <p>
                When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Database className="text-blue-500" /> 2. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website, or otherwise contacting us.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-blue-500">
                <li><strong>Personal Information Provided by You:</strong> We collect names, phone numbers, email addresses, job titles, and other similar information.</li>
                <li><strong>Credentials:</strong> We collect passwords, password hints, and similar security information used for authentication and account access if applicable.</li>
                <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Activity className="text-blue-500" /> 3. How We Use Your Information
              </h2>
              <p>
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-blue-500">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To post testimonials with your consent.</li>
                <li>To deliver targeted advertising to you.</li>
                <li>To request feedback and to contact you about your use of our Website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Lock className="text-blue-500" /> 4. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="space-y-4 border-t border-slate-800 pt-8 mt-12">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                <Mail className="text-blue-500" /> Contact Us
              </h2>
              <p>
                If you have questions or comments about this policy, you may email us or contact us by post to:
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
