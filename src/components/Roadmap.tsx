import { motion } from 'framer-motion';
import { ClipboardList, FileText, Palette, Code, TestTubeDiagonal, Rocket, Headset } from 'lucide-react';


// Requirement Gathering
// ↓
// Proposal
// ↓
// Architecture
// ↓
// Development
// ↓
// Testing
// ↓
// Deployment
// ↓
// Support

const ROADMAP = [
  { q: 'Q1', title: 'Requirement Gathering', icon: <ClipboardList size={18} />, status: 'completed', desc: 'Understanding your vision and business goals.' },
  { q: 'Q2', title: 'Proposal', icon: <FileText size={18} />, status: 'completed', desc: 'Delivering a detailed project proposal and timeline.' },
  { q: 'Q3', title: 'Design ', icon: <Palette size={18} />, status: 'current', desc: 'Designing user-centric interfaces and scalable architecture.' },
  { q: 'Q4', title: 'Development', icon: <Code size={18} />, status: 'upcoming', desc: 'Building high-performance applications with clean code.' },
  { q: 'Q5', title: 'Testing', icon: <TestTubeDiagonal size={18} />, status: 'upcoming', desc: 'Rigorous testing to ensure quality and reliability.' },
  { q: 'Q6', title: 'Deployment', icon: <Rocket size={18} />, status: 'upcoming', desc: 'Launching your product smoothly to the market.' },
  { q: 'Q7', title: 'Support', icon: <Headset size={18} />, status: 'upcoming', desc: 'Ongoing maintenance and continuous improvement.' },
];

export const Roadmap = () => {
  return (
    <section className="pb-24 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto ">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-100 dark:text-white mb-4"
          >
            Product Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 dark:text-slate-400 text-lg"
          >
            Our vision for the future of digital product delivery.
          </motion.p>
        </div>
      </div>

      <div className="relative grid md:grid-cols-7 gap-6 md:gap-2">
        {/* Connecting Line (Horizontal on Desktop) */}
        <div className="absolute top-[22px] left-0 hidden md:block w-full h-[5px] bg-slate-200 dark:bg-slate-800 z-5" />

        {/* Connecting Line (Vertical on Mobile) */}
        <div className="absolute top-2 left-6 md:hidden w-[2px] h-[calc(100%-48px)] bg-slate-200 dark:bg-slate-800 z-5" />


        {ROADMAP.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative group interactive z-10 pl-14 md:pl-0 flex flex-col md:block items-start md:items-stretch"
          >
            {/* Status Indicator */}
            <div className="absolute left-0 md:relative w-12 h-12 rounded-full flex items-center justify-center mb-6 border bg-slate-50 dark:bg-slate-800 text-slate-800 border-slate-400 dark:border-slate-700 z-10 shrink-0">
              {item.icon}
            </div>

            <div className="w-full p-6 min-h-[180px] md:h-[210px] bg-slate-100 transform transition-all duration-300 group-hover:-translate-y-2 hover:shadow-xl dark:border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2 block">{item.q}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
