import React from 'react';
import mapimg from '../../assets/images/femapsectioniimage.png';

const ServingEmployersMap = ({ data }: { data?: any }) => {
  return (
    <section className="bg-[#0b1b36] relative w-full overflow-hidden">
      {/* Container for full width image and absolute heading */}
      <div className="relative w-full">
        {/* Heading overlay */}
        <div className="absolute top-0 left-0 w-full pt-10 md:pt-16 z-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-md">
            {data?.title || "Serving Employers in"}
          </h2>
        </div>

        {/* Full width map image */}
        <img 
          src={data?.image_url || mapimg} 
          alt="World Map showing served countries" 
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ServingEmployersMap;
