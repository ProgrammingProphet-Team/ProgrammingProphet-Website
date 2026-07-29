import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMPANY_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'View Our Work', href: '/projects' },

  { name: 'Contact', href: '/contact' },


];

export const Footer = () => {
  return (
    // bg-[#020d1c] border-t border-slate-200  bg-[#0b1120]  bg-[#0A0F1E]
    <footer className=" dark:border-slate-800 border-t border-slate-400  bg-[#0A0F1E] pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-8">

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <div className="flex items-center  mb-4">
              <div className="py-2 rounded-lg  text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <img
                  src="/ProgrammingProphet.png"
                  alt="ProgrammingProphet Logo"
                  className="h-8 w-auto object-contain mr-2"
                />
              </div>
              <span className="text-xl font-bold text-white ">
                Programming<span className="text-xl text-blue-500 font-bold">Prophet</span>
              </span>
            </div>
            <p className="text-slate-400 dark:text-slate-300 mb-4 max-w-sm lg:max-w-none">
              {/* Programming Prophet is a technology partner that transforms ideas into scalable digital products through engineering excellence, cloud innovation, and intelligent software solutions. */}
              {/* Transforming Ideas into Reality. */}
            </p>
            <p className="font-semibold text-slate-100  dark:text-blue-400 mb-8 lg:mb-14 italic">
              {/* "Together, We Build More." */}
              "Transforming Ideas into Reality."
            </p>
            <h3 className='text-white mb-5 font-bold'>CONTACT US</h3>
            <div className="space-y-3 ">
              <div className="flex items-start gap-3 text-slate-100">
                <Phone size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-sm">+91 70391679055 / 7715933711</span>
              </div>
              <div className="flex items-start gap-3 text-slate-100">
                <Mail size={18} className="text-blue-500 mt-1 shrink-0 text-center" />
                {/* <a href="mailto:[EMAIL_ADDRESS]" className="text-sm  transition-colors break-all">
                </a> */}
                contact@programmingprophet.com

              </div>
            </div>
            <div className="flex gap-4 ">
              {/* <a href="#" aria-label="LinkedIn Profile" className="p-2 rounded-full glass text-blue-500 hover:text-blue-500 hover:scale-105 transition-all dark:text-slate-400 dark:hover:text-blue-400"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter Profile" className="p-2 rounded-full glass text-blue-500 hover:text-blue-500 hover:scale-105 transition-all dark:text-slate-400 dark:hover:text-blue-400"><Twitter size={20} /></a> */}
              {/* <a href="#" aria-label="Github Profile" className="p-2 rounded-full glass text-slate-600 hover:text-blue-500 hover:scale-110 transition-all dark:text-slate-400 dark:hover:text-blue-400"><Github size={20} /></a> */}
            </div>
          </div>

          <div className="font-bold col-span-1 lg:col-span-2 lg:ml-8 text-white">
            <h4 className="dark:text-blue-400 mb-6 ">TECH STACK</h4>
            <ul className="space-y-4 text-sm text-slate-100 dark:text-slate-400">
              {/* <li className="hover:text-blue-500 transition-colors">Front-end</li>

              <li className="hover:text-blue-500 transition-colors">Back-end</li> */}
              <li className="">React</li>
              <li className="">NextJS</li>
              <li className="">Java</li>
              <li className="">Python</li>
              <li className="">NodeJS</li>
              <li className="">...</li>



              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">PHP</a></li> */}

              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">Android</a></li> */}

            </ul>
          </div>

          <div className="font-bold col-span-1 lg:col-span-2 lg:ml-8 text-white">
            <h4 className=" dark:text-blue-400 mb-6">INDUSTRIES</h4>
            <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-400">
              <li className="">Institutions</li>
              <li className="">E-Commerce</li>
              <li className="">HealthTech</li>
              <li className="">Logistics</li>
              <li className="">Startups</li>
              <li className="">...</li>
            </ul>
          </div>

          <div className="font-bold col-span-1 lg:col-span-3 lg:ml-8 text-white">
            <h4 className="  dark:text-blue-400 mb-6">SERVICES</h4>
            <ul className="space-y-4 text-sm text-slate-300 dark:text-slate-400">
              <li className="">Web Development</li>
              <li className="">DevOps Services</li>
              <li className="">Cloud Engineering</li>

              <li className="">Software Engineering</li>
              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">UI/UX Design</a></li> */}
              <li className="">Startups & MVP Services</li>
              <li className="">Custom Software Solutions</li>

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
              <Link to="/privacy-policy" className=" font-bold text-white hover:text-blue-500 transition-colors">Privacy Policy</Link> and <Link to="/terms-of-service" className="font-bold text-white hover:text-blue-500 transition-colors">Terms of Service</Link>
              {/* <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems nominal */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
