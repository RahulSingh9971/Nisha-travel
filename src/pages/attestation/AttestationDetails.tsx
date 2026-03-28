import React from 'react';
import illustration from '../../assets/images/visa_stamping_illustration.png';
import TrustedGlobalVisa from '../../components/attestation/documentattestation/TrustedGlobalVisa';
import ContactSection from '../../components/JobsPage/ContactSection';

const AttestationDetails = () => {
  return (
    <main className="font-poppins mb-24 mt-4 lg:mt-8">
      {/* Hero Section */}
      <section className="bg-[#f8faff] py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-extrabold text-[#0d213b] leading-[1.1] mb-4">
              Need Kuwait<br />
              <span className="text-[#c20c15]">Attestation?</span>
            </h1>
            <p className="text-gray-500 text-[14px] md:text-[15px] mb-8 max-w-[400px] leading-relaxed">
              Get professional support from start to finish, educational, personal & commercial.
            </p>
            <button className="bg-[#c20c15] text-white font-bold text-[13px] uppercase px-10 py-3 rounded-[3px] hover:bg-red-800 transition-colors tracking-wide">
              START NOW
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end md:justify-center">
            <img 
              src={illustration} 
              alt="Attestation Illustration" 
              className="w-full max-w-[500px]"
            />
          </div>
        </div>
      </section>

      <TrustedGlobalVisa />
      <ContactSection />
    </main>
  );
};

export default AttestationDetails;
