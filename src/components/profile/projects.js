import React from "react";
import Marquee from "react-fast-marquee";
import 'tailwindcss/tailwind.css';
import Img1 from '../images/project-1.png';
import Img2 from '../images/project-2.png';
import Img3 from '../images/project-3.png';
import Img4 from '../images/project-4.png';

const Projects = () => {
  const projects = [
    {
      img: Img1,
      alt: "Personal Portfolio",
      link: "https://github.com/aniket-002",
      title: "Personal Portfolio"
    },
    {
      img: Img2,
      alt: "Image SearchApp",
      link: "https://image-seeker.netlify.app/",
      title: "Image SearchApp"
    },
    {
      img: Img3,
      alt: "Sales Dashboard",
      link: "https://github.com/aniket-002",
      title: "Sales Dashboard"
    },
    {
      img: Img4,
      alt: "Project 4",
      link: "https://github.com/aniket-002",
      title: "Netflix Clone"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-custom-gradient font-poppins">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-8">My Projects</h2>
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
          {projects.map((project, index) => (
            <div key={index} className=" p-4 flex-shrink-0">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={project.img} alt={project.alt} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-500 hover:underline">
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Projects;
