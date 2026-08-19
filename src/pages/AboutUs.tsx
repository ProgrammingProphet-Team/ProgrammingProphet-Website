import { motion } from 'framer-motion';
import { Target, Shield, ArrowRight, Eye, Zap, CheckCircle2, RefreshCw, Check, Layers, Clock, Heart, Code, Cloud, Cpu } from 'lucide-react';


export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">

      {/* 1. Hero Section - The Hook */}
      <section className="relative lg:py-32 pt-16 pb-20  px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center   text-blue-700 font-medium text-sm px-4 py-8 ">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span> */}
            {/* <Star size={16} className="fill-current " /> */}
            {/* About ProgrammingProphet */}
          </div>
          <span className=" flex ">
            <span className="animate-ping absolute inline-flex h-[60vh] w-full rounded-full bg-blue-400 opacity-5 "></span>
          </span>



          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Building Digital Solutions That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300">
              Drive Business Growth.
            </span>
          </h1>

          <p className=" md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            {/* Helping businesses transform ideas into reliable, scalable, and high-performing digital solutions. */}

            Digital Engineering Partner for Growing Businesses.
          </p>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 z-10">
            <a href="/contact/" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-white font-bold px-8 py-3.5  transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
              View Our Work
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-semibold text-slate-300 opacity-90">
            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> Business-Focused</div>

            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> Engineering-First</div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> Cloud & DevOps</div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> Long-Term Support</div>
          </div>

          <div className="mt-16 inline-flex flex-col items-center">
            <div className="h-8 w-px bg-slate-800 mb-4"></div>
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800  px-8 py-4 shadow-xl">
              <span className="text-sm text-slate-400 font-medium block mb-1">Powered by</span>
              <strong className="text-lg font-bold text-slate-100">Gyanti Enterprises</strong>
            </div>
          </div>

        </motion.div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-24 bg-[#0a0f1c] border-y border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Story */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-xs uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Engineering Digital Solutions for Businesses That Want to Grow.
              </h2>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  ProgrammingProphet is a remote-first digital engineering brand powered by <strong className="text-white">Gyanti Enterprises</strong>, helping businesses and organizations turn ideas, operational challenges, and digital requirements into reliable technology solutions.
                </p>
                <p>
                  We bring together software engineering, modern web technologies, cloud infrastructure, and DevOps to build solutions that are secure, scalable, maintainable, and ready for long-term growth.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 transform rotate-2 scale-[1.02] opacity-15 blur-xl"></div>
              
              <div className="relative bg-slate-950/80 backdrop-blur-md p-8 md:p-10 border border-blue-900/50 shadow-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="space-y-8">
                  {/* Branding */}
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase block mb-1">Brand Identity</span>
                    <h3 className="text-2xl font-black tracking-tight text-white ">Programming<span className='text-blue-500'>Prophet</span></h3>
                  </div>

                  {/* Capabilities */}
                  <div className="border-t border-slate-800/80 pt-5">
                    <span className="text-xs text-slate-500 font-semibold block mb-1 uppercase tracking-wider">Digital Engineering</span>
                    <span className="text-lg font-bold text-slate-200">Software • Cloud • DevOps</span>
                  </div>

                  {/* Operational Mode */}
                  <div className="border-t border-slate-800/80 pt-5">
                    <span className="text-xs text-slate-500 font-semibold block mb-1 uppercase tracking-wider">Remote-First</span>
                    <span className="text-lg font-bold text-slate-200">Serving Clients Across India</span>
                  </div>

                  {/* Parent Brand */}
                  <div className="border-t border-slate-800/80 pt-5">
                    <span className="text-xs text-slate-500 font-semibold block mb-1 uppercase tracking-wider">Powered by</span>
                    <span className="text-lg font-bold text-blue-500">Gyanti Enterprises</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What We Do Section */}
      <section className="py-24 bg-[#030712] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-xs uppercase tracking-wider">
              Our Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Engineering Across the Digital Stack
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              From application development to cloud infrastructure and operations, we engineer the technology required to take your business from idea to production.
            </p>
            
            {/* Visual Connecting Line Flowchart */}
            <div className="pt-6 hidden md:flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-slate-200">Software</span>
              <span className="text-blue-500">→</span>
              <span className="text-slate-200">Cloud</span>
              <span className="text-blue-500">→</span>
              <span className="text-slate-200">DevOps</span>
              <span className="text-blue-500">→</span>
              <span className="text-slate-200">Operations</span>
            </div>
          </motion.div>

          {/* Grid of 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Software Engineering",
                desc: "Custom applications and business systems.",
                icon: <Code size={24} />,
                color: "group-hover:text-blue-400",
                borderColor: "hover:border-blue-500/40"
              },
              {
                title: "Cloud Engineering",
                desc: "Scalable and reliable cloud infrastructure.",
                icon: <Cloud size={24} />,
                color: "group-hover:text-cyan-400",
                borderColor: "hover:border-cyan-500/40"
              },
              {
                title: "DevOps",
                desc: "CI/CD, deployment, monitoring, automation and operations.",
                icon: <Cpu size={24} />,
                color: "group-hover:text-purple-400",
                borderColor: "hover:border-purple-500/40"
              },
              {
                title: "Digital Solutions",
                desc: "Modern web applications, portals, ERP systems and business platforms.",
                icon: <Layers size={24} />,
                color: "group-hover:text-emerald-400",
                borderColor: "hover:border-emerald-500/40"
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative bg-[#0a0f1c]/50 backdrop-blur-sm p-8 border border-slate-800/80 transition-all duration-300 hover:-translate-y-1 ${capability.borderColor} hover:shadow-2xl overflow-hidden`}
              >
                <div className={`w-12 h-12 bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-400 mb-6 transition-all duration-300 ${capability.color} group-hover:border-current`}>
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{capability.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0  transition-transform duration-300 origin-left" />
                {/* group-hover:scale-x-100 */}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-[#071343] to-[#071343] border-y border-slate-800/50">
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-medium text-xs uppercase tracking-wider">
              Our Value Proposition
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Why Choose ProgrammingProphet</h2>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              We focus on delivering high-impact business outcomes through robust engineering standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Business-Focused Solutions",
                desc: "Designing technology around your operations and growth objectives.",
                icon: <Target size={24} />
              },
              {
                title: "Predictable Delivery",
                desc: "Agile engineering cycles ensuring reliable and on-time software releases.",
                icon: <Clock size={24} />
              },
              {
                title: "Scalable Architecture",
                desc: "Software architecture designed to adapt to growing users, workloads, and business requirements.",
                icon: <Layers size={24} />
              },
              {
                title: "Long-Term Support",
                desc: "Post-launch maintenance, monitoring, optimization, and technical support.",
                icon: <Shield size={24} />
              },
              {
                title: "Modern Engineering",
                desc: "We choose proven technologies that fit your business, requirements, and long-term goals.",
                icon: <Zap size={24} />
              },
              {
                title: "Secure by Design",
                desc: "Integrating security protocols and data protection best practices from day one.",
                icon: <CheckCircle2 size={24} />
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#030712]/50 backdrop-blur-sm p-8  hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden"
              >
                <div className="w-12 h-12 bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-blue-100/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="py-24 bg-[#0A0F1E] border-y border-slate-800/50">
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-xs uppercase tracking-wider">
              Our Principles
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Our Core Values</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              How we behave, operate, and deliver excellence to our partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative lg:col-span-2 bg-gradient-to-br from-blue-900/30 to-[#0a0f1c] p-10 border border-blue-800/50 hover:-translate-y-1 transition-transform duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/20 blur-[60px] group-hover:bg-blue-400/30 transition-all duration-500"></div>
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center text-white mb-6 transition-transform duration-300 shadow-lg shadow-blue-600/30">
                <Heart size={32} className="group-hover:fill-current transition-colors duration-300" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Client First</h4>
              <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl relative z-10">
                Every decision starts with understanding our clients' goals. We don't build software just to build it; we build tools that actively solve your most pressing business challenges and fuel your growth.
              </p>
            </motion.div>

            {[
              { title: "Engineering Excellence", desc: "We build reliable, secure, and maintainable solutions using industry best practices.", icon: <CheckCircle2 size={24} />, gradient: "from-purple-900/20", iconColor: "text-purple-400", iconBg: "bg-purple-900/40 border border-purple-500/20", hoverBorder: "hover:border-purple-500/50" },
              { title: "Ownership", desc: "Taking accountability for our code, our architecture, and the success of the systems we build.", icon: <Shield size={24} />, gradient: "from-cyan-900/20", iconColor: "text-cyan-400", iconBg: "bg-cyan-900/40 border border-cyan-500/20", hoverBorder: "hover:border-cyan-500/50" },
              { title: "Transparency", desc: "Open, honest collaboration and clear, direct communication at every stage of the project.", icon: <Eye size={24} />, gradient: "from-green-900/20", iconColor: "text-green-400", iconBg: "bg-green-900/40 border border-green-500/20", hoverBorder: "hover:border-green-500/50" },
              { title: "Continuous Improvement", desc: "We continuously learn, adapt, and refine our skills to deliver greater value.", icon: <RefreshCw size={24} />, gradient: "from-orange-900/20", iconColor: "text-orange-400", iconBg: "bg-orange-900/40 border border-orange-500/20", hoverBorder: "hover:border-orange-500/50" },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className={`group relative bg-gradient-to-br ${value.gradient} to-[#0a0f1c] p-8 border border-slate-800/80 hover:-translate-y-1 transition-all duration-300 ${value.hoverBorder} hover:shadow-xl overflow-hidden`}
              >
                <div className={`w-12 h-12 flex items-center justify-center ${value.iconBg} ${value.iconColor} mb-6 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How We Work Section */}
      <section className="py-24 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-xs uppercase tracking-wider">
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">How We Work</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We follow a structured engineering lifecycle to turn your operational requirements into high-performing, reliable systems.
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connecting line for large screens */}
            <div className="absolute top-[15%] left-[4.3%] right-[10%] h-0.5 mr-18 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "Understand your business, requirements, users, and technical challenges.",
                  glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-blue-500/10 border-blue-500/30 text-blue-400 hover:border-blue-500/60"
                },
                {
                  step: "02",
                  title: "Plan",
                  desc: "Define the architecture, technology, scope, and implementation approach.",
                  glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60"
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "Develop the solution using modern engineering practices.",
                  glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] bg-purple-500/10 border-purple-500/30 text-purple-400 hover:border-purple-500/60"
                },
                {
                  step: "04",
                  title: "Deploy",
                  desc: "Set up infrastructure, CI/CD, security, monitoring, and production deployment.",
                  glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-pink-500/10 border-pink-500/30 text-pink-400 hover:border-pink-500/60"
                },
                {
                  step: "05",
                  title: "Evolve",
                  desc: "Provide support, optimization, and continuous improvements.",
                  glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:border-emerald-500/60"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex flex-col items-center lg:items-start text-center lg:text-left bg-[#0a0f1c]/50 lg:bg-transparent border border-slate-800/80 lg:border-0 p-6 lg:p-0 transition-colors duration-300"
                >
                  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold text-lg mb-6 relative z-10 transition-all duration-300 ${item.glow}`}>
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm lg:pr-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
