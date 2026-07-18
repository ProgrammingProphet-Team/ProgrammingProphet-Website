import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

export const LiveUpdates = () => {
  return (
    <section id="blog" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-transparent">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Insights & Updates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Stay ahead of the curve with our latest articles on software engineering, artificial intelligence, and design.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <Link to="/blog" className="flex items-center gap-2">View All Posts <ArrowRight size={20} /></Link>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group  overflow-hidden border border-slate-200/50 dark:border-slate-700/50 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <Link to={`/blog/${post.id}`} className="block flex-grow flex flex-col">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur flex items-center gap-1 shadow-sm">
                    <Bookmark size={12} /> {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar size={14} /> {post.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform w-fit mt-auto cursor-pointer">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <Link to="/blog" className="md:hidden w-full mt-8 py-4 flex justify-center items-center gap-2 font-semibold rounded-2xl glass border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        View All Posts <ArrowRight size={20} />
      </Link>
    </section>
  );
};
