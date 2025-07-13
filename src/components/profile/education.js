import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    year: "2019 - 2023 (B.Tech)",
    description: (
      <span>
        <span className="block">Rajasthan Technical University Kota, Rajasthan</span>
        <span className="block">Computer Science & Engineering</span>
        <span className="block">Percentage: 80%</span>
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
        <span className="block">Percentage: 70%</span>
      </span>
    ),
    bgColor: "bg-green-500",
  },
  {
    year: "2016 - 2017 (10th)",
    description: (
      <span>
        <span className="block">R.K. High School Baruraj, Muzaffarpur, Bihar</span>
        <span className="block">Percentage: 82.60%</span>
      </span>
    ),
    bgColor: "bg-blue-500",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="education" className="md:py-16 py-10 bg-[#000000] text-white font-poppins overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-4xl text-[28px] font-bold text-center mb-10" data-aos="fade-down">
          Education
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Timeline line (hidden on small screens) */}
          <div
            className="border-l-4 border-gray-600 absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block"
            data-aos="fade-up"
          ></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`w-full px-4 md:w-1/2 md:px-4 mb-8 flex ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              } ${index % 2 === 0 ? "md:self-start" : "md:self-end"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative w-full md:w-3/4">
                {/* Timeline dot (only on md+) */}
                <div
                  className={`hidden md:block absolute w-6 h-6 ${edu.bgColor} rounded-full left-1/2 transform -translate-x-1/2 top-2`}
                ></div>

                {/* Card */}
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
