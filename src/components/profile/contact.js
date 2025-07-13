import React from "react";
import 'tailwindcss/tailwind.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="md:py-16 py-10 bg-[#000000] font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="md:text-4xl text-[28px] text-white font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Hi, I’m glad you made it here. I’m a passionate web and mobile developer focused on building clean and user-friendly interfaces. Let’s connect!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div className="bg-[#121212] border border-gray-800 hover:border-[#F95353] transition-all p-6 rounded-xl shadow-lg flex items-start gap-4">
            <div className="bg-green-600 p-4 rounded-full">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-300 text-sm break-all">aniket31032001@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#121212] border border-gray-800 hover:border-[#F95353] transition-all p-6 rounded-xl shadow-lg flex items-start gap-4">
            <div className="bg-green-600 p-4 rounded-full">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-1">Address</h3>
              <p className="text-gray-300 text-sm">New Delhi, India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#121212] border border-gray-800 hover:border-[#F95353] transition-all p-6 rounded-xl shadow-lg flex items-start gap-4">
            <div className="bg-green-600 p-4 rounded-full">
              <FaPhone className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-1">Call</h3>
              <p className="text-gray-300 text-sm">+91 9334473966</p>
              <p className="text-gray-300 text-sm">+91 9199732985</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
