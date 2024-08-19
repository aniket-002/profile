import React from 'react';
import Img from '../images/profile.jpg';
import Github from '../images/github.png';

const About = () => {
  return (
    <section id="about" className="py-20  font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-3xl sm:text-4xl font-bold">About me</h2>
        <div className="flex flex-wrap mt-10 items-center">
          <div className="w-full md:w-1/2">
            <img src={Img} alt="About" className="w-full md:w-3/4 rounded-lg shadow-lg mx-auto bg-cover"/>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center md:items-start justify-center text-justify">
            <div className="text-2xl sm:text-3xl text-red-600 text-center md:text-left"> 
              Hii, I'm Aniket Anand <span className="typing-2"></span>
            </div>
            <p className="mt-4 text-base sm:text-lg text-center md:text-left">
              A passionate Frontend Web Developer with a solid foundation in modern web technologies, including React.js, JavaScript, HTML, and CSS. With experience working on multiple dynamic projects, I thrive in collaborative environments, contributing to innovative solutions with a knowledgeable and skilled team. My commitment to continuous learning drives me to stay at the forefront of technology, always eager to embrace new challenges and expand my expertise. I'm dedicated to delivering high-quality work that not only meets but exceeds expectations, ensuring impactful and user-friendly web experiences.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://drive.google.com/drive/folders/1Q7WnlpREk2uCCABxApvyxMetFGqRHbmV?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 text-white rounded-full"
              >
                Get-CV
              </a>
              <a
                href="https://github.com/aniket-002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Github}
                  alt="Github"
                  className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
