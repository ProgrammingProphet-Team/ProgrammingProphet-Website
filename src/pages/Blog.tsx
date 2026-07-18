//import React from 'react';
import { Bookmark, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

export const Blog = () => {

  return (
    <main className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          All Insights & Updates
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
          Dive deep into our articles on software engineering, cloud infrastructure, artificial intelligence, and design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <article 
            key={post.id}
            className="group glass-panel rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
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
                <div className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform w-fit mt-auto">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};
