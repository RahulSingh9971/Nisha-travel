// ValuesSection.tsx
import React from "react";
import icon1 from "../../../assets/images/sicon12.svg";
import icon2 from "../../../assets/images/sicon13.svg";
import icon3 from "../../../assets/images/sicon14.svg";
import icon4 from "../../../assets/images/sicon15.svg";
import icon5 from "../../../assets/images/sicon16.svg";
import img from "../../../assets/images/our promise.png"

interface ValueItem {
  title: string;
  description: string;
  icon_url: string;
}

interface ValuesSectionProps {
  description?: string;
  values?: ValueItem[];
  promiseTitle?: string;
  promiseDesc?: string;
  promiseImage?: string;
}
const ValueCard: React.FC<{ icon: string; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => (
  <div className="flex flex-col items-center text-center space-y-6 px-3">
    <img src={icon} alt="icon" className="h-auto w-14" />
    <h3 className="font-extrabold md:text-2xl text-xl text-primary-navyblue">
      {title}
    </h3>
    <p className="text-[15px] text-primary-gray font-medium">{description}</p>
  </div>
);

const ValuesSection: React.FC<ValuesSectionProps> = ({
  description,
  values = [], // Empty array trick
  promiseTitle,
  promiseDesc,
  promiseImage,
}) => {
  // const cards = [
  //   {
  //     icon: icon1,
  //     title: "Integrity & Transparency",
  //     description:
  //       "We uphold the highest ethical standards in overseas recruitment and workforce solutions. Transparency in our processes ensures trust—with clients, candidates, and partners alike.",
  //   },
  //   {
  //     icon: icon2,
  //     title: "Excellence & Expertise",
  //     description:
  //       "Our decades of experience and in-depth knowledge of international workforce needs, immigration requirements, and documentation processes guide our solutions with precision, professionalism, and care.",
  //   },
  //   {
  //     icon: icon3,
  //     title: "Personalized Commitment",
  //     description:
  //       "We understand that every individual's journey is unique. With personal understanding, objective needs, effective solutions, and transparent processes, our values extend to guidance that goes beyond paperwork.",
  //   },
  //   {
  //     icon: icon4,
  //     title: "Empowering Dreams",
  //     description:
  //       "We don't just provide services—we empower lives. From recruitment and visas to education, licensing, and travel, our philosophy centers on turning aspirations into tangible opportunities.",
  //   },
  //   {
  //     icon: icon5,
  //     title: "Continuous Growth",
  //     description:
  //       "The global workforce landscape evolves constantly. So do we. Our leadership in new regulations, technology, and trends ensures our clients and candidates are always prepared for success.",
  //   },
  // ];
const firstRow = values.slice(0, 3);
  const secondRow = values.slice(3);
  return (
    <section className="">
      <div className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 ">
        <div className="flex justify-center">
          <p className="max-w-xl text-center text-[16px] text-primary-navybluemb-8">
           {description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 gap-10 mt-10">
          {firstRow.map((card, idx) => (
            <ValueCard key={idx} icon={card.icon_url} title={card.title} description={card.description} />
          ))}
        </div>
        {secondRow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 gap-10 mt-10">
            {secondRow.map((card, idx) => (
              <ValueCard key={idx} icon={card.icon_url} title={card.title} description={card.description} />
            ))}
          </div>
        )}
       
      </div>
      <div className="bg-primary-lightblue ">
        <div className=" grid md:grid-cols-2 font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 items-center">

          <div className=" max-w-lg">
            <h2 className="lg:text-[42px] text-3xl font-extrabold text-primary-navyblue mb-5">
              {promiseTitle || "Our Promise"}
            </h2>
            <p className="text-primary-gray text-[16px] font-medium mx-auto leading-[28px]">
             {promiseDesc || "Your success is our success. We stay committed to your dreams."}
            </p>
          </div>

          <div className=" pt-8">
           <img
              src={promiseImage}
              alt="Our Promise"
              className="w-full object-contain md:h-[340px] h-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
