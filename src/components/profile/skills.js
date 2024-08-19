import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "ReactJs", level: 75, color: "#61dafb" },
  { name: "NextJs", level: 60, color: "#e44d26" },
  { name: "JavaScript", level: 80, color: "#f0db4f" },
  { name: "TypeScript", level: 65, color: "#306998" },
  { name: "HTML", level: 95, color: "#e44d26" },
  { name: "CSS", level: 90, color: "#2965f1" },
  { name: "BootStrap", level: 70, color: "#563d7c" },
  { name: "C++", level: 90, color: "#00599c" },
  { name: "Python", level: 60, color: "#306998" },
  { name: "Data Structure", level: 60, color: "#ff6347" },
  { name: "OOPS", level: 98, color: "#8a2be2" },
  { name: "MySQL", level: 70, color: "#00758f" }
];

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  // Determine how many skills to show based on the screen size
  const skillsToShow = showMore ? skills.length : 4;

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white font-poppins">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.slice(0, skillsToShow).map((skill, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: skill.color,
                      trailColor: "rgba(255, 255, 255, 0.2)"
                    })}
                  />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                {/* <p className="text-center mt-2 text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur, delectus!
                </p> */}
              </div>
            </div>
          ))}
        </div>
        {skills.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
