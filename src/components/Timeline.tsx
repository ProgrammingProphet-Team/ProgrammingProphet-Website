import { motion } from 'framer-motion';

const MILESTONES = [
  { year: '2020', title: 'Company Founded', description: 'Started purely as a DevOps consultancy.' },
  { year: '2021', title: 'First Product Launch', description: 'Launched our internal cloud management tool.' },
  { year: '2022', title: 'First 10 Clients', description: 'Secured long-term enterprise partnerships.' },
  { year: '2023', title: 'Global Expansion', description: 'Opened offices in London and Singapore.' },
  { year: '2024', title: 'AI Platform Launch', description: 'Integrated ML models into our core offering.' },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm mb-4"
        >
          Our Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
        >
          Growth Timeline
        </motion.h2>
      </div>

      <div className="relative">
        {/* Continuous Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-[20px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 -translate-x-1/2 rounded-full"
        />

        {MILESTONES.map((milestone, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative flex items-center mb-12 last:mb-0 md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Center Dot */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-500 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

            <div className="w-full pl-12 md:pl-0 md:w-[45%]">
              <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 neon-border">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">{milestone.year}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">{milestone.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
