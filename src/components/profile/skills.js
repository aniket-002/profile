import React from "react";

const skills = [
  { name: "ReactJs", level: "75%" },
  { name: "JavaScript", level: "95%" },
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "BootStrap", level: "70%" },
  { name: "C++", level: "90%" },
  { name: "Python", level: "60%" },
  { name: "Data Structure", level: "60%" },
  { name: "OOPS", level: "98%" },
  { name: "MySQL", level: "70%" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">My creative skills & experiences.</h3>
            <p>
              Proficient in a versatile range of skills spanning web development, programming, content creation. With a solid foundation in coding languages such as HTML, CSS, and JavaScript, I craft visually compelling and user-friendly websites. My expertise extends to graphic design tools like Adobe Creative Suite, enabling me to produce captivating visuals and branding materials. I excel in content creation, adept at crafting engaging and SEO-optimized copy across various platforms. Additionally, my strategic approach to digital marketing ensures effective campaigns. Adaptable, innovative, and continuously evolving, I bring a blend of technical prowess and creative flair to every project.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
