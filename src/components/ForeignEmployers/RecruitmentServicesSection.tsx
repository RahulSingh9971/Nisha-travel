import React from 'react';
import img1 from '../../assets/images/Image+Background.png';
import img2 from '../../assets/images/Image+Background (1).png';
import img3 from '../../assets/images/Image+Background (2).png';
import img4 from '../../assets/images/image 63.png';
import img5 from '../../assets/images/image 63 (1).png';
import img6 from '../../assets/images/image 63 (2).png';

const RecruitmentServicesSection = () => {
  const services = [
    {
      id: 1,
      image: img1,
      title: "End-to-end international manpower recruitment"
    },
    {
      id: 2,
      image: img2,
      title: "Skilled, semi-skilled & unskilled workforce sourcing"
    },
    {
      id: 3,
      image: img3,
      title: "Blue-collar & white-collar recruitment"
    },
    {
      id: 4,
      image: img4,
      title: "Technical screening, Skill & trade testing"
    },
    {
      id: 5,
      image: img5,
      title: "Medical, documentation & visa coordination"
    },
    {
      id: 6,
      image: img6,
      title: "Deployment management & post-arrival coordination"
    }
  ];

  return (
    <section className="bg-white py-16 font-manrope">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#0a1e3f] text-3xl md:text-4xl font-extrabold">
            About Our
          </h2>
          <h3 className="text-[#c1272d] text-3xl md:text-4xl font-extrabold mt-2">
            Recruitment Services
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              {/* Card Image */}
              <div className="w-full aspect-[1.6/1] overflow-hidden p-4">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
              {/* Card Content */}
              <div className="px-6 pb-6 pt-2">
                <h4 className="text-[#0a1e3f] font-bold text-base md:text-lg leading-tight">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentServicesSection;
