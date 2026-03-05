import React, { useState } from "react";
import heroImg from "../../assets/images/jobsimg.png";
import keyicon from "../../assets/images/key-numbers.svg";
import bagicon from "../../assets/images/bag-icon.webp";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
const IoIosArrowDownIcon = IoIosArrowDown as React.ElementType;
const GrLocationIcon = HiOutlineLocationMarker as React.ElementType;
const IoSearchIcon = IoSearch as React.ElementType;

const industriesList: string[] = [
  "IT",
  "Finance",
  "Healthcare",
  "Automobile",
  "Retail",
  "Education",
  "Construction",
];

const locationsList: string[] = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Pune",
];

const JobHeroSection: React.FC = () => {

  // 1. Separate State for Industry
  const [isIndOpen, setIsIndOpen] = useState(false);
  const [selectedInd, setSelectedInd] = useState("");

  // 2. Separate State for Location
  const [isLocOpen, setIsLocOpen] = useState(false);
  const [selectedLoc, setSelectedLoc] = useState("");

  return (
    <section className="font-manrope max-w-7xl mx-auto px-4 lg:px-6 md:px-12 px-4 xl:pt-20 lg:pt-16 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Illustration */}
      <div className="flex justify-center lg:justify-start order-2 lg:order-1">
        <img src={heroImg} alt="Job Search" className="w-[370px] max-w-full" />
      </div>
      {/* Right: Headline and Content */}
      <div className="order-1 lg:order-2">
        <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-6 leading-tight">
          <span className="text-primary-red">The Easiest Way</span>
          <span className="text-primary-navyblue"> to get your new job</span>
        </h1>
        <p className="mb-7 text-primary-gray text-base font-medium leading-7">
          Each month, more than 3 million job seekers visit our website in their
          search for work, making over 140,000 applications every single day.
        </p>

        
        <form className="hidden lg:flex items-center gap-2 mb-6 p-2 shadow-[0px_18px_40px_0px_#190F091A] rounded-[8px] bg-white w-full">
          <div className="relative flex-1 border-r-2 border-[#B4C0E0]">
            <div
              className="flex items-center px-3 cursor-pointer h-4 group"
              onClick={() => setIsIndOpen(!isIndOpen)}
            >
              <img src={bagicon} alt="bag" className="h-4 w-4 object-contain" />
              <div className="pl-2 text-[13px] text-[#444444] truncate select-none flex-1">
                {selectedInd || "Industry"}
              </div>
              <IoIosArrowDownIcon className={`transition-transform duration-300 text-[#A0ABB8] ${isIndOpen ? "rotate-180" : ""}`} />
            </div>

            {isIndOpen && (
              <>
                <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsIndOpen(false)} />
                <div className="absolute left-0 top-full mt-2 w-full min-w-[180px] bg-white border border-gray-100 shadow-xl rounded-md z-50 overflow-hidden">
                  <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                    {industriesList.map((item) => (
                      <div
                        key={item}
                        className={`px-4 py-2.5 text-[13px] cursor-pointer hover:bg-gray-50 ${selectedInd === item ? "bg-[#FDECEC] text-primary-red font-bold" : "text-[#444444]"}`}
                        onClick={() => { setSelectedInd(item); setIsIndOpen(false); }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="relative flex-1 border-r-2 border-[#B4C0E0]">
            <div
              className="flex items-center px-3 cursor-pointer h-4  group"
              onClick={() => setIsLocOpen(!isLocOpen)}
            >
              <GrLocationIcon className="h-4 w-4 text-gray-400" />
              <div className="pl-2 text-[13px] text-[#444444] truncate select-none flex-1">
                {selectedLoc || "Location"}
              </div>
              <IoIosArrowDownIcon className={`transition-transform duration-300 text-[#A0ABB8] ${isLocOpen ? "rotate-180" : ""}`} />
            </div>

            {isLocOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLocOpen(false)} />
                <div className="absolute left-0 top-full mt-2 w-full min-w-[180px] bg-white border shadow-xl rounded-md z-50 overflow-hidden">
                  {locationsList.map((item) => (
                    <div
                      key={item}
                      className={`px-4 py-2.5 text-[13px] cursor-pointer hover:bg-gray-50 ${selectedLoc === item ? "bg-[#FDECEC] text-primary-red font-bold" : "text-[#444444]"}`}
                      onClick={() => { setSelectedLoc(item); setIsLocOpen(false); }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex items-center flex-1 px-3 h-4 ">
            <img src={keyicon} alt="key" className="h-4 w-4 object-contain" />
            <input
              type="text"
              placeholder="Keyword"
              className=" pl-2 text-[13px] text-[#444444] placeholder:text-[#4F5E64] outline-none bg-transparent"
            />
          </div>
          <button type="button" className="flex gap-2 items-center bg-primary-red text-[14px] text-primary-white font-semibold px-6 py-2.5 rounded-md shadow-md hover:bg-[#a30606] transition-all whitespace-nowrap ml-2">
            <IoSearchIcon className="text-primary-white text-lg" /> Search
          </button>
        </form>
        <div className="text-[14px] text-[#4F5E64]">
          <span className="font-extrabold">Popular Searches:</span>
          <span className="ml-2 underline">Content Writer</span>
          <span className="ml-2 underline">Finance</span>
          <span className="ml-2 underline">Human Resource</span>
          <span className="ml-2 underline">Management</span>
        </div>
      </div>
    </section>
  );
};

export default JobHeroSection;
