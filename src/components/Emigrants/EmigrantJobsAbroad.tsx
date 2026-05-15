import React, { useState } from "react";
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

interface Job {
  id: number;
  title: string;
  country: string;
  experience: string;
  industry: string;
  salary_range: string;
  slug: string;
}

const mockJobs: Job[] = [
  {
    id: 1,
    title: "Team Leader",
    country: "SAUDI ARABIA",
    experience: "2-3 Years",
    industry: "Airline",
    salary_range: "AED 3k-12k",
    slug: "team-leader",
  },
  {
    id: 2,
    title: "General Manager",
    country: "USA",
    experience: "2-3 Years",
    industry: "Airline",
    salary_range: "AED 3k-12k",
    slug: "general-manager",
  },
  {
    id: 3,
    title: "Assistant Manager",
    country: "SAUDI ARABIA",
    experience: "2-3 Years",
    industry: "Airline",
    salary_range: "AED 3k-12k",
    slug: "assistant-manager",
  },
  {
    id: 4,
    title: "Operator",
    country: "SAUDI ARABIA",
    experience: "2-3 Years",
    industry: "Airline",
    salary_range: "AED 3k-12k",
    slug: "operator-1",
  },
  {
    id: 5,
    title: "Supervisor",
    country: "CANADA",
    experience: "2-3 Years",
    industry: "Hotel",
    salary_range: "CAD 3k-12k",
    slug: "supervisor-1",
  },
  {
    id: 6,
    title: "Project Manager",
    country: "CANADA",
    experience: "2-3 Years",
    industry: "Resort",
    salary_range: "CAD 3k-12k",
    slug: "project-manager-1",
  },
  {
    id: 7,
    title: "Operator",
    country: "SAUDI ARABIA",
    experience: "2-3 Years",
    industry: "Airline",
    salary_range: "AED 3k-12k",
    slug: "operator-2",
  },
  {
    id: 8,
    title: "Supervisor",
    country: "CANADA",
    experience: "2-3 Years",
    industry: "Hotel",
    salary_range: "CAD 3k-12k",
    slug: "supervisor-2",
  },
  {
    id: 9,
    title: "Project Manager",
    country: "CANADA",
    experience: "2-3 Years",
    industry: "Resort",
    salary_range: "CAD 3k-12k",
    slug: "project-manager-2",
  },
];

const EmigrantJobsAbroad: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Unique list of countries for dropdown
  const countries = Array.from(new Set(mockJobs.map((job) => job.country)));

  // Filter logic
  const displayedJobs = selectedCountry
    ? mockJobs.filter((job) => job.country === selectedCountry)
    : mockJobs;

  return (
    <section className="font-manrope max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-24 bg-white">
      {/* ── Header Row ── */}
      <div className="flex flex-row items-center justify-between mb-10 lg:px-4 px-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          <span className="text-primary-red">Jobs</span>{" "}
          <span className="text-[#0a1e3f]">Abroad</span>
        </h2>

        {/* Country Filter */}
        <div className="flex items-center h-12 w-fit rounded-[10px] shadow-[0px_12px_30px_0px_rgba(25,15,9,0.08)] bg-white border border-gray-100 px-4 cursor-pointer transition-all hover:shadow-md">
          <GrLocationIcon className="text-gray-400 text-[19px]" />
          <select
            className="pl-2 pr-2 w-fit text-[14px] font-medium text-[#555555] outline-none appearance-none cursor-pointer bg-transparent"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((c, idx) => (
              <option value={c} key={idx}>
                {c.charAt(0) + c.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
          <IoIosArrowDownIcon className="text-gray-400 pointer-events-none ml-1" />
        </div>
      </div>

      {/* ── Job Cards Grid ── */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 mb-14">
        {displayedJobs.map((job) => (
          <div
            key={job.id}
            className="group relative border-[#00266122] border-2 rounded-[32px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 bg-white hover:shadow-xl flex flex-col"
            style={{ isolation: "isolate" }}
          >
            {/* Hover expanding circle (Exact copy from design) */}
            <div className="absolute bottom-6 left-[40px] z-0 pointer-events-none">
              <span className="block w-8 h-8 rounded-full bg-[#c1272d] opacity-0 scale-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-[65]" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Country Badge */}
              <div className="text-[10px] font-black bg-[#0a1e3f] text-white px-3 py-1 rounded-full mb-3 w-fit uppercase tracking-wider transition-colors duration-300 group-hover:bg-[#081833]">
                {job.country}
              </div>

              {/* Job Title */}
              <h3 className="font-extrabold text-[#0a1e3f] text-[22px] leading-tight mb-6 transition-colors duration-500 group-hover:text-white">
                {job.title}
              </h3>

              {/* Info Row/Grid */}
              <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-5 transition-colors duration-500 group-hover:border-white/10">
                {/* Experience */}
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#EBF2FA] rounded-full transition-all duration-500 group-hover:bg-white/15 group-hover:backdrop-blur-sm flex-shrink-0">
                    <img src={expicon} alt="experience" className="h-4 w-4 group-hover:invert group-hover:brightness-200 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#5e6d7c] text-[11px] font-medium transition-colors duration-500 group-hover:text-white/75">
                      Experience
                    </span>
                    <span className="text-[#0a1e3f] text-[13px] md:text-[14px] font-extrabold transition-colors duration-500 group-hover:text-white leading-tight">
                      {job.experience}
                    </span>
                  </div>
                </div>

                {/* Industry */}
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#EBF2FA] rounded-full transition-all duration-500 group-hover:bg-white/15 group-hover:backdrop-blur-sm flex-shrink-0">
                    <img src={indicon} alt="industry" className="h-4 w-4 group-hover:invert group-hover:brightness-200 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#5e6d7c] text-[11px] font-medium transition-colors duration-500 group-hover:text-white/75">
                      Industry
                    </span>
                    <span className="text-[#0a1e3f] text-[13px] md:text-[14px] font-extrabold transition-colors duration-500 group-hover:text-white leading-tight">
                      {job.industry}
                    </span>
                  </div>
                </div>

                {/* Salary Range */}
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#EBF2FA] rounded-full transition-all duration-500 group-hover:bg-white/15 group-hover:backdrop-blur-sm flex-shrink-0">
                    <img src={salicon} alt="salary" className="h-4 w-4 group-hover:invert group-hover:brightness-200 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#5e6d7c] text-[11px] font-medium transition-colors duration-500 group-hover:text-white/75">
                      Salary Range
                    </span>
                    <span className="text-[#0a1e3f] text-[13px] md:text-[14px] font-extrabold transition-colors duration-500 group-hover:text-white leading-tight">
                      {job.salary_range}
                    </span>
                  </div>
                </div>
              </div>

              {/* Know More Link (Exactly aligned bottom left) */}
              <Link 
                to={`/job_opening_details/${job.slug}`} 
                className="flex items-center gap-2 mt-6 pt-3 relative z-20 w-fit"
              >
                <span className="transition-colors duration-500 group-hover:text-white text-[#0a1e3f] text-[13px] uppercase font-extrabold tracking-wider">
                  Know More
                </span>
                <span className="flex items-center justify-center bg-[#c1272d] text-white p-1 rounded-full transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#c1272d] shadow-sm">
                  <FiArrowUpRightIcon size={17} />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Action Buttons ── */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-8">
        <Link to="/jobs" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#c1272d] hover:bg-red-700 text-white font-bold text-xs md:text-[13px] tracking-wider uppercase px-10 py-4 transition-all hover:shadow-lg shadow-md active:scale-95 text-center">
            BROWSE ALL JOBS
          </button>
        </Link>
        
        <Link to="/contact-us" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-transparent hover:bg-[#0a1e3f] text-[#0a1e3f] hover:text-white border-2 border-[#0a1e3f] font-bold text-xs md:text-[13px] tracking-wider uppercase px-8 py-[14px] transition-all shadow-sm hover:shadow-md active:scale-95 text-center">
            REGISTER CANDIDATE PROFILE
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmigrantJobsAbroad;
