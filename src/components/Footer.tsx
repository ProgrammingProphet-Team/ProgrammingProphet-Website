import { Twitter, Linkedin } from 'lucide-react';

const COMPANY_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

export const Footer = () => {
  return (
    // bg-[#020d1c] border-t border-slate-200  bg-[#0b1120]  bg-[#0A0F1E]
    <footer className=" dark:border-slate-800 border-t border-slate-400  bg-[#0A0F1E] pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-16">

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <div className="flex items-center  mb-4">
              <div className="py-2 rounded-lg  text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <img
                  src="/ProgrammingProphet.png"
                  alt="ProgrammingProphet Logo"
                  className="h-8 w-auto object-contain mr-2"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-white group-hover:text-glow-soft transition-all">
                Programming<span className="text-xl text-blue-500 font-bold">Prophet</span>
              </span>
            </div>
            <p className="text-slate-400 dark:text-slate-300 mb-4 max-w-sm lg:max-w-none">
              Programming Prophet is a technology partner that transforms ideas into scalable digital products through engineering excellence, cloud innovation, and intelligent software solutions.
            </p>
            <p className="font-semibold text-white hover:text-blue-500 dark:text-blue-400 mb-6 italic">
              "Together, We Build More."
            </p>
            <div className="flex gap-4 ">
              <a href="#" aria-label="LinkedIn Profile" className="p-2 rounded-full glass text-blue-500 hover:text-blue-500 hover:scale-105 transition-all dark:text-slate-400 dark:hover:text-blue-400"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter Profile" className="p-2 rounded-full glass text-blue-500 hover:text-blue-500 hover:scale-105 transition-all dark:text-slate-400 dark:hover:text-blue-400"><Twitter size={20} /></a>
              {/* <a href="#" aria-label="Github Profile" className="p-2 rounded-full glass text-slate-600 hover:text-blue-500 hover:scale-110 transition-all dark:text-slate-400 dark:hover:text-blue-400"><Github size={20} /></a> */}
            </div>
          </div>

          <div className="font-bold col-span-1 lg:col-span-2 lg:ml-8 text-white">
            <h4 className="dark:text-blue-400 mb-6 ">TECH STACK</h4>
            <ul className="space-y-4 text-sm text-slate-100 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Front-end</a></li>

              <li><a href="#" className="hover:text-blue-500 transition-colors">Back-end</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">React</a></li>


              <li><a href="#" className="hover:text-blue-500 transition-colors">Java</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Python</a></li>

              <li><a href="#" className="hover:text-blue-500 transition-colors">PHP</a></li>

              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">Android</a></li> */}

            </ul>
          </div>

          <div className="font-bold col-span-1 lg:col-span-2 lg:ml-8 text-white">
            <h4 className=" dark:text-blue-400 mb-6">INDUSTRIES</h4>
            <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">DevOps & Security</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Mobile Applications</a></li>
            </ul>
          </div>

          <div className="font-bold col-span-1 lg:col-span-3 lg:ml-8 text-white">
            <h4 className="  dark:text-blue-400 mb-6">SERVICES</h4>
            <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">DevOps Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Software Engineering</a></li>
              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">UI/UX Design</a></li> */}


              <li><a href="#" className="hover:text-blue-500 transition-colors">Mobile Applications</a></li>
              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">IoT Development Services</a></li> */}
              <li><a href="#" className="hover:text-blue-500 transition-colors">Startups & MVP Services</a></li>
            </ul>
          </div>

          <div className="font-bold col-span-1 lg:col-span-2  text-white">
            <h4 className=" dark:text-blue-400 mb-6">COMPANY</h4>
            <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-400">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>



        <div className="pt-8 border-t border-slate-400 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-300 dark:text-slate-400">
          <p>© 2025 ProgrammingProphet. All rights reserved. </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <a href="/privacy-policy" className=" font-bold text-white hover:text-blue-500 transition-colors">Privacy Policy</a> and <a href="/terms-of-service" className="font-bold text-white hover:text-blue-500 transition-colors">Terms of Service</a>
              {/* <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems nominal */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
