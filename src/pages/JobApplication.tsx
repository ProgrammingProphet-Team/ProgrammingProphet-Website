import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, UploadCloud, FileText } from 'lucide-react';
import { JOBS } from '../data/jobs';

export const JobApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === Number(id));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolioUrl: '',
    linkedinUrl: '',
    noticePeriod: 'Immediately',
    relocation: 'Yes'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [hasApplied, setHasApplied] = useState(false);

  // Check if they already applied
  useEffect(() => {
    window.scrollTo(0, 0);
    const applied = localStorage.getItem(`applied_job_${id}`);
    if (applied) {
      setHasApplied(true);
    }
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const data = new FormData();
      data.append('jobId', id || '');
      data.append('role', job?.role || '');
      
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          data.append(key, value as string | Blob);
        }
      });

      const response = await fetch('https://server.programmingprophet.site/api/apply', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Failed to submit application to server.');

      setStatus('success');
      localStorage.setItem(`applied_job_${id}`, 'true');
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('idle');
      alert('Failed to connect to backend server. Make sure it is running on port 5000.');
    }
  };

  return (
    <main className="pt-24 pb-20 px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <Link to={`/jobs/${job.id}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors font-medium mb-10 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Job Description
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {hasApplied ? (
            <motion.div key="applied" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Application Received</h2>
              <p className="text-slate-400 max-w-md mx-auto mb-8">
                You have already submitted an application for the <strong>{job.role}</strong> position. Our recruiting team is reviewing your profile!
              </p>
              <button onClick={() => navigate('/jobs')} className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold">Explore Other Roles</button>
            </motion.div>
          ) : status === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <CheckCircle2 size={64} className="text-cyan-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Application Successfully Submitted</h2>
              <p className="text-slate-400 max-w-md mx-auto mb-8">
                Thank you for applying for <strong>{job.role}</strong>. Your profile has been added to our system and an automated confirmation email has been sent to {formData.email}.
              </p>
              <button onClick={() => navigate(`/jobs/${job.id}`)} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl transition-all">Back to Job</button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Apply for {job.role}</h1>
                <p className="text-slate-400">Please provide your comprehensive details below.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">First Name *</label>
                      <input required name="firstName" onChange={handleInputChange} value={formData.firstName} type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Last Name *</label>
                      <input required name="lastName" onChange={handleInputChange} value={formData.lastName} type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address *</label>
                      <input required name="email" onChange={handleInputChange} value={formData.email} type="email" className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Phone Number *</label>
                      <input required name="phone" onChange={handleInputChange} value={formData.phone} type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Documents & Links</h3>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Resume / CV * (PDF, DOCX)</label>
                    <div className="w-full px-4 py-6 rounded-xl bg-slate-100/80 dark:bg-black/40 border-2 border-dashed border-white/10 hover:border-blue-500/50 transition-all text-center relative cursor-pointer group">
                       <input required type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                       <div className="flex flex-col items-center justify-center pointer-events-none">
                         <UploadCloud size={32} className={`mb-2 transition-colors ${formData.resume ? 'text-green-400' : 'text-slate-500 group-hover:text-blue-400'}`} />
                         <span className="font-medium text-slate-300">
                           {formData.resume ? formData.resume.name : "Drag & drop or browse to upload"}
                         </span>
                       </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">LinkedIn Profile</label>
                      <input name="linkedinUrl" onChange={handleInputChange} value={formData.linkedinUrl} type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Portfolio / Website</label>
                      <input name="portfolioUrl" onChange={handleInputChange} value={formData.portfolioUrl} type="url" placeholder="https://..." className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Cover Letter</label>
                     <textarea name="coverLetter" onChange={handleInputChange} value={formData.coverLetter} rows={5} placeholder="Tell us why you are a great fit..." className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Questionnaire</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Notice Period</label>
                      <select name="noticePeriod" onChange={handleInputChange} value={formData.noticePeriod} className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white">
                        <option className="bg-white dark:bg-slate-900">Immediately</option>
                        <option className="bg-white dark:bg-slate-900">1-2 Weeks</option>
                        <option className="bg-white dark:bg-slate-900">1 Month</option>
                        <option className="bg-white dark:bg-slate-900">2+ Months</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Open to Relocation?</label>
                      <select name="relocation" onChange={handleInputChange} value={formData.relocation} className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-black/40 border border-white/5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-900 dark:text-white">
                        <option className="bg-white dark:bg-slate-900">Yes</option>
                        <option className="bg-white dark:bg-slate-900">No</option>
                        <option className="bg-white dark:bg-slate-900">Remote Only</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-white/90 hover:bg-white active:bg-slate-200 active:scale-[0.98] text-slate-900 font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:scale-100"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>Submit Final Application <FileText size={18} /></>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">By submitting this form, you acknowledge our Candidate Privacy Policy and agree to technical screening conditions.</p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};
