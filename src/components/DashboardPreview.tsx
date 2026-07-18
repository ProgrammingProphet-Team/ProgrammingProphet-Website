import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const DashboardPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16 relative z-10">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Unprecedented Visibility
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Get actionable insights and manage your entire infrastructure through our unified SaaS platform.
        </p>
      </div>

      <div className="relative md:w-[150vw] md:left-1/2 md:-ml-[75vw] pb-10 px-6 md:px-0">
        <motion.div 
          style={{ x: isMobile ? 0 : translateX }}
          className="flex flex-col md:flex-row gap-8 md:px-8 items-center justify-center"
        >
          {/* Dashboard Shot 1 */}
          <div className="w-full md:w-[800px] flex-shrink-0 h-[300px] md:h-[500px] rounded-2xl glass-panel neon-border overflow-hidden relative group">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" loading="lazy" alt="Analytics Dashboard" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">Real-time Analytics</h3>
            </div>
          </div>
          
          {/* Dashboard Shot 2 */}
          <div className="w-full md:w-[900px] flex-shrink-0 h-[350px] md:h-[600px] rounded-3xl glass-panel neon-border overflow-hidden relative group shadow-[0_0_40px_rgba(139,92,246,0.3)] z-10">
            <div className="absolute inset-x-0 top-0 h-8 md:h-10 bg-slate-900/80 backdrop-blur-md flex items-center px-4 gap-2 z-20">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
            </div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" loading="lazy" alt="Cloud Monitoring" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-xl md:text-2xl font-bold bg-slate-900/50 px-4 py-2 rounded-xl backdrop-blur-md">Cloud Infrastructure Monitoring</h3>
            </div>
          </div>

          {/* Dashboard Shot 3 */}
          <div className="w-full md:w-[800px] flex-shrink-0 h-[300px] md:h-[500px] rounded-2xl glass-panel neon-border overflow-hidden relative group">
            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10" />
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" loading="lazy" alt="AI Insights Panel" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">AI Automation Logs</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
