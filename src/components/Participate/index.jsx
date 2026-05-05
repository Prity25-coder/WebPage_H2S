import { motion } from "framer-motion";
import iconRegister from "../../assets/img/icon-register.svg";
import iconTeam from "../../assets/img/icon-team.svg";
import iconChallenge from "../../assets/img/icon-challenge.svg";
import iconInnovate from "../../assets/img/icon-innovate.svg";
import iconSubmit from "../../assets/img/icon-submit.svg";
import iconArrow from "../../assets/img/icon-arrow-up.svg";
import TiltWrapper from "../TiltWrapper";

import chal1 from "../../assets/img/chal-1.jpg";
import chal2 from "../../assets/img/chal-2.jpg";
import chal3bg from "../../assets/img/chal-3-bg.svg"; // Fallback/BG for 03
import chal4 from "../../assets/img/chal-4.png";
import chal5 from "../../assets/img/chal-5.jpg";
import chal6 from "../../assets/img/chal-6.jpg";
import chal7 from "../../assets/img/chal-7.png";
import chal8 from "../../assets/img/chal-8.jpg";
import chal9 from "../../assets/img/chal-9.jpg";
import chal10 from "../../assets/img/chal-10.png";
import chal11 from "../../assets/img/chal-11.png";
import chal12 from "../../assets/img/chal-12.png";

const steps = [
  { icon: iconRegister, title: "Register for Hackathon", desc: "Sign up now to participate in the hackathon." },
  { icon: iconTeam, title: "Form your Teams", desc: "Collaborate with like-minded individuals to form teams." },
  { icon: iconChallenge, title: "Choose a Challenge", desc: "Select from the list of challenges provided." },
  { icon: iconInnovate, title: "Innovate and Develop", desc: "Work on your solutions, supported by resources and mentorship." },
  { icon: iconSubmit, title: "Submit Your Solution", desc: "Present your innovative ideas for evaluation." }
];

const challenges = [
  { id: "01", img: chal1, text: "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density." },
  { id: "02", img: chal2, text: "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders." },
  { id: "03", img: chal3bg, text: "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.", isBg: true },
  { id: "04", img: chal4, text: "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones." },
  { id: "05", img: chal5, text: "Create a decentralized platform that allows institutions to issue and verify digital certificates securely." },
  { id: "06", img: chal6, text: "Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals." },
  { id: "07", img: chal7, text: "Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.", hasButton: true },
  { id: "08", img: chal8, text: "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet." },
  { id: "09", img: chal9, text: "Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages." },
  { id: "10", img: chal10, text: "Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises." },
  { id: "11", img: chal11, text: "Build a pipeline that processes aerial imagery to detect crop diseases and recommend corrective actions." },
  { id: "12", img: chal12, text: "Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues." }
];

const Participate = () => {
  return (
    <section className="bg-bg-dark py-24">
      {/* How to Participate */}
      <div id="how-to-participate" className="px-6 md:px-20 mb-32">
        <h2 className="text-center text-purple-500 text-lg font-bold tracking-[0.3em] mb-20 uppercase">
          HOW TO PARTICIPATE?
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-6 p-4 bg-purple-600/10 rounded-2xl border border-purple-500/20 group-hover:bg-purple-600/20 transition-all">
                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight">{step.title}</h3>
              <p className="text-xs text-gray-400 max-w-[150px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div id="challenges" className="px-6 md:px-20 border-t border-white/5 pt-32">
        <h2 className="text-center text-purple-500 text-lg font-bold tracking-[0.3em] mb-20 uppercase">
          CHALLENGES
        </h2>
        <div className="container mx-auto max-w-5xl space-y-4">
          {challenges.map((chal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-6 md:gap-10 p-6 glass-card group hover:bg-white/10 transition-all border-l-4 border-l-transparent hover:border-l-purple-600"
            >
              <span className="text-xl font-bold font-mono text-gray-500 group-hover:text-purple-500 transition-colors">
                [ {chal.id} ]
              </span>
              
              <TiltWrapper className="w-40 h-24 flex-shrink-0">
                <div className="w-full h-full overflow-hidden rounded-lg bg-black/40 cursor-none" data-hover="image" data-cursor-text="INFO">
                  <img 
                    src={chal.img} 
                    alt="" 
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${chal.isBg ? 'opacity-50' : ''}`} 
                  />
                </div>
              </TiltWrapper>

              <div className="flex-1">
                <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                  {chal.text}
                </p>
                {chal.hasButton && (
                  <button className="mt-4 bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-1.5 rounded text-xs font-bold hover:bg-purple-600 hover:text-white transition-all">
                    Learn More
                  </button>
                )}
              </div>

              <div className="flex-shrink-0">
                <img src={iconArrow} className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all" alt="View" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participate;
