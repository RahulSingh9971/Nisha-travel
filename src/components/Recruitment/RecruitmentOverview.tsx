import React from "react";
import familyImg from "../../assets/images/recruitment.png";

const RecruitmentOverview = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:pt-16 py-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-10 items-center">
      <img src={familyImg} alt="Happy Family" className="md:order-0 order-1 w-full mx-auto" />
      <div className="md:order-1 order-0">
        <h2 className="xl:text-[38px] md:text-4xl text-3xl font-extrabold mb-2 leading-wide">
          <span className="text-[#C40808]">Recruitment</span>
          <span className="text-[#0E313A] block">Overview</span>
        </h2>
        <p className=" lg:pt-0 md:pt-2 text-[#666666] text-[16px] leading-7 font-medium">
          Our process is transparent, efficient, and designed to ensure both
          employers and jobseekers experience a smooth and secure recruitment
          journey.
        </p>
      </div>
    </section>
  );
};

export default RecruitmentOverview;
