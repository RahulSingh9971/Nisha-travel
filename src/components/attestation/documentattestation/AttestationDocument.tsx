
import React, { useState } from 'react';
import familyImg from "../../../assets/images/recruitment.png";
import { Link } from "react-router-dom";
const AttestationDocument = () => {
  const [country, setCountry] = useState("Select Country");
  const [docType, setDocType] = useState("type of document");

  const countries = ["United States", "United Kingdom", "Canada", "Australia"];
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:pb-16 md:py-10 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-10 items-center">
        <img src={familyImg} alt="Happy Family" className="md:order-2 order-1 w-full mx-auto" />
        <div className="md:order-1 order-2">
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-2 leading-wider">
            <span className="text-primary-red">Document</span>
            <span className="text-primary-navyblueblock">Attestation</span>
          </h2>
          <p className="max-w-md md:pt-4 pt-2 pb-3 md:pb-6 text-primary-gray text-[16px] leading-7 font-medium ">
            Our visa experts guide you through every step — from document preparation to application submission — ensuring a smooth and successful process for any destination.
          </p>
          <Link to="/visaservices" className="font-Poppins text-[16px] font-bold bg-primary-red text-primary-white px-8 py-2">
            Apply Visa
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-fit flex flex-col items-center md:bg-primary-lightblue rounded-[8px] md:px-20 py-8">
          {/* <div className="flex items-center gap-4 pb-8">
            <p className="text-primary-navyblue text-[16px] font-bold">I’m applying for</p>
            <button className="bg-white px-4 py-2 text-[12px] rounded-[4px] shadow-[0px_18px_40px_0px_#190F091A]">
              Select Country
            </button>
            <p className=" text-primary-navyblue text-[16px] font-bold">Document Type</p>
            <button className="bg-white px-4 py-2 text-[12px] rounded-[4px] shadow-[0px_18px_40px_0px_#190F091A]">
              type of document
            </button>
          </div> */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">

            {/* 1. Country Selection */}
            <div className="flex items-center gap-4">
              <span className="text-primary-navyblue text-[18px] font-bold">I’m applying for</span>
              <div className="relative group">
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  className="appearance-none bg-white pl-10 pr-10 py-2 text-[13px] rounded-[6px] shadow-md border-none outline-none cursor-pointer min-w-[160px] text-gray-500"
                >
                  <option hidden>Select Country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
                {/* Left Side: Location Icon */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                {/* Right Side: Custom Arrow */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
            </div>

            {/* 2. Document Selection */}
            <div className="flex items-center gap-4">
              <span className="text-primary-navyblue text-[18px] font-bold">Document Type</span>
              <div className="relative group">
                <select
                  onChange={(e) => setDocType(e.target.value)}
                  className="appearance-none bg-white px-4 pr-10 py-2 text-[13px] rounded-[6px] shadow-md border-none outline-none cursor-pointer min-w-[160px] text-gray-500"
                >
                  <option hidden>type of document</option>
                  <option>Passport</option>
                  <option>National ID</option>
                  <option>Driving License</option>
                </select>
                {/* Right Side: Custom Arrow */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
            </div>

          </div>
          <button className="px-6 py-1 border-2 border-primary-navyblue text-primary-navyblue hover:bg-primary-navyblue hover:text-primary-white font-bold text-[16px] ">Continue</button>
        </div>
      </div>
    </section>
  );
};

export default AttestationDocument;