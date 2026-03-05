// ValuesSection.tsx
import React from "react";
import icon1 from "../../../assets/images/sicon12.svg";
import icon2 from "../../../assets/images/sicon13.svg";
import icon3 from "../../../assets/images/sicon14.svg";
import icon4 from "../../../assets/images/sicon15.svg";
import icon5 from "../../../assets/images/sicon16.svg";

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-6 px-3">
    <img src={icon} alt="icon" className="h-auto w-14" />
    <h3 className="font-extrabold md:text-2xl text-xl text-primary-navyblue">
      {title}
    </h3>
    <p className="text-[15px] text-primary-gray font-medium">{description}</p>
  </div>
);

const ValuesSection: React.FC = () => {
  const cards = [
    {
      icon: icon1,
      title: "Integrity & Transparency",
      description:
        "We uphold the highest ethical standards in overseas recruitment and workforce solutions. Transparency in our processes ensures trust—with clients, candidates, and partners alike.",
    },
    {
      icon: icon2,
      title: "Excellence & Expertise",
      description:
        "Our decades of experience and in-depth knowledge of international workforce needs, immigration requirements, and documentation processes guide our solutions with precision, professionalism, and care.",
    },
    {
      icon: icon3,
      title: "Personalized Commitment",
      description:
        "We understand that every individual's journey is unique. With personal understanding, objective needs, effective solutions, and transparent processes, our values extend to guidance that goes beyond paperwork.",
    },
    {
      icon: icon4,
      title: "Empowering Dreams",
      description:
        "We don't just provide services—we empower lives. From recruitment and visas to education, licensing, and travel, our philosophy centers on turning aspirations into tangible opportunities.",
    },
    {
      icon: icon5,
      title: "Continuous Growth",
      description:
        "The global workforce landscape evolves constantly. So do we. Our leadership in new regulations, technology, and trends ensures our clients and candidates are always prepared for success.",
    },
  ];

  return (
    <section className="">
      <div className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 ">
        <div className="flex justify-center">
          <p className="max-w-xl text-center text-[16px] text-primary-navybluemb-8">
            At Nisa Travel Agency, our work is guided by principles that have
            defined us for over three decades. Every decision, every service,
            and every journey we facilitate is rooted in values that put people
            first.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 gap-10 mt-10">
          {cards.slice(0, 3).map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 gap-10 mt-10">
          {cards.slice(3).map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <div className="bg-primary-lightblue">
        <div className="grid md:grid-cols-2 font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4  md:py-16 py-10 ">
          <div></div>
          <div className=" max-w-xl">
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold text-primary-navybluemb-3">
              Our Promise
            </h2>
            <p className="text-primary-gray text-[16px] font-medium mx-auto">
              Your success is our success. Every placement, every opportunity,
              and every milestone we achieve reflects our unwavering commitment
              to families, careers, and dreams fulfilled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
