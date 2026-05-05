import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img/img_1.jpg";
import img2 from "../../assets/img/img_2.jpg";
import img3 from "../../assets/img/img_3.jpg";
import img4 from "../../assets/img/img_4.jpg";
import img5 from "../../assets/img/img_5.jpg";
import TiltWrapper from "../TiltWrapper";

const Promo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 12,
    minutes: 42,
    seconds: 31,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const images = [img1, img2, img3, img4, img5];

  return (
    <section id="hackathon-info" className="py-24 px-6 md:px-20 bg-bg-dark border-y border-white/5 relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight leading-tight uppercase">
            What is the <br />
            <span className="text-purple-500">Hackathon?</span>
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
            <p>
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted to uncover pioneering ideas in science, technology, and system design. As technological advancements accelerate globally, this initiative aims to bridge academic knowledge with practical implementation.
            </p>
            <p>
              Participants will work on challenge statements designed by leading R&D units, applying theoretical expertise to build innovative prototypes and solutions with potential real-world application.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
            <div className="p-1 relative">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/40"></div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-sm">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Submission Closing In:</p>
                <div className="text-xl md:text-2xl font-black font-mono tracking-wider">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-1"
            >
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/40"></div>
              <button className="bg-purple-600/20 backdrop-blur-md border border-purple-500/30 px-8 md:px-10 py-4 md:py-5 text-white font-bold tracking-wider hover:bg-purple-600 transition-all duration-300">
                Register Now
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Interactive Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 h-[400px] md:h-[600px] relative">
          <div className="space-y-4 md:space-y-6 flex flex-col justify-end">
            <TiltWrapper>
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-full overflow-hidden rounded-xl md:rounded-2xl cursor-none relative group border border-white/10"
                data-hover="image"
                data-cursor-text="WORK"
              >
                <img src={images[0]} alt="Work 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </TiltWrapper>
            <TiltWrapper>
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-full overflow-hidden rounded-xl md:rounded-2xl cursor-none relative group border border-white/10"
                data-hover="image"
                data-cursor-text="CODE"
              >
                <img src={images[1]} alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </TiltWrapper>
          </div>
          <div className="space-y-4 md:space-y-6 flex flex-col pt-8 md:pt-12">
            <TiltWrapper>
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-full overflow-hidden rounded-xl md:rounded-2xl cursor-none relative group border border-white/10"
                data-hover="image"
                data-cursor-text="DESIGN"
              >
                <img src={images[2]} alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </TiltWrapper>
            <TiltWrapper>
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                className="h-full overflow-hidden rounded-xl md:rounded-2xl cursor-none relative group border border-white/10"
                data-hover="image"
                data-cursor-text="TECH"
              >
                <img src={images[3]} alt="Work 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </TiltWrapper>
          </div>

          {/* Floating Image 5 - Only on md+ screens */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-xl md:rounded-2xl overflow-hidden border-2 border-purple-500 shadow-2xl z-20 hidden lg:block"
          >
            <img src={images[4]} alt="Work 5" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
