import React, { useState, useEffect } from "react";
import journeyImg from "../../../assets/images/ourjourney.png";
import journeyImg2 from "../../../assets/images/ourjourney2.png"; // adjust path as needed

interface Award {
  year: string;
  title: string;
}

interface JourneyProps {
  title?: string;
  subtitle?: string;
  desc1?: string;
  desc2?: string;
  mainImg?: string;
  secondaryImg?: string;
  caption?: string;
  awardsTitle?: string;
  awardsHighlight?: string;
  awardsDesc?: string; 
  awardsList?: Award[];
}

export const JourneyAndAwards: React.FC<JourneyProps> = ({
  title, subtitle, desc1, desc2, mainImg, secondaryImg, caption, 
  awardsTitle, awardsHighlight, awardsDesc, awardsList 
}) => {
   return (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10">
    <div className=" lg:gap-12 md:gap-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
      <div className="lg:max-w-xl">
        <h2 className="max-w-sm lg:text-[42px] text-3xl font-extrabold  md:mb-6 tracking-wide leading-tight">
          <span className="text-primary-navyblue">{title}</span>{" "}
          <span className="text-primary-red">{subtitle}</span>
        </h2>
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
         {desc1}
        </p>
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
          {desc2}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={mainImg} alt="Journey Globe"
          className="w-[400px] h-auto"
        />
      </div>
    </div>
    <div className="pt-12 lg:gap-12 md:gap-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
      <div className="flex flex-col xl:w-[90%] lg:order-1 order-2 ">
        <img
          src={secondaryImg} alt="Awards"
          className=" lg:h-auto md:h-[700px] h-80"
        />
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
         {caption}
        </p>
      </div>
      <div className="lg:max-w-xl lg:order-2 order-1">
        <h2 className="max-w-md lg:text-[42px] text-3xl font-extrabold  md:mb-6 tracking-wide leading-tight">
          <span className="text-primary-navyblue">{awardsTitle}</span>{" "}
          <span className="text-primary-navyblue">{awardsHighlight}</span>
        </h2>
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
         {awardsDesc}
        </p>
        <div className="p-6 max-w-md bg-white">
          <ul className="relative">
            {awardsList?.map((award, idx) => (
              <li key={idx} className="pl-8 mb-8 last:mb-0 relative">
                {/* Dot & line */}
                <span className="absolute left-0 top-1.5 flex flex-col items-center">
                 <div className="flex items-center justify-center border-2 border-primary-navyblue rounded-full shadow p-[3px]">
                   <span className=" w-[9px] h-[9px] bg-primary-red rounded-full "></span>
                 </div>
                  {idx < awardsList.length - 1 && (
                    <span className="block w-[2px] h-[110px] bg-primary-navyblue mx-auto" />
                  )}
                </span>
                {/* Year and title */}
                <span className="block text-xl font-extrabold text-primary-red">
                  {award.year}
                </span>
                <span className="block font-extrabold text-primary-navyblue">
                  {award.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)};
