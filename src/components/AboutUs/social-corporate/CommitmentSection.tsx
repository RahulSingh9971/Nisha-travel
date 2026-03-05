// CommitmentSection.tsx
import React from "react";
import img4 from "../../../assets/images/img4.png";
import img3 from "../../../assets/images/img3.png";
import img2 from "../../../assets/images/img2.png";
import img1 from "../../../assets/images/img1.png";
import commitment from "../../../assets/images/commitment.png";

interface ValueProps {
  imgSrc: string;
  title: string;
  description: string;
}

const values: ValueProps[] = [
  {
    imgSrc: img4, // Replace with real image paths
    title: "Ethical & Responsible Recruitment",
    description:
      "We prioritize transparency, fairness, and compliance in every recruitment process, ensuring opportunities abroad are safe, lawful, and beneficial for candidates and their families.",
  },
  {
    imgSrc: img3,
    title: "Empowering Communities",
    description:
      "By helping hardworking Indians secure meaningful employment overseas, we contribute to economic upliftment, skill development, and improved living standards for families across the country.",
  },
  {
    imgSrc: img2,
    title: "Sustainability & Long-Term Impact",
    description:
      "We focus on solutions that are ethical, sustainable, and socially responsible, ensuring that our work benefits not only individuals but also the broader communities they belong to.",
  },
  {
    imgSrc: img1,
    title: "Education & Guidance",
    description:
      "We provide information, guidance, and training for aspiring candidates, helping them prepare for international opportunities responsibly and confidently.",
  },
];

const CommitmentSection: React.FC = () => (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10">
    <div className="flex justify-center">
      <p className="max-w-xl text-center text-[16px] text-primary-navybluemd:mb-8 ,b-4">
        At Nisa Travel Agency, our responsibility goes beyond recruitment and
        overseas placement. We are committed to making a positive impact on
        society, supporting individuals, families, and communities in meaningful
        ways.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 md:gap-10 gap-6 mt-12">
      {/* Values Cards */}
      {values.map((value, i) => (
        <div
          key={value.title}
          className="flex lg:flex-row flex-col lg:gap-0 gap-8 items-center mb-6"
        >
          <img
            src={value.imgSrc}
            alt={value.title}
            className="w-full md:h-[350px] h-[300px] object-cover xl:mr-8 lg:mr-6"
          />
          <div>
            <h3 className="font-extrabold md:text-2xl text-xl text-primary-navyblue">
              {value.title}
            </h3>
            <p className="text-[15px] text-primary-gray leading-7 font-medium pt-2">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    {/* Commitment Block */}
    <div className="">
      <div className="grid lg:grid-cols-2 xl:gap-20 gap-6 xl:pt-24 md:pt-16 pt-10">
        <div className="max-w-lg">
          <h1 className="xl:text-5xl md:text-4xl text-3xl leading-wide font-extrabold text-primary-navybluemd:mb-2">
            Our Commitment
          </h1>
        </div>
        <div className="flex xl:justify-end">
          <p className="max-w-xl text-primary-gray text-[16px] leading-7 font-medium">
            At Nisa Travel Agency, corporate responsibility means creating
            opportunities that empower lives, uphold ethical standards, and
            positively impact society — one journey at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <img
          src={commitment}
          alt="commitment"
          className="w-full h-[250px] lg:h-auto object-cover"
        />
      </div>
    </div>
  </section>
);

export default CommitmentSection;
