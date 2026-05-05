import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqBrain from "../../assets/img/faq-bg.jpg";

const faqs = [
  {
    id: "01",
    question: "Who can participate in the hackathon?",
    answer: "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution."
  },
  {
    id: "02",
    question: "What should be the ideal team size?",
    answer: "Each team must consist of 3 to 4 members, possibly from different colleges/universities."
  },
  {
    id: "03",
    question: "What is the cost of participating?",
    answer: "Participation is entirely free. No registration or submission fee is required."
  },
  {
    id: "04",
    question: "Can a recent graduate participate?",
    answer: "Only current students from the 2024–25 academic year are eligible."
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faqs" className="relative py-32 bg-bg-dark overflow-hidden">
      {/* Background Brain Image */}
      <div className="absolute inset-0 flex justify-center items-start opacity-30 pointer-events-none mt-[-10%]">
        <img src={faqBrain} alt="" className="w-full max-w-[800px] object-contain mix-blend-lighten" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-white text-lg font-bold tracking-[0.3em] mb-32 uppercase">
          FREQUENTLY ASKED QUESTION
        </h2>

        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 last:border-0">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center gap-10 py-10 text-left group"
              >
                <span className="text-xl font-bold font-mono text-gray-500 group-hover:text-purple-500 transition-colors">
                  {faq.id}
                </span>
                <span className={`text-xl font-bold flex-1 transition-colors ${activeIndex === idx ? 'text-purple-500' : 'text-white'}`}>
                  {faq.question}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-all transform group-hover:translate-x-1">
                  {activeIndex === idx ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-[84px] pr-10 text-gray-400 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
