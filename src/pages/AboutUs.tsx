import { motion } from 'framer-motion';
import { Target, Users, Shield, ArrowRight, Eye, Zap, CheckCircle2, Rocket, RefreshCw, Check, Code, Cloud, LayoutTemplate, Network, Settings, Layers, Clock, Handshake, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">

      {/* 1. Hero Section - The Hook */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
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
            <span className="animate-ping absolute inline-flex h-[60vh] w-full rounded-full bg-blue-400 opacity-5"></span>
          </span>



          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Building Digital Solutions That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300">
              Drive Business Growth.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto mb-10">
            ProgrammingProphet is dedicated to helping businesses transform ideas into reliable, scalable, and high-performing digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/#projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-white font-bold px-8 py-3.5  transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
              View Our Work
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-semibold text-slate-300 opacity-90">
            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> High Performance</div>

            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> Secure Development</div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-500" /> Scalable Architecture</div>
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

      {/* 2. The Philosophy - Split Layout */}
      {/* <section className="py-24 bg-[#0a0f1c] border-y border-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Solving Real Business Problems Without <span className="text-blue-500">Unnecessary Complexity.</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-400">
                <p>
                  We believe technology should simplify operations, not complicate them. That's why we work closely with every client to deeply understand their goals, challenges, and vision before crafting tailored solutions.
                </p>
                <p>
                  From startups launching their first product to growing businesses modernizing their legacy systems, our team focuses on delivering secure, maintainable, and future-ready software built strictly upon industry best practices.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="flex-shrink-0 w-6 h-6  bg-blue-900/50 flex items-center justify-center text-blue-400"><Check size={14} strokeWidth={3} /></div>
                  Business-first approach
                </div>
                <div className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="flex-shrink-0 w-6 h-6  bg-blue-900/50 flex items-center justify-center text-blue-400"><Check size={14} strokeWidth={3} /></div>
                  Agile development
                </div>
                <div className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="flex-shrink-0 w-6 h-6  bg-blue-900/50 flex items-center justify-center text-blue-400"><Check size={14} strokeWidth={3} /></div>
                  Cloud-native architecture
                </div>
                <div className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="flex-shrink-0 w-6 h-6  bg-blue-900/50 flex items-center justify-center text-blue-400"><Check size={14} strokeWidth={3} /></div>
                  Transparent communication
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 transform rotate-3 scale-[1.02] opacity-20 blur-xl"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-md  p-10 md:p-14 border border-slate-800 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-[0.07] group-hover:rotate-12 transition-transform duration-700">
                  <Handshake size={120} className="text-blue-400" />
                </div>

                <h3 className="text-xl font-bold tracking-widest text-blue-400 uppercase mb-6">Our Commitment</h3>

                <p className="text-2xl font-bold text-white mb-8 relative z-10 leading-snug">
                  "We treat every project as if it were our own business—building secure, scalable, and maintainable solutions that continue delivering value long after launch."
                </p>

                <div className="relative z-10 pt-6 border-t border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12  bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white">ProgrammingProphet Team</div>
                    <div className="text-blue-400 text-sm">Powered by Gyanti Enterprises</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* 3. Mission & Vision & Promise - 3 Equal Cards */}
      {/* <section className="pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto bg-[#030712]">
        <div className="grid md:grid-cols-3 gap-8">
          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-[#0a0f1c] p-10  border border-slate-800/80 overflow-hidden hover:-translate-y-2 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16  bg-indigo-900/30 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform duration-300">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed relative z-10">
              To become a trusted technology partner for businesses worldwide by delivering quality-driven software, cloud, and DevOps solutions with integrity and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0f1c] p-10  border border-slate-800/80 overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16  bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed relative z-10">
              To empower businesses with innovative, scalable, and dependable technology solutions that accelerate growth and create lasting value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#0a0f1c] p-10  border border-slate-800/80 overflow-hidden hover:-translate-y-2 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-300">
              <Handshake size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Promise</h3>
            <p className="text-slate-400 leading-relaxed relative z-10">
              We build long-term partnerships by delivering quality software, transparent communication, and continuous support to ensure your lasting success.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* 4. Why Choose Us - 6 Premium Cards (Gradient Background) */}
      {/* from-[#071343] via-[#101b6c] to-[#071343] */}
      <section className="py-24 bg-gradient-to-r from-[#071343]  to-[#071343] border-y border-slate-800/50">
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ProgrammingProphet</h2>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              We bring technical excellence and business acumen to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business First", desc: "Solutions designed to solve real operational bottlenecks.", icon: <Target size={24} /> },
              { title: "Transparent Communication", desc: "No jargon. Clear timelines and completely honest updates.", icon: <Users size={24} /> },
              { title: "Modern Technologies", desc: "Utilizing the latest, most reliable tech stacks available.", icon: <Zap size={24} /> },
              { title: "Scalable Solutions", desc: "Architecture built to grow seamlessly with your user base.", icon: <Layers size={24} /> },
              { title: "On-Time Delivery", desc: "Agile processes ensuring rapid, predictable deployment.", icon: <Clock size={24} /> },
              { title: "Long-Term Partnership", desc: "Ongoing maintenance and optimization post-launch.", icon: <Shield size={24} /> },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#030712]/50 backdrop-blur-sm p-8  border border-blue-900/30 hover:-translate-y-1 hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden"
              >
                <div className="w-12 h-12  bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300">
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


      {/* 6. Core Values - Bento Grid (Deep Background) */}
      <section className="py-24 bg-[#0A0F1E] border-y border-slate-800/50">
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The foundational principles that guide every decision we make and every product we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative lg:col-span-2 bg-gradient-to-br from-blue-900/30 to-[#0a0f1c] p-10  border border-blue-800/50 hover:-translate-y-1 transition-transform duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/20 blur-[60px] group-hover:bg-blue-400/30 transition-all duration-500"></div>
              <div className="w-16 h-16  bg-blue-600 flex items-center justify-center text-white mb-6  transition-transform duration-300 shadow-lg shadow-blue-600/30">
                <Heart size={32} className="group-hover:fill-current transition-colors duration-300" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 relative z-10">Client First</h4>
              <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl relative z-10">
                Every decision starts with understanding our clients' goals. We don't build software just to build it; we build tools that actively solve your most pressing business challenges and fuel your growth.
              </p>
            </motion.div>

            {[
              { title: "Quality by Design", desc: "We build reliable, secure, and maintainable solutions.", icon: <CheckCircle2 size={24} />, gradient: "from-purple-900/20", iconColor: "text-purple-400", iconBg: "bg-purple-900/40 border border-purple-500/20", hoverBorder: "hover:border-purple-500/50" },
              { title: "Innovation", desc: "We embrace modern technologies to solve complex challenges.", icon: <Zap size={24} />, gradient: "from-cyan-900/20", iconColor: "text-cyan-400", iconBg: "bg-cyan-900/40 border border-cyan-500/20", hoverBorder: "hover:border-cyan-500/50" },
              { title: "Transparency", desc: "Open communication and honest collaboration at every stage.", icon: <Eye size={24} />, gradient: "from-green-900/20", iconColor: "text-green-400", iconBg: "bg-green-900/40 border border-green-500/20", hoverBorder: "hover:border-green-500/50" },
              { title: "Continuous Improvement", desc: "We continuously learn and adapt to deliver greater value.", icon: <RefreshCw size={24} />, gradient: "from-orange-900/20", iconColor: "text-orange-400", iconBg: "bg-orange-900/40 border border-orange-500/20", hoverBorder: "hover:border-orange-500/50" },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className={`group relative bg-gradient-to-br ${value.gradient} to-[#0a0f1c] p-8  border border-slate-800/80 hover:-translate-y-1 transition-all duration-300 ${value.hoverBorder} hover:shadow-xl overflow-hidden`}
              >
                <div className={`w-12 h-12  flex items-center justify-center ${value.iconBg} ${value.iconColor} mb-6  transition-transform duration-300`}>
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

      {/* 7. Final Footer CTA */}
      {/* <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto bg-[#030712]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl p-12 md:p-20 text-center border border-blue-900/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#071343] to-[#1a145e]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build your next project?
            </h2>
            <p className="text-xl text-blue-200/90 mb-10 font-medium">
              Let's create something exceptional together.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section> */}

    </div>
  );
};
