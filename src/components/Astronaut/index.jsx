import { motion } from "framer-motion";
import astronaut from "../../assets/img/layer_2.png";
import bgLeft from "../../assets/img/card-bg-left.svg";
import bgRight from "../../assets/img/card-bg-right.svg";

const Astronaut = () => {
  return (
    <section id="why-participate" className="relative py-32 bg-bg-dark overflow-hidden">
      {/* Advanced Geometric Background & Light Rays */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* Central Glow */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full"></div>

        {/* Rotating Light Rays */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute h-[1px] w-[1200px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
            initial={{ rotate: i * 30 }}
            animate={{ rotate: (i * 30) + 360 }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Multi-axis Geometric Shapes (SVG) */}
        <div className="absolute w-[800px] h-[800px] opacity-20">
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {/* Hexagonal Grid or Geometric Pattern */}
            <motion.path
              d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
              fill="none"
              stroke="url(#grad-purple)"
              strokeWidth="0.5"
              animate={{ rotateY: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="50" cy="50" r="45"
              fill="none"
              stroke="url(#grad-purple)"
              strokeWidth="0.2"
              animate={{ rotateX: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Orbital particles (Existing but enhanced) */}
        <div className="absolute w-[600px] h-[600px] animate-orbit opacity-40">
          <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-0 left-1/2 shadow-[0_0_15px_#a855f7]"></div>
        </div>
        <div className="absolute w-[450px] h-[450px] animate-orbit-reverse opacity-30" style={{ animationDuration: '12s' }}>
          <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full absolute bottom-0 left-1/2 shadow-[0_0_15px_#d946ef]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-purple-500 text-lg font-bold tracking-[0.4em] mb-24 uppercase">
          WHY PARTICIPATE?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Left Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 order-2 lg:order-1"
          >
            <div className="relative p-8 w-full max-w-[340px] rounded-xl overflow-hidden min-h-[160px] flex flex-col justify-center border border-white/5 group">
              <img src={bgLeft} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 text-white">Mentorship from Experts</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Gain invaluable insights and guidance from experienced technologists and domain experts.</p>
              </div>
              <div className="absolute top-1/2 -right-4 w-8 h-12 bg-purple-600/50 backdrop-blur-sm -translate-y-1/2 hidden lg:block"></div>
            </div>

            <div className="relative p-8 w-full max-w-[340px] rounded-xl overflow-hidden min-h-[160px] flex flex-col justify-center border border-white/5 group">
              <img src={bgLeft} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 text-white">Networking</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Connect with peers, professionals, and innovation leaders from across the nation.</p>
              </div>
            </div>
          </motion.div>

          {/* Central Astronaut */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              rotate: [-3, 3, -3]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center cursor-none order-1 lg:order-2"
            data-hover="image"
            data-cursor-text="EXPLORE"
          >
            <div className="absolute inset-0 bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full"></div>
            <img
              src={astronaut}
              alt="Astronaut"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_60px_rgba(168,85,247,0.6)]"
            />
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 order-3"
          >
            <div className="relative p-8 w-full max-w-[340px] rounded-xl overflow-hidden min-h-[160px] flex flex-col justify-center border border-white/5 group">
              <img src={bgRight} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 text-white">Internship Opportunities</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Stand a chance to secure internships at top institutions and innovation labs.</p>
              </div>
              <div className="absolute top-1/2 -left-4 w-8 h-12 bg-purple-600/50 backdrop-blur-sm -translate-y-1/2 hidden lg:block"></div>
            </div>

            <div className="relative p-8 w-full max-w-[340px] rounded-xl overflow-hidden min-h-[160px] flex flex-col justify-center border border-white/5 group">
              <img src={bgRight} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 text-white">Real-World Impact</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Contribute to meaningful challenges that aim to improve lives and systems at scale.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Astronaut;
