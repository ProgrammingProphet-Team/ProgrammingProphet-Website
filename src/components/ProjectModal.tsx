import { useState } from 'react';
import { X, Paperclip, Smartphone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ isOpen, onClose }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }

    // Auto-resize for textarea
    if (e.target.tagName.toLowerCase() === 'textarea') {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let error = '';

    if (!value.trim()) {
      if (name === 'name') error = 'Please, enter your name';
      if (name === 'email') error = 'Please, enter your corporate E-mail';
      if (name === 'phone') error = 'Please, enter your phone number';
      if (name === 'requirements') error = 'Please, describe your IT project in a few words';
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: '', email: '', phone: '', requirements: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please, enter your name';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please, enter your corporate E-mail';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please, enter your phone number';
      isValid = false;
    }
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please, describe your IT project in a few words';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', requirements: '' });
          setTimeout(() => setSubmitStatus('idle'), 5000);
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
            className="relative w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-14">
              <h2 className="text-4xl font-semibold text-slate-900 mb-10">Let's discuss your project</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative pb-5">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`peer block w-full appearance-none bg-transparent border-0 border-b pb-2 pt-3 text-[18px] text-slate-900 focus:outline-none focus:ring-0 transition-colors duration-300 ${errors.name ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500'
                      }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className={`pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-[18px] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 ${errors.name ? 'text-gray-500' : 'text-gray-500'
                      }`}
                  >
                    Name *
                  </label>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: [-5, 5, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 text-sm text-orange-500"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div className="relative pb-5">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`peer block w-full appearance-none bg-transparent border-0 border-b pb-2 pt-3 text-[18px] text-slate-900 focus:outline-none focus:ring-0 transition-colors duration-300 ${errors.email ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500'
                      }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    E-mail *
                  </label>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: [-5, 5, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 text-sm text-orange-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div className="relative pb-5">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`peer block w-full appearance-none bg-transparent border-0 border-b pb-2 pt-3 text-[18px] text-slate-900 focus:outline-none focus:ring-0 transition-colors duration-300 ${errors.phone ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500'
                      }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Phone number *
                  </label>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: [-5, 5, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 text-sm text-orange-500"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                <div className="relative pb-5">
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={1}
                    className={`peer block w-full max-h-[140px] appearance-none bg-transparent border-0 border-b pb-2 pt-3 text-[18px] text-slate-900 focus:outline-none focus:ring-0 resize-none transition-colors duration-300 ${errors.requirements ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500 expand'
                      }`}
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="requirements"
                    className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                  >
                    Describe your project requirements *
                  </label>
                  {errors.requirements && (
                    <motion.p
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: [-5, 5, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 text-sm text-orange-500"
                    >
                      {errors.requirements}
                    </motion.p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
                  <button type="button" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 hover:border-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-semibold text-slate-900 w-full sm:w-auto shrink-0 group">
                    <Paperclip size={18} className="text-black group-hover:text-white transition-colors" />
                    Attach file
                  </button>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                    No more than 3 files may be attached up to 3MB each. Formats: doc, docx, pdf, ppt, pptx.
                  </p>
                </div>

                {/* <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-start">
                  <input type="checkbox" className="peer w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-600 cursor-pointer mt-0.5 transition-all duration-300 hover:border-blue-400" />
                </div>
                <span className="text-[15px] text-slate-600 select-none group-hover:text-slate-900 transition-colors duration-300">
                  I want to protect my data by signing an NDA. <span className="text-gray-400 inline-block ml-1 border border-gray-400 rounded-full w-4 h-4 text-center leading-none text-[10px] items-center justify-center transition-colors group-hover:border-slate-500 group-hover:text-slate-500">i</span>
                </span>
              </label> */}

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-6">
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-8 py-3.5 duration-300 hover:shadow-lg text-[15px] flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : 'Send request'}
                  </button>
                  <div className="flex items-center gap-2 md:text-sm lg:text-base text-gray-500 font-medium">
                    <ShieldCheck size={24} className=" text-green-600" />
                    Your privacy is protected
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-sm font-medium p-3 bg-green-50 border border-green-200 rounded-lg">
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-orange-600 text-sm font-medium p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}

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
