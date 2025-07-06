
const Hackathon = () => {

 const schedule = [
    {
      title: "Registrations and Idea Submission Open",
      date: "Thu, Jul 04, 2025",
      filled: true,
    },
    {
      title: "Introductory and Problem Statement Explainer Session",
      date: "Thu, Jul 08, 2025",
      filled: false,
    },
    {
      title: "Mentor-Mentee Connects - Begins",
      date: "Thu, Jul 08, 2025",
      filled: false,
    },
    {
      title: "Mentor-Mentee Connects - Ends",
      date: "Tue, Jul 16, 2025",
      filled: false,
    },
  ];

  const rewards = [
    {
      title: "Mentorship from Experts",
      description:
        "Work under the guidance of domain professionals and technology mentors.",
    },
    {
      title: "Recognition and Internship Opportunities",
      description:
        "Outstanding performers may receive offers for internships or collaboration opportunities.",
    },
  ];

  return (
    <div className="text-white bg-black py-20 px-4 md:px-16 relative z-10">

      <h2 className="text-center text-xl md:text-2xl font-semibold text-purple-500 mb-12">
        HACKATHON SCHEDULE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center mb-20">
      
        {schedule.map((item, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-purple-500 mb-2">
              {item.title}
            </h3>
            <div className="h-1 bg-purple-600 w-full mb-2 rounded-full"></div>
            <p className="text-md font-semibold">{item.date}</p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-xl md:text-2xl font-semibold text-purple-500 mb-10">
        REWARDS AND BENEFITS
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 text-white">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="backdrop-blur bg-gradient-to-tr from-[#692eff40] to-[#8749f740] border border-[#9f5fff4d] rounded-xl p-6 md:p-8 max-w-sm mx-auto hover:scale-105 transition-transform"
          >
            <h3 className="text-lg font-semibold text-purple-500 mb-3">
              {reward.title}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {reward.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathon;
