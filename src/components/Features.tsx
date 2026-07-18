import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { Layers, Zap, Lock, Database, LineChart } from 'lucide-react';

const FEATURES = [
  {
    icon: <Layers size={24} />,
    title: 'Scalable Cloud Architecture',
    description: 'Auto-scaling infrastructure designed to handle immense traffic spikes without degradation.'
  },
  {
    icon: <Lock size={24} />,
    title: 'Secure DevOps Pipelines',
    description: 'Enterprise-grade security embedded throughout the continuous integration lifecycle.'
  },
  {
    icon: <Zap size={24} />,
    title: 'High Performance Web Apps',
    description: 'Lightning-fast delivery using edge computing and optimal rendering strategies.'
  },
  {
    icon: <Database size={24} />,
    title: 'AI Powered Automation',
    description: 'Intelligent workflows that reduce manual overhead and improve operational efficiency.'
  },
  {
    icon: <LineChart size={24} />,
    title: 'Data Driven Decision Making',
    description: 'Real-time analytics and predictive modeling to guide business strategy.'
  }
];

export const Features = () => {
  return (
    <div className=" w-full dark:border-slate-800 bg-[#0A0F1E]">
      <section id="features" className="  py-24 px-6 lg:px-6 max-w-7xl mx-auto  dark:border-slate-800 ">
        <div className="text-white grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              Capabilities That Drive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 text-glow-soft">
                Unfair Advantages
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 dark:text-slate-400 text-lg mb-8 leading-relaxed"
            >
              We don't just write code; we architect systems designed to give your startup a massive technological edge over the competition. Our platform handles the complexity so you can focus on growth.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="px-8 py-3   transition-all outline outline-1 outline-blue-500 text-white-600 hover:text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Learn More
            </motion.button>
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
                className="bg-[#0A0F1E] flex items-start gap-4 p-6  group transition-all duration-300 border border-slate-600 hover:border-slate-400 dark:hover:border-slate-700"
              >
                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-purple-400  group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold   dark:text-white mb-1 group-hover:text-glow-soft transition-all">{feature.title}</h4>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
