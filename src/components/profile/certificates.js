import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';

const certificates = [
  {
    title: 'Certificate 1',
    organization: 'Organization 1',
    duration: 'Duration 1',
    description: 'Description 1',
  },
  {
    title: 'Certificate 2',
    organization: 'Organization 2',
    duration: 'Duration 2',
    description: 'Description 2',
  },
  {
    title: 'Certificate 3',
    organization: 'Organization 3',
    duration: 'Duration 3',
    description: 'Description 3',
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="certificates" className="py-20 bg-custom-gradient">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Certificates</h2>
        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-gray-600 mb-2">{certificate.organization}</p>
                <p className="text-gray-600 mb-2">{certificate.duration}</p>
                <p>{certificate.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificates;
