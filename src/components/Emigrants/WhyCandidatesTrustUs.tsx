import React from 'react';

// Import icon assets
import legalIcon from '../../assets/images/fi_13140802.png';
import trustIcon from '../../assets/images/trusticon.png';
import costIcon from '../../assets/images/Vector (1).png';
import illegalIcon from '../../assets/images/fi_4819529.png';
import contractIcon from '../../assets/images/fi_5545080.png';
import candidateIcon from '../../assets/images/fi_1239608.png';

const trustItems = [
  {
    id: 1,
    icon: legalIcon,
    title: "100% Legal Processing",
  },
  {
    id: 2,
    icon: trustIcon,
    title: "Direct Employer Coordination",
  },
  {
    id: 3,
    icon: costIcon,
    title: "Transparent Cost Structure",
  },
  {
    id: 4,
    icon: illegalIcon,
    title: "No Illegal Routes",
  },
  {
    id: 5,
    icon: contractIcon,
    title: "Safe & Verified Contracts",
  },
  {
    id: 6,
    icon: candidateIcon,
    title: "Thousands of successfully deployed candidates",
  },
];

const WhyCandidatesTrustUs = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-manrope overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight">
            <span className="text-[#0a1e3f] block mb-2">Why Candidates</span>
            <span className="text-[#c1272d] block">Trust Us</span>
          </h2>
        </div>

        {/* Responsive Grid Container matching exact mockup columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-12 lg:gap-x-16 gap-y-16 max-w-6xl mx-auto justify-items-center px-4">
          {trustItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col items-center text-center w-full max-w-[250px] transition-all duration-300 group hover:-translate-y-1 ${
                index === 4 ? 'lg:col-start-2' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="h-16 w-16 flex items-center justify-center mb-5 bg-transparent group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="h-full w-full object-contain pointer-events-none filter brightness-100 drop-shadow-[0_2px_10px_rgba(193,39,45,0.08)]" 
                />
              </div>
              
              {/* Text Label */}
              <h3 className="text-[#0a1e3f] font-bold text-[15px] md:text-base leading-relaxed px-2 tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyCandidatesTrustUs;
