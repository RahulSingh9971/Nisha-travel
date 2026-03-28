import React from "react";

interface OverseasJourneyProps {
  title: string;
  descriptions: string[]; // Receives the array you passed
  image: string;
}
const OverseasJourney: React.FC<OverseasJourneyProps> = ({ title, descriptions, image }) => (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 lg:gap-0 gap-[60px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
    <div className="lg:max-w-xl">
      <h2 className="max-w-md lg:text-[42px] text-3xl font-extrabold text-primary-navybluemd:mb-6 tracking-wide lg:!leading-[1.2]">
        {title}
      </h2>
      {descriptions.map((text, index) => (
        <p key={index} className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
          {text}
        </p>
      ))}
    </div>
    <div className="flex justify-center items-center">
      <img src={image} alt={title} className="w-full h-auto" />
    </div>
  </section>
);

export default OverseasJourney;
