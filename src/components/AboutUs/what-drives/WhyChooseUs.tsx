import React, { useState } from "react";
import starIcon from '../../../assets/images/sicon6.svg'; // Use your actual path
import toolIcon from '../../../assets/images/sicon6.svg';
import thumbIcon from '../../../assets/images/sicon7.svg';
import docIcon from '../../../assets/images/sicon8.svg';

type CardDataType = {
  icon: string;
  title: string;
  text: string;
};

const cardData: CardDataType[] = [
  {
    icon: starIcon,
    title: "Experience You Can Trust",
    text: "Our services include visa and emigration assistance, document attestation, education and study abroad guidance, healthcare licensing, language and skill testing, travel and tourism support, and appointment assistance.",
  },
  {
    icon: toolIcon,
    title: "Comprehensive Solutions",
    text: "Our services include visa and emigration assistance, document attestation, education and study abroad guidance, healthcare licensing, language and skill testing, travel and tourism support, and appointment assistance.",
  },
  {
    icon: thumbIcon,
    title: "Personal Commitment",
    text: "Our services include visa and emigration assistance, document attestation, education and study abroad guidance, healthcare licensing, language and skill testing, travel and tourism support, and appointment assistance.",
  },
  {
    icon: docIcon,
    title: "Proven Integrity & Compliance",
    text: "Our services include visa and emigration assistance, document attestation, education and study abroad guidance, healthcare licensing, language and skill testing, travel and tourism support, and appointment assistance.",
  },
];

const WhyChooseUs: React.FC = () => {
  const [active, setActive] = useState<number | null>(1);
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 md:gap-5 items-start mb-8">
        <h2 className="xl:text-5xl md:text-4xl text-3xl tracking-wide leading-tight font-extrabold text-[#0E313A] ">
          Why <br /> Choose Us
        </h2>
        <div className=" flex lg:justify-end text-[#666666] text-[16px] leading-7 font-medium">
          <span className="max-w-xl">
            Choosing the right partner for your overseas journey is more than a
            decision — it’s a commitment to your future. At Nisa Travel Agency,
            we bring experience, integrity, and a human touch to everything we
            do.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 lg:gap-6 gap-10 pt-5">
        {cardData.map((card, i) => {
          const isActive = active === i;

          return (
            <div
              key={i}
              tabIndex={0}
              className={`
              group xl:p-6 lg:px-4 lg:py-6 p-6 flex flex-col items-center justify-between gap-12 text-center h-full py-10 border transition-all duration-300 cursor-pointer focus:outline-none
               ${
                 isActive
                   ? "bg-[#002661] text-white hover:bg-[#002661] hover:text-white"
                   : "bg-[#EAF0F6] text-[#0E313A] hover:bg-[#002661] hover:text-white"
               }
            `}
            //   onClick={() => setActive(isActive ? null : i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(1)}
            >
            
              {!isActive && (<img src={card.icon} alt="img" className={` transition-opacity duration-200 ${
                  isActive ? "opacity-0 h-0" : "opacity-100"
                }`}/>)}
              <div>
                <h4 className="font-extrabold tracking-wide leading-wide text-[20px] mb-2">
                  {card.title}
                </h4>
                <p
                  className={`transition-all text-[14px] leading-6 mt-2 ${
                    isActive ? "block opacity-[60%]" : "hidden"
                  }`}
                >
                  {card.text}
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
