import React from 'react';
import { Link } from 'react-router-dom';
import partnerImg from '../../assets/images/Frame 2131332539.png';

const EmigrantCTA: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden font-manrope bg-white pt-10">
      {/* Main Sky Blue Container with Wave Clip-Path */}
      <div 
        className="relative w-full bg-[#EBF2F7] overflow-hidden"
        style={{
          // Uses an elegant custom clip path to match the soft bottom curve of the graphic
          clipPath: 'ellipse(160% 100% at 35% 0%)',
          minHeight: '460px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[440px] relative z-10">

            {/* Left Content Column */}
            <div className="py-16 md:py-20 z-20 max-w-xl">
              <h2 className="text-[#0a1e3f] text-2xl md:text-3xl lg:text-[38px] font-extrabold leading-[1.25] mb-10 tracking-tight pr-4">
                Start your overseas career journey with a trusted, MEA-approved recruitment partner.
              </h2>
              
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {/* Apply Now Red Button */}
                <Link to="/jobs">
                  <button className="bg-[#c1272d] hover:bg-red-700 text-white font-bold py-4 px-8 text-xs md:text-[13px] tracking-widest uppercase transition-all active:scale-95 shadow-md hover:shadow-lg">
                    • APPLY NOW •
                  </button>
                </Link>

                {/* Speak to an Advisor Underlined text button */}
                <Link to="/contact-us">
                  <button className="text-[#0a1e3f] hover:text-red-700 font-extrabold text-[13px] md:text-[14px] tracking-wider uppercase underline underline-offset-4 decoration-2 transition-colors">
                    SPEAK TO AN ADVISOR
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column for Mobile View Only (Image flows normally) */}
            <div className="relative w-full flex md:hidden self-end justify-end mt-4 z-10">
              <img 
                src={partnerImg} 
                alt="Sign Candidate Contract" 
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>

        {/* Right Column Desktop - Absolute Bleed (Matches Mockup exactly) */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[52%] z-0 select-none pointer-events-none">
          <img 
            src={partnerImg} 
            alt="Sign Candidate Contract" 
            className="w-full h-full object-cover object-left-top scale-[1.01]"
            style={{
              // Adjusting alignment to make it sit perfectly flush
              objectPosition: 'left top'
            }}
          />
        </div>
      </div>

      {/* Visual Spacer to compensate for the clipPath offset */}
      <div className="-mt-16 h-16 w-full bg-white pointer-events-none"></div>
    </section>
  );
};

export default EmigrantCTA;
