import React from "react";
import journeyImg from "../../../assets/images/journey.png"; // adjust path as needed

const OverseasJourney: React.FC = () => (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 lg:gap-0 gap-[60px] grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
    <div className="lg:max-w-xl">
      <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold text-primary-navybluemd:mb-6 tracking-wide leading-tight">
        A Complete <br /> Overseas Journey
      </h2>
      <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
        Excellence isn't just our standard – it's our promise. For over three
        decades, families across India have trusted us with more than just job
        applications – they've trusted us with their future. At Nisa, we
        understand that when someone comes to us, they bring their hopes,
        ambitions, and dreams for a better tomorrow.
      </p>
      <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
        That’s why we go beyond recruitment. We’ve built a complete suite of
        services designed to support every step of an individual’s overseas
        journey. From visa and emigration services, attestation and
        documentation, and professional registrations to education and study
        abroad programs, healthcare licensing and exams, language and skill
        tests, travel and tourism, and appointment assistance — we ensure that
        no dream is left halfway.
      </p>
      <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
        We don’t just send people abroad; we prepare, guide, and stand with them
        until they are ready to succeed. Every service we offer is anchored in
        one simple truth: your success is our success.
      </p>
    </div>
    <div className="flex justify-center items-center">
      <img
        src={journeyImg}
        alt="Overseas Journey Globe"
        className="w-full h-auto"
      />
    </div>
  </section>
);

export default OverseasJourney;
