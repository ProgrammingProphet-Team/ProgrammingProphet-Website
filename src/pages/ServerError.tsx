import { motion } from 'framer-motion';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export const ServerError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0A0F1E] pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Warning Icon */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.1
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 text-red-500 rounded-full mb-6 border border-red-500/20"
          >
            <AlertTriangle className="w-10 h-10" />
          </motion.div>

          {/* Animated 500 text */}
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
            className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 mb-6"
          >
            500
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Internal Server Error
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto"
          >
            Something went wrong on our servers. We have been notified of the issue and are working to resolve it as quickly as possible. Please try refreshing or checking back later.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </a>

            <button
              onClick={() => window.location.reload()}
              className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 dark:bg-slate-800/30 dark:hover:bg-slate-700/50 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Refresh Page
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          animate={{
            y: ["0vh", "-100vh"],
            x: Math.random() * 100 - 50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-10px",
          }}
        />
      ))}
    </div>
  );
};
