import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold">About me</h2>
        <div className="flex flex-wrap mt-10">
          <div className="w-full md:w-1/2">
            <img src="img/about1.jpg" alt="About" className="w-3/4 rounded-lg shadow-lg mx-auto"/>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="text-3xl text-red-600">I'm Aniket and I'm a <span className="typing-2"></span></div>
            <p className="mt-4 text-lg">FrontEnd Web Developer, with extensive knowledge, working with web technologies like:- ReactJs, JavaScript, HTML, CSS.. etc. And delivering a quality work.</p>
            <div className="mt-6">
              <a href="https://drive.google.com/file/d/1tS7_d8al_s0FRhdXahS9_0APQLhEra-A/view?usp=sharing" className="px-6 py-2 bg-red-600 text-white rounded-full">Get-CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
