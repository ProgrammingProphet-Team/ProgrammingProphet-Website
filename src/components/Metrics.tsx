import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricCardProps {
  end: number;
  label: string;
  suffix?: string;
}

const MetricCard = ({ end, label, suffix = '' }: MetricCardProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 neon-border hover:shadow-blue-500/20"
    >
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2 group-hover:text-glow">
        {count}
        {suffix}
      </div>
      <div className="text-slate-600 dark:text-slate-300 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export const Metrics = () => {
  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MetricCard end={15} suffix="+" label="Projects Delivered" />
        <MetricCard end={98} suffix="%" label="Client Satisfaction" />
        <MetricCard end={24} suffix="/7" label="Support Available" />
        <MetricCard end={10} suffix="+" label="Clients" />
      </div>
    </section>
  );
};
