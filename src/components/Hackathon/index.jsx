import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import rewardBg from "../../assets/img/reward-card-bg.svg";

const Hackathon = () => {
  const schedule = [
    { title: "Registrations and Idea Submission Open", date: "Thu, Jul 04, 2025", progress: 100 },
    { title: "Introductory and Problem Statement Explainer Session", date: "Thu, Jul 08, 2025", progress: 0 },
    { title: "Mentor-Mentee Connects - Begins", date: "Thu, Jul 08, 2025", progress: 0 },
    { title: "Mentor-Mentee Connects - Ends", date: "Tue, Jul 16, 2025", progress: 0 },
  ];

  const rewards = [
    {
      title: "Mentorship from Experts",
      description: "Work under the guidance of domain professionals and technology mentors.",
    },
    {
      title: "Recognition and Internship Opportunities",
      description: "Outstanding performers may receive offers for internships or collaboration opportunities.",
    },
  ];

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      const currentProgress = (scrollLeft / totalScroll) * 100;
      setScrollProgress(currentProgress);
    }
  };

  const handleScrub = (e) => {
    const value = e.target.value;
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      scrollRef.current.scrollLeft = (value / 100) * totalScroll;
      setScrollProgress(value);
    }
  };

  return (
    <section id="schedules" className="bg-bg-dark py-32 px-6 md:px-20 relative z-10 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-purple-500 text-lg font-bold tracking-[0.3em] mb-20 uppercase">
          HACKATHON SCHEDULE
        </h2>

        {/* Timeline Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-10 overflow-x-auto pb-16 scrollbar-hide snap-x no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {schedule.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[320px] flex-shrink-0 snap-center p-8 glass-card border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <h3 className="text-sm font-bold text-purple-600 mb-6 h-12 flex items-end">
                  {item.title}
                </h3>

                <div className="relative h-2 w-full bg-purple-900/30 rounded-full mb-8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-purple-600 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  ></motion.div>
                  {/* Marker */}
                  <div className={`absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-bg-dark shadow-[0_0_20px_rgba(124,58,237,0.8)] ${item.progress > 0 ? 'scale-110' : 'scale-100'}`}></div>
                </div>

                <p className="text-2xl font-black text-white tracking-tight">{item.date}</p>
              </motion.div>
            ))}
          </div>

          {/* Scrub Bar / Range Slider */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="w-full max-w-2xl relative">
              <input
                type="range"
                min="0"
                max="100"
                value={scrollProgress}
                onChange={handleScrub}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-600 hover:accent-purple-500 transition-all"
                style={{
                  background: `linear-gradient(to right, #7c3aed ${scrollProgress}%, rgba(255, 255, 255, 0.1) ${scrollProgress}%)`
                }}
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-4">
                <span>Start</span>
                <span>Scrub to Explore Timeline</span>
                <span>End</span>
              </div>
            </div>
          </div>
        </div>

        <div id="rewards" className="mt-48">
          <h2 className="text-center text-purple-500 text-lg font-bold tracking-[0.3em] mb-20 uppercase">
            REWARDS AND BENEFITS
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-12">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative p-10 max-w-md rounded-2xl overflow-hidden border border-white/5 group shadow-2xl"
              >
                <img src={rewardBg} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="relative z-10">
                  <div className="w-12 h-1 bg-purple-500 mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-2xl font-bold text-purple-500 mb-4 tracking-tight">
                    {reward.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {reward.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
