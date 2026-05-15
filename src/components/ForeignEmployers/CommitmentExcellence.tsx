import React from 'react';
import commitmentImg from '../../assets/images/image 76.png';

interface CommitmentExcellenceProps {
  imageLeft?: boolean;
}

const CommitmentExcellence: React.FC<CommitmentExcellenceProps> = ({ imageLeft = false }) => {
  return (
    <section className="bg-white py-16 md:py-24 font-manrope">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className={`flex justify-center ${imageLeft ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'} order-1`}>
            <div className="w-full max-w-[500px] transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={commitmentImg} 
                alt="Our Core Values - Commitment to Excellence" 
                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={`max-w-xl ${imageLeft ? 'lg:order-2' : 'lg:order-1'} order-2`}>
            <h2 className="text-4xl md:text-[44px] font-extrabold leading-tight mb-6">
              <span className="text-[#c1272d] block mb-1">Our Commitment</span>
              <span className="text-[#0a1e3f]">to Excellence</span>
            </h2>
            <p className="text-[#5e6d7c] text-base md:text-lg leading-relaxed font-medium">
              We are driven by a steadfast commitment to integrity and compliance. By prioritizing worker welfare and maintaining transparent communication, we build high-trust, long-term partnerships that empower global mobility and ensure ethical document verification at every step.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommitmentExcellence;
