const Home = () => {
  return (
    <main className=" text-white font-sans overflow-x-hidden">
      {/* Hero Section */}

      <section className="relative w-full min-h-screen flex items-center justify-between px-16 py-10 ">
        {/* Left - Image */}
        <div className="z-10 relative ml-40">
          <h1 className="text-6xl font-extrabold leading-tight ml-96">
            CODE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 outline">
              FUTURE
            </span>
          </h1>

          <img
            src="/img/fashion_girl.png"
            alt="Astronaut Girl"
            className=" bg-purple-700 "
          />

          <h1 className="flex justify-center">
            WHERE INNOVATION BECOMES REALITY
          </h1>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 px-6 py-3 text-white font-semibold rounded-md border border-white"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* About Hackathon Section */}

      <section className="py-20 px-8 md:px-20 bg-black relative text-center">
        <h3 className="text-purple-500 text-lg font-semibold mb-2">
          ABOUT HACKATHON
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          WHO CAN PARTICIPATE?
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating
          platform designed to foster innovation and creativity in the domain of
          advanced technology and futuristic solutions. Organized by the
          National Center for Applied Research and supported by Hack2skill, this
          hackathon invites undergraduate students, graduate/postgraduate
          students, and PhD researchers to collaborate and solve critical
          challenges.
        </p>

        <button className="bg-purple-600 text-white px-6 py-3 font-semibold rounded-full hover:bg-purple-700 transition-colors">
          Apply Now
        </button>

        {/* Left Decorative Blocks */}
        <div className="absolute left-4 top-16 hidden md:block">
          <div className="grid grid-cols-2 gap-1">
            <div></div>
            <div className="w-6 h-6 bg-purple-600"></div>
            <div className="w-20 h-6 bg-purple-600"></div>
            <div></div>
            <div></div>

            <div className="w-6 h-6 bg-purple-600"></div>
            <div className="w-20 h-6 bg-purple-600"></div>
            <div></div>
            <div></div>
            <div className="w-6 h-6 bg-purple-600"></div>
          </div>
        </div>

        {/* Right Decorative Blocks */}
        <div className="absolute right-4 top-16 hidden md:block">
          <div className="grid grid-cols-2 gap-1">
            <div></div>
            <div className="w-6 h-6 bg-purple-600"></div>
            <div className="w-20 h-6 bg-purple-600"></div>
            <div></div>
            <div></div>

            <div className="w-6 h-6 bg-purple-600"></div>
            <div className="w-20 h-6 bg-purple-600"></div>
            <div></div>
            <div></div>
            <div className="w-6 h-6 bg-purple-600"></div>
          </div>
        </div>
      </section>

      {/* Participation Cards */}
      <section className="bg-black py-16 px-6 md:px-20">
        <h3 className="text-center text-purple-500 text-lg mb-4 font-semibold">
          WHO CAN PARTICIPATE?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          {[
            "Undergraduate Students",
            "Graduate/ Postgraduate Students",
            "PhD Students/ Research Scholars",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#2a143f] to-[#1b112d] rounded-xl p-8 text-white shadow-md hover:shadow-purple-500/50 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
            </div>
          ))}
        </div>

        <h1 className="flex justify-center my-8 text-2xl">
          Note: Working Professionals are not eligible to participate in the
          hackathon.
        </h1>
      </section>
    </main>
  );
};

export default Home;
