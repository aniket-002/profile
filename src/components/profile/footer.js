import React from "react";
import Linkedin from '../images/image.png';
import Twitter from '../images/twitter.png';
import Insta from '../images/instagram (1).png';
import Facebook from '../images/facebook (1).png';


const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://www.linkedin.com/in/aniket-anand-274a4b1b9/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://x.com/ANIKETA48174111" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://www.instagram.com/with__aniket?igsh=b3JtN2lscDBkbWx1" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://www.facebook.com/aniket.anand.71216/" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75 transition-opacity" />
            </a>
          </div>
          {/* Footer Text */}
          <p className="text-center sm:text-left">&copy; 2024 Aniket Anand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
