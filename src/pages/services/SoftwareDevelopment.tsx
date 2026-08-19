import { motion } from 'framer-motion';
import { ShieldCheck, Code, Layers, ArrowRight, Settings, Database } from 'lucide-react';

export const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Layers size={14} /> Custom Software
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">Software Development</span>
          </h1>

          <p className="md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            ProgrammingProphet is a leading <strong className="text-white">Custom Software Development Company</strong>. We design, engineer, and deploy high-performing software platforms tailored to your operational workflows.
          </p>

          <div className="flex justify-center z-10 relative">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group">
              Discuss Your Software Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Deep SEO Copy Section */}
      <section className="py-16 bg-[#0a0f1c] border-y border-slate-800/50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">Scalable Software Architecture Custom-Built For Your Business</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              Pre-built software packages often force businesses to reshape their existing operational models to conform to rigid software layouts. We operate on the opposite principle: technology should be custom-tailored to adapt to your unique workflows. As an experienced <strong className="text-white">Custom Software Development Company</strong>, ProgrammingProphet creates bespoke platforms that align exactly with your goals, team size, and growth vectors.
            </p>
            <p>
              Our engineers build high-performance <strong className="text-white">Custom Software Solutions</strong> that eliminate paper processes, reduce operational overhead, and consolidate disparate data sources. From customized CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) software to internal administrative dashboards, we design tools that increase transparency, accuracy, and efficiency.
            </p>
            <p>
              We also specialize in <strong className="text-white">SaaS Application Development</strong>, helping innovators and growing enterprises construct multi-tenant software platforms ready for public subscription. Our developers enforce secure code structures and robust database schemas to protect sensitive user assets. In addition, we deploy seamless <strong className="text-white">API Integration Services</strong>, connecting your custom application with popular payment processors, accounting suites, messaging bridges, and third-party APIs.
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
                title: "Internal Systems & ERP",
                desc: "Consolidate business workflows, inventory trackers, scheduling metrics, and user management databases into a single admin system.",
                icon: <Settings size={24} />
              },
              {
                title: "SaaS Platforms",
                desc: "Build highly scalable, subscription-ready software products containing multi-tenant structures and transactional databases.",
                icon: <Layers size={24} />
              },
              {
                title: "Custom CRM Suites",
                desc: "Bespoke systems to capture customer relations, support requests, call logs, sales pipelines, and analytics reports.",
                icon: <Code size={24} />
              },
              {
                title: "APIs & Integrations",
                desc: "Develop scalable REST and GraphQL APIs that link your internal databases with third-party software layers safely.",
                icon: <Database size={24} />
              }
            ].map((sub, idx) => (
              <div key={idx} className="p-8 bg-[#0a0f1c]/50 backdrop-blur-sm border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-950/80 border border-slate-800 flex items-center justify-center text-indigo-500 mb-6 group-hover:border-indigo-400 group-hover:text-indigo-400 transition-all">
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
      <section className="py-20 bg-gradient-to-r from-[#0d0743] to-[#0a0f1c] border-t border-slate-800/50 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <ShieldCheck className="w-16 h-16 text-indigo-500 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Engineering-First Solutions</h2>
          <p className="text-slate-300 text-lg">
            We follow agile engineering iterations, delivering testable software chunks to ensure project alignment at every stage.
          </p>
          <div className="pt-4">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all">
              Discuss Your Software Requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
