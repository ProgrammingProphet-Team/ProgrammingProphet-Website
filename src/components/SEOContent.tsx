import { Target, Code, Cloud, Cpu, LineChart } from 'lucide-react';

export const SEOContent = () => {
  return (
    <section className="relative py-24 bg-[#0A0F1E] border-t border-slate-800/85 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider">
              <LineChart size={14} className="animate-pulse" /> SEO Insights
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Scaling Businesses with a Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital Engineering Partner</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              At ProgrammingProphet (powered by Gyanti Enterprises), we operate as your dedicated technology collaborator. We design, build, and optimize high-impact digital systems that resolve complex operational challenges, drive customer engagement, and enable rapid growth.
            </p>
            <div className="pt-4">
              <div className="border-l-2 border-blue-500 pl-4 italic text-slate-300">
                "We don't just build code; we engineer tailored technology solutions designed around your business goals."
              </div>
            </div>
          </div>

          {/* Right Column: Key Areas of Expertise */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-[16px] space-y-6">
              <p>
                In today’s hyper-competitive digital economy, selecting the right <strong className="text-white">Software Development Company</strong> is critical to your enterprise’s survival and growth. At ProgrammingProphet, our technical expertise spans the entire development lifecycle, enabling us to deliver comprehensive end-to-end services. Whether you are an early-stage venture requiring rapid <strong className="text-white">MVP Development for Startups</strong> or an established enterprise seeking to modernize legacy infrastructure, our engineering methodologies ensure predictable, secure, and high-performance delivery.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-blue-950/50 border border-blue-900/45 flex items-center justify-center text-blue-500 mb-4 group-hover:text-cyan-400 transition-colors">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Custom Software Solutions</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We design and build <strong className="text-slate-200">Custom Software Solutions</strong> that integrate seamlessly into your day-to-day operations. From customized enterprise resource planning (ERP) platforms to automated dashboard applications, we develop robust tools that increase efficiency, eliminate human error, and reduce operational bottlenecks.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-blue-950/50 border border-blue-900/45 flex items-center justify-center text-blue-500 mb-4 group-hover:text-cyan-400 transition-colors">
                  <Code size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Web Development Services</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We provide high-performance <strong className="text-slate-200">Web Development Services</strong> leveraging industry-leading frameworks like React, Next.js, and Vite. Our front-end focus is on speed, visual excellence, and interactive responsiveness. We design user interfaces that are accessible, mobile-first, and highly engaging.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-blue-950/50 border border-blue-900/45 flex items-center justify-center text-blue-500 mb-4 group-hover:text-cyan-400 transition-colors">
                  <Cloud size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cloud Engineering</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our specialized <strong className="text-slate-200">Cloud Engineering</strong> department architects reliable cloud environments on Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We configure secure, containerized architectures that scale automatically as your user base increases.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-blue-950/50 border border-blue-900/45 flex items-center justify-center text-blue-500 mb-4 group-hover:text-cyan-400 transition-colors">
                  <Cpu size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">DevOps Services</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Complementing our cloud infrastructure is our focus on modern <strong className="text-slate-200">DevOps Services</strong>. By automating CI/CD pipelines, we ensure that new feature updates, security patches, and application enhancements can be deployed to production in minutes rather than days.
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-[16px] space-y-6 pt-2">
              <p>
                For startups, time-to-market is the difference between success and failure. We help founders validate their ideas quickly with our tailored services for <strong className="text-white">MVP Development for Startups</strong>. We focus on building a high-fidelity Minimum Viable Product that showcases your core value proposition to early users and potential investors, avoiding premature optimization and unnecessary feature creep. With our agile sprints, your startup can launch an MVP within weeks, collect valuable user feedback, and iterate based on actual usage metrics.
              </p>
              <p>
                Our collaborative model ensures that we act as an extension of your own team. From our registered business address in Navi Mumbai, Maharashtra, India, our remote-first engineers support clients across India and globally. We prioritize clean code, robust documentation, and absolute transparency throughout the project lifecycle. Choose ProgrammingProphet as your software engineering collaborator, and let's construct tomorrow's digital solutions today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
