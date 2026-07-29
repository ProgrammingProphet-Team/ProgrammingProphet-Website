import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS_DATA } from '../pages/AllProjects';

const CATEGORIES = ['All', 'Web Development', 'Software Engineering', 'DevOps Engineering', 'Cloud Engineering'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? ALL_PROJECTS_DATA
    : ALL_PROJECTS_DATA.filter(p => p.department === activeCategory);

  return (
    <section id="projects" className="pt-12 md:pt-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 mt-16">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-100 to-blue-700 bg-clip-text text-transparent mb-6 tracking-tight font-sans uppercase tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-100 text-xl leading-relaxed hidden lg:block"
          >
            Explore our latest projects showcasing our technical expertise and innovative problem-solving in building next-level advanced systems.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-start md:justify-end gap-3"
        >
          {CATEGORIES.slice(0, 4).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5  text-sm font-bold transition-all duration-300  ${activeCategory === category
                ? 'bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] scale-105'
                : 'bg-white text-slate-900 hover:bg-blue-700 hover:text-white hover:scale-105'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid: 2 rows x 3 columns for desktop */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:mb-20">
        <AnimatePresence>
          {filteredProjects.slice(0, 6).map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={project.id}
              onClick={() => window.open(`/project/${project.id}`, '_blank')}
              className="group relative overflow-hidden  hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] interactive cursor-pointer transition-all duration-500 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 lg:bg-[#030712]/50 lg:group-hover:bg-transparent transition-all duration-500 z-10" />
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating Tech Tags */}
                <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest bg-[#0b1120]/90 text-white border border-blue-400/30 backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 shadow-lg"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="p-8 relative bg-[#0b1120]/80 backdrop-blur-md flex-grow flex flex-col">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10  blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.department}</span>
                  <Link
                    to={`/project/${project.id}`}
                    // target="_blank"
                    target="_self"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600/40 hover:bg-blue-600 px-5 py-2.5  transition-all duration-300 border border-blue-500/50 hover:border-blue-500 leading-none group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20"
                  >
                    {/* Details <ArrowRight size={16} />
                     */}
                    Details <ExternalLink className='center' size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Projects Button */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link
          to="/projects"
          className="group relative px-10 py-5 bg-transparent text-white font-bold rounded-full overflow-hidden neon-border hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-3 text-xl tracking-wide">
            View All Projects <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
          </span>
        </Link>
      </motion.div> */}


    </section>

  );
};
