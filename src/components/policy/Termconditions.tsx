import React from "react";

const Termconditions: React.FC = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 ">
      <h1 className="md:text-4xl text-3xl text-center font-extrabold text-primary-red md:mb-5 mb-2">
   Terms & Conditions
      </h1>
      {/* Title & Tagline */}
      <div className="grid lg:grid-cols-2 md:gap-12 gap-6 md:py-16 py-8">
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Introduction
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Welcome to Nisa Travel Agency (“we,” “us,” “our”). By using our
            website, contacting our team, or booking any service with us, you
            agree to abide by the following Terms and Conditions.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Services Offered
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            We provide travel-related services including visa processing,
            emigration support, attestation and legalization, tour packages,
            ticketing, and related consultation.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Accuracy of Information
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            All details provided to us (personal, travel, or document-related)
            must be accurate and complete. Nisa Travel Agency is not responsible
            for any delay or rejection caused by incorrect or false information.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Service Charges
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Service fees vary depending on the type of service. Once payment is
            made, clients are deemed to have understood and agreed to the
            applicable charges and terms.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Processing Time
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Processing times are estimates and subject to change based on
            embassy, consulate, or government policies. Nisa Travel Agency is
            not liable for delays beyond our control.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Third-Party Services
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            We may collaborate with third-party vendors or government agencies.
            We are not responsible for their decisions, delays, or errors once
            applications are submitted to them.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Liability
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Nisa Travel Agency shall not be held liable for losses or damages
            arising from delays, rejections, cancellations, or unforeseen
            circumstances beyond our control.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Amendments
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            We reserve the right to update or modify these Terms at any time.
            Continued use of our services implies acceptance of the updated
            terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Termconditions;
