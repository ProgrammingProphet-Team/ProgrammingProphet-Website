import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const ALL_PROJECTS_DATA = [
  // {
  //   id: 1,
  //   title: 'Institutional Website',
  //   department: 'Web Development',
  //   image: '/projects/SSCMR_College.png',
  //   tech: ['Next.js', 'Tailwind', 'TypeScript'],
  //   description: 'This modern, responsive institutional website serves as a comprehensive digital gateway for Swayam Siddhi College of Management and Research. '
  // },
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
  // {
  //   id: 2,
  //   title: 'FinTech Cloud Infrastructure',
  //   department: 'Cloud Engineering',
  //   image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  //   tech: ['AWS', 'Kubernetes', 'Go'],
  //   description: 'High-availability microservices architecture handling millions of transactions daily.'
  // },
  {
    id: 1,
    title: 'PCKeyZone - E-Commerce Platform',
    department: 'Web Development',
    image: '/projects/PC-Key-Zone.png',
    tech: ['Next.js', 'Tailwind', 'TypeScript', 'NodeJS', 'MongoDB', 'Google Pay', 'Rozer Pay', 'JWT'],
    description: 'PCKeyZone is a modern, responsive e-commerce platform designed to provide customers with a seamless and enjoyable shopping experience.',
    duration: '2025-2026',
    teamSize: '2 developers',
    score: '4.9 Score',
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Creating intuitive visualizations for complex datasets",
      "Ensuring high availability and 99.9% uptime performance",
      "Implementing advanced enterprise-grade security measures"
    ],
    solutions: [
      "Implemented distributed data processing pipeline using Apache Kafka",
      "Developed custom visualization rendering engine minimizing DOM nodes",
      "Built a highly scalable microservices architecture via Docker & K8s",
      "Integrated military-grade multi-factor authentication and encryption layer"
    ],
    results: [
      { label: "40% improvement in decision-making speed", icon: "Zap" },
      { label: "60% reduction in manual reporting time", icon: "Clock" },
      { label: "99.9% uptime achieved", icon: "Target" },
      { label: "10+ concurrent users supported", icon: "Users" }
    ],
    testimonial: {
      text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
      name: "SRaaz Enterprises",
      title: "PcKeyZone"
    },
    projectDetails: {
      client: "SRaaz Enterprises",
      industry: "E-Commerce",
      durationText: "2 months",
      teamSizeText: "2 developers"
    },
    keyFeatures: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports Generator",
      "Comprehensive API Integration",
      "Scalable Multi-tenant Arch",
      "Advanced SOC2 Security",
      "Fully Mobile Responsive",
      "Automated Export Capabilities"
    ]
  },
  {
    id: 2,
    title: 'WeMurz - Lab Information Management System',
    department: 'Software Engineering',
    image: '/projects/WeMurz-LIMS.jpeg',
    tech: ['Next.js', 'Tailwind', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    description: 'WeMurz LIMS is a comprehensive laboratory information management system designed to streamline laboratory workflows and improve data management.',
    duration: '2025-2026',
    teamSize: '4 developers',
    score: '4.9 Score',
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Creating intuitive visualizations for complex datasets",
      "Ensuring high availability and 99.9% uptime performance",
      "Implementing advanced enterprise-grade security measures"
    ],
    solutions: [
      "Implemented distributed data processing pipeline using Apache Kafka",
      "Developed custom visualization rendering engine minimizing DOM nodes",
      "Built a highly scalable microservices architecture via Docker & K8s",
      "Integrated military-grade multi-factor authentication and encryption layer"
    ],
    results: [
      { label: "40% improvement in decision-making speed", icon: "Zap" },
      { label: "60% reduction in manual reporting time", icon: "Clock" },
      { label: "99.9% uptime achieved", icon: "Target" },
      { label: "10+ concurrent users supported", icon: "Users" }
    ],
    testimonial: {
      text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
      name: "WeMurz Services LLP.",
      title: "Lab Information Management System"
    },
    projectDetails: {
      client: "WeMurz Services LLP.",
      industry: "IT Services and Consulting",
      durationText: "3 months",
      teamSizeText: "4 developers"
    },
    keyFeatures: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports Generator",
      "Comprehensive API Integration",
      "Scalable Multi-tenant Arch",
      "Advanced SOC2 Security",
      "Fully Mobile Responsive",
      "Automated Export Capabilities"
    ]
  },
  {
    id: 3,
    title: 'WeMurz - Employee & Event Management System',
    department: 'Software Engineering',
    image: '/projects/WeMurz-EMS.png',
    tech: ['React', 'Tailwind', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT'],
    description: 'EMS is a comprehensive employee and event management system designed to streamline employee and event management workflows and improve collaboration and productivity.',
    duration: '2025-2026',
    teamSize: '4 developers',
    score: '4.9 Score',
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Creating intuitive visualizations for complex datasets",
      "Ensuring high availability and 99.9% uptime performance",
      "Implementing advanced enterprise-grade security measures"
    ],
    solutions: [
      "Implemented distributed data processing pipeline using Apache Kafka",
      "Developed custom visualization rendering engine minimizing DOM nodes",
      "Built a highly scalable microservices architecture via Docker & K8s",
      "Integrated military-grade multi-factor authentication and encryption layer"
    ],
    results: [
      { label: "40% improvement in decision-making speed", icon: "Zap" },
      { label: "60% reduction in manual reporting time", icon: "Clock" },
      { label: "99.9% uptime achieved", icon: "Target" },
      { label: "10+ concurrent users supported", icon: "Users" }
    ],
    testimonial: {
      text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
      name: "WeMurz Services LLP.",
      title: "Employee & Event Management System"
    },
    projectDetails: {
      client: "WeMurz Services LLP.",
      industry: "IT Services and Consulting",
      durationText: "3 months",
      teamSizeText: "4 developers"
    },
    keyFeatures: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports Generator",
      "Comprehensive API Integration",
      "Scalable Multi-tenant Arch",
      "Advanced SOC2 Security",
      "Fully Mobile Responsive",
      "Automated Export Capabilities"
    ]
  },
  {
    id: 4,
    title: 'Swayam Siddhi College of Management & Research',
    department: 'Web Development',
    image: '/projects/SSCMR_College.png',
    tech: ['Next.js', 'Tailwind', 'TypeScript', 'NodeJS', 'Email API', 'Docker', 'NGINX', 'Linux'],
    description: 'This modern, responsive institutional website serves as a comprehensive digital gateway for Swayam Siddhi College of Management and Research. ',
    duration: '2025-2026',
    teamSize: '4 developers',
    score: '4.9 Score',
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Creating intuitive visualizations for complex datasets",
      "Ensuring high availability and 99.9% uptime performance",
      "Implementing advanced enterprise-grade security measures"
    ],
    solutions: [
      "Implemented distributed data processing pipeline using Apache Kafka",
      "Developed custom visualization rendering engine minimizing DOM nodes",
      "Built a highly scalable microservices architecture via Docker & K8s",
      "Integrated military-grade multi-factor authentication and encryption layer"
    ],
    results: [
      { label: "40% improvement in decision-making speed", icon: "Zap" },
      { label: "60% reduction in manual reporting time", icon: "Clock" },
      { label: "99.9% uptime achieved", icon: "Target" },
      { label: "10+ concurrent users supported", icon: "Users" }
    ],
    testimonial: {
      text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
      name: "Dr. Samadhan K. Khamkar",
      title: "Director, Swayam Siddhi College of Management & Research"
    },
    projectDetails: {
      client: "Swayam Siddhi College of Management & Research",
      industry: "Education",
      durationText: "3-6 months",
      teamSizeText: "4 developers"
    },
    keyFeatures: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports Generator",
      "Comprehensive API Integration",
      "Scalable Multi-tenant Arch",
      "Advanced SOC2 Security",
      "Fully Mobile Responsive",
      "Automated Export Capabilities"
    ]
  },
  {
    id: 5,
    title: 'ShopSphere - E-Commerce Platform',
    department: 'DevOps Engineering',
    image: '/projects/ShopSphere.png',
    tech: ['Docker', 'kubernetes', 'Java', 'Next.js', 'PostgreSQL', 'Azure', 'AWS'],
    description: 'ShopSphere is a modern, responsive e-commerce platform designed to provide customers with a seamless and enjoyable shopping experience.',
    duration: '2025-2026',
    teamSize: '2 Engineers',
    score: '4.8 Score',
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Creating intuitive visualizations for complex datasets",
      "Ensuring high availability and 99.9% uptime performance",
      "Implementing advanced enterprise-grade security measures"
    ],
    solutions: [
      "Implemented distributed data processing pipeline using Apache Kafka",
      "Developed custom visualization rendering engine minimizing DOM nodes",
      "Built a highly scalable microservices architecture via Docker & K8s",
      "Integrated military-grade multi-factor authentication and encryption layer"
    ],
    results: [
      { label: "40% improvement in decision-making speed", icon: "Zap" },
      { label: "60% reduction in manual reporting time", icon: "Clock" },
      { label: "99.9% uptime achieved", icon: "Target" },
      { label: "10+ concurrent users supported", icon: "Users" }
    ],
    testimonial: {
      text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
      name: "DevOps Engineering",
      title: "E-commerce Platform"
    },
    projectDetails: {
      client: "DevOps Engineering",
      industry: "E-commerce",
      durationText: "1-2 months",
      teamSizeText: "2 Engineers"
    },
    keyFeatures: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports Generator",
      "Comprehensive API Integration",
      "Scalable Multi-tenant Arch",
      "Advanced SOC2 Security",
      "Fully Mobile Responsive",
      "Automated Export Capabilities"
    ]
  },

  {
    id: 6,
    title: 'Infrastructure Automation - AWS',
    department: 'DevOps Engineering',
    image: '/projects/infra-automation.png',
    tech: ['Terraform', 'S3 Remote Backend', 'AWS', 'DynamoDB State Lock', 'Git Actions CI/CD', 'Ansible', 'Terraform Vault/Github Secrets'],
    description: 'Infrastructure Automation, automates the process of provisioning and managing infrastructure resources. Reduce manual intervention and save time. ',
    duration: '2025-2026',
    teamSize: '1 Cloud & DevOps Enginner',
    score: '4.9 Score',
    challenges: [
      "Processing large volumes of real-time data efficiently",
      "Creating intuitive visualizations for complex datasets",
      "Ensuring high availability and 99.9% uptime performance",
      "Implementing advanced enterprise-grade security measures"
    ],
    solutions: [
      "Implemented distributed data processing pipeline using Apache Kafka",
      "Developed custom visualization rendering engine minimizing DOM nodes",
      "Built a highly scalable microservices architecture via Docker & K8s",
      "Integrated military-grade multi-factor authentication and encryption layer"
    ],
    results: [
      { label: "40% improvement in decision-making speed", icon: "Zap" },
      { label: "60% reduction in manual reporting time", icon: "Clock" },
      { label: "99.9% uptime achieved", icon: "Target" },
      { label: "10+ concurrent users supported", icon: "Users" }
    ],
    testimonial: {
      text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
      name: "Cloud & DevOps Engineering",
      title: "AWS Infrastructure Automation"
    },
    projectDetails: {
      client: "Cloud & DevOps Engineering",
      industry: "IT Services and Consulting",
      durationText: "1-2 months",
      teamSizeText: "1 - Cloud & DevOps Engineer"
    },
    keyFeatures: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports Generator",
      "Comprehensive API Integration",
      "Scalable Multi-tenant Arch",
      "Advanced SOC2 Security",
      "Fully Mobile Responsive",
      "Automated Export Capabilities"
    ]
  },
  // {
  //   id: 7,
  //   title: "DevConnect - Developer's Collaboration Platform",
  //   department: 'DevOps Engineering',
  //   image: '/projects/DevConnect-argo.png',
  //   tech: ['Docker', 'kubernetes', 'Nginx', 'AWS'],
  //   description: 'DevConnect is a modern, responsive platform designed to provide developers with a seamless and enjoyable experience for collaboration and productivity.',
  //   duration: '2025-2026',
  //   teamSize: '2 developers',
  //   score: '4.8 Score',
  //   challenges: [
  //     "Processing large volumes of real-time data efficiently",
  //     "Creating intuitive visualizations for complex datasets",
  //     "Ensuring high availability and 99.9% uptime performance",
  //     "Implementing advanced enterprise-grade security measures"
  //   ],
  //   solutions: [
  //     "Implemented distributed data processing pipeline using Apache Kafka",
  //     "Developed custom visualization rendering engine minimizing DOM nodes",
  //     "Built a highly scalable microservices architecture via Docker & K8s",
  //     "Integrated military-grade multi-factor authentication and encryption layer"
  //   ],
  //   results: [
  //     { label: "40% improvement in decision-making speed", icon: "Zap" },
  //     { label: "60% reduction in manual reporting time", icon: "Clock" },
  //     { label: "99.9% uptime achieved", icon: "Target" },
  //     { label: "10+ concurrent users supported", icon: "Users" }
  //   ],
  //   testimonial: {
  //     text: "has revolutionized how we handle our internal processes. The real-time capabilities and predictive analytics have helped us make faster, more informed decisions across the board.",
  //     name: "Development & DevOps Engineering",
  //     title: "Developer's Collaboration Platform"
  //   },
  //   projectDetails: {
  //     client: "ProgrammingProphet (Internal Process)",
  //     industry: "IT Product and Services",
  //     durationText: "2 months",
  //     teamSizeText: "2 developers"
  //   },
  //   keyFeatures: [
  //     "Real-time Dashboards",
  //     "Predictive Analytics",
  //     "Custom Reports Generator",
  //     "Comprehensive API Integration",
  //     "Scalable Multi-tenant Arch",
  //     "Advanced SOC2 Security",
  //     "Fully Mobile Responsive",
  //     "Automated Export Capabilities"
  //   ]
  // },



];
// 'Cloud Engineering', "Artificial Intelligence"
const DEPARTMENTS = ['All', 'Web Development', 'Software Engineering', "DevOps Engineering"];

export const AllProjects = () => {
  const [activeDept, setActiveDept] = useState('All');

  const filteredProjects = activeDept === 'All'
    ? ALL_PROJECTS_DATA
    : ALL_PROJECTS_DATA.filter(p => p.department === activeDept);

  return (
    <div className='bg-gradient-to-br from-[#001d3d] to-[#f1f2f2]'>
      <div className="pt-18 pb-24 px-6 lg:px-0 max-w-7xl mx-auto min-h-screen   ">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 mt-16">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-extrabold bg-gradient-to-r from-blue-100 to-blue-700 bg-clip-text text-transparent mb-6 tracking-tight font-sans uppercase"
            >
              Featured Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-100 text-xl leading-relaxed"
            >
              Explore the technological excellence we've brought to life across various industries and departments.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-start md:justify-end gap-3"
          >
            {DEPARTMENTS.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2.5 text-sm font-bold transition-all duration-300 ${activeDept === dept
                  ? 'bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] scale-105'
                  : 'bg-white text-slate-900 hover:bg-blue-700 hover:text-white hover:scale-105'
                  }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={project.id}
                onClick={() => window.open(`/project/${project.id}`, '_blank')}
                className="group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] interactive cursor-pointer transition-all duration-500 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-[#030712]/50 group-hover:bg-transparent transition-all duration-500 z-10" />
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
                        className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest bg-[#0b1120]/90 text-white border border-blue-400/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-lg"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="p-8 relative bg-[#0b1120]/80 backdrop-blur-md flex-grow flex flex-col">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.department}</span>
                    <Link
                      to={`/project/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600/40 hover:bg-blue-600 px-5 py-2.5 transition-all duration-300 border border-blue-500/50 hover:border-blue-500 leading-none group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20"
                    >
                      Details <ExternalLink className='center' size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
