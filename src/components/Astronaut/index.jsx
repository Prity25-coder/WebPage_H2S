const Astronaut = () => {
  return (
    <div className="relative py-20 bg-black text-white overflow-hidden">
    
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

        {/* Astronaut */}
        <img
          src="/img/layer_2.png"
          alt="Astronaut"
          className="h-64 w-64 object-contain"
        />

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
