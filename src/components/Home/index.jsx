import { motion } from "framer-motion";
import heroBg from "../../assets/img/hero-bg.jpg";
import heroGirl from "../../assets/img/hero-fashion-girl.svg";
import eligibilityBg from "../../assets/img/eligibility-bg.svg";
import TiltWrapper from "../TiltWrapper";

const Home = () => {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center px-6 md:px-20 pt-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8">
              <span className="block">CODE THE</span>
              <span className="block text-outline bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                FUTURE
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-gray-400 mb-10 max-w-md uppercase tracking-[0.3em] font-bold mx-auto lg:mx-0">
              Where Innovation Becomes Reality
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative"
            >
              {/* Decorative corners for the button as seen in Figma */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/40"></div>
              
              <a
                href="#register"
                className="inline-block bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-white/15 transition-all duration-300"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <TiltWrapper>
              <div className="relative group cursor-none" data-hover="image" data-cursor-text="VIEW">
                <img
                  src={heroGirl}
                  alt="Hackathon Hero"
                  className="w-full max-w-[550px] h-auto drop-shadow-[0_0_80px_rgba(124,58,237,0.4)]"
                />
              </div>
            </TiltWrapper>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 bg-bg-dark text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-32 h-64 opacity-30 pointer-events-none">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`w-5 h-5 ${i % 2 === 0 ? 'bg-purple-600' : 'bg-transparent'}`}></div>
            ))}
          </div>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-64 opacity-30 pointer-events-none">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`w-5 h-5 ${i % 3 === 0 ? 'bg-purple-600' : 'bg-transparent'}`}></div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-500 font-bold tracking-[0.4em] mb-4 block text-xs md:text-sm">ABOUT HACKATHON</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 tracking-tight">WHO CAN PARTICIPATE?</h2>
          
          <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mb-12 font-medium">
            Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating platform designed to foster innovation and creativity in the domain of advanced technology and futuristic solutions. Organized by the National Center for Applied Research and supported by Hack2skill, this hackathon invites undergraduate students, graduate/postgraduate students, and PhD researchers to collaborate and solve critical challenges.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05, shadow: "0 0 20px rgba(124,58,237,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(124,58,237,0.3)] transition-all"
          >
            Apply Now
          </motion.button>
        </motion.div>

        {/* Participation Cards */}
        <div className="mt-32 max-w-6xl mx-auto">
          <span className="text-purple-500 font-bold block mb-12 tracking-widest text-sm uppercase">Who can participate?</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Undergraduate", subtitle: "Students" },
              { title: "Graduate/ Postgraduate", subtitle: "Students" },
              { title: "PhD Students/", subtitle: "Research Scholars" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group p-10 rounded-2xl border border-white/5 overflow-hidden text-center min-h-[180px] flex flex-col justify-center"
                style={{ background: `url(${eligibilityBg})`, backgroundSize: 'cover' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/90 z-0"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{card.title}</h4>
                  <p className="text-gray-400 font-medium">{card.subtitle}</p>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
              </motion.div>
            ))}
          </div>

          <p className="mt-20 text-gray-500 text-sm font-bold tracking-wide">
            Note: Working Professionals are not eligible to participate in the hackathon.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
