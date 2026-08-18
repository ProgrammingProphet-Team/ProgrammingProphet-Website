import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "What kind of projects does ProgrammingProphet work on?",
    answer: "We specialize in modern websites, custom software applications, business systems, cloud infrastructure, and DevOps solutions. Whether you need a new digital product, want to modernize an existing system, or need reliable cloud infrastructure, we help turn your requirements into practical, scalable technology solutions."
  },
  {
    question: "I have an idea but don't know what solution I need. Can you help?",
    answer: "Absolutely. You don't need to have the technical solution figured out before contacting us. We start by understanding your goals, users, requirements, timeline, and budget. From there, we recommend an appropriate solution, technology approach, and project roadmap based on what your business actually needs."
  },
  {
    question: "How does a project work from idea to launch?",
    answer: (
      <div className="space-y-2">
        <p>Our process is structured, transparent, and collaborative. Depending on the project, we typically follow:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Discovery & Planning</strong> — Understanding your goals, requirements, scope, and priorities.</li>
          <li><strong>Design & Development</strong> — Designing and building the solution with regular progress updates.</li>
          <li><strong>Testing & QA</strong> — Testing functionality, performance, security, and overall quality.</li>
          <li><strong>Deployment & Launch</strong> — Deploying the solution to the appropriate environment and preparing it for production.</li>
          <li><strong>Handover & Support</strong> — Providing the agreed documentation, access, and ongoing support where applicable.</li>
        </ol>
      </div>
    )
  },
  {
    question: "How do you estimate project cost?",
    answer: "We use different engagement models depending on the project. Well-defined projects can be handled through a fixed-price proposal with a clearly agreed scope and milestones. Projects with evolving requirements may be better suited to a time-and-materials model. After understanding your requirements, we'll recommend the approach that best fits your project."
  },
  {
    question: "How long does a typical project take?",
    answer: (
      <span>
        Timelines depend on the project's scope, complexity, integrations, and requirements. A standard website may typically take around <strong>2–4 weeks</strong>, while larger custom software projects can take <strong>several months</strong>. We'll provide a realistic estimated timeline and key milestones once we understand your requirements.
      </span>
    )
  },
  {
    question: "What happens after my project goes live?",
    answer: "Our relationship doesn't have to end at launch. We can provide ongoing support and maintenance covering areas such as bug fixes, security updates, performance monitoring, infrastructure support, and feature enhancements. The level of support can be tailored to your project's operational needs."
  },
  // {
  //   question: "Who owns the source code and project assets?",
  //   answer: "For custom work, ownership and access to the agreed project deliverables are clearly defined in the project agreement. Upon completion and payment, we provide the agreed source code, designs, documentation, and project assets for the client to use and manage. Third-party software, open-source components, licenses, and pre-existing materials remain subject to their respective terms."
  // }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="lg:py-8 py-6 lg:pb-16 pb-14 relative overflow-hidden bg-[#0A0F1E] dark:bg-slate-900/50 transition-colors duration-500 ">
      {/* Background decorations */}

      {/* <div className="absolute top-55 left-1/3 w-50 h-50 bg-blue-500/10 dark:bg-blue-500/5  blur-3xl -translate-y-1/2 pointer-events-none" /> */}
      <div className="absolute top-55 right-1/4 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/5  blur-3xl -translate-y-1/2 pointer-events-none" />
      {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5  blur-3xl translate-y-1/2 pointer-events-none" /> */}

      <div className="max-w-4xl mx-auto px-6  lg:px-8 relative z-10">
        <div className="text-center lg:mb-12 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircleQuestion className="w-6 h-6 md:w-8 md:h-8 text-blue-600 hidden lg:block" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300">
              {/* Frequently Asked Questions */}
              Have questions before getting started?
            </h2>
          </div>
          <p className="text-slate-300 dark:text-slate-400 max-w-2xl mx-auto text-lg hidden lg:block">
            {/* Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team. */}
            Here are answers to the things clients usually want to know before working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-slate-200 dark:text-slate-100 border transition-all duration-300 overflow-hidden ${openIndex === index
                ? 'text-slate-200 border-slate-500 shadow-lg shadow-slate-400/5 dark:shadow-slate-400/10'
                : 'border-slate-600 dark:border-slate-700/50 hover:border-slate-400'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 lg:px-6 lg:py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold lg:text-lg text-[15px] transition-colors ${openIndex === index
                  ? 'text-slate-200 dark:text-slate-300'
                  : 'text-slate-300 dark:text-slate-200'
                  }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2  transition-colors ${openIndex === index
                  ? '  text-slate-300 dark:text-slate-300'
                  : '  text-slate-300 dark:text-slate-400 ' // group-hover:bg-slate-400 dark:group-hover:bg-slate-700'
                  }`}>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 lg:text-lg text-[15px] text-slate-300 dark:text-slate-400 leading-relaxed border-t border-slate-400 dark:border-slate-700/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
