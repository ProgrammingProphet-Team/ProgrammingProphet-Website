import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectModal } from './ProjectModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[83vh]  lg:min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden bg-left lg:bg-center "
      style={{
        backgroundImage: "url('/assets/bg-5.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundBlendMode: "color-burn",


      }}
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid gap-12 items-center z-10 relative pt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="text-blue-500 font-bold  tracking-widest text-[12px] lg:text-sm  lg:mb-1 ms-1 ">
            Building Tomorrow's Technology, Together.
            {/* Custom Software. Built Around Your Business. */}
            {/* Reliable Software Development for Startups & Businesses */}
          </div>
          {/* 7xl - in pixel 112px */}
          <h1 className="text-[45px] md:text-6xl lg:text-[86px] font-bold font-calibri font-heading tracking-tight text-white lg:text-white  leading-[1.2] lg:leading-[1.1]">
            {/* Building the Future,<br />
            <span className="text-blue-600">Together.</span> */}
            Build Software<br />
            That Grows<br />
            <span className="text-blue-600 "> Your Business</span><span className=" text-blue-600 animate-pulse  ease-in-out  duration-1000">.</span>

          </h1>

          <p className=" lg:text-xl text-slate-300 max-w-xl leading-relaxed mt-2 mb-4">
            We help startups and growing businesses design, develop, and scale custom software, websites and DevOps solutions that drive measurable business growth.
          </p>

          <div className="mt-2">
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base lg:px-8 px-6 py-3 lg:py-4 transition-all shadow-lg flex items-center justify-center gap-2 group shadow-blue-600/20 tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-sm">
              Let's Discuss Your Project 
              {/* <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /> */}
            </button>

          </div>
          {/* <Metrics /> */}

        </motion.div>


      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
