import React from "react";
import 'tailwindcss/tailwind.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-custom-gradient font-poppins">
      <div>
        <h2 className="text-4xl text-white font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-white mb-12">Hi, I am glad you made it here to know more about me. I am a web developer.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-0">
          <div className="flex items-center bg-green-100 p-6 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/4 w-full">
            <div className="bg-green-500 p-4 rounded-lg">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Email</h3>
              <p>aniket31032001@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center bg-green-100 p-6 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/4 w-full">
            <div className="bg-green-500 p-4 rounded-lg">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Address</h3>
              <p>New Delhi, India</p>
            </div>
          </div>
          <div className="flex items-center bg-green-100 p-6 rounded-lg shadow-md md:w-1/4 w-full">
            <div className="bg-green-500 p-4 rounded-lg">
              <FaPhone className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Call</h3>
              <p>+91 93344739661, 9199732985</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
