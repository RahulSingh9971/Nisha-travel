import React from "react";
import familyImg from "../../assets/images/globel.png";

const GlobalOpportunities = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 lg:py-0 md:pt-10 py-5 grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-14 items-center">
      <div className="">
        <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
          <span className="text-[#C40808]">Connecting Skilled Talent</span>
          <span className="text-[#0E313A] pl-2">with Global Opportunities</span>
        </h2>
        <p className="lg:pt-0 md:pt-2 text-[#666666] text-[16px] leading-7 font-medium">
          Since 1992, Nisa Travel Agency has been a trusted name in overseas
          recruitment, empowering individuals and supporting foreign employers
          across the GCC, Europe, Africa, and Asia.
        </p>
        <div className="flex gap-5 items-center pt-8 font-bold text-[18px]">
          <button className="uppercase text-white bg-[#C40808] px-6 py-2 ">
            Apply VISA
          </button>
          <p className="text-[#0E313A]">Book Appointment</p>
        </div>
      </div>
      <img
        src={familyImg}
        alt="Happy Family"
        className=" lg:w-full md:w-[500px] w-full mx-auto"
      />
    </section>
  );
};

export default GlobalOpportunities;
