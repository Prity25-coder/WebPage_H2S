import {
  FaClipboardList,
  FaUsers,
  FaFlag,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import chal1 from "../../assets/img/chal_1.jpg";
import chal2 from "../../assets/img/chal_2.jpg";
import chal3 from "../../assets/img/chal_3.jpg";
import chal4 from "../../assets/img/chal_4.jpg";
import chal5 from "../../assets/img/chal_5.jpg";
import chal6 from "../../assets/img/chal_6.jpg";

const steps = [
  {
    icon: <FaClipboardList className="text-purple-500 text-4xl" />,
    title: "Register for Hackathon",
    description: "Sign up now to participate in the hackathon.",
  },
  {
    icon: <FaUsers className="text-purple-500 text-4xl" />,
    title: "Form your Teams",
    description: "Collaborate with like-minded individuals to form teams.",
  },
  {
    icon: <FaFlag className="text-purple-500 text-4xl" />,
    title: "Choose a Challenge",
    description: "Select from the list of challenges provided.",
  },
  {
    icon: <FaRocket className="text-purple-500 text-4xl" />,
    title: "Innovate and Develop",
    description:
      "Work on your solutions, supported by resources and mentorship.",
  },
  {
    icon: <FaLightbulb className="text-purple-500 text-4xl" />,
    title: "Submit Your Solution",
    description: "Present your innovative ideas for evaluation.",
  },
];

const challenges = [
  {
    number: "01",
    image: chal1,
    text: "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.",
  },
  {
    number: "02",
    image: chal2,
    text: "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.",
  },
  {
    number: "03",
    image: chal3,
    text: "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.",
  },
  {
    number: "04",
    image: chal4,
    text: "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.",
  },
  {
    number: "05",
    image: chal5,
    text: "Create a decentralized platform that allows institutions to issue and verify digital certificates securely.",
  },
  {
    number: "06",
    image: chal6,
    text: "Design a prototype that enables prospective students to explore campuses in immersive VR.",
  },
];

const Participate = () => {
  return (
    <div className="bg-gradient-to-r from-black via-[#0c0c0d] to-[#24033a] text-white py-20 px-6">
      <h2 className="text-center text-purple-500 text-2xl font-semibold mb-10">
        HOW TO PARTICIPATE?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto mb-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-[#6B21A8]/20 p-6 rounded-xl mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-medium mb-2 leading-tight">
              {step.title.split(" ").slice(0, 2).join(" ")}
              <br />
              {step.title.split(" ").slice(2).join(" ")}
            </h3>
            <p className="text-sm text-gray-300 max-w-[200px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-purple-500 text-2xl font-semibold mb-10">
        CHALLENGES
      </h2>
      <div className="max-w-6xl mx-auto divide-y divide-gray-600">
        {challenges.map((challenge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 py-6 hover:bg-[#1c1c1e]/50 px-4 rounded-lg transition"
          >
            <span className="text-white text-lg font-mono w-12">
              [{challenge.number}]
            </span>
            <img
              src={challenge.image}
              alt={"challenge-" + challenge.number}
              className="w-44 h-24 object-cover rounded"
            />
            <p className="text-sm text-gray-200 flex-1 px-2">
              {challenge.text}
            </p>
            <ArrowUpRightIcon className="w-5 h-5 text-purple-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participate;
