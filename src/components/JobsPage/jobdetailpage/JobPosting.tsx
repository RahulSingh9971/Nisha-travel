import React from 'react';
import img from '../../../assets/images/jobdetails.png'
import {
  FaUsers,      // People/Customers
  FaFileAlt,    // Documents  
  FaPlane,      // Travel
} from 'react-icons/fa';
// Define the interface for the InfoItem props
interface InfoItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode; // The '?' makes it optional
}

const FaPlaneIcon = FaPlane as React.ElementType;
const FaFileAltIcon = FaFileAlt as React.ElementType;
const FaUsersIcon = FaUsers as React.ElementType;

const JobPosting: React.FC = () => {
  return (
    <div className="min-h-screen font-manrope">
      <main className="max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 md:pb-20 py-10 ">
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img
            src={img}
            alt="Airport Terminal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header Info */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-bold uppercase text-[#05264E]">ID: #11382</span>
          <span className="bg-[#E6E7E9] px-3 py-1 rounded text-xs font-medium text-[#05264E]"><span className='font-bold text-md'>Job Post:</span>18 November 2025</span>
          <span className="bg-[#E6E7E9] px-3 py-1 rounded text-xs font-medium text-[#05264E]"><span className='font-bold text-md'>Expiry Date:</span> 31 November 2025</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Hiring for Saudi Airport</h1>
            <p className="text-[#05264E] leading-relaxed mb-6">
              We are seeking a creative and detail-oriented UI/UX Designer to join our growing digital team in Riyadh.
              The ideal candidate will be responsible for designing intuitive, user-centric interfaces for mobile apps,
              websites, dashboards, and enterprise software.
            </p>

            <button className="bg-[#C40808] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full transition-colors mb-12">
              APPLY HERE
            </button>

            {/* Job Description */}
            <section className="mb-10">
              <h2 className="text-xl font-bold inline-block pb-1 mb-6">Job Description</h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>Responsible for managing, supporting & optimizing the KST/DOP/Dealer Management System (DMS) to ensure smooth operations across Sales, Service, Parts & Finance functions. The role involves system configuration, user support, training, troubleshooting.</p>
                <ul className="list-none space-y-2">
                  <li><strong>Role:</strong> Software Development - Other</li>
                  <li><strong>Industry Type:</strong> IT Services & Consulting</li>
                  <li><strong>Department:</strong> Engineering - Software & QA</li>
                  <li><strong>Employment Type:</strong> Full Time, Permanent</li>
                  <li><strong>Role Category:</strong> Software Development</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-10">
              <h3 className="font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-sm text-gray-600">
                B.Sc, B.Ed in Computer Science, B.Com in Computer Science, B.Tech/B.E. in Computer Science and Engineering, Computer Science, B.CA in Computer Science, Diploma in Computer Science, B.Sc in Computer Science, M.Sc in Computer Science, B.A in Computer Science, B.S/B.E in Computer Science and Engineering.
              </p>
            </section>

            {/* Requirements */}
            <section className="mb-10">
              <h2 className="text-xl font-bold inline-block pb-1 mb-6">Requirements</h2>
              <ul className=" space-y-2 text-sm text-gray-700">
                <li>Strong understanding of KST/DOP modules (Sales, Service, Parts, Finance).</li>
                <li>Basic SQL reporting knowledge.</li>
                <li>Familiarity with system integration & troubleshooting.</li>
                <li>Good understanding of dealership workflows.</li>
              </ul>
            </section>

            {/* Benefits */}
            <section className="mb-10">
              <h2 className="text-xl font-bold inline-block pb-1 mb-6">Benefits</h2>
              <p className="text-sm text-gray-700"><strong>Salary: </strong> 600 - 700 KD</p>
              <p className="text-sm text-gray-700"><strong>Free:</strong> Accommodation & Transport</p>
            </section>

            <div className="flex gap-16 mb-8">
              <div>
                <p className="text-sm font-bold text-gray-900">No. of Vacancy:</p>
                <p className="text-sm text-gray-600">01</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Job Status:</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </div>

            <button className="bg-[#C40808] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full transition-colors">
              APPLY HERE
            </button>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-[#05264E]">
                <FaUsersIcon className="w-4 h-4 text-[#05264E]" /> Riyadh, Kingdom of Saudi Arabia
              </div>
              <div className="flex items-center gap-3 text-sm text-[#05264E]">
                <FaFileAltIcon className="w-4 h-4 text-[#05264E]" /> Frontend Developer
              </div>
              <div className="flex items-center gap-3 text-sm text-[#05264E]">
                <FaPlaneIcon className="w-4 h-4 text-[#05264E]" /> Male
              </div>
            </div>

            <div className="md:pt-[98px]">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Job Info</h2>
              <div className="space-y-6">
                <InfoItem label="Date Opened" value="12/03/2026" />
                <InfoItem label="Job Type" value="Full Time" />
                <InfoItem label="Industry" value="Automotive" />
                <InfoItem label="Work Experience" value="1 - 3 years" />
                <InfoItem label="Salary" value="150 - 200,000 INR" />
                <InfoItem label="City" value="Kuwait City" />
                <InfoItem label="State/Province" value="Al Asimah" />
                <InfoItem label="Country" value="Kuwait" />
                <InfoItem label="Zip/Postal Code" value="00080" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const InfoItem = ({ label, value, icon }: InfoItemProps) => (
  <div className="flex gap-4">
    {/* 1. Only render this div if an icon exists */}
    {icon && (
      <div className="mt-1 text-gray-400 w-5">
        {/* 2. Check if it's a valid element before cloning */}
        {React.isValidElement(icon) 
          ? React.cloneElement(icon as React.ReactElement, { 
              className: 'w-5 h-5' 
            }) 
          : icon}
      </div>
    )}
    <div>
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default JobPosting;