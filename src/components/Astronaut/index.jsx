const Astronaut = () => {
  return (
    <div className="relative py-20 bg-black text-white overflow-hidden">
      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        @keyframes orbit-reverse {
          0% {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(80px) rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-orbit {
          animation: orbit 18s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 14s linear infinite;
        }
      `}</style>

      {/* Radial background circles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[700px] h-[700px] rounded-full border border-purple-500 opacity-15 absolute"></div>
        <div className="w-[500px] h-[500px] rounded-full border border-purple-500 opacity-20 absolute"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-purple-500 opacity-20 absolute"></div>
        <div className="w-[300px] h-[300px] rounded-full border border-purple-500 opacity-30 absolute"></div>
        <div className="w-[200px] h-[200px] rounded-full border border-purple-500 opacity-30 absolute"></div>
      </div>

      {/* Title */}
      <h2 className="text-center text-purple-500 text-xl font-semibold z-10 relative mb-20">
        WHY PARTICIPATE?
      </h2>

      <div className="flex justify-center items-center gap-25 mt-10 relative z-10">
        {/* Left Card */}
        <div className="bg-purple-600 text-white p-6 w-[320px] rounded-md text-center">
          <h3 className="font-semibold text-lg">Mentorship from Experts</h3>
          <p className="text-sm mt-2">
            Gain invaluable insights and guidance from experienced technologists
            and domain experts.
          </p>

          <div className="w-6 h-12 bg-purple-600 absolute top-[50%] -right-6 transform -translate-y-1/2 hidden md:block"></div>

          <div className="mt-6 font-semibold text-lg">Networking</div>
          <p className="text-sm mt-2">
            Connect with peers, professionals, and innovation leaders from
            across the nation.
          </p>
        </div>

        {/* Astronaut with Orbital Animation */}
        <div className="relative h-64 w-64 flex items-center justify-center">
          {/* Orbital Circles */}
          <div className="absolute w-3 h-3 rounded-full border border-purple-400 opacity-70 animate-orbit"></div>
          <div className="absolute w-4 h-4 rounded-full border border-purple-300 opacity-60 animate-orbit-reverse"></div>
          <div
            className="absolute w-2 h-2 rounded-full border border-purple-500 opacity-80 animate-orbit"
            style={{ animationDuration: "12s" }}
          ></div>

          {/* Astronaut Image */}
          <img
            src="/img/layer_2.png"
            alt="Astronaut"
            className="h-64 w-64 object-contain animate-float"
          />
        </div>

        {/* Right Card */}
        <div className="bg-purple-600 text-white p-6 w-[320px] rounded-md text-center">
          <h3 className="font-semibold text-lg">Internship Opportunities</h3>

          <p className="text-sm mt-2">
            Stand a chance to secure internships at top institutions and
            innovation labs.
          </p>

          <div className="w-6 h-12 bg-purple-600 absolute top-[35%] -left-6 transform -translate-y-1/2 hidden md:block"></div>

          <div className="mt-6 font-semibold text-lg">Real-World Impact</div>

          <p className="text-sm mt-2">
            Contribute to meaningful challenges that aim to improve lives and
            systems at scale.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Astronaut;
