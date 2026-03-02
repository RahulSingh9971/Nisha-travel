import ArrowRight from "../.././assets/images/ArrowRight.webp";
import visaImg from "../.././assets/images/visa.png";
import jobImg from "../.././assets/images/job.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const ServiceCard = ({ image, title, description, isFirst }) => (
  <div
    className={`xl:h-[320px] lg:h-[350px] md:h-[360px] h-[320px] bg-white rounded-2xl overflow-visible shadow-lg group transition-shadow duration-300 relative ${
      isFirst ? "ml-8" : ""
    }`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="px-5 pt-8 pb-6 ">
      <h3 className="text-[18px] font-extrabold text-gray-800 mb-2 ">{title}</h3>
      <p className="text-gray-600 font-medium text-sm leading-relaxed">{description}</p>
    </div>
    <button
      size="icon"
      className="absolute top-32 flex justify-center items-center right-6 w-12 h-12 bg-[#C40808] hover:bg-red-700 rounded-full text-white shadow-lg"
    >
      {/* {"->"} */}
      <img src={ArrowRight} alt="Globe2" className="h-auto" />
    </button>
  </div>
);

const JobCard = ({ location, position, image, onSeeDetails }) => (
  <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
    <div
      className="h-[350px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="text-white/90 text-md font-ibmplex font-normal px-3 py-1.5 rounded-lg">
          {location}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-normal font-ibmplex">{position}</h3>
        <button
          onClick={onSeeDetails}
          className="text-base font-normal font-ibmplex hover:underline opacity-90"
        >
          See Details
        </button>
      </div>
    </div>
  </div>
);

export default function VisaEmigrationJobsSection() {
  const services = [
    {
      image: visaImg,
      title: "Visa Stamping",
      description:
        "Helping skilled and unskilled professionals secure overseas jobs in GCC, Europe & more.",
    },
    {
      image: visaImg,
      title: "Other Country Visa Support",
      description:
        "Helping skilled and unskilled professionals secure overseas jobs in GCC, Europe & more.",
    },
    {
      image: visaImg,
      title: "Special Categories",
      description:
        "Helping skilled and unskilled professionals secure overseas jobs in GCC, Europe & more.",
    },
  ];

  const jobs = [
    {
      location: "Saudi Arabia",
      position: "Staff Nurse",
      image: jobImg,
    },
    {
      location: "Dubai",
      position: "Manager",
      image: jobImg,
    },
    {
      location: "Saudi Arabia",
      position: "Staff Nurse",
      image: jobImg,
    },
    {
      location: "England",
      position: "Sr. Manager",
      image: jobImg,
    },
  ];

  return (
    <section className="bg-white md:py-10 py-8 font-manrope ">
      {/* Visa & Emigrations Section */}
      <div className="relative pb-20 mb-20">
        <div className="absolute top-0 left-0 w-[30%] h-full bg-[#002661]"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-8 relative">
          <div className="flex md:flex-row flex-col pt-10 gap-8 justify-between md:items-center items-end mb-12 ml-[32%]">
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold ">
              <span className="text-[#06213F]">Visa & </span>
              <span className="text-[#C40808]">Emigrations</span>
            </h2>
            <button className="bg-[#C40808] hover:bg-red-700 text-white font-extrabold py-2 px-6 text-sm tracking-wider">
              • DISCOVER MORE •
            </button>
          </div>

          <div className="ml-[18%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1} // Mobile default
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              // pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className=""
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="py-5">
                  <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>



          {/* Custom Arrows */}
          <div className="flex justify-end pt-8">
            <div className="flex gap-3">
              <button className="custom-prev  text-[#06213F] p-3 rounded-full shadow shadow-[#06213F] hover:text-red-700">
                <FaArrowLeftLong size={20} />
              </button>
              <button className="custom-next  text-[#06213F] p-3 rounded-full shadow shadow-[#06213F] hover:text-red-700">
                <FaArrowRightLong size={20} />
              </button>
            </div>
          </div>
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ml-[15%]">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                isFirst={index === 0}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Hot Jobs Section */}
      <div className="bg-white pt-5">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight">
                <span className="text-[#06213F] block mb-2">Hot Jobs You Can</span>
                <span className="text-[#C40808]">Apply for Today</span>
              </h2>
            </div>
            <div className="flex justify-end">
              <div className="max-w-md">
                <p className="font-medium text-gray-600 mb-6 text-lg">
                  Our mission is to simplify your journey, from applying for
                  your dream job to settling abroad with confidence.
                </p>
                <button className="bg-[#C40808] hover:bg-red-700 text-white font-extrabold py-3 px-6 text-sm tracking-wider">
                  • SEE OPEN POSITIONS •
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                location={job.location}
                position={job.position}
                image={job.image}
                onSeeDetails={() =>
                  console.log(
                    `View details for ${job.position} in ${job.location}`
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
