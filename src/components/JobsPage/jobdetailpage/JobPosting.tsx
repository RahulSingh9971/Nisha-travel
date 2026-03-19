import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaUsers,
  FaFileAlt,
  FaPlane,
  FaBriefcase,
  FaMapMarkerAlt,
  FaIndustry,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBuilding,
} from 'react-icons/fa';
import { MdWork, MdApartment } from 'react-icons/md';
import { API_CONFIG } from "../../../config/apiConfig"
import JobApplyPopup from './JobApplyPopup';

// ── Icon casts ──────────────────────────────────────────────
const FaPlaneIcon = FaPlane as React.ElementType;
const FaFileAltIcon = FaFileAlt as React.ElementType;
const FaUsersIcon = FaUsers as React.ElementType;
const FaBriefcaseIcon = FaBriefcase as React.ElementType;
const FaMapMarkerIcon = FaMapMarkerAlt as React.ElementType;
const FaIndustryIcon = FaIndustry as React.ElementType;
const FaCalendarIcon = FaCalendarAlt as React.ElementType;
const FaClockIcon = FaClock as React.ElementType;
const FaMoneyIcon = FaMoneyBillWave as React.ElementType;
const FaGradIcon = FaGraduationCap as React.ElementType;
const FaBuildingIcon = FaBuilding as React.ElementType;
const MdWorkIcon = MdWork as React.ElementType;
const MdApartmentIcon = MdApartment as React.ElementType;

// ── Types ───────────────────────────────────────────────────
interface JobDetail {
  id: number;
  title: string;
  slug: string;
  company_name: string;
  company_logo_url: string;
  banner_url: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  category: { id: number; name: string };
  city: string;
  state: string;
  country: string;
  zip_code: string;
  job_type_label: string;
  industry: string;
  experience_level: string;
  education: string;
  gender: string;
  salary_range: string;
  salary_disclosed: boolean;
  accommodation: boolean;
  food: boolean;
  transport: boolean;
  flight_ticket: boolean;
  working_hours: string;
  vacancies: number;
  posted_date: string;
  expiry_date: string;
  is_urgent: boolean;
  status: string;
}

// ── InfoItem Component ──────────────────────────────────────
interface InfoItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const InfoItem = ({ label, value, icon }: InfoItemProps) => (
  <div className="flex gap-4">
    {icon && (
      <div className="mt-1 text-primary-red w-5 flex-shrink-0">
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })
          : icon}
      </div>
    )}
    <div>
      <p className="text-xs text-primary-red font-medium uppercase tracking-wider">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

// ── Benefit Badge ───────────────────────────────────────────
const BenefitBadge = ({ label, included }: { label: string; included: boolean }) =>
  included ? (
    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">
      ✓ {label}
    </span>
  ) : null;

// ── Loading Skeleton ────────────────────────────────────────
const LoadingSkeleton = () => (
  <div className="max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 py-10 animate-pulse">
    <div className="w-full h-64 bg-gray-200 rounded-2xl mb-8" />
    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
    <div className="h-8 bg-gray-200 rounded w-2/3 mb-6" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2 space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
      </div>
      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
      </div>
    </div>
  </div>
);

// ── Main Component ──────────────────────────────────────────
const JobPosting: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isApplyPopupOpen, setIsApplyPopupOpen] = useState(false);

  useEffect(() => {
    if (!slug) { setError(true); setLoading(false); return; }

    const fetchJob = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          // `https://cms.nisatravels.com/api/jobs/${slug}`,
           `${API_CONFIG.BASE_URL}/jobs/${slug}`,
          // {
          //   headers: {
          //     'x-api-key': '7802a1979d7472728fe22f93ccaf3755',
          //     'Accept': 'application/json',
          //   },
          // }
          {
        headers: API_CONFIG.HEADERS,
      }
        );
        const result = await res.json();
        if (result.success && result.data) {
          setJob(result.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Job detail fetch error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [slug]);

  // ── Loading ──
  if (loading) {
    return (
      <div className="min-h-screen font-manrope">
        <main><LoadingSkeleton /></main>
      </div>
    );
  }

  // ── Error ──
  if (error || !job) {
    return (
      <div className="min-h-screen font-manrope flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="text-6xl">😕</div>
        <h1 className="text-2xl font-bold text-gray-800">Job nahi mili</h1>
        <p className="text-gray-500">Yeh job exist nahi karti ya expire ho gayi hai.</p>
        <button
          onClick={() => navigate('/jobs')}
          className="bg-primary-red text-primary-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
        >
          ← Sari Jobs Dekho
        </button>
      </div>
    );
  }

  // ── Benefits string builder ──
  const freePerks = [
    job.accommodation && 'Accommodation',
    job.food && 'Food',
    job.transport && 'Transport',
    job.flight_ticket && 'Flight Ticket',
  ].filter(Boolean).join(', ');

  return (
    <div className="min-h-screen font-manrope">
      <main className="max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 md:pb-20 py-10">

        {/* ── Banner Image ── */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-lg bg-gray-100">
          {job.banner_url ? (
            <img src={job.banner_url} alt={job.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-[#002661] to-primary-navyblue flex items-center justify-center">
              <span className="text-primary-white text-4xl font-extrabold opacity-20">{job.company_name}</span>
            </div>
          )}
          {/* Urgent badge */}
          {job.is_urgent && (
            <span className="absolute top-4 left-4 bg-primary-red text-primary-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              🔥 Urgent Hiring
            </span>
          )}
        </div>

        {/* ── Meta Row ── */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-bold uppercase text-[#05264E]">
            ID: #{job.id}
          </span>
          <span className="bg-[#E6E7E9] px-3 py-1 rounded text-xs font-medium text-[#05264E]">
            <span className="font-bold">Job Post:</span> {job.posted_date}
          </span>
          <span className="bg-[#E6E7E9] px-3 py-1 rounded text-xs font-medium text-[#05264E]">
            <span className="font-bold">Expiry Date:</span> {job.expiry_date}
          </span>
          <span
            className={`px-3 py-1 rounded text-xs font-bold uppercase ${job.status === 'active'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-200 text-gray-500'
              }`}
          >
            {job.status}
          </span>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* ══ Left: Main Content ══ */}
          <div className="lg:col-span-2">

            {/* Company + Title */}
            <div className="flex items-center gap-4 mb-4">
              {job.company_logo_url && (
                <img
                  src={job.company_logo_url}
                  alt={job.company_name}
                  className="w-14 h-14 object-contain rounded-lg border border-gray-200 p-1"
                />
              )}
              <div>
                <p className="text-sm text-gray-500 font-medium">{job.company_name}</p>
                <h1 className="text-3xl font-bold text-slate-900">{job.title}</h1>
              </div>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-3 mb-6 text-sm text-[#05264E]">
              <span className="flex items-center gap-1">
                <FaMapMarkerIcon className="text-primary-red" />
                {[job.city, job.country].filter(Boolean).join(', ')}
              </span>
              <span className="flex items-center gap-1">
                <MdWorkIcon className="text-primary-red" />
                {job.job_type_label}
              </span>
              {job.gender && job.gender !== 'any' && (
                <span className="flex items-center gap-1">
                  <FaUsersIcon className="text-primary-red" />
                  {job.gender.charAt(0).toUpperCase() + job.gender.slice(1)}
                </span>
              )}
            </div>

            <button 
              onClick={() => setIsApplyPopupOpen(true)}
              className="bg-primary-red hover:bg-red-700 text-primary-white font-bold py-2 px-8 rounded-full transition-colors mb-12">
              APPLY HERE
            </button>

            {/* Job Description */}
            {job.description && (
              <section className="mb-10">
                <h2 className="text-xl font-bold pb-1 mb-6 border-b-2 border-primary-red inline-block">
                  Job Description
                </h2>
                <div
                  className="text-sm text-gray-700 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </section>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <section className="mb-10">
                <h2 className="text-xl font-bold pb-1 mb-6 border-b-2 border-primary-red inline-block">
                  Responsibilities
                </h2>
                <div
                  className="text-sm text-gray-700 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.responsibilities }}
                />
              </section>
            )}

            {/* Requirements */}
            {job.requirements && (
              <section className="mb-10">
                <h2 className="text-xl font-bold pb-1 mb-6 border-b-2 border-primary-red inline-block">
                  Requirements
                </h2>
                <div
                  className="text-sm text-gray-700 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.requirements }}
                />
              </section>
            )}

            {/* Education */}
            {job.education && (
              <section className="mb-10">
                <h3 className="font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-sm text-gray-600">{job.education}</p>
              </section>
            )}

            {/* Benefits */}
            <section className="mb-10">
              <h2 className="text-xl font-bold pb-1 mb-6 border-b-2 border-primary-red inline-block">
                Benefits & Perks
              </h2>
              <div className="space-y-3">
                {job.salary_disclosed && job.salary_range && (
                  <p className="text-sm text-gray-700">
                    <strong>Salary:</strong> {job.salary_range}
                  </p>
                )}
                {freePerks && (
                  <p className="text-sm text-gray-700">
                    <strong>Free:</strong> {freePerks}
                  </p>
                )}
                {job.working_hours && (
                  <p className="text-sm text-gray-700">
                    <strong>Working Hours:</strong> {job.working_hours}
                  </p>
                )}
                {job.benefits && (
                  <div
                    className="text-sm text-gray-700 prose max-w-none mt-2"
                    dangerouslySetInnerHTML={{ __html: job.benefits }}
                  />
                )}
                {/* Benefit badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <BenefitBadge label="Accommodation" included={job.accommodation} />
                  <BenefitBadge label="Food" included={job.food} />
                  <BenefitBadge label="Transport" included={job.transport} />
                  <BenefitBadge label="Flight Ticket" included={job.flight_ticket} />
                </div>
              </div>
            </section>

            {/* Vacancy & Status */}
            <div className="flex gap-16 mb-8">
              <div>
                <p className="text-sm font-bold text-gray-900">No. of Vacancies:</p>
                <p className="text-sm text-gray-600">{String(job.vacancies).padStart(2, '0')}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Job Status:</p>
                <p className="text-sm text-gray-600 capitalize">{job.status}</p>
              </div>
            </div>

            <button 
              onClick={() => setIsApplyPopupOpen(true)}
              className="bg-primary-red hover:bg-red-700 text-primary-white font-bold py-2 px-8 rounded-full transition-colors">
              APPLY HERE
            </button>
          </div>

          {/* ══ Right: Sidebar ══ */}
          <div className="lg:col-span-1">
            <div className="space-y-4 mb-10">
              {job.city && (
                <div className="flex items-center gap-3 text-sm text-[#05264E]">
                  <FaMapMarkerIcon className="w-4 h-4 text-[#05264E]" />
                  {[job.city, job.state, job.country].filter(Boolean).join(', ')}
                </div>
              )}
              {job.category?.name && (
                <div className="flex items-center gap-3 text-sm text-[#05264E]">
                  <FaFileAltIcon className="w-4 h-4 text-[#05264E]" />
                  {job.category.name}
                </div>
              )}
              {job.gender && (
                <div className="flex items-center gap-3 text-sm text-[#05264E]">
                  <FaPlaneIcon className="w-4 h-4 text-[#05264E]" />
                  {job.gender.charAt(0).toUpperCase() + job.gender.slice(1)}
                </div>
              )}
            </div>

            {/* Job Info Sidebar */}
            <div className="md:pt-[98px]">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Job Info</h2>
              <div className="space-y-6">
                {job.posted_date && (
                  <InfoItem label="Date Opened" value={job.posted_date} icon={<FaCalendarIcon />} />
                )}
                {job.job_type_label && (
                  <InfoItem label="Job Type" value={job.job_type_label} icon={<MdWorkIcon />} />
                )}
                {job.industry && (
                  <InfoItem label="Industry" value={job.industry} icon={<FaIndustryIcon />} />
                )}
                {job.experience_level && (
                  <InfoItem label="Experience Level" value={job.experience_level} icon={<FaBriefcaseIcon />} />
                )}
                {job.salary_disclosed && job.salary_range && (
                  <InfoItem label="Salary" value={job.salary_range} icon={<FaMoneyIcon />} />
                )}
                {job.working_hours && (
                  <InfoItem label="Working Hours" value={job.working_hours} icon={<FaClockIcon />} />
                )}
                {job.education && (
                  <InfoItem label="Education" value={job.education} icon={<FaGradIcon />} />
                )}
                {job.city && (
                  <InfoItem label="City" value={job.city} icon={<FaMapMarkerIcon />} />
                )}
                {job.state && (
                  <InfoItem label="State/Province" value={job.state} icon={<MdApartmentIcon />} />
                )}
                {job.country && (
                  <InfoItem label="Country" value={job.country} icon={<FaBuildingIcon />} />
                )}
                {job.zip_code && (
                  <InfoItem label="Zip/Postal Code" value={job.zip_code} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {job && (
        <JobApplyPopup 
          jobId={job.id} 
          jobTitle={job.title} 
          isOpen={isApplyPopupOpen} 
          onClose={() => setIsApplyPopupOpen(false)} 
        />
      )}
    </div>
  );
};

export default JobPosting;