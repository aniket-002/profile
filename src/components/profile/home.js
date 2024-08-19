import React from 'react';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <div id="home" className="h-screen flex items-center justify-center bg-custom-gradient text-white px-6 font-poppins">
      <div className="max-w-4xl text-left">
        <div className="text-2xl text-left text-[#F95353] font-bold">
          HELLO!
        </div>
        <div className="text-5xl md:text-6xl font-bold mt-4">
          I Am Aniket Anand
        </div>
        <div className="text-2xl md:text-3xl mt-4">
          Web Developer
        </div>
        <div className="text-lg md:text-xl mt-4 leading-relaxed">
          I'm a Web Developer with extensive experience for over 1 year. My expertise is to create and design websites, UI design, and much more...
        </div>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#experience" className="inline-block px-8 py-2 text-center border-2 border-blue-500 text-white hover:bg-white hover:text-black rounded-2xl transition duration-300 ease-in-out w-full sm:w-auto">
            Work Experience
          </a>
          <a href="#contact" className="inline-block px-8 py-2 text-center border-2 border-blue-500 text-white hover:bg-white hover:text-black rounded-2xl transition duration-300 ease-in-out w-full sm:w-auto">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
