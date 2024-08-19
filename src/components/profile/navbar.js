import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black transition-all duration-300 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
              AP
            </div>
            <a href="/home" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Aniket's <span className="text-red-600">Profile.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                About
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="certificates"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Certificates
              </Link>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Education
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white px-3 py-2 rounded-md text-sm md:text-base font-medium cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden z-50">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="certificates"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Certificates
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
