'use client';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { FlipWords } from '../common/flipword';
import ProfileImage from "../images/ani-profiles.png";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#000000] text-white px-6 md:px-[120px] pt-[120px] pb-[40px] font-poppins"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left mt-5">
        <div className="md:text-2xl text-[18px] text-[#F95353] font-bold">HELLO!</div>
        <div className="text-2xl md:text-6xl font-bold mt-4">I Am Aniket Anand</div>

        <div className="text-[18px] md:text-3xl md:mt-4 mt-2 md:h-[2.5rem] h-[3.5rem] overflow-hidden relative">
          Crafting&nbsp;
          <FlipWords
            words={['scalable', 'modern', 'clean', 'Secure']}
            duration={2000}
            className="text-[#F95353] font-semibold"
          />
          &nbsp;digital experiences
        </div>

        <div className="text-md md:text-xl mt-4 leading-relaxed md:w-[90%]">
          I'm a passionate <span className="text-[#F95353] font-semibold">Software Engineer</span> with over 1 year of experience, specializing in building intuitive and responsive user interfaces. I craft dynamic websites and Android applications with a strong focus on performance and modern design. Currently working as a <span className="text-[#F95353] font-semibold">Frontend Developer</span>, I turn ideas into seamless digital experiences.
        </div>

        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#experience" className="inline-block px-8 py-2 text-center border-2 border-blue-500 text-white hover:bg-white hover:text-black rounded-2xl transition duration-300 ease-in-out w-full sm:w-auto">
            Work Experience
          </a>
        
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
      <div></div>
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-[250px] md:w-[400px] h-auto rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
