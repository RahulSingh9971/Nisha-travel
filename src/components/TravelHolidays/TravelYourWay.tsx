import React from 'react';

// Images imported directly from the user's uploaded assets
import imgFamily from '../../assets/images/Rectangle 26053new.png';
import imgSolo from '../../assets/images/Rectangle 26053 (3).png';
import imgGroup from '../../assets/images/Rectangle 26053 (1).png';
import imgCouple from '../../assets/images/Rectangle 26053 (2).png';

const travelTypes = [
  {
    title: 'Family Holidays',
    image: imgFamily,
  },
  {
    title: 'Solo Adventures',
    image: imgSolo,
  },
  {
    title: 'Group Getaways',
    image: imgGroup,
  },
  {
    title: 'Couple & Honeymoon\nExperiences',
    image: imgCouple,
  }
];

const TravelYourWay: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <h2 className="text-[#0a1e3f] text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight">
            Travel Your Way. <br />
            <span className="text-[#c1272d]">We Handle the Rest.</span>
          </h2>
          <p className="text-[#5e6d7c] text-[15px] leading-relaxed max-w-lg mb-2">
            Curated Holidays for Every Kind of Traveller. Choose from premium stays, luxury escapes, or smart budget plans without compromising comfort.
          </p>
        </div>

        {/* Travel Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {travelTypes.map((type, index) => (
            <div key={index} className="flex flex-col cursor-pointer group">
              {/* Image Box */}
              <div className="w-full h-[220px] md:h-[240px] rounded-[16px] overflow-hidden mb-5">
                <img 
                  src={type.image} 
                  alt={type.title.replace('\n', ' ')} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              {/* Title text */}
              <h4 className="text-[#0a1e3f] font-bold text-[18px] md:text-[20px] leading-snug group-hover:text-[#c1272d] transition-colors whitespace-pre-line">
                {type.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TravelYourWay;
