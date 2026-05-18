import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import iconRegulatory from '../../assets/images/fi_11478510.png';
import iconSelection from '../../assets/images/fi_10183953.png';
import iconProcess from '../../assets/images/fi_10721349.png';

const FaDatabaseIcon = FaDatabase as React.ElementType;

const WhyChooseUs = ({ data }: { data?: any }) => {
  const displayItems = data?.cards?.length > 0 ? data.cards : [
    {
      id: 1,
      icon: <img src={iconRegulatory} alt="Regulatory Compliance" className="w-12 h-12 object-contain" />,
      title: "Regulatory Compliance & Embassy Authorization",
      desc: "100% compliant recruitment procedures with official embassy linkages for swift and hassle-free processing."
    },
    {
      id: 2,
      icon: <FaDatabaseIcon className="text-5xl text-[#0a1e3f]" />,
      title: "Pre-Screened Talent Database",
      desc: "Verified database of thousands of candidates. Trade-tested & skill-evaluated qualified manpower."
    },
    {
      id: 3,
      icon: <img src={iconSelection} alt="Structured Selection" className="w-12 h-12 object-contain" />,
      title: "Structured Selection Framework",
      desc: "Rigorous multi-stage vetting ensures only the most qualified and capable talent is handpicked for your roles."
    },
    {
      id: 4,
      icon: <img src={iconProcess} alt="Transparent Process" className="w-12 h-12 object-contain" />,
      title: "Transparent Process Control",
      desc: "Clear timelines, real-time progress tracking, and absolute visibility at every stage of mobilization."
    }
  ];

  const renderIcon = (item: any) => {
    if (item.image_url) {
      return <img src={item.image_url} alt={item.title} className="w-12 h-12 object-contain" />;
    }
    if (item.icon && typeof item.icon === 'string') {
      return <i className={`fa ${item.icon} text-5xl text-[#0a1e3f]`}></i>;
    }
    return item.icon || <FaDatabaseIcon className="text-5xl text-[#0a1e3f]" />;
  };

  return (
    <section className=" py-16 font-manrope">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">

        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-14">
          <div className="max-w-md">
            <h2 className="text-[#0a1e3f] text-4xl font-extrabold tracking-tight" dangerouslySetInnerHTML={{ __html: data?.title || "Why <br /> <span class='text-[#0a1e3f]'>Choose Us?</span>" }} />
          </div>
          <div className="max-w-2xl">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {data?.description || "Choosing the right partner for your overseas journey is more than a decision — it's a commitment to your future. At Nisa Travel Agency, we bring experience, integrity, and a human touch to everything we do."}
            </p>
          </div>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item: any, index: number) => (
            <div
              key={item.id || index}
              className="group w-full h-[300px] [perspective:1000px]"
            >
              {/* Card Inner (Rotator) */}
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT SIDE (Light Blue) */}
                <div className="absolute inset-0 w-full h-full bg-[#EBF2FA] rounded-md p-6 flex flex-col items-center justify-center text-center shadow-sm border border-[#dfe9f4] [backface-visibility:hidden]">
                  <div className="mb-8 p-4 rounded-full bg-white/60">
                    {renderIcon(item)}
                  </div>
                  <h3 className="text-[#0a1e3f] font-bold text-[16px] leading-snug mt-auto">
                    {item.title}
                  </h3>
                </div>

                {/* BACK SIDE (Dark Blue) */}
                <div 
                  className="absolute inset-0 w-full h-full text-white rounded-md p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md"
                  style={{ backgroundColor: item.bg_color || '#0a1e3f', color: item.text_color || 'white' }}
                >
                  <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2 w-full">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed" style={{ color: item.text_color ? item.text_color : '#d1d5db' }}>
                    {item.description || item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
