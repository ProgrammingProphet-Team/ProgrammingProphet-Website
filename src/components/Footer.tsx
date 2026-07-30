import { useState, type ReactNode } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMPANY_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'View Our Work', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

interface FooterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const FooterSection = ({ title, children, className = "" }: FooterSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`col-span-2 md:col-span-4 lg:col-span-2 text-white ${className}`}>
      {/* Mobile Header */}
      <div 
        className="flex items-center justify-between lg:hidden py-4 border-b border-slate-700/50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-sm tracking-wider uppercase">{title}</h4>
        <ChevronDown size={18} className={`transition-transform duration-300 font-light ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {/* Desktop Header */}
      <h4 className="hidden lg:block dark:text-blue-400 lg:mb-6 mb-3 font-bold uppercase">{title}</h4>

      {/* Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0 pb-4 lg:pb-0`}>
        {children}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="dark:border-slate-800 border-t border-slate-400 bg-[#0A0F1E] pt-12 pb-6 lg:pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-2 lg:gap-8 mb-8">

          <div className="col-span-2 md:col-span-4 lg:col-span-3 lg:mb-0 mb-6">
            <div className="flex items-center lg:mb-4 mb-2">
              <div className="py-2 rounded-lg text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <img
                  src="/ProgrammingProphet.png"
                  alt="ProgrammingProphet Logo"
                  className="lg:h-8 h-7 w-auto object-contain mr-2"
                />
              </div>
              <span className="text-xl font-bold text-white ">
                Programming<span className="text-xl text-blue-500 font-bold">Prophet</span>
              </span>
            </div>
            <p className="font-semibold text-slate-100 dark:text-blue-400 mb-6 lg:mb-14 italic">
              "Transforming Ideas into Reality."
            </p>
            <h3 className='text-white lg:mb-5 mb-3 font-bold'>CONTACT US</h3>
            <div className="lg:space-y-3 space-y-1.5">
              <div className="flex items-start lg:gap-3 gap-2 text-slate-100">
                <Phone size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-sm">+91 70391679055 / 7715933711</span>
              </div>
              <div className="flex items-start lg:gap-3 gap-2 text-slate-100">
                <Mail size={18} className="text-blue-500 mt-1 shrink-0 text-center" />
                <span className="text-sm">contact@programmingprophet.com</span>
              </div>
            </div>
          </div>

          <FooterSection title="TECH STACK" className="lg:ml-8 lg:col-span-2">
            <ul className="lg:space-y-4 space-y-3 text-sm  text-slate-300 dark:text-slate-400 font-bold lg:font-normal">
              <li>React</li>
              <li>NextJS</li>
              <li>Java</li>
              <li>Python</li>
              <li>NodeJS</li>
              <li>...</li>
            </ul>
          </FooterSection>

          <FooterSection title="INDUSTRIES" className="lg:ml-8 lg:col-span-2">
            <ul className="lg:space-y-4 space-y-3 text-sm  text-slate-300 dark:text-slate-400 font-bold lg:font-normal">
              <li>Institutions</li>
              <li>E-Commerce</li>
              <li>HealthTech</li>
              <li>Logistics</li>
              <li>Startups</li>
              <li>...</li>
            </ul>
          </FooterSection>

          <FooterSection title="SERVICES" className="lg:ml-8 lg:col-span-3">
            <ul className="lg:space-y-4 space-y-3 text-sm  text-slate-300 dark:text-slate-400 font-bold lg:font-normal">
              <li>Web Development</li>
              <li>DevOps Services</li>
              <li>Cloud Engineering</li>
              <li>Software Engineering</li>
              <li>Startups & MVP Services</li>
              <li>Custom Software Solutions</li>
            </ul>
          </FooterSection>

          <FooterSection title="COMPANY" className="lg:col-span-2">
            <ul className="lg:space-y-4 space-y-3 text-sm text-slate-300 dark:text-slate-400 font-bold lg:font-normal">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

        </div>

        <div className="lg:pt-8 lg:border-t border-slate-400 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center lg:gap-4 gap-2 lg:text-sm text-xs text-slate-400 dark:text-slate-400">
          <p>© 2025 ProgrammingProphet. All rights reserved. </p>
          <div className="flex ">
            <span className="flex items-center gap-1">
              <Link to="/privacy-policy" className=" font-bold text-white hover:text-blue-500 transition-colors">Privacy Policy</Link> and <Link to="/terms-of-service" className="font-bold text-white hover:text-blue-500 transition-colors">Terms of Service</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

