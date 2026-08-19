import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Layers, ArrowRight, GitMerge, Zap } from 'lucide-react';

export const SystemIntegration = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
            <RefreshCw size={14} /> Modernization
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Integration & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Modernization</span>
          </h1>

          <p className="md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            ProgrammingProphet is a premier <strong className="text-white">System Integration Company</strong>. We modernize legacy code bases, connect fragmented software systems, and migration data structures to the cloud.
          </p>

          <div className="flex justify-center z-10 relative">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group">
              Discuss Your Modernization Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Deep SEO Copy Section */}
      <section className="py-16 bg-[#0a0f1c] border-y border-slate-800/50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">Connecting Systems and Upgrading Old Technologies</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              As businesses evolve, they frequently accumulate isolated technology tools, disparate databases, and older codebases that slow down execution. ProgrammingProphet provides comprehensive <strong className="text-white">System Integration Services</strong> to bridge these software layers, allowing information to transfer seamlessly between databases, administrative CRM systems, and customer-facing websites.
            </p>
            <p>
              We specialize in <strong className="text-white">Legacy Application Modernization</strong>, taking outdated code written on aging architectures and converting them into lightweight, secure React/Next.js/Node.js application stacks. Modernizing your software improves execution performance, lowers cloud server costs, and enables your team to deploy new updates rapidly.
            </p>
            <p>
              As a dedicated <strong className="text-white">System Integration Company</strong>, we analyze your current operations, find bottlenecks in your software layers, and construct custom web hooks, middle-tier API gateways, and data sync layers. Our targeted <strong className="text-white">Software Modernization Services</strong> ensure that your business-critical databases remain accessible and secure during migration, allowing you to achieve operational efficiency without rebuilding your entire operations from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sub-Capabilities Grid */}
      <section className="py-24 bg-[#030712] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Legacy Modernization",
                desc: "Refactor outdated code libraries, rewrite slow database queries, and convert monolithic applications into microservices.",
                icon: <RefreshCw size={24} />
              },
              {
                title: "Cloud Migration",
                desc: "Plan and execute migrations of legacy databases and applications from regional servers onto AWS or Google Cloud hosting.",
                icon: <Layers size={24} />
              },
              {
                title: "Systems Integration",
                desc: "Connect your ERP systems with third-party software, shipping providers, accounting platforms, or marketing platforms.",
                icon: <GitMerge size={24} />
              },
              {
                title: "Performance Optimization",
                desc: "Analyze site speed bottlenecks, add redis cache pools, configure CDN endpoints, and improve overall server responsiveness.",
                icon: <Zap size={24} />
              }
            ].map((sub, idx) => (
              <div key={idx} className="p-8 bg-[#0a0f1c]/50 backdrop-blur-sm border border-slate-800/80 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-950/80 border border-slate-800 flex items-center justify-center text-orange-500 mb-6 group-hover:border-orange-400 group-hover:text-orange-400 transition-all">
                  {sub.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{sub.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-20 bg-gradient-to-r from-[#432307] to-[#0a0f1c] border-t border-slate-800/50 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <ShieldCheck className="w-16 h-16 text-orange-500 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Safe & Secure Transition</h2>
          <p className="text-slate-300 text-lg">
            We ensure complete backup coverage, query verification, and data integrity throughout system syncs and cloud migrations.
          </p>
          <div className="pt-4">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all">
              Discuss Your Modernization Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
