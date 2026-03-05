import React from "react";
import familyImg from "../../../assets/images/features.png";

export const EmpoweringFamilies: React.FC = () => (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-10 items-center">
    <img
      src={familyImg}
      alt="Happy Family"
      className=" w-full mx-auto lg:order-1 order-2"
    />
    <div className="lg:order-2 order-1">
      <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold text-primary-navybluemb-4 leading-wide">
        Empowering Families,<br />Transforming Futures
      </h2>
      <p className="lg:pt-0 md:pt-2 text-primary-gray text-[16px] leading-7 font-medium">
        At Nisa Travel Agency, success isn’t just about placements or paperwork — it’s about dreams fulfilled, families empowered, and futures transformed. When you choose us, you’re not just hiring a service provider; you’re partnering with a team that genuinely cares about your success.
      </p>
    </div>
  </section>
);
