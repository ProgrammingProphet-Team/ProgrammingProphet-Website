import { useState } from 'react';
import { X, Paperclip, Smartphone, Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-14">
              <h2 className="text-4xl font-bold text-slate-900 mb-10">Let's discuss your project</h2>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-slate-900 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail *"
                    required
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-slate-900 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    required
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-slate-900 text-sm"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your project requirements *"
                    required
                    rows={3}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-400 text-slate-900 resize-none text-sm"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button type="button" className="flex items-center gap-2 border border-gray-300 px-6 py-2.5 hover:bg-gray-50 transition-colors text-slate-700 text-sm font-semibold">
                    <Paperclip size={16} /> Attach file
                  </button>
                  <p className="text-xs text-gray-500 max-w-[220px] leading-relaxed">
                    No more than 3 files may be attached up to 3MB each. Formats: doc, docx, pdf, ppt, pptx.
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-6">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 transition-colors">
                    Send request
                  </button>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-500" /> Your privacy is protected
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Info */}
            {/* bg-[#1D1D21]   bg-[#1D1D21]  bg-[#4A494F] */}
            <div className="w-full md:w-1/2  bg-[#1D1D21] backdrop-blur-md p-8 md:p-14 text-white flex flex-col justify-center relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-slate-500">
                  <img src="/profile/Aditya_Vishwakarma.jpeg" alt="Aditya Vishwakarma" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Aditya Vishwakarma</h4>
                  <p className="text-sm text-slate-300 mt-1">Founder of ProgrammingProphet</p>
                </div>
              </div>

              <p className="text-slate-200 leading-relaxed mb-8 text-sm">
                Reach out to ProgrammingProphet to receive a free consultation and entrust your IT initiative to a company of software experts.
              </p>

              <div className="h-px bg-slate-600/50 w-full mb-8"></div>

              <h4 className="font-bold mb-5 text-xl">Contact us</h4>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone size={18} className="text-white-500" />
                  <span className="text-slate-200 font-medium">+91 70391679055 / 7715933711</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-white-500" />
                  {/* <span className="text-slate-200 font-medium">aditya.vishwakarma@programmingprophet.site</span> */}

                  <span className="text-slate-200 font-medium">contact@programmingprophet.site</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
