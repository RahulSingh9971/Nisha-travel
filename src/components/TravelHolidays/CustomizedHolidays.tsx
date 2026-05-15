import React, { useState } from 'react';
import { FaPlane, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FaPlaneIcon = FaPlane as any;
const FaGlobeIcon = FaGlobe as any;

// Actual destination images provided by the user
import imgBali from '../../assets/images/Rectangle 26052.png';
import imgSingapore from '../../assets/images/Rectangle 26053.png';
import imgEurope from '../../assets/images/Rectangle 26054.png';

interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'international' | 'national';
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Travel to Bali',
    description: 'We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.',
    image: imgBali,
    type: 'international',
  },
  {
    id: 2,
    title: 'Travel to Singapore',
    description: 'We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.',
    image: imgSingapore,
    type: 'international',
  },
  {
    id: 3,
    title: 'Travel to Europe',
    description: 'We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.',
    image: imgEurope,
    type: 'international',
  },
  {
    id: 4,
    title: 'Travel to Kerala',
    description: 'We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.',
    image: imgBali,
    type: 'national',
  },
  {
    id: 5,
    title: 'Travel to Goa',
    description: 'We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.',
    image: imgSingapore,
    type: 'national',
  },
  {
    id: 6,
    title: 'Travel to Kashmir',
    description: 'We offer tailored travel experiences perfect for families, groups, or solo travelers seeking stress-free vacations.',
    image: imgEurope,
    type: 'national',
  },
];

const CustomizedHolidays: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'international' | 'national'>('international');

  const displayedDestinations = destinations.filter(d => d.type === activeTab);

  return (
    <section className="py-10 md:py-16 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Left Column: Air Ticketing */}
          <div className="lg:col-span-1 bg-[#F1F4F8] rounded-[16px] p-6 lg:p-8 flex flex-col">
            <h3 className="text-[#0a1e3f] text-2xl font-extrabold mb-3">Air Ticketing</h3>
            <p className="text-[#5e6d7c] text-[14px] leading-relaxed mb-8">
              Discover a wide range of value-added services, from document attestation.
            </p>

            <div className="flex flex-col gap-6 flex-grow">
              {/* Domestic Flights */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#c1272d] flex items-center justify-center flex-shrink-0 text-white text-xl">
                  <FaPlaneIcon className="transform -rotate-45" />
                </div>
                <div>
                  <h4 className="text-[#0a1e3f] font-bold text-[15px]">Domestic Flights</h4>
                  <Link to="/contact-us" className="text-[#5e6d7c] text-[13px] hover:text-[#c1272d] transition-colors">
                    View Flights
                  </Link>
                </div>
              </div>

              {/* International Flights */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#c1272d] flex items-center justify-center flex-shrink-0 text-white text-xl">
                  <FaGlobeIcon />
                </div>
                <div>
                  <h4 className="text-[#0a1e3f] font-bold text-[15px]">International Flights</h4>
                  <Link to="/contact-us" className="text-[#5e6d7c] text-[13px] hover:text-[#c1272d] transition-colors">
                    View Flights
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a href="tel:+91000000000" className="mt-10 block w-full">
              <button className="w-full bg-[#c1272d] hover:bg-red-700 text-white font-bold text-[13px] py-4 rounded-[8px] transition-colors active:scale-95 shadow-md">
                CALL NOW +91-00000000
              </button>
            </a>
          </div>

          {/* Right Column: Holiday Packages */}
          <div className="lg:col-span-3">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
              <h2 className="text-[#0a1e3f] text-3xl lg:text-[40px] font-extrabold leading-tight max-w-2xl">
                Customized Holiday Packages in India and Abroad
              </h2>

              {/* Toggle Switch */}
              <div className="flex items-center bg-[#F1F4F8] rounded-full p-1 self-start md:self-auto flex-shrink-0">
                <button
                  onClick={() => setActiveTab('international')}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                    activeTab === 'international' 
                      ? 'bg-[#c1272d] text-white shadow-md' 
                      : 'bg-transparent text-[#0a1e3f] hover:text-[#c1272d]'
                  }`}
                >
                  International
                </button>
                <button
                  onClick={() => setActiveTab('national')}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${
                    activeTab === 'national' 
                      ? 'bg-[#c1272d] text-white shadow-md' 
                      : 'bg-transparent text-[#0a1e3f] hover:text-[#c1272d]'
                  }`}
                >
                  National
                </button>
              </div>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedDestinations.map(dest => (
                <div key={dest.id} className="flex flex-col group cursor-pointer">
                  <div className="rounded-[16px] overflow-hidden mb-5 h-[220px]">
                    <img 
                      src={dest.image} 
                      alt={dest.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-[#0a1e3f] text-xl font-extrabold mb-2 group-hover:text-[#c1272d] transition-colors">
                    {dest.title}
                  </h4>
                  <p className="text-[#5e6d7c] text-[13px] leading-relaxed mb-4 flex-grow">
                    {dest.description}
                  </p>
                  <Link 
                    to="/contact-us" 
                    className="text-[#c1272d] font-bold text-[13px] tracking-wider uppercase mt-auto"
                  >
                    CONTACT US
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomizedHolidays;
