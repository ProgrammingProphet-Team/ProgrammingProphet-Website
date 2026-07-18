//import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Bookmark } from 'lucide-react';
import { POSTS } from '../data/posts';

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-6 text-center text-slate-900 dark:text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <button onClick={() => navigate('/blog')} className="text-blue-500 hover:underline">
          Return to Blog
        </button>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16 px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium mb-12 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to all posts
      </Link>

      <article>
        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-semibold mb-6">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Bookmark size={14} /> {post.category}
            </span>
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 md:max-w-2xl">
            {post.excerpt}
          </p>
        </header>

        <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl glass-panel relative aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="text-lg text-slate-700 dark:text-slate-300">
          {post.content && post.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index} className="mb-6 leading-relaxed">{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h2 key={index} className="text-3xl font-bold text-slate-900 dark:text-white mt-16 mb-8">{block.text}</h2>;
            }
            if (block.type === 'image') {
              return (
                <div key={index} className="my-12">
                  <img src={block.src} alt={block.alt} className="w-full rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 object-cover" />
                  {block.alt && <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-4 italic">{block.alt}</p>}
                </div>
              );
            }
            return null;
          })}
        </div>
      </article>
    </main>
  );
};
