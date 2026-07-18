import { motion } from 'framer-motion';
import { Send, Globe, Clock, Mail, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit contact form');

      setFormState('success');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <div className="bg-[#0A0F1E]">
      <section id="contact" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Background glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto items-stretch relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" p-8 sm:p-14 relative overflow-hidden border-1 border-slate-500"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight font-sans tracking-tight">
                Let's Build <br />
                <span className=" text-4xl md:text-5xl font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
                  The Future
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Ready to transform your ideas into reality? Our team of enterprise architects and engineers is ready to build your next-level advanced systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">

              {/* Left Column: Form */}
              <div>
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center p-4 text-center"
                  >
                    <div className="w-20 h-20 bg-blue-500/20 text-blue-600  flex items-center justify-center mb-6 border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                      <Send size={32} className="translate-x-1" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-blue dark:text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      Thank you for reaching out, {formData.firstName}! We've saved your details and a confirmation email has been sent to {formData.email}. Our team will get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setFormState('idle');
                        setFormData({ firstName: '', lastName: '', email: '', projectDetails: '' });
                      }}
                      className="px-8 py-3  bg-blue-500 text-blue-600 text-white font-bold transition-all border border-slate-700 hover:border-slate-500"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formState === 'error' && (
                      <div className="p-4  bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium text-center">
                        Failed to submit. Please ensure the backend server is running and try again.
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-200 uppercase tracking-widest pl-1 ">First Name</label>
                        <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-800 focus:outline-none focus:border-slate-500  focus:ring-slate-500 transition-all font-medium text-slate-300  placeholder-slate-400 dark:placeholder-slate-600 " placeholder="" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white uppercase tracking-widest pl-1 mt-2">Last Name</label>
                        <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-800 focus:outline-none focus:border-slate-500  focus:ring-slate-500 transition-all font-medium text-slate-300  placeholder-slate-400 dark:placeholder-slate-600" placeholder="" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-widest pl-1">Email Address</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-800 focus:outline-none focus:border-slate-500  focus:ring-slate-500 transition-all font-medium text-slate-300  placeholder-slate-400 dark:placeholder-slate-600" placeholder="" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white uppercase tracking-widest pl-1">Project Details</label>
                      <textarea required rows={4} name="projectDetails" value={formData.projectDetails} onChange={handleInputChange} className="w-full px-4 py-3 border border-slate-800 focus:outline-none focus:border-slate-500  focus:ring-slate-500 transition-all font-medium text-slate-300  placeholder-slate-400 dark:placeholder-slate-600 " placeholder="Describe your objectives..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4  active:bg-slate-200 active:scale-[0.98]  font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-sm  flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 group text-white bg-blue-800 hover:bg-blue-700 border border-blue-500"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-blue/40 border-t-black rounded-full animate-spin " />
                      ) : (
                        <>SUBMIT </>
                      )}
                    </button>
                    {/* <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /> */}
                    {/* <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="px-8 py-3   transition-all outline outline-1 outline-blue-500 text-white-600 hover:text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      Learn More
                    </motion.button> */}
                  </form>
                )}
              </div>

              {/* Right Column: Contact Info Details */}
              <div className="flex flex-col justify-center space-y-8 md:pl-8 md:border-l border-white/10">
                <div className="group/item flex items-center gap-5 p-4 group transition-all duration-300 border border-slate-700 hover:border-slate-500">
                  <div className="p-3 bg-blue-500/10 text-blue-600  group-hover:bg-blue-500 group-hover:text-white  transition-colors shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-500 transition-colors">Office Address</h4>
                    <p className="text-slate-400 text-sm">Krishna Nagar, Wadi Road, Thane, Maharashtra</p>
                  </div>
                </div>

                <div className="group/item flex items-center gap-5 p-4 group transition-all duration-300 border border-slate-700 hover:border-slate-500">
                  <div className="p-3 bg-blue-500/10 text-blue-600   group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-500 transition-colors">Direct Contact</h4>
                    <p className="text-slate-400 text-sm">team@wemurz.com</p>
                  </div>
                </div>

                <div className="group/item flex items-center gap-5 p-4 group transition-all duration-300 border border-slate-700 hover:border-slate-500">
                  <div className="p-3 bg-blue-500/10 text-blue-600   group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-500 transition-colors">Operating Hours</h4>
                    <p className="text-slate-400 text-sm">Mon-Fri, 10am-6pm IST<br />24/7 Enterprise Support</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

