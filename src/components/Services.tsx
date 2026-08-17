import { Code, Cpu, Cloud, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const SERVICES = [
  // {
  //   title: 'Product Engineering',
  //   subServices: ['SaaS Product Development', 'MVP Development', 'UI/UX Design', 'Product Strategy'],
  //   icon: Monitor,
  //   stats: '150+ Products Launched',
  //   color: 'from-blue-500 to-cyan-400',
  //   textColor: 'text-blue-400',
  //   bgIcon: 'text-blue-500'
  // },

  {
    title: 'Web Development',
    subServices: ['Web Application Development', 'Modern Web Development', "SEO Optimization ", "E-Commerce Development", " CMS Development"],
    icon: Code,
    stats: '10M+ Lines of Code',
    color: 'from-blue-500 to-blue-700',
    textColor: 'text-blue-400',
    bgIcon: 'text-blue-500'
  },
  {
    title: 'Software Engineering',
    subServices: ['API & Backend Development', 'SaaS Product Development', 'Custom Software Development',],
    icon: Code,
    stats: '10M+ Lines of Code',
    color: 'from-indigo-500 to-purple-400',
    textColor: 'text-indigo-400',
    bgIcon: 'text-indigo-500'
  },
  {
    title: 'DevOps Consulting',
    subServices: ['CI/CD Implementation', 'Cloud Infrastructure', 'Monitoring & Logging', 'Security & Compliance'],
    icon: Cpu,
    stats: '99.99% Uptime',
    color: 'from-emerald-500 to-teal-400',
    textColor: 'text-emerald-400',
    bgIcon: 'text-emerald-500'
  },
  // {
  //   title: 'AI Solutions',
  //   subServices: ['AI/ML Development', 'Predictive Analytics', 'Chatbot & NLP Solutions', 'Computer Vision'],
  //   icon: Brain,
  //   stats: '5x Efficiency Gains',
  //   color: 'from-pink-500 to-rose-400',
  //   textColor: 'text-pink-400',
  //   bgIcon: 'text-pink-500'
  // },
  // {
  //   title: 'Mobile Apps',
  //   subServices: ['iOS Development', 'Android Development', 'Flutter / React Native', 'App Maintenance'],
  //   icon: Smartphone,
  //   stats: '4.9/5 Average Rating',
  //   color: 'from-orange-500 to-amber-400',
  //   textColor: 'text-orange-400',
  //   bgIcon: 'text-orange-500'
  // },
  {
    title: 'Cloud Engineering',
    subServices: ['AWS / Azure / GCP', 'Cloud Architecture / Deployment ', "Cost Optimization", 'Cloud Solutions',],
    icon: Cloud,
    stats: '$2M+ Cloud Costs Saved',
    color: 'from-cyan-500 to-blue-400',
    textColor: 'text-cyan-400',
    bgIcon: 'text-cyan-500'
  }
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      {/* Background Image as used in Contact section */}
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
        <div className="mb-8 md:mb-12 flex items-center gap-4 z-20 text-white max-w-[90rem] mx-auto">
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
          {/* rounded-[2rem] md:rounded-[3rem] */}
          <div className="relative w-full max-w-6xl bg-[#0A0F1E] border border-white/5 backdrop-blur-xl shadow-2xl overflow-hidden mx-auto">
            <div
              className="flex md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.25,1,0.5,1)] h-auto  lg:h-[65vh] lg:min-h-[500px] overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:[transform:translateX(var(--slider-translate))]"
              style={{ '--slider-translate': `-${currentIndex * 100}%` } as React.CSSProperties}
            >
              {/* Cards */}
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="w-full min-h-[60vh] flex-shrink-0 relative flex items-center justify-center p-6  md:p-12 lg:p-16 snap-center">
                    {/* Subtle hover gradient blob */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover/carousel:opacity-5 transition-opacity duration-700`} />

                    {/* Huge background Icon */}
                    <div className={`absolute -right-20 -bottom-20 md:-right-32 md:-bottom-32 opacity-10 pointer-events-none transition-transform duration-1000 group-hover/carousel:scale-110 group-hover/carousel:rotate-6 ${service.bgIcon}`}>
                      <Icon className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-24 items-center h-full w-full">
                      {/* Left Column: Huge Typography */}
                      <div className="flex flex-col justify-top h-full">
                        <div className="flex items-center gap-4 mb-4 md:mb-10">
                          <span className="text-5xl md:text-7xl font-black text-slate-700 lg:text-slate-800 tracking-tighter">
                            0{index + 1}
                          </span>
                          {/* <div className="h-px w-16 md:w-24 bg-white/20" />
                          <span className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] ${service.textColor}`}>
                            Expertise
                          </span> */}
                        </div>

                        <h3
                          className="text-[48px] md:text-6xl lg:text-8xl text-white font-bold lg:font-black mb-8 leading-[0.9] tracking-tighter relative group/text w-max"
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
                            {service.title.split(' ').map((word, i) => (
                              <div key={i}>{word}</div>
                            ))}
                          </div>

                          {/* Spotlight text (Filled) */}
                          <div
                            className={`absolute top-0  inset-0 -m-8 p-8 text-transparent bg-clip-text bg-gradient-to-br ${service.color} opacity-0 group-hover/text:opacity-100 transition-opacity duration-300 pointer-events-none`}
                            style={{
                              WebkitMaskImage: `radial-gradient(circle 200px at calc(var(--mouse-x, 0px) + 2rem) calc(var(--mouse-y, 0px) + 2rem), black 0%, transparent 100%)`,
                              maskImage: `radial-gradient(circle 200px at calc(var(--mouse-x, 0px) + 2rem) calc(var(--mouse-y, 0px) + 2rem), black 0%, transparent 100%)`,
                            }}
                          >
                            {service.title.split(' ').map((word, i) => (
                              <div key={i}>{word}</div>
                            ))}
                          </div>
                        </h3>
                      </div>

                      {/* Right Column: Details & Sub-services */}
                      <div className="flex flex-col justify-center h-full ml-0 lg:ml-12">
                        <h4 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-12 text-white ">
                          Core Capabilities
                        </h4>
                        <ul className="space-y-4 md:space-y-6">
                          {service.subServices.map((sub, i) => (
                            <li key={i} className="flex items-center gap-4 md:gap-5 text-lg md:text-xl lg:text-2xl text-white/80 font-light  transition-colors">
                              <CheckCircle2 className={`w-6 h-6 md:w-8 md:h-8 ${service.textColor} opacity-50`} />
                              {sub}
                            </li>
                          ))}
                        </ul>

                        {/* Mobile Stats (visible only on small screens) */}
                        {/* <div className="mt-8 md:hidden">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/90">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            {service.stats}
                          </div>
                        </div> */}
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
        <div className="hidden md:flex justify-center items-center gap-4 mt-8 md:mt-12 ">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group py-4 px-1 focus:outline-none"
            >
              <div
                className={`h-1 md:h-1.5  transition-all duration-300 ${currentIndex === index
                  ? 'w-16 md:w-24 bg-white'
                  : 'w-8 md:w-12 bg-white/20 group-hover:bg-white/40'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

