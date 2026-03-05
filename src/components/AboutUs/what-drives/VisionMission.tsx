import React from "react";
import svgwhite from "../../../assets/images/svgwhite.svg"
import svggray from "../../../assets/images/svggray.svg"

export const VisionMission: React.FC = () => (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:pt-16 md:pb-32 pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 xl:gap-16 lg:gap-8 gap-12 ">
    <div className="relative bg-primary-red text-primary-white md:p-7 p-4 flex flex-col gap-14 justify-between ">
      <div className="flex flex-col gap-2 mb-2">
        <span className="md:w-6 w-4 md:h-6 h-4 rounded-full bg-white mr-2" />
        <span className="font-medium text-2xl ">Our Vision</span>
      </div>
      <div className="xl:max-w-[60%] md:max-w-[80%] text-[15px] font-medium">
        Redefining overseas recruitment through excellence, trust, and global impact.
      </div>
       <img src={svgwhite} alt="vision" className="absolute bottom-0 -left-0 w-full  h-60" />
    </div>
    <div className="relative bg-primary-lightblue text-primary-navyblue md:p-7 p-4 flex flex-col gap-14 justify-between ">
      <div className="flex flex-col gap-2 mb-2">
        <span className="md:w-6 w-4 md:h-6 h-4 rounded-full bg-primary-navyblue mr-2" />
        <span className="font-medium text-2xl text-primary-navyblue">Our Mission</span>
      </div>
      <div className="xl:max-w-[60%] md:max-w-[80%] text-[15px] font-medium">
        Create seamless connections between talent and opportunity with integrity, innovation, and dedication.
      </div>
           <img src={svggray} alt="mission" className="absolute bottom-0 -left-0 w-full  h-60" />
    </div>
  </section>
);
