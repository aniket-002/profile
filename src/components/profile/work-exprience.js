import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const WorkExperience = () => {
 useEffect(() => {
  AOS.init({
    duration: 1000,  // animation speed
    once: false,    // ✅ animate every time on scroll
    mirror: true,   // ✅ animate when scrolling back up
  });
}, []);

  return (
    <section id="experience" className="md:py-16 py-10  bg-[#000000] font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full md:w-[90%]">
        <h2 className="md:text-4xl text-[28px] text-white font-bold text-center mb-8 sm:mb-12" data-aos="fade-down">Work Experience</h2>

        {/* Zavo - Current Full-Time Role */}
        <div
          className="bg-[#121212] shadow-xl rounded-lg p-6 sm:p-8 mb-8 border border-gray-800"
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Zavo || Software Engineer</h3>
          <p className="text-gray-400">February 2025 – Present</p>
          <h4 className="text-lg sm:text-xl font-semibold mt-4 text-white">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-300">
            <li>Leading frontend development of Zavo's mobile app using React Native and TypeScript.</li>
            <li>Integrated RESTful APIs and third-party SDKs to fetch and display dynamic data securely and efficiently.</li>
            <li>Built interactive UIs with smooth animations using Reanimated, Gesture Handler, and NativeWind for a better user experience.</li>
            <li>Implemented advanced navigation, bottom sheets, and optimized data flows using React Query and Zustand.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            <strong className="text-white">Technologies:</strong> React Native, TypeScript, NativeWind, Reanimated, React Navigation, React Query, Expo Router, Zustand, REST APIs
          </p>
        </div>

        {/* Zavo - Associate Role */}
        <div
          className="bg-[#121212] shadow-xl rounded-lg p-6 sm:p-8 mb-8 border border-gray-800"
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Zavo || Associate Software Engineer</h3>
          <p className="text-gray-400">October 2024 – January 2025</p>
          <h4 className="text-lg sm:text-xl font-semibold mt-4 text-white">Key Contributions:</h4>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-300">
            <li>Built and deployed Zavo’s official website from scratch, handling full frontend architecture and performance tuning.</li>
            <li>Integrated APIs to dynamically serve content, user data, and dashboard analytics in real time.</li>
            <li>Implemented responsive design, animations, and deployed on Vercel using CI/CD pipelines.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            <strong className="text-white">Technologies:</strong> Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion, REST APIs
          </p>
        </div>

        {/* LegalPay Internship */}
        <div
          className="bg-[#121212] shadow-xl rounded-lg p-6 sm:p-8 mb-8 border border-gray-800"
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">LegalPay || Frontend Developer Intern</h3>
          <p className="text-gray-400">April 2024 – September 2024</p>
          <h4 className="text-lg sm:text-xl font-semibold mt-4 text-white">Key Contributions:</h4>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-300">
            <li>Worked on live legal-fintech applications, building and refining production-grade user interfaces.</li>
            <li>Integrated REST APIs for user data, authentication, and dashboard functionalities.</li>
            <li>Collaborated with backend teams to debug and test API flows for reliable user experiences.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            <strong className="text-white">Technologies:</strong> React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, MUI, REST APIs
          </p>
        </div>

        {/* A3Logics Internship */}
        <div
          className="bg-[#121212] shadow-xl rounded-lg p-6 sm:p-8 mb-8 border border-gray-800"
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">A3Logics || Analyst Intern</h3>
          <p className="text-gray-400">August 2023 – November 2023 | Jaipur, Rajasthan</p>
          <h4 className="text-lg sm:text-xl font-semibold mt-4 text-white">Key Achievements:</h4>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-300">
            <li>Streamlined internal and external data workflows using Salesforce integration strategies.</li>
            <li>Supported the backend and data teams with basic cloud API integrations and AWS resource optimization.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            <strong className="text-white">Skills:</strong> Salesforce, AWS, Excel, API Integration
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
