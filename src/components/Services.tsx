import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ProjectModal } from './ProjectModal';

const SERVICES = [
  {
    category: 'WEB & DIGITAL',
    title: 'Web & Digital Solutions',
    titleLines: ['Web & Digital', 'Solutions'],
    subtitle: 'Build a modern digital presence that works for your business.',
    tiles: [
      { title: 'Business Websites', desc: 'Professional websites for companies and organizations' },
      { title: 'Web Applications', desc: 'Interactive applications built around your workflows' },
      { title: 'E-Commerce', desc: 'Online stores and commerce experiences' },
      { title: 'CMS & Content Platforms', desc: 'Manage and publish your content with ease' }
    ],
    bottomLine: 'Responsive • SEO-ready • Production-ready',
    cta: 'Discuss your web project',
    color: 'from-blue-500 to-cyan-400',
    textColor: 'text-blue-400',
    hoverTextColor: 'group-hover/tile:text-blue-400',
    bgIcon: 'text-blue-500'
  },
  {
    category: 'SOFTWARE',
    title: 'Custom Software Development',
    titleLines: ['Custom Software', 'Development'],
    subtitle: 'Software designed around the way your business actually works.',
    tiles: [
      { title: 'Business Management Systems', desc: 'Digitize your operational workflows' },
      { title: 'ERP, CRM & Internal Tools', desc: 'Centralize processes, data and teams' },
      { title: 'SaaS Applications', desc: 'Build and launch your own software product' },
      { title: 'APIs & Integrations', desc: 'Connect systems, services and business data' }
    ],
    bottomLine: 'Discovery → Architecture → Development → Deployment',
    cta: 'Discuss your software project',
    color: 'from-indigo-500 to-purple-500',
    textColor: 'text-indigo-400',
    hoverTextColor: 'group-hover/tile:text-indigo-400',
    bgIcon: 'text-indigo-500'
  },
  {
    category: 'DEVOPS',
    title: 'Cloud & DevOps',
    titleLines: ['Cloud & DevOps', 'Services'],
    subtitle: 'Run your applications on reliable, production-ready infrastructure.',
    tiles: [
      { title: 'Cloud Infrastructure', desc: 'AWS / Azure environments' },
      { title: 'Application Deployment', desc: 'Production deployment and configuration' },
      { title: 'CI/CD Automation', desc: 'Automated build, test and deployment workflows' },
      { title: 'Monitoring & Backups', desc: 'Visibility, logging and data protection' }
    ],
    bottomLine: 'Infrastructure • Automation • Monitoring • Reliability',
    cta: 'Discuss your DevOps setup',
    color: 'from-emerald-500 to-teal-400',
    textColor: 'text-emerald-400',
    hoverTextColor: 'group-hover/tile:text-emerald-400',
    bgIcon: 'text-emerald-500'
  },
  {
    category: 'INTEGRATION',
    title: 'Integration & Modernization',
    titleLines: ['Integration &', 'Modernization'],
    subtitle: 'Improve existing systems without starting from scratch.',
    tiles: [
      { title: 'Legacy Modernization', desc: 'Upgrade aging applications and architectures' },
      { title: 'Cloud Migration', desc: 'Move workloads to modern cloud infrastructure' },
      { title: 'System Integration', desc: 'Connect applications, APIs and services' },
      { title: 'Performance & Reliability', desc: 'Improve application and infrastructure performance' }
    ],
    bottomLine: 'Assess → Plan → Modernize → Improve',
    cta: 'Discuss your modernization project',
    color: 'from-orange-500 to-amber-400',
    textColor: 'text-orange-400',
    hoverTextColor: 'group-hover/tile:text-orange-400',
    bgIcon: 'text-orange-500'
  }
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="services"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-3 overflow-hidden bg-[#0A0F1E]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/contact/demo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="w-full max-w-[100vw] mx-auto px-4 md:px-8 lg:px-12 relative z-10 py-8 md:py-12">
        {/* Fixed Title while scrolling */}
        <div className="mb-8 md:mb-10 flex items-center gap-4 z-20 text-white max-w-[90rem] mx-auto">
          <div className="w-12 h-px bg-white" />
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase">
            Our Services
          </h2>
        </div>

        {/* Carousel Wrapper (Contains Arrows + Card Container) */}
        <div
          className="relative max-w-[90rem] mx-auto group/carousel flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrow Left (Outside Card) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 md:-left-2 lg:-left-4 xl:left-0 z-20 w-12 h-12 md:w-14 md:h-14 border border-white/20 items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 focus:opacity-100 disabled:opacity-0"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-14" />
          </button>

          {/* Carousel Container (Clipped) */}
          <div className="relative w-full max-w-6xl bg-[#0A0F1E] border border-white/5 backdrop-blur-xl shadow-2xl overflow-hidden mx-auto">
            <div
              className="flex md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.25,1,0.5,1)] h-auto lg:h-[70vh]  overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:[transform:translateX(var(--slider-translate))]"
              style={{ '--slider-translate': `-${currentIndex * 100}%` } as React.CSSProperties}
            >
              {/* Cards */}
              {SERVICES.map((service, index) => {
                return (
                  <div key={index} className="w-full min-h-[60vh] lg:min-h-[50vh] flex-shrink-0 relative flex items-center justify-center p-6 pt-10 md:px-10 lg:px-12 snap-center">
                    {/* Subtle hover gradient blob */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover/carousel:opacity-5 transition-opacity duration-700`} />

                    <div className="relative z-10 flex flex-col justify-between h-full w-full">
                      {/* Top */}
                      <div className="flex flex-col mb-4 md:mb-0">
                        <span className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] ${service.textColor} mb-6`}>
                          0{index + 1} / {service.category}
                        </span>

                        <h3
                          className="text-[38px] md:text-5xl lg:text-8xl text-white font-bold lg:font-black mb-5 leading-[0.9] tracking-tighter relative group/text w-max"
                          onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                          }}
                        >
                          {/* Base text (Outline) */}
                          <div className="lg:text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                            {service.titleLines.map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>

                          {/* Spotlight text (Filled) */}
                          <div
                            className={`absolute top-0 inset-0 -m-8 p-8 text-transparent bg-clip-text bg-gradient-to-br ${service.color} opacity-0 group-hover/text:opacity-100 transition-opacity duration-300 pointer-events-none`}
                            style={{
                              WebkitMaskImage: `radial-gradient(circle 200px at calc(var(--mouse-x, 0px) + 2rem) calc(var(--mouse-y, 0px) + 2rem), black 0%, transparent 100%)`,
                              maskImage: `radial-gradient(circle 200px at calc(var(--mouse-x, 0px) + 2rem) calc(var(--mouse-y, 0px) + 2rem), black 0%, transparent 100%)`,
                            }}
                          >
                            {service.titleLines.map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        </h3>

                        <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Middle: Tiles */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 my-4 md:my-2">
                        {service.tiles.map((tile, idx) => (
                          <div key={idx} className="p-4 md:p-5  border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/tile">
                            <h5 className={`text-[17px] md:text-[19px] font-semibold text-white mb-1 transition-colors ${service.hoverTextColor}`}>
                              {tile.title}
                            </h5>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                              {tile.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bottom */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5 mt-1">
                        <span className="text-xs md:text-sm text-slate-500 font-mono tracking-wider">
                          {service.bottomLine}
                        </span>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:underline group/cta w-fit"
                        >
                          {service.cta} <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrow Right (Outside Card) */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 md:-right-4 lg:-right-6 xl:right-0 z-20 w-12 h-12 md:w-14 md:h-14 border border-white/20 items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 focus:opacity-100 disabled:opacity-0"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-14" />
          </button>
        </div>

        {/* Pagination Lines */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-8 md:mt-8">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group py-4 px-1 focus:outline-none"
            >
              <div
                className={`h-1 md:h-1.5 transition-all duration-300 ${currentIndex === index
                  ? 'w-16 md:w-24 bg-white'
                  : 'w-8 md:w-12 bg-white/20 group-hover:bg-white/40'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
