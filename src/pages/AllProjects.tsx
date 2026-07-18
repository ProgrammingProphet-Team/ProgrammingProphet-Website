import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const ALL_PROJECTS_DATA = [
  {
    id: 1,
    title: 'Institutional Website',
    department: 'Web Development',
    image: '/projects/SSCMR_College.png',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    description: 'This modern, responsive institutional website serves as a comprehensive digital gateway for Swayam Siddhi College of Management and Research. '
  },
  // , providing prospective students, current students, faculty, and staff with seamless access to essential information, resources, and services. 

  // Built with Next.js and Tailwind CSS, the platform features an intuitive interface, detailed academic program showcases, admission information, faculty profiles, campus news, and event calendars. The design prioritizes accessibility, mobile-first responsiveness, and fast load times, ensuring a premium user experience while highlighting the institution’s commitment to excellence and innovation in education.


  // {
  //   id: 1,
  //   title: 'Nexus AI Platform',
  //   department: 'Artificial Intelligence',
  //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  //   tech: ['React', 'Python', 'TensorFlow'],
  //   description: 'Enterprise AI dashboard with real-time predictive analytics and natural language processing capabilities.'
  // },
  {
    id: 2,
    title: 'FinTech Cloud Infrastructure',
    department: 'Cloud Engineering',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tech: ['AWS', 'Kubernetes', 'Go'],
    description: 'High-availability microservices architecture handling millions of transactions daily.'
  },
  {
    id: 3,
    title: 'E-Commerce Ecosystem',
    department: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    description: 'Global commerce platform featuring 3D product configurator and seamless payments.'
  },
  {
    id: 4,
    title: 'Secure Health Portal',
    department: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    description: 'HIPAA-compliant telemedicine platform with video consultations and medical records.'
  },
  {
    id: 5,
    title: 'Autonomous Drone Fleet',
    department: 'Hardware & IoT',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    tech: ['C++', 'ROS', 'Computer Vision'],
    description: 'Swarm intelligence system for autonomous drone fleet coordination and mapping.'
  },
  {
    id: 6,
    title: 'Blockchain Supply Chain',
    department: 'Blockchain & Web3',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
    tech: ['Solidity', 'Ethereum', 'React'],
    description: 'Transparent and immutable supply chain tracking system leveraging smart contracts.'
  }
];

const DEPARTMENTS = ['All', 'Artificial Intelligence', 'Cloud Engineering', 'Web Development', 'Hardware & IoT', 'Blockchain & Web3'];

export const AllProjects = () => {
  const [activeDept, setActiveDept] = useState('All');

  const filteredProjects = activeDept === 'All'
    ? ALL_PROJECTS_DATA
    : ALL_PROJECTS_DATA.filter(p => p.department === activeDept);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 font-sans"
        >
          Our Complete Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Explore the technological innovations we've brought to life across various industries and departments.
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {DEPARTMENTS.map(dept => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeDept === dept
              ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105'
              : 'glass text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-105'
              }`}
          >
            {dept}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group relative overflow-hidden rounded-3xl glass-panel neon-border hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all z-10" />
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative bg-[#0b1120]/80 backdrop-blur-md">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">{project.department}</span>
                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600/20 hover:bg-blue-600 px-5 py-2.5 rounded-xl transition-colors duration-300 border border-blue-500/50 hover:border-blue-500 leading-none group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    Details <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
