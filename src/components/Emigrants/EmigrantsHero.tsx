import React from 'react';
import heroIllustration from '../../assets/images/image 69.png';

const EmigrantsHero = () => {
  return (
    <section className="bg-white md:py-20 py-12 overflow-hidden font-manrope">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-[#0a1e3f] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] md:leading-[1.2] tracking-tight mb-6">
              Secure Overseas Employment with a <span className="text-[#c1272d] block mt-1">Government-Approved Recruitment Partner</span>
            </h1>
            
            <p className="text-[#5e6d7c] text-base md:text-lg leading-relaxed font-medium mb-10 max-w-lg">
              We guide you from job selection to visa stamping safely, legally, and transparently.
            </p>
            
            {/* Button CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => window.location.href = '/jobs'}
                className="bg-[#c1272d] hover:bg-red-700 text-white font-bold text-xs tracking-widest py-4 px-8 transition-all duration-200 active:scale-95 shadow-sm uppercase text-center whitespace-nowrap"
              >
                VIEW OVERSEAS JOBS
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-white hover:bg-slate-50 border border-[#0a1e3f] text-[#0a1e3f] font-bold text-xs tracking-widest py-4 px-8 transition-all duration-200 active:scale-95 uppercase text-center whitespace-nowrap"
              >
                SUBMIT JOB APPLICATION
              </button>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="flex justify-center lg:justify-end w-full relative animate-fade-in">
            <div className="w-full max-w-[580px] transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src={heroIllustration} 
                alt="Secure Overseas Employment" 
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmigrantsHero;
