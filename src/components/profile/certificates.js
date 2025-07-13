import React from 'react';
import Marquee from 'react-fast-marquee';
import 'tailwindcss/tailwind.css';
import Img1 from '../images/Azure-DevOps_page-0001.jpg';
import Img2 from '../images/Python Programming_page-0001.jpg';
import Img3 from '../images/CLA_page-0001.jpg';
import Img4 from '../images/Responsive web design.jpg';
import Img5 from '../images/iicc_certificate_participation_page-0001.jpg';
import Img6 from '../images/iicc_certificate_round2_page-0001.jpg';
import Img7 from '../images/part-1_page-0001.jpg';
import Img8 from '../images/part-2_page-0001.jpg';

const certificates = [
  { img: Img1, alt: "Azure-DevOps" },
  { img: Img2, alt: "Python Programming" },
  { img: Img3, alt: "CLA",  },
  { img: Img4, alt: "Responsive Web Design" },
  { img: Img5, alt: "IICC Participation" },
  { img: Img6, alt: "IICC Round 2" },
  { img: Img7, alt: "Part 1" },
  { img: Img8, alt: "Part 2" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="md:py-16 py-10 bg-[#000000] font-poppins">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-[28px] text-white font-bold text-center mb-8">Certificates</h2>
        <Marquee pauseOnHover speed={100} className="relative">
          {certificates.map((certificate, index) => (
            <div key={index} className="relative w-140 h-64 flex-shrink-0 p-4">
              <div className="relative w-full h-full">
                <img
                  src={certificate.img}
                  alt={certificate.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
               
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Certificates;
