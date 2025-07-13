import React from 'react';
import Marquee from 'react-fast-marquee';
import 'tailwindcss/tailwind.css';

const SkillsSlider = () => {
  const skills = [
    { name: 'React Native'},
    { name: 'React.js'},
    { name: 'Next.js'},
    { name: 'TypeScript'},
    { name: 'JavaScript'},
    { name: 'Tailwind CSS'},
    {name: 'HTML'},
    {name: 'CSS'},
    { name: 'Git & GitHub'},
    { name: 'Firebase'}
  ];

  return (
    <section id="skills" className="md:py-5 py-2 bg-[#0a0a0a] font-poppins">
      <div className="container mx-auto">
       
        <Marquee gradient={false} speed={80} pauseOnHover={true}>
          {skills.map((skill, index) => (
            <div key={index} className="md:px-10 px-5 flex-shrink-0 py-2">
              <div className={`md:text-xl text-md font-semibold text-[#FFFFFF]`}>
                {skill.name}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SkillsSlider;
