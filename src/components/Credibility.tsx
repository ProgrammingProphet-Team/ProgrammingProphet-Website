import { motion } from 'framer-motion';

const LOGOS = [
  "SSCMR College", "SRaaz Enterprises", "WeMurz Services", "PCKeyZones", "Netlyra"
];

export const Credibility = () => {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/20 backdrop-blur-sm overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8 text-center">
        Trusted by Innovative Teams
      </p>

      {/* Marquee Setup */}
      <div className="relative w-full flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-16 whitespace-nowrap px-8"
        >
          {/* Double map for seamless loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((name, i) => (
            <div key={i} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
              <span className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" /> 99.99% Uptime
        </div>
      </div>
    </section>
  );
};
