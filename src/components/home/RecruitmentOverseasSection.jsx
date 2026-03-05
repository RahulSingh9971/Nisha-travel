import "swiper/css";
import { MdArrowOutward } from "react-icons/md";
import tag1 from "../.././assets/images/icon1.svg";
import tag2 from "../.././assets/images/icon2.svg";
import tag3 from "../.././assets/images/icon3.svg";
import "../../index"; 

const RecruitmentOverseasSection = () => {
  const countries = [
    {
      jobs: [
        {
          icon: tag1,
          title: "Emigrant Services",
          subtitle: "Allows foreign nationals to work in a specific country for a set period based on employment opportunities.",
        },
        {
          icon: tag2,
          title: "Foreign Employer Services (FE)",
          subtitle: "A short-term visa allowing individuals to travel for leisure or tourism purposes, typically with restrictions on work.",
        },
        {
          icon: tag3,
          title: "Jobs Abroad",
          subtitle: "For individuals traveling to a country for business meetings, conferences, or related business activities with limited work rights.",
        },
      ]
    }
  ];

  return (
    <section className="relative font-manrope max-w-7xl mx-auto lg:px-6 md:px-12 px-4 md:py-16 py-10">
      <div className="flex md:flex-row flex-col gap-8 lg:justify-center mb-12">
        <h2 className="max-w-xl text-center xl:text-5xl md:text-4xl text-3xl font-extrabold my-4">
          <span className="text-primary-navyblue">Recruitment & </span>
          <span className="text-primary-red">Overseas </span>
          <span className="text-primary-navyblue">Employment </span>
        </h2>
      </div>

      <div className="hover:text-primary-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-6 gap-10">
    {countries.flatMap(country => country.jobs).map((job, index) => (
  <div 
    key={index} 
    className="group relative h-[333px] rounded-[30px] shadow-md border border-[#0E313A4D] overflow-hidden bg-white cursor-pointer"
    style={{ isolation: 'isolate' }} // Yeh line text visibility ke liye zaroori hai
  >
    
    {/* 1. THE EXPANDING CIRCLE (Origin: Arrow Position) */}
    <div className="absolute xl:bottom-12 lg:bottom-6 md:bottom-10 bottom-10 xl:left-10 lg:left-6 left-8 z-0 pointer-events-none">
      <span className="block w-8 h-8 rounded-full bg-primary-navyblue transition-transform duration-700 ease-in-out group-hover:scale-[50] group-hover:bg-primary-red"></span>
    </div>

    {/* 2. CONTENT LAYER (z-10 and relative) */}
    <div className="relative z-10 flex flex-col justify-between h-full xl:py-12 lg:p-6 py-10 xl:px-10 px-8 pointer-events-none">
      
      <div className="flex items-center gap-4">
        {/* Icon transition */}
        <img 
          src={job.icon} 
          alt="icon" 
          className="w-12 h-12 transition-all duration-500 group-hover:invert group-hover:brightness-200" 
        />
        <h3 className="text-[22px] font-extrabold text-primary-navyblue transition-colors duration-500 group-hover:text-primary-white">
          {job.title}
        </h3>
      </div>

      <p className="text-[16px] font-medium text-primary-gray transition-colors duration-500 group-hover:text-gray-200">
        {job.subtitle}
      </p>

      <div className="flex items-center gap-2 pt-3">
        {/* Visible Arrow Icon (Transparent background because expansion is behind it) */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover:bg-primary-navyblue">
          <MdArrowOutward className="text-primary-white text-xl transition-transform duration-500 group-hover:rotate-45" />
        </div>
        
        <span className="text-[15px] text-primary-navyblue font-extrabold transition-colors duration-500 group-hover:text-primary-white ml-2">
          Know More
        </span>
      </div>
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default RecruitmentOverseasSection;
