import { Link } from "react-router-dom";
import sectionFiveHero from "../.././assets/images/section-five-hero.png";
import Ellipse from "../.././assets/images/Ellipse.png";

const AttestationButton = ({ text, isHighlighted = false }) => (
  <div
    className={`border-l-4 ${isHighlighted ? "border-[#C40808]" : "border-gray-300"
      } pl-4 py-2`}
  >
    <button className="text-left text-[#0E313A] font-extrabold hover:text-[#C40808] transition-colors">
      {text}
    </button>
  </div>
);

const ServiceCard = ({
  image,
  title,
  subtitle,
  bgColor = "bg-[#0E313A]",
  textColor = "text-white",
}) => (
  <div
    className={`relative overflow-hidden rounded-[20px] h-[280px] ${bgColor} ${textColor} group cursor-pointer`}
  >
    {image && (
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
    )}
    <div className="relative z-10 p-6 h-full flex flex-col justify-end">

      {subtitle && (
        <p className="text-2xl text-center font-extrabold mb-20 opacity-90">{subtitle}</p>
      )}
      <h3 className="text-2xl font-extrabold">{title}</h3>
    </div>
  </div>
);

export default function DocumentAttestationSection() {
  const attestationServices = [
    { text: "Qatar Embassy Attestation", highlighted: true },
    { text: "Saudi Embassy Attestation", highlighted: true },
    { text: "MOFA Attestation", highlighted: true },
    { text: "UAE Embassy Attestation", highlighted: true },
    { text: "Kuwaiti Embassy Attestation", highlighted: true },
  ];

  return (
    <section className="bg-white">
      {/* Document Attestation Section */}
      <div className="font-manrope max-w-7xl mx-auto lg:px-6 md:px-12 px-4 md:pb-0 md:pt-10 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
           
            <div className="md:order-1 order-2 relative w-full overflow-hidden">
              <img
                src={sectionFiveHero}
                alt="Woman with documents"
                className="w-full h-auto min-h-[400px] lg:min-h-[600px] object-cover object-center mx-auto scale-100"
              />
            </div>
            <div className="md:order-2 order-1">
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight mb-6">
                <span className="text-[#06213F] block mb-2">Reliable  <span className="text-[#C40808]">Document</span></span>

                <span className="text-[#C40808]">Attestation <span className="text-[#06213F]">Services</span></span>

              </h2>

              <p className="font-medium text-gray-600 mb-8 text-lg">
                Our mission is to simplify your journey, from applying for your
                dream job to settling abroad with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {attestationServices.map((service, index) => (
                  <AttestationButton
                    key={index}
                    text={service.text}
                    isHighlighted={service.highlighted}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialised Services Section */}
      <div className="bg-[#EAF0F6] py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Text Content */}
            <div>
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight mb-4">
                <span className="text-[#06213F] block mb-2">Explore</span>
                <span className="text-[#C40808]">specialised services</span>
              </h2>

              <p className="font-medium text-[#0E313A] text-md leading-relaxed">
                Discover a wide range of value-added services, from document
                attestation to premium visa support, designed to make your
                overseas journey smoother, faster, and completely hassle-free.
              </p>
            </div>

            {/* Right - Services Grid */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* Big Data Card - spans 2 columns in first row */}
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
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-6">
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
              <div className="bg-[#2A6ABA] text-white rounded-[20px] h-[280px] p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold leading-tight">
                  Explore Other solutions we offer
                </h3>
                <Link to="/ourcoreservices" className="bg-[#C40808] hover:bg-red-700 text-white font-semibold py-3 px-5  text-sm w-fit">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Ellipse} alt="Ellipse" className=""/>
    </section>
  );
}
