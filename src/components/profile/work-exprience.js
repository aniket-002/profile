import React from 'react';
import 'tailwindcss/tailwind.css';

const WorkExperience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-400 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full md:w-[90%]">
        <h2 className="text-3xl sm:text-4xl text-white font-bold text-center mb-8 sm:mb-12">Work Experience</h2>

        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">LegalPay || Frontend Developer</h3>
          <p className="text-gray-600">April 2024 – Present</p>
          <h4 className="text-lg sm:text-xl font-semibold mt-4">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>Working as a Software Developer with a focus on frontend development.</li>
            <li>Contributed to several projects using technologies like React.js, Next.js, TypeScript, JavaScript, CSS, Tailwind CSS, and MUI.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base"><strong>Technologies:</strong> React.js, Next.js, TypeScript, JavaScript, CSS, Tailwind CSS, MUI</p>
        </div>

        {/* A3Logics Experience */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">A3Logics || Analyst Intern</h3>
          <p className="text-gray-600">August 2023 – Nov 2023 | Jaipur, Rajasthan</p>
          <h4 className="text-lg sm:text-xl font-semibold mt-4">Key Achievements:</h4>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>Spearheaded data integration initiatives as an Analyst, leveraging Salesforce to streamline internal-external data exchange, fostering heightened collaboration and workflow efficiency.</li>
            <li>Managed AWS resources to optimize cloud infrastructure and reduce operational costs by 20%.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base"><strong>Skills:</strong> Salesforce, AWS, Excel</p>
        </div>

        {/* Additional Experience can be added similarly */}
        
      </div>
    </section>
  );
};

export default WorkExperience;
