import { motion } from 'framer-motion';
import { Star, Quote, HandshakeIcon } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "PCKeyZone - Ongoing",
    role: "E-Commerce Plateform",
    image: "/testimonials/PCKeyZone.png",
    text: "Developing a modern, user-friendly website for PCKeyZone that looks impressive & will improves online presence and customer engagement.",
    rating: 5
  },
  {
    id: 2,
    name: "SSCMR College",
    role: "Educational Institution",
    image: "/testimonials/SSCMR-College.png",
    text: "The team at ProgrammingProphet built a professional and responsive website for SSCMR College that truly reflects our academic excellence and values.",
    rating: 5
  },
  {
    id: 3,
    name: "WeMurz Services ",
    role: "IT Service and Consulting",
    image: "/testimonials/wemore-logo.png",
    text: "ProgrammingProphet created a fast, clean and easy-to-manage website for WeMurz Services that has helped us reach and support more clients online.",
    rating: 5
  },
  {
    id: 4,
    name: "SRaaz Enterprises",
    role: "Business Services",
    image: "https://ui-avatars.com/api/?name=SRaaz+Enterprises&background=F59E0B&color=fff&size=128",
    text: "We're really impressed with the website developed by ProgrammingProphet. It has given SRaaz Enterprises a strong digital identity and helped us connect with more clients.",
    rating: 5
  },
  {
    id: 5,
    name: "CherryApp - Netlyra",
    role: "Social Media Plateform",
    image: "/testimonials/CherryApp.png",
    text: "ProgrammingProphet gave us great business services, related to our professional  email setup and deployment engineering.",
    rating: 5
  },
  {
    id: 6,
    name: "ProgrammingProphet",
    role: "Your Technology Partner",
    // image: "../public/testimonials/men-profile.svg",
    image: "/testimonials/logo-light.png",
    // image: "../public/testimonials/pp-new.png",



    // image: "https://ui-avatars.com/api/?name=You&background=2563EB&color=fff&size=128",
    text: "We believe great software isn't just about delivering a project. It's about clear communication, dependable execution, and standing by our clients when they need us.",
    message: "OUR COMMITMENT",
    rating: 0
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="lg:py-6 lg:pb-12 py-6 relative overflow-hidden bg-[#0A0F1E]">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/7 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">


          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide mb-6"
          >
            <Star size={16} className="fill-current" />
            Testimonials
          </motion.div> */}


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-50 to-blue-700 bg-clip-text text-transparent mb-4 tracking-tight "
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400  lg:text-lg md:text-xl"
          >
            Don't just take our word for it. Hear from the clients and partners who have experienced what it's like to build with us.
            {/* Don't just take our word for it. Hear from the visionary leaders who have partnered with us to transform their digital presence. */}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group  backdrop-blur-sm border border-slate-600 hover:border-slate-400 dark:border-slate-800 p-8  transition-all duration-300 relative flex flex-col h-full"
            >
              {testimonial.message ? (
                <HandshakeIcon className="absolute top-5 right-8 text-[#0D1B35] dark:text-blue-400/5 w-16 h-16 transition-transform group-hover:scale-110  dark:group-hover:text-blue-400/10 duration-300" />
              ) : (
                <Quote className="absolute top-5 right-8 text-blue-500/10 dark:text-blue-400/5 w-16 h-16 rotate-180 transition-transform group-hover:scale-110 group-hover:text-blue-500/10 dark:group-hover:text-blue-400/10 duration-300" />
              )}

              <div className="flex gap-1 mb-2 lg:mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
                {testimonial.message && (
                  <div className="flex items-center gap-2 relative z-10 flex-grow">
                    <div className="w-5 h-[3px] bg-blue-500 rounded-full"></div>
                    <p className="text-slate-100 font-bold dark:text-slate-200 tracking-wider text-sm">{testimonial.message}</p>
                  </div>
                )}
              </div>

              <p className="text-slate-300 dark:text-slate-300 mb-3 lg:mb-6 relative z-10 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center lg:gap-4 gap-3 mt-auto relative z-10">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="lg:w-10 lg:h-10 w-9 h-9   object-cover  dark:border-slate-800 shadow-md"
                  />

                  {/* className="lg:w-14 lg:h-14 w-12 h-12 rounded-full object-cover border-2  border-white dark:border-slate-800 shadow-md" */}

                  {/* <div className="absolute lg:-bottom-1 lg:-right-1 -bottom-0 -right-1 bg-blue-500 rounded-full lg:p-1 p-0.5 border-2 border-white dark:border-slate-900">
                    <Star size={10} className="text-white fill-white" />
                  </div> */}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-200 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
