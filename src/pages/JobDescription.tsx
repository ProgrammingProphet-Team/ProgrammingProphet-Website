import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, Clock, GraduationCap } from 'lucide-react';
import { JOBS } from '../data/jobs';

export const JobDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <button onClick={() => navigate('/jobs')} className="text-blue-500 font-medium hover:underline">Return to Openings</button>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20 px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      <Link to="/jobs" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors font-medium mb-10 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> All Openings
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[2.5rem] p-8 md:p-14 border border-slate-200 dark:border-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <header className="mb-14 border-b border-slate-200 dark:border-slate-800 pb-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
            {job.role}
          </h1>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm md:text-base text-slate-600 dark:text-slate-300">
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Department</span>
              <span className="flex items-center gap-2 font-medium"><Briefcase size={18} className="text-blue-500" /> {job.dept}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Work Type</span>
              <span className="flex items-center gap-2 font-medium"><Clock size={18} className="text-purple-500" /> {job.type}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Location</span>
              <span className="flex items-center gap-2 font-medium"><MapPin size={18} className="text-cyan-500" /> {job.location}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Experience</span>
              <span className="flex items-center gap-2 font-medium"><GraduationCap size={18} className="text-green-500" /> {job.experienceLevel}</span>
            </div>
          </div>
          
          <div className="mt-10 flex gap-4 items-center">
            <Link to={`/jobs/${job.id}/apply`} className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Apply Now
            </Link>
            <span className="text-xs text-slate-500 font-medium">Ref: {job.refCode} | Posted: {job.postedOn}</span>
          </div>
        </header>

        <div className="space-y-12 text-slate-700 dark:text-slate-300 relative z-10 leading-relaxed text-lg">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About the Role</h3>
            <p>{job.description}</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Core Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((req, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1.5 min-w-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What We're Looking For</h3>
            <ul className="space-y-3">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1.5 min-w-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why You'll Love Working Here</h3>
            <ul className="space-y-3">
              {job.whyJoinUs.map((req, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1.5 min-w-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800 text-center relative z-10">
           <Link to={`/jobs/${job.id}/apply`} className="px-10 py-5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block">
              Submit Your Application
           </Link>
        </div>
      </motion.div>
    </main>
  );
};
