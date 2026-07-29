import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  { name: 'React', color: '#61DAFB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', color: '#000000', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkInvert: true },
  { name: 'TypeScript', color: '#3178C6', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', color: '#339933', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', color: '#3776AB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', color: '#FF9900', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', color: '#2496ED', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', color: '#326CE5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-6 lg:py-14 relative overflow-hidden bg-slate-200 dark:bg-[#0a0a0a] ">
      {/* Professional glassmorphism background blobs */}
      {/* <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" /> */}

      <div className="w-full z-10 relative">
        <div className="text-center mb-6 lg:mb-16 px-6">
          <h3 className="text-xs lg:text-sm font-bold tracking-[0.25em] text-slate-700 dark:text-slate-400 uppercase">
            Powering Modern Solutions With
          </h3>
        </div>

        <div className="relative overflow-hidden w-full flex items-center group">
          {/* Fading edges to blend with full width */}
          <div className="absolute left-0 top-0 bottom-0 w-32  bg-gradient-to-r from-slate-200 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-200 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
            className="flex mt-2 gap-6 md:gap-8 w-max pl-6 group-hover:[animation-play-state:paused]"
          >
            {/* Duplicating the array multiple times for smooth infinite scroll across wide screens */}
            {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group/tech flex items-center gap-4 px-4 lg:px-8 py-3 md:py-5 cursor-pointer transition-all duration-500 bg-slate-100 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] hover:-translate-y-2"
              >
                <div className="flex items-center justify-center bg-transparent transition-transform duration-500 group-hover/tech:scale-110 group-hover/tech:-rotate-3">
                  <img
                    src={tech.url}
                    alt={tech.name}
                    loading="lazy"
                    className={`h-9 w-auto min-w-[2.25rem] object-contain transition-all duration-300 drop-shadow-sm filter ${tech.darkInvert ? 'dark:invert' : ''}`}
                  />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200 text-lg tracking-wide transition-colors duration-300 group-hover/tech:text-slate-900 dark:group-hover/tech:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
