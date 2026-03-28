import React, { useState } from "react";

interface WhyCard {
  title: string;
  description: string;
  icon?: string;     // Optional if you don't use it
  icon_url: string;  // Required for your <img> tag
}

interface WhyChooseUsProps {
  title?: string;
  description?: string;
  cards?: WhyCard[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, description, cards }) => {        
  const [active, setActive] = useState<number | null>(null);
  const displayCards = cards || [];

  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 md:gap-5 items-start mb-8">
        <h2 className="max-w-[230px] lg:text-[42px] text-3xl tracking-wide lg:!leading-[1.2] font-extrabold text-primary-navyblue">
          {title}
        </h2>
        <div className="flex lg:justify-end text-primary-gray text-[16px] leading-7 font-medium">
          <span className="max-w-xl">{description}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 lg:gap-6 gap-10 pt-5 ">
        {/* FIXED: Removed double {{ }} curly braces */}
        {displayCards.map((card, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              tabIndex={0}
              className={`
                group xl:p-6 lg:px-4 lg:py-6 p-6 min-h-[300px] flex flex-col items-center justify-between gap-12 text-center h-full border transition-all duration-500 ease-in-ou cursor-pointer focus:outline-none
                ${
                  isActive
                    ? "bg-primary-navyblue text-primary-white"
                    : "bg-primary-lightblue text-primary-navyblue hover:bg-primary-navyblue hover:text-white"
                }
              `}
            >
              {!isActive && (
                <div className="text-4xl transition-opacity duration-200 opacity-100">
                 {/* <i className={card.icon || "fa-solid fa-star"}></i> */}
              <img src={card.icon_url} alt={card.title} className="w-16 h-16 object-contain" />
                </div>
              )}

              <div>
                <h4 className=" font-extrabold tracking-wide text-[20px] mb-2">
                  {card.title}
                </h4>
                <p
                  className={`transition-all text-[14px] leading-6 mt-2 ${
                    isActive ? "block opacity-80" : "hidden"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
