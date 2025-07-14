import React, { useState } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black transition-all duration-300 font-poppins">
      <div className="px-4 sm:px-6 lg:px-[120px] py-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
              AP
            </div>
            <a href="/" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Aniket's <span className="text-red-600">Profile.</span>
            </a>
          </div>

          {/* Right (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="mailto:aniket31032001@gmail.com"
              className="flex items-center text-white text-sm md:text-base hover:text-red-500"
            >
              <FiMail className="mr-1" /> aniket31032001@gmail.com.com
            </a>
            <a
              href="https://drive.google.com/drive/folders/1N0Ylzc55IiizFpZgecFHq9KIXBBm6dSS?usp=sharing"
              rel="noreferrer"
              download
              className="flex items-center bg-red-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-red-700 transition"
            >
              <FiDownload className="mr-1" /> Get CV
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden z-50">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-3">
          <a
            href="mailto:aniket31032001@gmail.com"
            className="flex items-center text-white text-base"
            onClick={() => setOpen(false)}
          >
            <FiMail className="mr-2" /> aniket31032001@gmail.com
          </a>
          <a
              href="https://drive.google.com/drive/folders/1N0Ylzc55IiizFpZgecFHq9KIXBBm6dSS?usp=sharing"
                          rel="noreferrer"

              download
            className="flex items-center bg-red-600 text-white px-3 py-2 rounded-md text-base hover:bg-red-700 transition w-max"
            onClick={() => setOpen(false)}
          >
            <FiDownload className="mr-2" /> Get CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
