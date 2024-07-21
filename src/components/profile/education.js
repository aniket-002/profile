import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Education</h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              institution: "Galgotias University",
              year: "2019-2023",
              degree: "B.Tech in Computer Science Engineering",
              grade: "7.0/10",
              img: "img/Galgotias-university-1.png"
            },
            {
              institution: "Jawahar Navodaya Vidyalaya, Jehanabad",
              year: "2017-2019",
              degree: "Class 12th",
              grade: "81%",
              img: "img/Jnv-jehanabad.jpg"
            },
            {
              institution: "Jawahar Navodaya Vidyalaya, Jehanabad",
              year: "2015-2016",
              degree: "Class 10th",
              grade: "89%",
              img: "img/Jnv-jehanabad.jpg"
            }
          ].map((edu, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={edu.img} alt={edu.institution} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">{edu.institution}</h3>
                  <p>{edu.year}</p>
                  <p>{edu.degree}</p>
                  <p>{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
