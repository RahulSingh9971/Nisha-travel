import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import iconFlight from '../../assets/images/fi_4586976.png';
import iconStay from '../../assets/images/Groupnesec.png';
import iconTour from '../../assets/images/Client_rating_x2C__testimonial_x2C__customers_x2C__star_team_x2C__team_x2C__group.png';
import iconTransport from '../../assets/images/fi_11835224.png';

// Image
import imgTajMahal from '../../assets/images/pexels-pulkid-mewada-3237758-35638858 1.png';

const features = [
  {
    icon: iconFlight,
    title: 'Flight Bookings',
    desc: 'Inclusive of both domestic and international ticketing.'
  },
  {
    icon: iconStay,
    title: 'Premium Stays',
    desc: 'Quality accommodations curated for families, groups, or solo travelers.'
  },
  {
    icon: iconTour,
    title: 'Expert Guided Tours',
    desc: 'Structured itineraries to explore regional heritage and landscapes.'
  },
  {
    icon: iconTransport,
    title: 'Comfortable and Safe Transportation.',
    desc: 'Added to ensure a completely hassle-free transition from arrival to stay.'
  }
];

const UnforgettableTrip: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <h2 className="text-[#0a1e3f] text-3xl md:text-4xl lg:text-[42px] leading-[1.2] tracking-tight">
            <span
              className="text-[#c1272d] block mb-2"
              style={{ fontFamily: "'Renfrew', sans-serif" }}
            >
              Nisa Travel Agency
            </span>
            for next unforgettable trip
          </h2>
          <p className="text-[#5e6d7c] text-[15px] leading-relaxed max-w-sm">
            We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-20">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-[72px] h-[72px] mb-6 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-[#0a1e3f] text-[17px] font-extrabold mb-3">
                {feature.title}
              </h4>
              <p className="text-[#5e6d7c] text-[14px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Huge Carousel Image Block */}
        <div className="relative mt-20 w-full h-[400px] md:h-[550px] lg:h-[600px] rounded-[24px] overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <img
            src={imgTajMahal}
            alt="Discover the Heritage and Landscapes of India"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* User's Custom Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(258.43deg, rgba(0, 0, 0, 0) 37.34%, #0E313A 100%)' }}
          ></div>

          {/* Content inside Image */}
          <div className="absolute bottom-12 md:bottom-20 left-6 md:left-16 z-10 max-w-xl">
            <h3 className="text-white text-3xl md:text-[40px] lg:text-[46px] font-bold leading-[1.15] tracking-tight mb-8">
              Discover the Heritage <br className="hidden md:block" /> and Landscapes of India.
            </h3>
            <Link to="/contact-us">
              <button className="bg-white hover:bg-gray-100 text-[#0a1e3f] font-extrabold text-[12px] md:text-[13px] tracking-wider uppercase px-8 py-4 rounded-[6px] transition-all active:scale-95 shadow-lg hover:shadow-xl">
                BOOK YOUR TOUR
              </button>
            </Link>
          </div>

          {/* Carousel Dots indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-80 transition-opacity"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white cursor-pointer shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-80 transition-opacity"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-80 transition-opacity"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-80 transition-opacity"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UnforgettableTrip;
