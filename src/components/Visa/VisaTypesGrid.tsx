import React from "react";
// Replace below imports with your actual image imports/URLs
import visatype1 from "../../assets/images/visatype1.webp";
import visatype2 from "../../assets/images/visatype2.webp";
import visatype3 from "../../assets/images/visatype3.webp";
import visatype4 from "../../assets/images/visatype4.webp";

interface VisaType {
  title: string;
  img: string;
  desc: string;
  applyText: string;
  applyLink?: string;
}

const visaTypes: VisaType[] = [
  {
    title: "Business Visa",
    img: visatype1,
    desc: "Travel for meetings, conferences, trade fairs, or professional business opportunities overseas.",
    applyText: "APPLY BUSINESS VISA",
  },
  {
    title: "Tourist Visa",
    img: visatype2,
    desc: "Explore new destinations for leisure, holidays, sightseeing, or visiting family abroad.",
    applyText: "APPLY TOURIST VISA",
  },
  {
    title: "Student Visa",
    img: visatype3,
    desc: "Study full-time at recognized foreign institutions and pursue your academic dreams abroad.",
    applyText: "APPLY STUDENT VISA",
  },
  {
    title: "Work / Employment Visa",
    img: visatype4,
    desc: "Work legally in a foreign country with authorized employment and sponsorship approval.",
    applyText: "APPLY WORK VISA",
  },
];

const VisaTypesGrid: React.FC = () => (
  <section className=" bg-[#EAF0F6] font-manrope">
    <div className=" max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-24 md:pt-16 py-10">
      {" "}
      <h2 className="text-center text-[#C40808] font-extrabold text-3xl mb-10">
        Types of Visa
      </h2>
      <div className=" grid md:grid-cols-2 gap-x-14 gap-y-10">
        {visaTypes.map((type, idx) => (
          <div key={idx} className="flex lg:flex-row flex-col items-center">
            <img
              src={type.img}
              alt={type.title}
              className="lg:w-[550px] w-full lg:h-[280px] md:h-[200px] object-cover "
              style={{ minWidth: 120, minHeight: 80 }}
            />
            <div className="bg-white rounded-rt rounded-tb px-4 py-6">
              <div className="font-extrabold text-[#0E313A] text-xl mb-3">{type.title}</div>
              <div className="text-md font-medium text-[#0E313A] mb-8">{type.desc}</div>
              <a
                href={type.applyLink || "#"}
                className="text-md text-[14px] font-extrabold text-[#C40808] uppercase hover:underline"
              >
                {type.applyText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisaTypesGrid;
