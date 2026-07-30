import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'diagonal' | 'glowing-line' | 'wave';
}

export const SectionDivider = ({ type = 'glowing-line' }: SectionDividerProps) => {
  // if (type === 'diagonal') {
  //   return (
  //     <div 
  //       className="relative w-full overflow-hidden z-10 pointer-events-none"
  //       style={{ height: 'min(5.5vw, 150px)', marginTop: 'max(-2.75vw, -75px)', marginBottom: 'max(-2.75vw, -75px)' }}
  //     >
  //       <div className="absolute top-0 left-0 w-full h-[500px]  dark:bg-slate-950 transform -skew-y-[3deg] origin-top-left border-t border-slate-200/50 dark:border-slate-800/50" />
  //     </div>
  //   );
  // }

  // if (type === 'wave') {
  //   return (
  //     <div className="w-full h-16 overflow-hidden -my-8 z-10 pointer-events-none opacity-50 flex items-center justify-center">
  //       <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-blue-500/20">
  //         <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
  //       </svg>
  //     </div>
  //   );
  // }

  // default glowing-line
  return (
    <div className="w-full flex justify-center items-center py-8 bg-[#0A0F1E]">
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-px max-w-4xl bg-gradient-to-r from-transparent via-blue-500/50 dark:via-blue-400/50 to-transparent relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      </motion.div>
    </div>
  );
};
