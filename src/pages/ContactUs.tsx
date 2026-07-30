import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Paperclip, ShieldCheck, Zap, Shield, Rocket, Handshake, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
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

  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (!selectedFiles.length) return;

    setFileError('');

    const validExtensions = ['.pdf', '.doc', '.docx', '.ppt', '.pptx'];
    const newFiles = [...files, ...selectedFiles];

    if (newFiles.length > 3) {
      setFileError('You can only attach up to 3 files.');
      return;
    }

    let errorMsg = '';
    const validNewFiles: File[] = [];

    for (const file of selectedFiles) {
      const isValidType = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));

      if (!isValidType) {
        errorMsg = 'Invalid file format. Allowed: doc, docx, pdf, ppt, pptx.';
        break;
      }

      if (file.size > 3 * 1024 * 1024) {
        errorMsg = `File "${file.name}" exceeds the 3MB limit.`;
        break;
      }

      validNewFiles.push(file);
    }

    if (errorMsg) {
      setFileError(errorMsg);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFiles([...files, ...validNewFiles]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setFileError('');
  };

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
      newErrors.requirements = 'Please, describe your project in a few words';
      isValid = false;
    }

    if (fileError) {
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('requirements', formData.requirements);
        files.forEach(file => {
          formDataToSend.append('files', file);
        });

        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formDataToSend,
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', requirements: '' });
          setFiles([]);
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


      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-6 ">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white lg:mb-12 ">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-blue-500 font-medium ">Contact Us</span>
        </div>

        <div className="grid lg:grid-cols-2  items-start lg:mx-20 mt-10 lg:mt-18">

          {/* Left Column */}
          <div className="text-white lg:pr-12 mx-8 hidden lg:block">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold mb-12 tracking-tight "
            >
              Contact us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6">What happens next?</h3>

              <div className="ml-4 space-y-6 pb-12">
                {/* Step 1 */}
                <div className="relative pl-12">
                  <div className="absolute left-[15px] top-8 -bottom-12 border-l border-dashed border-gray-400"></div>
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-semibold text-gray-300 z-10">
                    1
                  </div>
                  <h4 className="text-white font-semibold font-2xl mb-1 pt-1">Discovery Call</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    We discuss your goals, challenges, budget, and timeline to understand your business requirements.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-12">
                  <div className="absolute left-[15px] top-8 -bottom-12 border-l border-dashed border-gray-400"></div>
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300 z-10">
                    2
                  </div>
                  <h4 className="text-white font-semibold mb-1 pt-1">Solution Architecture</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    We evaluate the best technology stack, project scope, and implementation approach for your product.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative pl-12">
                  <div className="absolute left-[15px] top-8 -bottom-12 border-l border-dashed border-gray-400"></div>
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300 z-10">
                    3
                  </div>
                  <h4 className="text-white font-semibold mb-1 pt-1">Proposal & Planning</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    You'll receive a detailed proposal including timeline, milestones, pricing, and delivery roadmap.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-sm font-semibold text-gray-300 z-10">
                    4
                  </div>
                  <h4 className="text-white font-semibold mb-1 pt-1">Development & Delivery</h4>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    Once approved, we begin development with timely updates, testing, deployment, and post-launch support.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Info */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700 max-w-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-blue-500 shrink-0" />
                  <span className="text-[15px]">+91 70391679055 / 7715933711</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-blue-500 shrink-0" />
                  <a href="mailto:contact@programmingprophet.com" className="text-[15px] hover:text-blue-400 transition-colors">
                    contact@programmingprophet.com
                  </a>
                </div>
              </div>
            </motion.div> */}

            {/* Trust Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-6xl grid grid-cols-1 sm:grid-cols-4 gap-6 mt-14 pb-18 hidden lg:grid"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10   border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-white mb-0.5">Fast Response</div>
                  <div className="text-[13px] text-gray-400">Within 24 Hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10  border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-white mb-0.5">Security First</div>
                  <div className="text-[13px] text-gray-400">Best Practices</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10   border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Rocket size={20} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-white mb-0.5">Production Ready</div>
                  {/* <div className="text-[13px] text-gray-400">Deployment Ready</div> */}
                  <div className="text-[13px] text-gray-400">Deployment, CI/CD, Monitoring</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10   border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Handshake size={20} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-white mb-0.5">Long-Term Support</div>
                  <div className="text-[13px] text-gray-400">Beyond Launch</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 lg:p-12 mt-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative pb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`peer block w-full appearance-none bg-transparent border-0 border-b pb-2 pt-3 lg:text-[18px] text-slate-900 focus:outline-none focus:ring-0 transition-colors duration-300 ${errors.name ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500'
                    }`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform lg:text-[18px] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 ${errors.name ? 'text-gray-500' : 'text-gray-500'
                    }`}
                >
                  Name
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
                  className={`peer block w-full appearance-none bg-transparent border-0 border-b pb-2 pt-3 lg:text-[18px] text-slate-900 focus:outline-none focus:ring-0 transition-colors duration-300 ${errors.email ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500'
                    }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform lg:text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  E-mail
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
                  className={`peer block w-full appearance-none bg-transparent border-0 border-b pb-2 pt-3 text-[14px] lg:text-[18px] text-slate-900 focus:outline-none focus:ring-0 transition-colors duration-300 ${errors.phone ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500'
                    }`}
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform ] lg:text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Phone number
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
                  className={`peer block w-full max-h-[140px] appearance-none bg-transparent border-0 border-b pb-2 pt-3 lg:text-[18px] text-slate-900 focus:outline-none focus:ring-0 resize-none transition-colors duration-300 ${errors.requirements ? 'border-orange-500 focus:border-orange-500' : 'border-gray-400 focus:border-blue-600 hover:border-gray-500 expand'
                    }`}
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="requirements"
                  className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform  lg:text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Describe your project requirements
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

              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".doc,.docx,.pdf,.ppt,.pptx"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 hover:border-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-semibold text-slate-900 w-full sm:w-auto shrink-0 group"
                  >
                    <Paperclip size={18} className="text-black group-hover:text-white transition-colors" />
                    Attach file
                  </button>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                      No more than 3 files may be attached up to 3MB each. Formats: doc, docx, pdf, ppt, pptx.
                    </p>
                    {fileError && <p className="text-sm font-medium text-orange-500">{fileError}</p>}
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="flex flex-col gap-2 mt-1">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-50 px-4 py-2 border border-slate-200 rounded text-sm text-slate-700 max-w-md">
                        <span className="truncate mr-4 font-medium">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove file"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
                  ) : 'Let\'s Build Together'}
                </button>
                <div className="flex items-center gap-2 md:text-sm lg:text-base text-gray-500 font-medium hidden lg:block">
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
                <div className="text-orange-600 text-sm font-medium p-3 bg-orange-50 border border-orange-200 ">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

            </form>
          </motion.div>


        </div>
      </div>
    </main>
  );
};
