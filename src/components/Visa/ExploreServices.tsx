import React from "react";
import sectionFiveHero from "../../assets/images/section-five-hero.png";

interface AttestationButtonProps {
  text: string;
  isHighlighted?: boolean;
}
const AttestationButton: React.FC<AttestationButtonProps> = ({
  text,
  isHighlighted = false,
}) => (
  <div
    className={`border-l-4 ${
      isHighlighted ? "border-primary-red" : "border-gray-300"
    } pl-4 py-2`}
  >
    <button className="text-left text-gray-800 font-medium hover:text-primary-red transition-colors">
      {text}
    </button>
  </div>
);

interface ServiceCardProps {
  image?: string;
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  subtitle,
  bgColor = "bg-gray-800",
  textColor = "text-primary-white",
}) => (
  <div
    className={`relative overflow-hidden rounded-xl h-48 ${bgColor} ${textColor} group cursor-pointer`}
  >
    {image && (
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-navyblue bg-opacity-40"></div>
      </div>
    )}
    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
      {subtitle && (
        <p className="text-xl text-center font-extrabold mb-6 opacity-90">{subtitle}</p>
      )}
      <h3 className="text-xl font-extrabold">{title}</h3>
    </div>
  </div>
);

const attestationServices = [
  { text: "Qatar Embassy Attestation", highlighted: true },
  { text: "Saudi Embassy Attestation", highlighted: true },
  { text: "MOFA Attestation", highlighted: true },
  { text: "UAE Embassy Attestation", highlighted: true },
  { text: "Kuwaiti Embassy Attestation", highlighted: true },
];

export default function ExploreServices() {
  return (
    <section className="bg-white">
   

      {/* Specialised Services Section */}
      <div className=" pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Text Content */}
            <div>
              <h2 className=" md:text-4xl text-3xl font-extrabold leading-tight mb-3 ">
                <span className="text-[#06213F]">Explore</span>
                <br />
                <span className="text-primary-red">specialised services</span>
              </h2>
              <p className="font-medium text-gray-600 text-md leading-relaxed">
                Discover a wide range of value-added services, from document
                attestation to premium visa support, designed to make your
                overseas journey smoother, faster, and completely hassle-free.
              </p>
            </div>
            {/* Right - Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Big Data Card */}
              <div className="col-span-1">
                <ServiceCard
                  title="Data Flow"
                  subtitle="BIG DATA"
                  bgColor="bg-indigo-900"
                />
              </div>
              {/* Prometric Exam */}
              <div className="col-span-1">
                <ServiceCard
                  title="Prometric Exam"
                  image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-6">
            {/* Study Abroad */}
            <div className="col-span-1">
              <ServiceCard
                title="Study Abroad"
                image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </div>
            {/* Holidays */}
            <div className="col-span-1">
              <ServiceCard
                title="Holidays"
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </div>
            {/* Medical Testing */}
            <div className="col-span-1">
              <ServiceCard
                title="Medical Testing"
                image="https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </div>
            {/* Explore Other Solutions */}
            <div className="col-span-1">
              <div className="bg-blue-600 text-primary-white rounded-xl h-48 p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold leading-tight">
                  Explore Other solutions we offer
                </h3>
                <button className="bg-primary-red hover:bg-red-700 text-primary-white font-semibold py-2 px-4 rounded-md text-sm w-fit">
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
