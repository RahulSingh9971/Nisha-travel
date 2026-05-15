import React from 'react';

// Import image assets
import imgWorkingConditions from '../../assets/images/Rectangle 26049.png';
import imgVerifiedEmployers from '../../assets/images/Rectangle 26049 (1).png';
import imgLegallyBinding from '../../assets/images/Rectangle 26049 (2).png';
import imgSalaryTerms from '../../assets/images/Rectangle 26049 (3).png';
import imgDirectComm from '../../assets/images/Rectangle 26049 (4).png';

const commitments = [
  {
    id: 1,
    image: imgWorkingConditions,
    title: "Good working conditions",
  },
  {
    id: 2,
    image: imgVerifiedEmployers,
    title: "Verified employers",
  },
  {
    id: 3,
    image: imgLegallyBinding,
    title: "Legally binding contracts",
  },
  {
    id: 4,
    image: imgSalaryTerms,
    title: "Transparent salary terms",
  },
  {
    id: 5,
    image: imgDirectComm,
    title: "Direct communication channels",
  },
];

const OurCommitmentToYou = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-manrope">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight text-[#0a1e3f]">
            Our Commitment to You
          </h2>
        </div>

        {/* 5-Column Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-5 xl:gap-6 justify-center items-stretch">
          {commitments.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#F3F5F8] rounded-[24px] p-3 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-default h-full min-h-[320px]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] sm:aspect-[1.3] rounded-[18px] overflow-hidden mb-5 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
              </div>
              
              {/* Content / Text */}
              <div className="px-2 pb-4 pt-1 flex-grow flex flex-col justify-start">
                <h3 className="text-[#0a1e3f] font-bold text-lg md:text-[19px] leading-[1.3] tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurCommitmentToYou;
