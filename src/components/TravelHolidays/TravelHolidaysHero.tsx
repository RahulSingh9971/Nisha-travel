import React from 'react';
import bgHero from '../../assets/images/Rectangle 26051.png';

const TravelHolidaysHero: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center font-manrope bg-[#0a1e3f] overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={bgHero} 
          alt="Travel and Holidays Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Dark Gradient Overlay for Typography Contrast */}
        <div className="absolute inset-0 bg-black/35 bg-[linear-gradient(to_bottom,rgba(10,30,63,0.4),rgba(10,30,63,0.1))]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Massive Headline */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] md:leading-[1.2] tracking-tight mb-10 max-w-4xl">
          Explore the Heart of India and the Wonders of the World
        </h1>

        {/* Contact Us CTA Button */}
        <button 
          onClick={() => window.location.href = '/contact'}
          className="bg-white hover:bg-gray-100 text-[#0a1e3f] font-extrabold text-[13px] md:text-[14px] uppercase tracking-widest py-4 px-10 rounded-[6px] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          CONTACT US
        </button>

      </div>

    </section>
  );
};

export default TravelHolidaysHero;
