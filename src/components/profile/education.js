import React from "react";

const educationData = [
  {
    year: "2019 - 2023 (B.Tech)",
    description: (
      <span>
        <span className="block">Rajastahn Technical Univercity Kota, Rajasthan</span>
        <span className="block">Computer Science & Engineering</span>
        <span className="block">Percentage: 80</span>
      </span>
    ),
    bgColor: "bg-red-500",
  },
  {
    year: "2017 - 2019 (11th & 12th)",
    description: (
      <span>
        <span className="block">Janta College Muzaffarpur, Bihar</span>
        <span className="block">Science</span>
        <span className="block">Percentage: 70</span>
      </span>
    ),
    bgColor: "bg-green-500",
  },
  {
    year: "2016 - 2017 (10th)",
    description: (
      <span>
        <span className="block">R.K. High School Baruraj, Muzaffarpur, Bihar</span>
        <span className="block">Percentage: 82.60</span>
      </span>
    ),
    bgColor: "bg-blue-500",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white font-poppins">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
        <div className="relative flex flex-col items-center">
          <div className="border-l-4 border-gray-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 p-4 flex ${index % 2 === 0 ? "justify-end" : "justify-start"} ${
                index % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              <div className="relative w-3/4">
                {/* Circle indicator */}
                <div className={`absolute w-6 h-6 ${edu.bgColor} rounded-full left-1/2 transform -translate-x-1/2 top-2`}></div>

                {/* Education content box */}
                <div className={`p-4 ${edu.bgColor} text-white rounded-lg shadow-lg`}>
                  <h3 className="text-xl font-bold">{edu.year}</h3>
                  <p className="mt-2">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
