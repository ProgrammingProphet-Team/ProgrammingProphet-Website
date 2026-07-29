import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, RocketIcon, WrenchIcon, HandshakeIcon, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: <RocketIcon size={24} />,
    title: 'Faster Time to Market ',
    description: 'Deliver your product faster with efficient development workflows and streamlined deployment.'
  },
  {
    icon: <Zap size={24} />,
    title: 'High Performance',
    description: 'Optimized software and cloud infrastructure designed for speed, scalability, and reliability.'
  },
  {
    icon: <HandshakeIcon size={24} />,
    title: 'Transparent Collaboration',
    description: 'Clear communication, timely updates, and complete project visibility throughout development.'
  },
  // {
  //   icon: <Layers size={24} />,
  //   title: 'Scalable Cloud Architecture',
  //   description: 'Auto-scaling infrastructure designed to handle immense traffic spikes without degradation.'
  // },
  {
    icon: <Shield size={24} />,
    title: 'Security by Design',
    description: 'Applications built with security, reliability, and best practices from day one.'
  },

  // {
  //   icon: <Database size={24} />,
  //   title: 'AI Powered Automation',
  //   description: 'Intelligent workflows that reduce manual overhead and improve operational efficiency.'
  // },
  {
    icon: <WrenchIcon size={24} />,
    title: 'Long-Term Support',
    description: 'We stay with you after deployment, providing maintenance and technical guidance as your business grows.'
    // Ongoing maintenance and evolution of your digital assets.
  }
];

export const Features = () => {
  return (
    <div className=" w-full dark:border-slate-800 bg-[#0A0F1E]">
      <section id="features" className="  py-24 px-6 lg:px-6 max-w-7xl mx-auto  dark:border-slate-800 ">
        <div className="text-white grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white text-[32px] lg:text-5xl text-center lg:text-left  font-bold text-slate-900 dark:text-white mb-2 lg:mb-6 px-0"
            >
              Building Technology
              <br className="hidden md:block" />
              <div className="text-transparent  lg:text-5xl bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 text-glow-soft">
                That Empowers You
              </div>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 dark:text-slate-400 text-lg mb-8 lg:mr-20 leading-relaxed hidden lg:flex"
            >
              Technology shouldn't slow your business down. <br /> We build secure, scalable, and high-performance software that empowers you to move faster, serve customers better, and grow with confidence. </motion.p>


            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 dark:text-slate-400 text-sm text-center lg:text-left leading-relaxed  lg:hidden"
            >
              Technology shouldn't slow your business down.  </motion.p>
            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="px-8 py-3  lg:start-0 transition-all outline outline-1 outline-blue-500 text-white-600 hover:text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hidden lg:flex"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>

          <div className="space-y-4 ">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -5 }}
                className="bg-[#0A0F1E] flex items-start lg:gap-4 lg:p-6 align-center p-2 group transition-all duration-300 border border-slate-600 hover:border-slate-400 dark:hover:border-slate-700"
              >
                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-purple-400  group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="h-8 p-3 lg:p-0 lg:text-xl font-bold   dark:text-white mb-1 group-hover:text-glow-soft transition-all">{feature.title}</h4>
                  <p className="text-slate-400 hidden lg:block">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
