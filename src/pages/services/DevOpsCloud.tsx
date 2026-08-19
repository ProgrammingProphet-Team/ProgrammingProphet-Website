import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Server, Cpu, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const DevOpsCloud = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Cloud size={14} /> Cloud & Operations
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Cloud & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">DevOps Solutions</span>
          </h1>

          <p className="md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            ProgrammingProphet provides expert <strong className="text-white">DevOps Consulting Services</strong>. We automate deployments, optimize cloud infrastructure, and build highly reliable server environments.
          </p>

          <div className="flex justify-center z-10 relative">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group">
              Discuss Your DevOps Setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Deep SEO Copy Section */}
      <section className="py-16 bg-[#0a0f1c] border-y border-slate-800/50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">Automating Deployments and Scaling Infrastructure</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              In modern software development, writing code is only half the battle. Running applications securely, predictably, and efficiently in production requires a highly tuned infrastructure layer. ProgrammingProphet offers high-performance <strong className="text-white">DevOps Consulting Services</strong> to help startups and growing companies optimize their operations and prevent costly site downtime.
            </p>
            <p>
              We architect secure and redundant <strong className="text-white">Cloud Infrastructure Services</strong> on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. We leverage containerization (Docker & Kubernetes) and Infrastructure as Code (IaC) tools like Terraform to write clean configuration scripts, ensuring that your server stacks can be duplicated or rebuilt instantly in any region.
            </p>
            <p>
              If you require specialized <strong className="text-white">AWS DevOps Services</strong>, our certified engineers configure robust VPC boundaries, managed database instances (RDS), caching zones, and serverless architectures (AWS Lambda) that auto-scale in response to active traffic surges. We prioritize <strong className="text-white">CI/CD Automation</strong>, building pipelines that test and deploy changes to your servers with zero human friction. Furthermore, we support businesses with <strong className="text-white">Cloud Migration Services</strong>, shifting legacy on-premise hardware databases into optimized cloud hosting pools with minimal runtime interruption.
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
                title: "Cloud Infrastructure",
                desc: "Secure multi-environment architectures (Dev, Staging, Prod) built on top-tier cloud systems using Infrastructure as Code (IaC).",
                icon: <Server size={24} />
              },
              {
                title: "CI/CD Orchestration",
                desc: "Automated test suites and delivery pipelines that build and deploy software patches directly to your clusters upon git commit.",
                icon: <RefreshCw size={24} />
              },
              {
                title: "Container Cluster Deployment",
                desc: "Docker and Kubernetes setups to isolate applications, optimize computing resources, and achieve zero-downtime upgrades.",
                icon: <Cpu size={24} />
              },
              {
                title: "Active Monitoring",
                desc: "Setup logging systems, performance metrics, and immediate alerting dashboards (Prometheus, Grafana) to catch bugs early.",
                icon: <Zap size={24} />
              }
            ].map((sub, idx) => (
              <div key={idx} className="p-8 bg-[#0a0f1c]/50 backdrop-blur-sm border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-950/80 border border-slate-800 flex items-center justify-center text-emerald-500 mb-6 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">
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
      <section className="py-20 bg-gradient-to-r from-[#07431d] to-[#0a0f1c] border-t border-slate-800/50 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Reliable & Resilient Infrastructure</h2>
          <p className="text-slate-300 text-lg">
            We build architectures designed to tolerate node failures, isolate database records, and back up critical assets daily.
          </p>
          <div className="pt-4">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all">
              Discuss Your Infrastructure Needs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
