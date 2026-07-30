import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does Programming Prophet do?",
    answer: "We are a forward-thinking software development agency specializing in AI integration, custom web applications, and scalable architecture. We help businesses modernize their tech stack and build future-proof solutions."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A standard web application MVP might take 4-8 weeks, while complex enterprise solutions with AI integration can take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, absolutely! We believe in long-term partnerships. We offer various maintenance packages that include security updates, performance monitoring, bug fixes, and feature enhancements to keep your application running smoothly."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core stack includes React, Node.js, TypeScript, and various cloud platforms (AWS, GCP). We also have deep expertise in AI/LLM integrations, using tools like OpenAI, Gemini, and custom machine learning models."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer both fixed-price contracts for well-defined projects and time-and-materials (hourly/weekly) arrangements for projects with evolving requirements. We'll work with you to find the best engagement model for your needs."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="lg:py-12 py-6 pb-12 relative overflow-hidden bg-[#0A0F1E] dark:bg-slate-900/50 transition-colors duration-500 ">
      {/* Background decorations */}

      {/* <div className="absolute top-55 left-1/3 w-50 h-50 bg-blue-500/10 dark:bg-blue-500/5  blur-3xl -translate-y-1/2 pointer-events-none" /> */}
      <div className="absolute top-55 right-1/4 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/5  blur-3xl -translate-y-1/2 pointer-events-none" />
      {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5  blur-3xl translate-y-1/2 pointer-events-none" /> */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:mb-12 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircleQuestion className="w-6 h-6 md:w-8 md:h-8 text-blue-600 hidden lg:block" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-slate-300 dark:text-slate-400 max-w-2xl mx-auto text-lg hidden lg:block">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team.
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
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold lg:text-lg transition-colors ${openIndex === index
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
                    <div className="px-6 pb-6 text-slate-300 dark:text-slate-400 leading-relaxed border-t border-slate-400 dark:border-slate-700/50 pt-4">
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
