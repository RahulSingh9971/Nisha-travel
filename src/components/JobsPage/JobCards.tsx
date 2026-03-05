import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import expicon from "../../assets/images/expicon.svg";
import indicon from "../../assets/images/indicon.svg";
import salicon from "../../assets/images/salicon.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { API_CONFIG } from "../../config/apiConfig"
const FiArrowUpRightIcon = FiArrowUpRight as React.ElementType;
const IoIosArrowDownIcon = IoIosArrowDown as React.ElementType;
const GrLocationIcon = HiOutlineLocationMarker as React.ElementType;

// ── Types ──────────────────────────────────────────────
interface Job {
  id: number;
  title: string;
  country: string;
  experience?: string;
  industry?: string;
  salary_range?: string;
  slug?: string;
}

interface JobsSection {
  title: string;
  highlight: string;
  per_page: number;
  show_filter: boolean;
  cta: { text: string; link: string };
}

// ── Main Component ─────────────────────────────────────
const JobCards: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsSection, setJobsSection] = useState<JobsSection | null>(null);
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ── Fetch job-page config (title, cta, per_page) ──
  useEffect(() => {
    const fetchPageConfig = async () => {
      try {
        const res = await fetch(`${API_CONFIG.BASE_URL}/job-page`,
          {
            headers: API_CONFIG.HEADERS,
          });
        const result = await res.json();
        if (result.success && result.data?.jobs_section) {
          setJobsSection(result.data.jobs_section);
        }
      } catch (err) {
        console.error("job-page config fetch error:", err);
      }
    };
    fetchPageConfig();
  }, []);

  // ── Fetch actual jobs list ──
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCountry) params.append("country", selectedCountry);
        params.append("per_page", String(jobsSection?.per_page ?? 6));

        const res = await fetch(
          `${API_CONFIG.BASE_URL}/jobs?${params.toString()}`,
          {
            headers: API_CONFIG.HEADERS,
          });
        const result = await res.json();
        if (result.success) {
          const jobData: Job[] = (result.data ?? []).map((j: any) => ({
            id: j.id,
            title: j.title ?? j.position ?? "Job Opening",
            country: j.country ?? j.location ?? "",
            experience: j.experience ?? j.experience_required ?? "",
            industry: j.industry ?? j.category ?? "",
            salary_range: j.salary_range ?? j.salary ?? "",
            slug: j.slug ?? String(j.id),
          }));
          setJobs(jobData);

          // Unique countries for dropdown
          const uniqueCountries: string[] = Array.from(
            new Set(jobData.map((j) => j.country).filter(Boolean))
          );
          if (uniqueCountries.length > 0) setCountries(uniqueCountries);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("jobs fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [selectedCountry, jobsSection?.per_page]);

  // ── Filtered list ──
  const displayedJobs = selectedCountry
    ? jobs.filter(
      (j) => j.country.toLowerCase() === selectedCountry.toLowerCase()
    )
    : jobs;

  const ctaLink = jobsSection?.cta?.link ?? "/jobs";
  const ctaText = jobsSection?.cta?.text ?? "CHECK ALL OPENINGS";
  const sectionTitle = jobsSection?.title ?? "Jobs";
  const sectionHighlight = jobsSection?.highlight ?? "Abroad";

  return (
    <section className="font-manrope max-w-7xl mx-auto px-4 lg:px-8 py-10">
      {/* ── Header Row ── */}
      <div className="flex md:flex-row flex-col md:items-center gap-2 justify-between mb-6 lg:px-6 md:px-12 px-4">
        <h2 className="text-4xl font-extrabold">
          <span className="text-primary-red">{sectionTitle}</span> {sectionHighlight}
        </h2>

        {/* Country Filter */}
        {(jobsSection?.show_filter ?? true) && (
          <div className="flex items-center h-12 w-fit rounded-[8px] shadow-[0px_18px_40px_0px_#190F091A] bg-white p-2">
            <GrLocationIcon className="text-gray-400 text-[19px]" />
            <select
              className="pl-1 pr-2 w-fit text-[14px] text-[#444444] outline-none appearance-none"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {countries.map((c, idx) => (
                <option value={c} key={idx}>
                  {c}
                </option>
              ))}
            </select>
            <IoIosArrowDownIcon className="cursor-pointer text-gray-400" />
          </div>
        )}
      </div>

      {/* ── Loading State ── */}
      {loading && (
        <div className="flex justify-center items-center py-16">
          <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* ── Error State ── */}
      {!loading && error && (
        <div className="text-center py-16 text-gray-500">
          Jobs load nahi ho sake. Baad mein try karein.
        </div>
      )}

      {/* ── Job Cards Grid ── */}
      {!loading && !error && (
        <>
          {displayedJobs.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              Is country mein koi job nahi mili.
            </div>
          ) : (
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 lg:gap-12 gap-6">
              {displayedJobs.map((job, idx) => (
                <div
                  key={job.id ?? idx}
                  className="group relative border-[#00266133] border-2 rounded-[30px] xl:p-6 lg:p-8 px-3 py-6 shadow overflow-hidden transition-all duration-1000 bg-white"
                  style={{ isolation: "isolate" }}
                >
                  {/* Hover expanding circle */}
                  <div className="absolute bottom-6 left-[130px] z-0 pointer-events-none">
                    <span className="block w-8 h-8 rounded-full bg-primary-red opacity-0 scale-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-[65]" />
                  </div>

                  <div className="relative z-10">
                    {/* Country Badge */}
                    {job.country && (
                      <div className="text-xs font-bold bg-[#002661] text-primary-white px-2 py-1 rounded-full mb-2 w-fit">
                        {job.country.toUpperCase()}
                      </div>
                    )}

                    {/* Job Title */}
                    <div className="font-extrabold text-primary-navyblue text-[20px] mb-5 transition-colors duration-500 group-hover:text-primary-white">
                      {job.title}
                    </div>

                    {/* Info Row */}
                    <div className="flex items-center justify-between">
                      {/* Experience */}
                      {job.experience && (
                        <div className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                          <div className="lg:p-2 p-1 bg-primary-lightblue rounded-full transition-colors duration-500 group-hover:bg-white">
                            <img src={expicon} alt="experience" className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-primary-navyblue text-[12px] font-semibold transition-colors duration-500 group-hover:text-primary-white/80">
                              Experience
                            </span>
                            <span className="text-primary-navyblue text-[14px] font-extrabold transition-colors duration-500 group-hover:text-primary-white">
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Industry */}
                      {job.industry && (
                        <div className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                          <div className="lg:p-2 p-1 bg-primary-lightblue rounded-full transition-colors duration-500 group-hover:bg-white">
                            <img src={indicon} alt="industry" className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-primary-navyblue text-[12px] font-semibold transition-colors duration-500 group-hover:text-primary-white/80">
                              Industry
                            </span>
                            <span className="text-primary-navyblue text-[14px] font-extrabold transition-colors duration-500 group-hover:text-primary-white">
                              {job.industry}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Salary Range */}
                      {job.salary_range && (
                        <div className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                          <div className="lg:p-2 p-1 bg-primary-lightblue rounded-full transition-colors duration-500 group-hover:bg-white">
                            <img src={salicon} alt="salary" className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-primary-navyblue text-[12px] font-semibold transition-colors duration-500 group-hover:text-primary-white/80">
                              Salary Range
                            </span>
                            <span className="text-primary-navyblue text-[14px] font-extrabold transition-colors duration-500 group-hover:text-primary-white">
                              {job.salary_range}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Know More Button */}
                  <Link to={`/JobPosting/${job.slug ?? job.id}`} className="flex gap-2 mt-6">
                    <button className="relative z-20 transition-colors duration-500 group-hover:text-primary-white text-primary-navyblue text-[24] uppercase font-bold">
                      Know More
                    </button>
                    <button className="flex items-center justify-center bg-primary-red text-primary-white p-1 rounded-full transition-transform duration-500 group-hover:rotate-45 group-hover:bg-primary-navyblue">
                      <FiArrowUpRightIcon size={23} />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* ── CTA Button ── */}
          <div className="flex justify-center mt-8">
            <Link to={ctaLink}>
              <button className="bg-primary-red text-primary-white font-bold px-10 py-3">
                {ctaText}
              </button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default JobCards;
// hello
