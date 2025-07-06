const faqs = [
  {
    id: "01",
    question: "Who can participate in the hackathon?",
    answer:
      "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.",
  },
  {
    id: "02",
    question: "What should be the ideal team size?",
    answer:
      "Each team must consist of 3 to 4 members, possibly from different colleges/universities.",
  },
  {
    id: "03",
    question: "What is the cost of participating?",
    answer:
      "Participation is entirely free. No registration or submission fee is required.",
  },
  {
    id: "04",
    question: "Who is eligible for this edition?",
    answer:
      "Only current students from the 2024–25 academic year are eligible to apply.",
  },
];

function Faq() {
  return (
    <>
      <div className="min-h-[50vh] bg-[url('/img/page_2.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10 py-20 px-6 md:px-20 bg-gradient-to-b from-[#080808] to-[#15002b] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-16">
            FREQUENTLY ASKED QUESTION
          </h2>

          <div className="space-y-12 divide-y divide-white/20">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="grid grid-cols-1 md:grid-cols-12 items-start pt-8"
              >
                <div className="md:col-span-1">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-semibold  ${
                      index % 2 === 0
                        ? "bg-white text-black"
                        : "bg-purple-800 text-purple-300"
                    }`}
                  >
                    {faq.id}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <h3
                    className={`text-lg font-medium ${
                      index % 2 === 0 ? "text-white" : "text-purple-400"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div className="md:col-span-6 mt-4 md:mt-0">
                  <p className="text-white/80 text-md leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
