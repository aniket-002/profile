import React from "react";
import 'tailwindcss/tailwind.css';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-custom-gradient">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full px-3 py-2 border rounded-lg"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Send
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              <strong>Email:</strong> aniket.anand@example.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Address:</strong> 123 Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
