import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Paperclip, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
  return (
    <main className="min-h-screen pt-[80px] bg-slate-900 relative">
      {/* Background Image */}
      <div
        // mix-blend-overlay
        className="absolute inset-0 z-0 opacity-40  mix-blend-overlay"
        style={{
          backgroundImage: 'url(/contact/b3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />


      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8 py-12 lg:py-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-12 ">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-blue-500 font-medium">Contact Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start lg:mx-20">

          {/* Left Column */}
          <div className="text-white lg:pr-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold mb-12 tracking-tight"
            >
              Contact us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-8">What happens next?</h3>

              <div className="relative border-l border-dashed border-gray-600 ml-4 space-y-10 pb-10">
                {/* Step 1 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300">
                    1
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-1">
                    An expert contacts you after having analyzed your requirements;
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300">
                    2
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-1">
                    If needed, we sign an NDA to ensure the highest privacy level;
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300">
                    3
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-1">
                    We submit a comprehensive project proposal with estimates, timelines, CVs, etc.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Ratings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xl text-white">
                  C
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider mb-1">4.9 ON CLUTCH</div>
                  <div className="flex gap-1 text-blue-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xl text-white">
                  G
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider mb-1">4.9 ON GOODFIRMS</div>
                  <div className="flex gap-1 text-blue-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 lg:p-12  shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
          >
            <form className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full pb-3 bg-transparent border-b border-gray-200 focus:border-blue-600 hover:border-gray-300 outline-none transition-colors duration-300 text-slate-900 placeholder:text-slate-500 text-[15px]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Corporate E-mail *"
                    className="w-full pb-3 bg-transparent border-b border-gray-200 focus:border-blue-600 hover:border-gray-300 outline-none transition-colors duration-300 text-slate-900 placeholder:text-slate-500 text-[15px]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="w-full pb-3 bg-transparent border-b border-gray-200 focus:border-blue-600 hover:border-gray-300 outline-none transition-colors duration-300 text-slate-900 placeholder:text-slate-500 text-[15px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <textarea
                  placeholder="Describe your project requirements *"
                  rows={3}
                  className="w-full pb-3 bg-transparent border-b border-gray-200 focus:border-blue-600 hover:border-gray-300 outline-none transition-colors duration-300 text-slate-900 placeholder:text-slate-500 text-[15px] resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4">
                <button type="button" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-slate-50 transition-all duration-300 text-sm font-semibold text-slate-700 w-full sm:w-auto shrink-0 group">
                  <Paperclip size={18} className="text-gray-500 group-hover:text-slate-700 transition-colors" />
                  Attach file
                </button>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                  No more than 3 files may be attached up to 3MB each. Formats: doc, docx, pdf, ppt, pptx.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-start">
                  <input type="checkbox" className="peer w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-600 cursor-pointer mt-0.5 transition-all duration-300 hover:border-blue-400" />
                </div>
                <span className="text-[15px] text-slate-600 select-none group-hover:text-slate-900 transition-colors duration-300">
                  I want to protect my data by signing an NDA. <span className="text-gray-400 inline-block ml-1 border border-gray-400 rounded-full w-4 h-4 text-center leading-none text-[10px] items-center justify-center transition-colors group-hover:border-slate-500 group-hover:text-slate-500">i</span>
                </span>
              </label>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-[15px]">
                  Send request
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <ShieldCheck size={20} className="text-green-500" />
                  Your privacy is protected
                </div>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
