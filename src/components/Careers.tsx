import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JOBS } from '../data/jobs';

export const Careers = () => {
  return (
    <section id="careers" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-4"
          >
            Join Our Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Build the future <br /> with us.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg mb-8"
          >
            We're a team of passionate builders, engineers, and creators. We offer competitive equity, flexible hours, and top-tier benefits.
          </motion.p>

          <Link to="/jobs" className="inline-flex group px-6 py-3 rounded-full bg-blue-600 text-white font-semibold items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
            View All Openings <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-4">
          {JOBS.slice(0, 4).map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="interactive group rounded-2xl glass-panel border border-slate-200 hover:border-blue-500/50 dark:border-slate-800 dark:hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <Link to={`/jobs/${job.id}`} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 w-full block">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.dept}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:opacity-0 sm:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
