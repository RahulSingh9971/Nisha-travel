// CommitmentSection.tsx
import React from "react";
import img4 from "../../../assets/images/img4.png";
import img3 from "../../../assets/images/img3.png";
import img2 from "../../../assets/images/img2.png";
import img1 from "../../../assets/images/img1.png";
import commitment from "../../../assets/images/commitment.png";

// 1. Define Props interface for the API data
interface Initiative {
  title: string;
  description: string;
  image_url: string;
}

interface CommitmentSectionProps {
  description?: string;
  initiatives?: Initiative[];
  commitmentTitle?: string;
  commitmentDesc?: string;
  commitmentImage?: string;
}

const CommitmentSection: React.FC<CommitmentSectionProps> = ({
  description,
  initiatives,
  commitmentTitle,
  commitmentDesc,
  commitmentImage
}) => {
  // Use API initiatives if available, otherwise it will be an empty array
  const displayInitiatives = initiatives || [];

  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10">
      <div className="flex justify-center">
        <p className="max-w-xl text-center text-[16px] text-primary-navybluemd:mb-8 ,b-4">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 md:gap-10 gap-6 mt-12">
        {/* Values Cards */}
        {displayInitiatives.map((item, i) => (
          <div
            key={i}
            className="flex lg:flex-row flex-col lg:gap-0 gap-8 items-center mb-6"
          >
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full md:h-[350px] h-[300px] object-cover xl:mr-8 lg:mr-6"
            />
            <div>
              <h3 className="font-extrabold md:text-2xl text-xl text-primary-navyblue">
                {item.title}
              </h3>
              <p className="text-[15px] text-primary-gray leading-7 font-medium pt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Commitment Block */}
      <div className="">
        <div className="grid lg:grid-cols-2 xl:gap-20 gap-6 xl:pt-24 md:pt-16 pt-10">
          <div className="max-w-lg">
            <h1 className="lg:text-[42px] text-3xl leading-wide font-extrabold text-primary-navybluemd:mb-2">
              {commitmentTitle}
            </h1>
          </div>
          <div className="flex xl:justify-end">
            <p className="max-w-xl text-primary-gray text-[16px] leading-7 font-medium">
              {commitmentDesc}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <img
            src={commitmentImage}
            alt="commitment"
            className="w-full h-[250px] lg:h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default CommitmentSection;
