import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-gray-400 py-10 font-poppins border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Left - Copyright */}
          <div className="text-center sm:text-left text-sm sm:text-base">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Aniket Anand</span>. All rights reserved.
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex justify-center sm:justify-end space-x-5">
            <a
              href="https://www.linkedin.com/in/aniket-anand-274a4b1b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F95353] text-2xl transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ANIKETA48174111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F95353] text-2xl transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/with__aniket?igsh=b3JtN2lscDBkbWx1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F95353] text-2xl transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/aniket.anand.71216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F95353] text-2xl transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
