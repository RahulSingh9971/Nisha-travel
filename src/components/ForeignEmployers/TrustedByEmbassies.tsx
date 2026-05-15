import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import images
import kuwaitFlag from "../../assets/images/KuwaitEmbassyflag.png";
import kuwaitEmblem from "../../assets/images/KuwaitEmbassyflagbottom.png";
import saudiFlag from "../../assets/images/SaudiEmbassyflag.png";
import saudiEmblem from "../../assets/images/SaudiEmbassyflagbottom.png";
import uaeFlag from "../../assets/images/UAEEmbassyflag.png";
import uaeEmblem from "../../assets/images/UAEEmbassyflagbottom.png";
import qatarFlag from "../../assets/images/QatarEmbassyflag.png";
import qatarEmblem from "../../assets/images/QatarEmbassyflagbottom.png";

const embassies = [
  {
    name: "Kuwait Embassy",
    flag: kuwaitFlag,
    emblem: kuwaitEmblem,
  },
  {
    name: "Saudi Embassy",
    flag: saudiFlag,
    emblem: saudiEmblem,
  },
  {
    name: "UAE Embassy",
    flag: uaeFlag,
    emblem: uaeEmblem,
  },
  {
    name: "Qatar Embassy",
    flag: qatarFlag,
    emblem: qatarEmblem,
  },
];

const TrustedByEmbassies = () => {
  return (
    <section className="bg-[#EAF0F6] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Trusted By */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <h2 className="text-[#c1272d] font-bold text-2xl mb-4">Trusted by</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm flex-grow">
              <h3 className="font-bold text-xl leading-tight mb-4 text-black">
                विदेश मंत्रालय<br />
                MINISTRY OF<br />
                EXTERNAL AFFAIRS
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The MEA manages foreign relations and issues passports required for
                travel. It also facilitates document attestation for visa applications
                to foreign embassies.
              </p>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="w-full lg:w-2/3 flex flex-col overflow-hidden">
            <h2 className="text-[#0a1e3f] font-bold text-2xl mb-4">Authorised By Embassies:</h2>
            <div className="relative">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {embassies.map((embassy, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="bg-white rounded-xl shadow-sm h-full flex flex-col items-center border border-gray-100 overflow-hidden">
                      <div className="w-full h-[120px] mb-4">
                        <img
                          src={embassy.flag}
                          alt={`${embassy.name} flag`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-[#0a1e3f] font-bold text-[15px] mb-4 text-center whitespace-nowrap px-4">
                        {embassy.name}
                      </h4>
                      <div className="mt-auto flex items-center justify-center h-[70px] w-full pb-6">
                        <img
                          src={embassy.emblem}
                          alt={`${embassy.name} emblem`}
                          className="max-h-full max-w-[50px] object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByEmbassies;
