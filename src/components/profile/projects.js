import React from "react";
import 'tailwindcss/tailwind.css';


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-custom-gradient">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              img: "img/hom-page.jpg",
              alt: "Personal Portfolio",
              link: "https://github.com/aniket-002",
              title: "Personal Portfolio"
            },
            {
              img: "img/project-2.jpg",
              alt: "Image SearchApp",
              link: "https://image-seeker.netlify.app/",
              title: "Image SearchApp"
            },
            {
              img: "img/Screenshot 2023-12-14 172925.png",
              alt: "Sales DashBoard",
              link: "https://github.com/aniket-002",
              title: "Sales DashBoard"
            }
          ].map((project, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
