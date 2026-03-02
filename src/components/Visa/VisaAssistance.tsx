import React from "react";
import familyImg from "../../assets/images/visasection.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
const GrLocationIcon = HiOutlineLocationMarker as React.ElementType;
const IoIosArrowDownIcon = IoIosArrowDown as React.ElementType;
const locationsList: string[] = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Pune",
];

const VisaAssistance = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-24 md:pt-16 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-14 items-center">
        <div className="">
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
            <span className="text-[#C40808]">Visa Assistance</span>
            <span className="text-[#0E313A] pl-2">Made Simple</span>
          </h2>
          <p className="lg:pt-0 md:pt-2 text-[#666666] text-[16px] leading-7 font-medium">
            Our visa experts guide you through every step — from document
            preparation to application submission — ensuring a smooth and
            successful process for any destination.
          </p>
          <div className=" pt-8 font-bold text-[18px]">
            <button className="text-[16px] uppercase text-white bg-[#C40808] px-8 py-2 ">
              Apply VISA
            </button>
          </div>
        </div>
        <img
          src={familyImg}
          alt="Happy Family"
          className=" w-full mx-auto lg:order-1 order-2"
        />
      </div>

      {/* User Journey Card (Floating/Highlighted Box) */}
      <div className="w-full flex justify-center pt-20">
        <div className="md:bg-[#EAF0F6] rounded-xl flex flex-col items-center w-fit lg:px-20 md:px-10 md:py-8 ">
          <div className="flex md:flex-row flex-col gap-4 text-lg font-bold text-[#002661] ">
            <div className="flex gap-4">
              <p>I'm applying for</p>
              <div className="flex items-center bg-white w-fit rounded py-[2px] px-2 shadow-[0px_18px_40px_0px_#190F091A]">
                <select
                  className="pl-1 pr-3 text-[13px] font-medium text-[13px] opacity-[80%] text-[#444444] outline-none appearance-none "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Visa Type
                  </option>
                  {locationsList.map((item, idx) => (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
                <IoIosArrowDownIcon className="cursor-pointer text-gray-400 text-[14px]" />
              </div>
            </div>
            <div className="flex gap-4">
              <p> and I'm going to</p>
              <div className="flex items-center bg-white w-fit rounded py-[2px] px-2 shadow-[0px_18px_40px_0px_#190F091A]">
                <GrLocationIcon className="text-gray-400 text-[15px]" />
                <select
                  className="pl-1 pr-3 text-[13px] font-medium text-[13px] opacity-[80%] text-[#444444] outline-none appearance-none "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {locationsList.map((item, idx) => (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
                <IoIosArrowDownIcon className="cursor-pointer text-gray-400 text-[14px]" />
              </div>
            </div>
          </div>
          <button className="mt-5 md:px-10 px-5 md:py-2 py-1 border-2 border-[#002661] text-[#002661] font-bold hover:bg-[#19303D] hover:text-white transition">
            TAKE TO THE WEBSITE
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisaAssistance;
