import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 ">
      <h1 className="md:text-4xl text-3xl text-center font-extrabold text-primary-red md:mb-5 mb-2">
        Privacy Policy
      </h1>
      {/* Title & Tagline */}
      <div className="grid lg:grid-cols-2 md:gap-12 gap-6 md:py-16 py-8">
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Information We Collect
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Your information is used strictly for processing visas, bookings,
            legalizations, and related services. We do not sell or share your
            data with third parties for marketing purposes.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Use of Information
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Your information is used strictly for processing visas, bookings,
            legalizations, and related services. We do not sell or share your
            data with third parties for marketing purposes.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Data Security
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            We maintain industry-standard security measures to protect your data
            from unauthorized access, misuse, or loss.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Cookies
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            Our website may use cookies to improve user experience and website
            performance.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Disclosure
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
       Information may be shared only with authorized government bodies, embassies, or trusted partners involved in delivering your service.
          </p>
        </div>
        <div className="max-w-lg flex flex-col gap-1">
          <h3 className=" md:text-xl text-lg leading-wide font-extrabold text-[#05264E] mb-2">
            Your Rights
          </h3>
          <p className="text-[14px] font-normal text-primary-gray tracking-wider ">
            You may request access to or deletion of your personal data by
            contacting us at{" "}
            <span className="font-bold">hello@nisatravels.com.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
