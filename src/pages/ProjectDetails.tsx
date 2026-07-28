import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Github, Calendar, Users, Star, CheckCircle, Target, Zap, Award, Check, Clock } from 'lucide-react';
import { ALL_PROJECTS_DATA } from './AllProjects';
import { useEffect, useState } from 'react';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = ALL_PROJECTS_DATA.find(p => p.id === Number(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030712] text-white pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  // Expanded dummy gallery since we only have 1 image per project in base data
  const galleryImages = [
    project.image,
    project.image,
    project.image,
    project.image,
    project.image
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001d3d] via-[#001d3d]  to-[#f1f2f2] text-white font-sans relative">
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto relative">

        {/* Decorative Background */}
        {/* <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-600/10  blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-96 right-0 w-[400px] h-[400px] bg-cyan-600/10  blur-[100px] pointer-events-none -z-10" /> */}

        {/* Header Navigation */}
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 text-blue-500 hover:text-cyan-400 text-sm font-bold transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </motion.div> */}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              {/* <span className="px-4 py-1.5 rounded-none bg-blue-600 text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Live
              </span> */}
            </div>

            {/* <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {project.description} This advanced platform transforms workflows and delivers enterprise-grade performance scaling.
            </p> */}

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2"><Calendar size={16} /> 2025-2026</div>
              <div className="flex items-center gap-2"><Users size={16} /> 4 developers</div>
              <div className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> 4.9 Score</div>
            </div>
          </motion.div>

          {/* Hero Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {/* <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-none bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Globe size={18} /> Live Demo
            </a> */}
            {/* <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-none border border-slate-400 hover:border-slate-200 text-white hover:bg-white/5 font-bold transition-all ">
              <Github size={18} /> View Code
            </a> */}
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-12">

            {/* Image Gallery Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {/* Big Active Image */}
              <div className="w-full h-[400px] md:h-[500px] rounded-none overflow-hidden   border-slate-800">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt="Project Preview"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>

              {/* Thumbnails */}
              {/* <div className="grid grid-cols-5 gap-4">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative h-20 md:h-28 rounded-none overflow-hidden glass border border-slate-800  transition-all ${activeImageIndex === i ? 'ring-2 ring-blue-500 scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover rounded-none" />
                    {activeImageIndex !== i && <div className="absolute inset-0 bg-slate-100/80 dark:bg-black/40" />}
                  </button>
                ))}
              </div> */}
            </motion.div>

            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {project.title} is a comprehensive {project.department} platform designed to help organizations make data-driven decisions and automate complex workflows. Built with cutting-edge technologies, it provides real-time insights, predictive analytics, and customizable dashboards that scale seamlessly with business needs.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                The platform integrates cleanly with existing enterprise data lakes and provides highly intuitive, glassmorphic visualizations that make complex data accessible to all stakeholders.
              </p>
            </motion.div>

            {/* Challenges vs Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Challenges</h3>
                <ul className="space-y-4">
                  {[
                    "Processing large volumes of real-time data efficiently",
                    "Creating intuitive visualizations for complex datasets",
                    "Ensuring high availability and 99.9% uptime performance",
                    "Implementing advanced enterprise-grade security measures"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                      <span className="w-2 h-2 mt-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Solutions</h3>
                <ul className="space-y-6">
                  {[
                    "Implemented distributed data processing pipeline using Apache Kafka",
                    "Developed custom visualization rendering engine minimizing DOM nodes",
                    "Built a highly scalable microservices architecture via Docker & K8s",
                    "Integrated military-grade multi-factor authentication and encryption layer"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 leading-relaxed">
                      <CheckCircle className="text-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.3)] rounded-full" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Results & Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "40% improvement in decision-making speed", icon: Zap },
                  { label: "60% reduction in manual reporting time", icon: Clock },
                  { label: "99.9% uptime achieved", icon: Target },
                  { label: "10+ concurrent users supported", icon: Users }
                ].map((stat, i) => (
                  <div key={i} className=" p-6 rounded-none flex items-center gap-5 border border-slate-700/50 hover:border-blue-400/50 transition-colors bg-slate-900/40">
                    <div className="text-blue-400 h-10 w-10 flex items-center justify-center bg-blue-500/10 rounded-none border border-blue-900/30">
                      <stat.icon size={22} />
                    </div>
                    <p className="text-white font-medium text-sm leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Testimonial Block */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-none p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-700/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                  "{project.title} has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board."
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-none flex items-center justify-center text-blue-400 backdrop-blur-md border border-slate-600/30">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Chandrashekhar Pradhan</h4>
                    <p className="text-blue-200 text-sm">CEO, WeMurz Services LLP.</p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Right Column (Sidebars) */}
          <div className="space-y-6">

            {/* Project Details Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 backdrop-blur-md p-8 rounded-none border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Client</p>
                  <p className="text-slate-200 font-medium">WeMurz Services LLP</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Industry</p>
                  <p className="text-slate-200 font-medium">IT Product and Services</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-slate-200 font-medium">3 months</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Team Size</p>
                  <p className="text-slate-200 font-medium">4 developers</p>
                </div>
              </div>
            </motion.div>

            {/* Technologies Used Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 backdrop-blur-md p-8 rounded-none border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-2">
                <Award size={20} className="text-cyan-400" /> Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.concat(['AWS', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes']).slice(0, 8).map(tech => (
                  <span key={tech} className="px-4 py-2 text-xs font-bold text-blue-300 bg-blue-900/40 border border-blue-800/50 rounded-none">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Features Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/50 backdrop-blur-md p-8 rounded-none border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Key Features</h3>
              <ul className="space-y-4">
                {[
                  "Real-time Dashboards",
                  "Predictive Analytics",
                  "Custom Reports Generator",
                  "Comprehensive API Integration",
                  "Scalable Multi-tenant Arch",
                  "Advanced SOC2 Security",
                  "Fully Mobile Responsive",
                  "Automated Export Capabilities"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};
