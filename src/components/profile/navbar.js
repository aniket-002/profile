import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-4xl font-bold text-white">
              Portfo<span className="text-red-600">lio.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#projects" className="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#skills" className="text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#certificates" className="text-white px-3 py-2 rounded-md text-sm font-medium">Certificates</a>
              <a href="#educations" className="text-white px-3 py-2 rounded-md text-sm font-medium">Education</a>
              <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
