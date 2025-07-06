function Promo() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-l from-black via-[#0c0c0d] to-[#24033a] ">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              WHAT IS HACKATHON?
            </h1>
            <p className="mt-4 text-2xl text-gray-300">
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted
              to uncover pioneering ideas in science, technology, and system
              design. As technological advancements accelerate globally, this
              initiative aims to bridge academic knowledge with practical
              implementation.
            </p>

            <p className="mt-8 text-2xl text-gray-300">
              Participants will work on challenge statements designed by leading
              R&D units, applying theoretical expertise to build innovative
              prototypes and solutions with potential real-world application.
            </p>
          </div>

          <div>
            <div className="mt-10">
              {/* Decorative image */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="/img/img_1.jpg"
                          className="size-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
                        />
                      </div>
                      <div className="h-64 w-sm overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/img/img_3.jpg"
                          className="size-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/img/img_2.jpg"
                          className="size-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/img/img_4.jpg"
                          className="size-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/img/img_5.jpg"
                          className="size-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:rotate-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4  mb-4 text-2xl text-gray-300">
                Submission Closing In:
              </p>

              <button className="inline-block rounded-md border border-transparent bg-gray-600 px-8 py-3 text-center font-medium text-white  mx-4 text-2xl">
                6d 12h 42m 31s
              </button>

              <button className="inline-block rounded-md border border-transparent bg-purple-900 px-8 py-3 text-center font-medium text-white text-2xl">
                Shop Collection
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Promo;
