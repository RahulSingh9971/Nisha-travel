
import React from "react";
import founderImage from "../../../assets/images/founderimg.png";
import commasvg from "../../../assets/images/comma.svg";
import icon1 from "../../../assets/images/sicon9.svg";
import icon2 from "../../../assets/images/sicon10.svg";
import icon3 from "../../../assets/images/sicon11.svg";

// 1. Updated Interface to match your API data exactly
interface FeatureItem {
  title: string;
  icon_url: string; // Changed from icon to icon_url
}

interface FounderSectionProps {
  name?: string;
  role?: string;
  quote?: string;
  image?: string;
  visionTitle?: string;
  visionSubtitle?: string;
  visionDesc?: string;
  features?: FeatureItem[]; // Use the new interface here
}

const FounderSection: React.FC<FounderSectionProps> = ({
  name,
  role,
  quote,
  image,
  visionTitle,
  visionSubtitle,
  visionDesc,
  features,
}) => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 gap-10 items-center">
        {/* Founder Image */}
        <div className="mb-6 md:mb-0 items-center justify-center flex lg:order-1 order-2">
          <img
           src={image}
            alt={name || "Founder"}
            className="xl:max-w-xl md:h-[400px] h-[300px] object-cover rounded-[20px]"
          />
        </div>
        {/* Founder Info */}
        <div className="lg:order-2 order-1 relative  flex flex-col justify-between h-full">
          <div>
            <img
              src={commasvg}
              alt="comma"
              className="md:h-[80px] h-20 w-auto absolute top-0 md:-left-5 -left-2 z-0"
            />
            <p className="lg:pb-0 md:pb-14 pb-10 pt-14 relative z-5 text-primary-navyblue text-[16px] leading-7 font-medium">
             {quote}
            </p>
          </div>
          <div>
            <h3 className="text-md uppercase font-normal text-primary-darkred md:mb-5 mb-2">
             {role}
            </h3>
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold text-primary-navyblue">
             {name}
            </h2>
          </div>
        </div>
      </div>
      {/* Title & Tagline */}
      <div className="grid lg:grid-cols-2 xl:gap-20 gap-6 xl:py-24 md:py-16 py-10">
        <div className="max-w-lg">
          <h1 className="lg:text-[42px] text-3xl lg:!leading-[1.2] font-extrabold text-primary-navyblue mb-2 ">
            {visionTitle}
          </h1>
          <h4 className="text-base text-primary-navyblue uppercase tracking-wide mt-5">
            {visionSubtitle}
          </h4>
        </div>
        <div className="flex xl:justify-end">
          <p className="max-w-xl text-primary-gray text-[16px] leading-7 font-medium">
            {visionDesc}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:py-18 md:py-12 py-8">
        {/* <Feature
          icon={icon1} 
          title="Ethical, compliant, and transparent recruitment services"
        />
        <Feature
          icon={icon2}
          title="Personalized guidance for every client’s overseas journey"
        />
        <Feature
          icon={icon3}
          title="Comprehensive support across recruitment, visa, documentation, education, healthcare licensing, travel, and more"
        /> */}
        {features?.map((item, index) => (
          <Feature 
            key={index} 
           icon={item.icon_url}
            title={item.title} 
          />
        ))}
      </div>
    </section>
  );
};

// Example Feature subcomponent
const Feature: React.FC<{ icon: string; title: string }> = ({
  icon,
  title,
}) => (
  <div className="flex flex-col md:gap-12 gap-8 items-strat">
    {/* Replace below with your preferred icon solution e.g., Heroicons or FontAwesome */}
    <img src={icon} alt="icon" className="h-auto w-14" />

    <p className="text-primary-navyblue md:text-[24px] text-xl font-extrabold">{title}</p>
  </div>
);

export default FounderSection;
