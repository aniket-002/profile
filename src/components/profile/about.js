import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaCloudUploadAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const About = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about-description");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="bg-[#000000] md:py-16 pt-12 pb-14  text-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side: Services with fade-in from left */}
        <motion.div
          className="space-y-10 relative md:order-1 order-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <FaLaptopCode />, label: "Website Development" },
            { icon: <FaMobileAlt />, label: "App Development" },
            { icon: <FaServer />, label: "Website Hosting" },
            { icon: <FaCloudUploadAlt />, label: "App Hosting & Deployment" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 relative md:pl-12 pl-0">
              <div className="md:text-3xl text-xl text-red-500">{item.icon}</div>
              <h3 className="md:text-xl text-md font-medium">{item.label}</h3>
            </div>
          ))}
        </motion.div>

        {/* Right side: Typing animation */}
        <div className="prder-2 md:order-1">
          <h2 className="md:text-4xl text-[28px] font-bold mb-6">About Me</h2>
          <div id="about-description" className="text-gray-300 text-base leading-relaxed min-h-[230px]">
            {startTyping && (
              <TypeAnimation
                sequence={[
                  `I began my journey in the tech world as a Software Intern, where I focused on building strong fundamentals and solving real-world problems. Through consistent effort, dedication, and a commitment to delivering high-quality work, I earned a promotion to Associate Software Engineer. Today, as a Software Engineer, I continue to thrive by learning, innovating, and creating impactful solutions that blend technical excellence with practical value.\n\nI also specialize in app hosting, from building applications to submitting them for review and making them live for users on platforms like the Play Store or App Store.`,
                  () => setTypingDone(true),
                ]}
                speed={50}
                style={{ whiteSpace: "pre-line", display: "block" }}
                cursor
              />
            )}
          </div>

          {/* Stats appear after typing completes */}
          {typingDone && (
            <motion.div
              className="grid grid-cols-3 gap-6 text-center mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div>
                <h3 className="md:text-3xl text-xl font-bold text-red-500">5+</h3>
                <p className="text-sm mt-1 text-gray-400">Products Contributed To</p>
              </div>
              <div>
                <h3 className="md:text-3xl text-xl font-bold text-red-500">95%</h3>
                <p className="text-sm mt-1 text-gray-400">Team Satisfaction Score</p>
              </div>
              <div>
                <h3 className="md:text-3xl text-xl font-bold text-red-500">1.5+</h3>
                <p className="text-sm mt-1 text-gray-400">Years of Experience</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
