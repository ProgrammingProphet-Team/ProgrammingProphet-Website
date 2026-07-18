import { motion } from 'framer-motion';

const TIMELINE = [
  { year: '2023', title: 'Company Founded', desc: 'Started with a vision to revolutionize SaaS architectures.' },
  { year: '2024', title: 'Seed Funding', desc: 'Secured $5M seed round from top Silicon Valley investors.' },
  { year: '2025', title: 'Global Expansion', desc: 'Opened offices in London and Singapore.' },
  { year: '2026', title: 'AI Integration', desc: 'Launched our proprietary AI developer platform.' }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4"
        >
          Our Story
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
        >
          Mission & Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
        >
          We believe in a future where technology amplifies human potential. Our mission is to democratize enterprise-grade architecture for startups, enabling them to build scalable, secure, and intelligent products from day one.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto py-10">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 opacity-20 -translate-x-1/2"></div>
        
        {TIMELINE.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
              <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-2 transition-transform duration-300">
                <span className="inline-block text-blue-600 dark:text-blue-400 font-black text-2xl mb-2">{item.year}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
            
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 -translate-x-1/2 shadow-lg shadow-blue-500/50 flex items-center justify-center z-10">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
