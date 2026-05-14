import React from 'react';

import imgEndToEnd from '../../../assets/images/Group.png';
import imgStatusTracking from '../../../assets/images/fi_2649390.png';
import imgPrivacy from '../../../assets/images/fi_3944356.png';
import imgAccountManager from '../../../assets/images/fi_15762588.png';
import imgTransparent from '../../../assets/images/fi_1076744.png';

const topRowData = [
  {
    icon: imgEndToEnd,
    title: "End-to-end\nhandling",
  },
  {
    icon: imgStatusTracking,
    title: "Status tracking &\nupdates",
  },
  {
    icon: imgPrivacy,
    title: "Data Privacy &\nsecure handling",
  }
];

const bottomRowData = [
  {
    icon: imgAccountManager,
    title: "Dedicated\naccount manager",
  },
  {
    icon: imgTransparent,
    title: "Transparent pricing &\nzero hidden charges",
  }
];

const NisaHelps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-16">
          How Nisa Travels<br />
          <span className="text-[#c20c15]">Helps You</span>
        </h2>
        
        <div className="flex flex-col items-center gap-12">
          {/* Top Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {topRowData.map((item, index) => (
              <div key={`top-${index}`} className="flex flex-col items-center">
                <div className="mb-4">
                  <img src={item.icon} alt={item.title.replace('\n', ' ')} className="w-[60px] h-[60px] object-contain" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#002661] leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full md:w-3/4">
            {bottomRowData.map((item, index) => (
              <div key={`bottom-${index}`} className="flex flex-col items-center">
                <div className="mb-4">
                  <img src={item.icon} alt={item.title.replace('\n', ' ')} className="w-[60px] h-[60px] object-contain" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#002661] leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NisaHelps;