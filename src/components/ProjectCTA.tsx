
import { Rocket, Cpu, RefreshCcw, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCTA = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-12 lg:mb-0 lg:pb-18">
      <div className="bg-gradient-to-r from-[#071343] via-[#101b6c] to-[#071343] shadow-2xl flex flex-col xl:flex-row items-center justify-between p-5 lg:p-6 gap-4 xl:gap-5 relative overflow-hidden">

        {/* Background texture/pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

        {/* 1. Main Heading */}
        <div className="flex items-center gap-4 flex-shrink-0 z-10 w-full xl:w-auto justify-center xl:justify-start">
          <div className="bg-white w-12 h-12 flex items-center justify-center shadow-lg flex-shrink-0">
            <Rocket className="w-6 h-6 text-[#071343]" />
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5">Have a Project in Mind?</h3>
            <p className="text-blue-100/90 text-[13px] lg:text-sm">Let's build something amazing together.</p>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="hidden xl:block w-px h-12 bg-white/10 z-10"></div>

        <div className="flex flex-col md:flex-row w-full xl:w-auto items-start md:items-center justify-between flex-1 gap-4 lg:gap-6 z-10 hidden lg:flex">
          {/* 2. Modern Technologies */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="bg-white/5 w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/10">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[13px] font-semibold text-white mb-0.5 truncate">Modern Technologies</h4>
              <p className="text-[11px] text-blue-200/70 truncate">We use the latest tech stack</p>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block w-px h-10 bg-white/10"></div>

          {/* 3. Agile Approach */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="bg-white/5 w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/10">
              <RefreshCcw className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[13px] font-semibold text-white mb-0.5 truncate">Agile Approach</h4>
              <p className="text-[11px] text-blue-200/70 truncate">Flexible and iterative process</p>
            </div>
          </div>

          {/* Divider 3 */}
          <div className="hidden md:block w-px h-10 bg-white/10"></div>

          {/* 4. On-time Delivery */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="bg-white/5 w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/10">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[13px] font-semibold text-white mb-0.5 truncate">On-time Delivery</h4>
              <p className="text-[11px] text-blue-200/70 truncate">We value your time</p>
            </div>
          </div>
        </div>

        {/* Divider 4 */}
        <div className="hidden xl:block w-px h-12 bg-white/10 z-10"></div>

        {/* Button */}
        <div className="flex-shrink-0 z-10 w-full xl:w-auto lg:mt-4 xl:mt-0">
          <Link to="/contact" className="w-full xl:w-auto flex items-center justify-center gap-2 bg-white text-[#071343] font-bold px-6 py-3 hover:bg-gray-100 transition-colors shadow-md text-sm">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
