import React from 'react';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <div id="home" className="h-screen flex items-center justify-center bg-custom-gradient  text-white">
      <div className="text-center">
        <div className="text-2xl">Hello, my name is</div>
        <div className="text-6xl font-bold">Aniket Anand</div>
        <div className="text-3xl mt-4">And I'm a <span className="text-red-600">Web Developer</span></div>
        <a href="#contact" className="mt-10 inline-block px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition duration-300">More</a>
      </div>
    </div>
  );
};

export default Home;
