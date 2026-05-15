import React from 'react';
import partnerImg from '../../assets/images/Frame 2131332539.png';

const PartnerCallToAction = () => {
  return (
    <section className="relative w-full bg-[#ebf2f7] overflow-hidden font-manrope mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[360px]">

          {/* Left Text Block */}
          <div className="py-12 md:py-16 z-10">
            <h2 className="text-[#0a1e3f] text-2xl md:text-3xl lg:text-[32px] font-extrabold leading-snug mb-8 tracking-tight max-w-lg">
              Partner with a compliant, embassy-recognized recruitment agency built on accountability and performance.
            </h2>
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-[#c1272d] hover:bg-red-700 text-white font-bold py-3.5 px-7 text-xs tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-md"
            >
              • CONTACT US •
            </button>
          </div>

          {/* Right Image Block - Normal flow for mobile only */}
          <div className="relative h-full w-full flex justify-end self-end md:hidden">
            <img
              src={partnerImg}
              alt="Partner with Us"
              className="w-full h-auto object-cover select-none"
            />
          </div>

        </div>
      </div>

      {/* Right Image Block - Absolute positioned for desktop to bleed to absolute right screen edge */}
      <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1/2 z-0 select-none pointer-events-none">
        <img
          src={partnerImg}
          alt="Partner with Us"
          className="w-full h-full object-cover object-left-top scale-105 origin-bottom"
        />
      </div>



    </section>
  );
};

export default PartnerCallToAction;
