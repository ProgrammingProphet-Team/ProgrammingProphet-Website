import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JOBS } from '../data/jobs';

export const JobsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...Array.from(new Set(JOBS.map(job => job.dept)))];

  const filteredJobs = JOBS.filter(job => {
    const matchesSearch = job.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || job.dept === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-24 pb-20 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Explore Opportunities
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
          Join our global network of builders, researchers, and creators. Find the role that matches your ambition.
        </p>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by keyword or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
            />
          </div>
          
          <div className="flex gap-2 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <SlidersHorizontal size={20} />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none pl-12 pr-12 py-4 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-white dark:bg-slate-900">{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="interactive group rounded-3xl glass-panel border border-slate-200 hover:border-blue-500/50 dark:border-slate-800 dark:hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <Link to={`/jobs/${job.id}`} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 block">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                    {job.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-2"><Briefcase size={18} className="text-blue-500" /> {job.dept}</span>
                    <span className="flex items-center gap-2"><Clock size={18} className="text-purple-500" /> {job.type}</span>
                    <span className="flex items-center gap-2"><MapPin size={18} className="text-cyan-500" /> {job.location}</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">No roles found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </main>
  );
};
