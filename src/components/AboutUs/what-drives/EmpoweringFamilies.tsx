import React from "react";

interface EmpoweringFamiliesProps {
  title?: string;
  description?: string;
  image?: string;
}

export const EmpoweringFamilies: React.FC<EmpoweringFamiliesProps> = ({ 
  title, 
  description, 
  image 
}) => (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-10 items-center">
    <img
     src={image}
     alt="Empowering Families"
      className=" w-full mx-auto lg:order-1 order-2"
    />
    <div className="lg:order-2 order-1">
      <h2 className="lg:text-[42px]  text-3xl font-extrabold text-primary-navybluemb-4 lg:!leading-[1.2]">
       {title}
      </h2>
      <p className="lg:pt-4 md:pt-2 text-primary-gray text-[16px] leading-7 font-medium">
       {description}
      </p>
    </div>
  </section>
);
