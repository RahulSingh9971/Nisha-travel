import React from "react";
import { Link } from "react-router-dom";
import expicon from "../../assets/images/expicon.svg";
import indicon from "../../assets/images/indicon.svg";
import salicon from "../../assets/images/salicon.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
const FiArrowUpRightIcon = FiArrowUpRight as React.ElementType;
const IoIosArrowDownIcon = IoIosArrowDown as React.ElementType;
const GrLocationIcon = HiOutlineLocationMarker as React.ElementType;

const locationsList: string[] = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Pune",
];
interface JobInfo {
  label: string;
  value: string;
  icon: string;
}

interface JobCardProps {
  country: string;
  title: string;
  infos: JobInfo[];
}

const jobs: JobCardProps[] = [
  {
    country: "Saudi Arabia",
    title: "Team Leader",
    infos: [
      { label: "Experience", value: "2-3 Years", icon: expicon },
      { label: "Industry", value: "Airline", icon: indicon },
      {
        label: "Salary Range",
        value: "AED 3k-12k",
        icon: salicon,
      },
    ],
  },
  {
    country: "USA",
    title: "General Manager",
    infos: [
      { label: "Experience", value: "2-3 Years", icon: expicon },
      { label: "Industry", value: "Airline", icon: indicon },
      {
        label: "Salary Range",
        value: "AED 3k-12k",
        icon: salicon,
      },
    ],
  },
  {
    country: "Saudi Arabia",
    title: "Assistant Manager",
    infos: [
      { label: "Experience", value: "2-3 Years", icon: expicon },
      { label: "Industry", value: "Airline", icon: indicon },
      {
        label: "Salary Range",
        value: "AED 3k-12k",
        icon: salicon,
      },
    ],
  },
  {
    country: "Saudi Arabia",
    title: "Operator",
    infos: [
      { label: "Experience", value: "2-3 Years", icon: expicon },
      { label: "Industry", value: "Airline", icon: indicon },
      {
        label: "Salary Range",
        value: "CAD 3k-12k",
        icon: salicon,
      },
    ],
  },
  {
    country: "Canada",
    title: "Supervisor",
    infos: [
      { label: "Experience", value: "2-3 Years", icon: expicon },
      { label: "Industry", value: "Hotel", icon: indicon },
      {
        label: "Salary Range",
        value: "CAD 3k-12k",
        icon: salicon,
      },
    ],
  },
  {
    country: "Canada",
    title: "Project Manager",
    infos: [
      { label: "Experience", value: "2-3 Years", icon: expicon },
      { label: "Industry", value: "Resort", icon: indicon },
      {
        label: "Salary Range",
        value: "CAD 3k-12k",
        icon: salicon,
      },
    ],
  },
];

const JobCards: React.FC = () => (
  <section className="font-manrope max-w-7xl mx-auto px-4 lg:px-8 py-10">
    <div className="flex md:flex-row flex-col md:items-center gap-2 justify-between mb-6 lg:px-6 md:px-12 px-4">
      <h2 className="text-4xl font-extrabold ">
        <span className="text-red-600">Jobs</span> Abroad
      </h2>
      <div className="flex  items-center h-12 w-fit rounded-[8px] shadow-[0px_18px_40px_0px_#190F091A] bg-white p-2">
        <GrLocationIcon className="text-gray-400 text-[19px]" />
        <select
          className="pl-1 pr-2 w-fit  text-[14px] text-[#444444] outline-none appearance-none"
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
        <IoIosArrowDownIcon className="cursor-pointer text-gray-400" />
      </div>
    </div>

    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 lg:gap-12 gap-6">
      {jobs.map((job, idx) => (
        <div
          key={idx}
          // 1. 'group' aur 'overflow-hidden' zaroori hai expansion rokne ke liye
          className="group relative border-[#00266133] border-2 rounded-[30px] xl:p-6 lg:p-8 px-3 py-6 shadow overflow-hidden transition-all duration-1000 bg-white"
          style={{ isolation: 'isolate' }}
        >

          {/* 2. THE EXPANDING CIRCLE (Yeh button ki position se shuru hoga) */}
          <div className="absolute bottom-6 left-[130px] z-0 pointer-events-none">
            <span className="block w-8 h-8 rounded-full bg-[#C40808] 
      opacity-0 scale-0 
      transition-all duration-700 ease-in-out 
      group-hover:opacity-100 group-hover:scale-[65]">
            </span>
          </div>
          <div className="relative z-10 ">
            <div className="text-xs font-bold bg-[#002661] text-white px-2 py-1 rounded-full mb-2 w-fit">
              {job.country.toUpperCase()}
            </div>
            <div className="font-extrabold text-[#0E313A] text-[20px] mb-5 transition-colors duration-500 group-hover:text-white">
              {job.title}
            </div>

            <div className="flex items-center justify-between">
              {job.infos.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="text-sm text-gray-600 flex items-center gap-2 mb-2"
                >
                  <div className="lg:p-2 p-1 bg-[#EAF0F6] rounded-full transition-colors duration-500 group-hover:bg-white">
                    <img src={item.icon} alt="icon" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0E313A] text-[12px] font-semibold transition-colors duration-500 group-hover:text-white/80">
                      {item.label}
                    </span>
                    <span className="text-[#0E313A] text-[14px] font-extrabold transition-colors duration-500 group-hover:text-white">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/JobPosting" className="flex gap-2 mt-6">
            <button className="relative z-20 transition-colors duration-500 group-hover:text-white text-[#0E313A] text-[24] uppercase font-bold">
              Know More
            </button>

            <button  className="flex items-center justify-center bg-[#C40808] text-white p-1 rounded-full transition-transform duration-500 group-hover:rotate-45 group-hover:bg-[#0E313A]">
              <FiArrowUpRightIcon size={23} />
            </button>
          </Link>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <button className="bg-[#C40808] text-white font-bold px-10 py-3 ">
        CHECK ALL OPENINGS
      </button>
    </div>
  </section>
);

export default JobCards;
