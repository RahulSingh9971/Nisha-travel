import React from 'react';

// Using require for dynamic image loading or standard imports
import img1 from '../../../assets/images/Layer 2.png';
import img2 from '../../../assets/images/fi_2710029.png';
import img3 from '../../../assets/images/image 60.png';
import img4 from '../../../assets/images/fi_620765.png';

const processSteps = [
  {
    number: "1",
    title: "Pre-submission\nverification",
    image: img1,
    numColor: "bg-[#1877F2]"
  },
  {
    number: "2",
    title: "State/HRD / SDM /\nChamber attestation",
    image: img2,
    numColor: "bg-[#E11D48]"
  },
  {
    number: "3",
    title: "Ministry of External\nAffairs attestation",
    image: img3,
    numColor: "bg-[#F59E0B]"
  },
  {
    number: "4",
    title: "Kuwait Embassy\nattestation",
    image: img4,
    numColor: "bg-[#DC2626]"
  }
];

const AttestationProcess = ({ data }: { data?: any }) => {
  if (data) {
    const numColors = ["bg-[#1877F2]", "bg-[#E11D48]", "bg-[#F59E0B]", "bg-[#DC2626]"];
    
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          {/* Header Section */}
          <h2 
            className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-16"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {data.steps?.map((step: any, index: number) => {
              const colorClass = numColors[index % numColors.length];
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-[140px] h-[140px] rounded-full border border-gray-200 flex items-center justify-center bg-white">
                      <img 
                        src={step.image_url} 
                        alt={step.title} 
                        className="w-[70px] h-[70px] object-contain"
                      />
                    </div>
                    <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full text-white font-bold flex items-center justify-center text-[15px] shadow-sm ${colorClass}`}>
                      {step.number || index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-[18px] font-bold text-[#002661] leading-snug whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: step.title }}>
                  </h3>
                  {step.subtitle && (
                    <p className="text-gray-500 text-[14px] mt-2">{step.subtitle}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          {data.cta && data.cta.text && (
            <a href={data.cta.link || '#'} className="inline-block bg-[#c20c15] hover:bg-[#a00a11] text-white text-[13px] font-bold py-4 px-8 rounded-md uppercase tracking-wider transition-colors">
              {data.cta.text}
            </a>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        {/* Header Section */}
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-2">
          Step-by-Step
        </h2>
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#c20c15] leading-tight mb-16">
          Kuwait Attestation Process
        </h2>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Circle */}
              <div className="relative mb-6">
                <div className="w-[140px] h-[140px] rounded-full border border-gray-200 flex items-center justify-center bg-white">
                  <img 
                    src={step.image} 
                    alt={step.title.replace('\n', ' ')} 
                    className="w-[70px] h-[70px] object-contain"
                  />
                </div>
                {/* Number Badge */}
                <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full text-white font-bold flex items-center justify-center text-[15px] shadow-sm ${step.numColor}`}>
                  {step.number}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-[18px] font-bold text-[#002661] leading-snug whitespace-pre-line">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-[#c20c15] hover:bg-[#a00a11] text-white text-[13px] font-bold py-4 px-8 rounded-md uppercase tracking-wider transition-colors">
          For Processing Time & Fees Call Now
        </button>
      </div>
    </section>
  );
};

export default AttestationProcess;