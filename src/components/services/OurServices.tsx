import React from "react";

// Sample image imports (replace with real imports or public URLs)
import services1 from "../../assets/images/services1.png";
import services2 from "../../assets/images/services2.png";
import services3 from "../../assets/images/services3.png";
import services4 from "../../assets/images/services4.png";
// import service5 from "../../assets/images/service5.png";
// import service6 from "../../assets/images/service6.png";

const services = [
  {
    title: "Recruitment & Overseas Employment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud.",
    img: services1,
  },
  {
    title: "Visa & Emigration Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud.",
    img: services2,
  },
  {
    title: "Attestation & Document Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud.",
    img: services3,
  },
  {
    title: "Education & Study Abroad",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud.",
    img: services4,
  },
  {
    title: "Travel & Holidays",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud.",
    img: services3,
  },
  {
    title: "Specialised Services (Exams & Related Services)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud.",
    img: services1,
  },
];

const OurServices: React.FC = () => (
  <div className="bg-[#EAF0F6] font-poppins lg:px-6 md:px-12 px-4 py-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:gap-12 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className=" bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full xl:h-[240px] md:h-[160px] h-[140px] object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <div className="font-bold text-[#002661] text-lg mb-2">
              {service.title}
            </div>
            <div className="text-[#002661] opacity-[60%] text-sm xl:mb-8 mb-6">
              {service.desc}
            </div>
            <div className="mt-auto">
              <button className="font-manrope bg-[#C40808] text-white font-bold text-sm px-5 xl:py-3 py-2 rounded-lg">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OurServices;
