import { motion } from 'framer-motion';
import { ShieldCheck, Code, Layers, Zap, ArrowRight, Layout } from 'lucide-react';

export const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white transition-colors duration-500 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Code size={14} /> Web & Digital Solutions
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300">Web Development Services</span>
          </h1>

          <p className="md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            ProgrammingProphet is a premier <strong className="text-white">Web Development Company</strong> helping businesses build responsive, high-performing, and visually stunning digital products that convert.
          </p>

          <div className="flex justify-center z-10 relative">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group">
              Discuss Your Web Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Deep SEO Copy Section */}
      <section className="py-16 bg-[#0a0f1c] border-y border-slate-800/50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">Building Modern Web Platforms for Transactional Growth</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              In today's digital landscape, a website is much more than an online brochure. It is the primary vehicle for customer acquisition, engagement, and operational workflows. As a dedicated <strong className="text-white">Web Development Company</strong>, ProgrammingProphet specializes in constructing high-performance platforms that load instantly, scale smoothly, and deliver exceptional user experiences. 
            </p>
            <p>
              We implement strict <strong className="text-white">Responsive Web Design</strong> principles across all interfaces, ensuring that your application renders flawlessly on smartphones, tablets, laptops, and wide-screen desktop monitors alike. Mobile friendliness is not an afterthought; it is integrated directly into our initial CSS architectures and design layouts.
            </p>
            <p>
              Depending on your specific goals, we utilize the most appropriate modern libraries and frameworks. As a specialized <strong className="text-white">React Development Company</strong>, we build dynamic, interactive dashboard tools, single-page applications, and interactive portals that manage state cleanly and perform operations without page reloads. For projects requiring server-side rendering, static site generation, and optimized indexing, we operate as a leading <strong className="text-white">Next.js Development Company</strong>, designing robust sites with fast execution times and pristine SEO scores.
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
                title: "Business Websites",
                desc: "Premium, bespoke marketing sites designed to introduce your brand, showcase capabilities, and generate qualified commercial leads.",
                icon: <Layout size={24} />
              },
              {
                title: "Web Applications",
                desc: "Custom interactive applications integrated with database servers and client APIs, optimized to run your day-to-day business operations.",
                icon: <Code size={24} />
              },
              {
                title: "E-Commerce Solutions",
                desc: "Secure, high-converting digital storefronts and shopping checkouts that integrate payment processors and product catalogs.",
                icon: <Zap size={24} />
              },
              {
                title: "CMS Platforms",
                desc: "Easy-to-use content management systems (CMS) that allow your non-technical marketing teams to publish, update, and manage pages on the fly.",
                icon: <Layers size={24} />
              }
            ].map((sub, idx) => (
              <div key={idx} className="p-8 bg-[#0a0f1c]/50 backdrop-blur-sm border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-950/80 border border-slate-800 flex items-center justify-center text-blue-500 mb-6 group-hover:border-blue-400 group-hover:text-blue-400 transition-all">
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
      <section className="py-20 bg-gradient-to-r from-[#071343] to-[#0a0f1c] border-t border-slate-800/50 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Confidential & Reliable Delivery</h2>
          <p className="text-slate-300 text-lg">
            We sign NDAs, maintain clean git version histories, and deploy your custom web systems under automated staging-to-production pipelines.
          </p>
          <div className="pt-4">
            <a href="/contact/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 transition-all">
              Discuss Your Web Requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
