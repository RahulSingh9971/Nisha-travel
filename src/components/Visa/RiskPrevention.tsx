import React from 'react';
import imgprevention from '../../assets/images/imgprevention.png'
import { BsPatchCheckFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import img from "../../assets/images/Rectangle.png"
// 2. Swiper CSS import karna ZAROORI hai
import 'swiper/css';
import 'swiper/css/pagination';

const RiskPrevention: React.FC = () => {

    const IoArrowBackOutlineIcon = BsPatchCheckFill as React.ElementType;
    const updates = [
        { text: "Live application status" },
        { text: "WhatsApp updates" },
        { text: "Alerts when embassy processing changes" },
        { text: "Timeline predictions" },
        { text: "Dedicated account manager" },
    ];
    const riskItems = [
        { id: '01', text: 'Rejections due to incomplete documents', icon: '📝' },
        { id: '02', text: 'Embassy form errors', icon: '📋' },
        { id: '03', text: 'Attestation mismatches', icon: '🔍' },
        { id: '04', text: 'Photograph non-compliance', icon: '🖼️' },
        { id: '05', text: 'Medical or PCC issues', icon: '🏥' },
    ];
    const slides = [
        { id: 1, title: "UAE Visa Medical Rules Updated (Nov 2025)" },
        { id: 2, title: "Saudi Embassy Guidelines Updated (Nov 2025)" },
        { id: 3, title: "Qatar Attestation Process Updated (Nov 2025)" },
    ];

    return (
        <><div className="font-manrope w-full md:py-16 py-10 px-4 bg-white overflow-hidden">

            <div className=" max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center md:mb-16 mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#002d5b]">
                        Real-Time Visa <br /> Processing Updates
                    </h2>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
                    {updates.map((update, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            <div className="text-blue-600">
                                <IoArrowBackOutlineIcon size={28} fill="currentColor" className="text-primary-white fill-blue-600" />
                            </div>
                            <p className="text-[#002d5b] font-extrabold text-sm md:text-base leading-tight">
                                {update.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div> <section className="relative w-full max-w-7xl mx-auto md:py-16 py-10 px-6 overflow-hidden font-monerap">

                <div className="grid grid-cols-1 md:grid-cols-12 md:gap-20 gap-8 items-start relative z-10">

                    {/* Left Column: Heading & Image */}
                    <div className="md:col-span-5">
                        <h2 className="md:text-4xl text-3xl font-extrabold text-[#06213F] mb-2">
                            Risk and <br />
                            <span className="text-primary-red text-[#d92323]">Error Prevention</span>
                        </h2>

                        <div className="mt-8 rounded-2xl overflow-hidden">
                            {/* Replace with your local image path */}
                            <img
                                src={imgprevention}
                                alt="Risk Assessment"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:block hidden md:col-span-1 pt-4"></div>
                    {/* Right Column: Stats & List */}
                    <div className="md:col-span-6 pt-4">
                        <p className="text-gray-500 text-[14px] md:text-[16px] mb-10 max-w-lg leading-relaxed">
                            With over 1.5M documents processed, 50k+ global customers, and 7k+ successful
                            overseas recruitments across 33 years, our track record reflects trust,
                            efficiency, and proven expertise worldwide.
                        </p>

                        <div className="space-y-3">
                            {riskItems.map((item) => (
                                <div key={item.id} className="flex items-stretch gap-2 group cursor-default">
                                    {/* ID Number Box */}
                                    <div className="bg-primary-lightblue text-[#002d5b] text-[18px] font-extrabold px-4 flex items-center justify-center rounded-md">
                                        {item.id}
                                    </div>
                                    {/* Content Box */}
                                    <div className="bg-primary-lightblue flex-1 px-4 py-3 flex items-center gap-3 rounded-md group-hover:bg-[#e6ecf2] transition-colors">
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="text-[#002d5b] font-extrabold text-[16px] md:text-base">
                                            {item.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-7xl mx-auto px-4 md:py-10 py-5 relative">
                <Swiper
                    // 3. Modules array mein Pagination zaroor dalein
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                        // renderBullet use karna option hai, default bhi kaam karta hai
                    }}
                    className="rounded-3xl overflow-visible"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative bg-[#001d3d] min-h-[150px] md:min-h-[180px] flex items-center">
                                <div className="p-10 md:p-14 z-20 w-full">
                                    <h3 className="max-w-md text-2xl md:text-3xl font-bold text-primary-white mb-6">
                                        {slide.title}
                                    </h3>
                                    <button className="bg-white text-[#001d3d] px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105">
                                        Read More
                                    </button>
                                </div>

                                <img
                                    className="absolute bottom-0 right-0 z-10 hidden md:block h-full"
                                    src={img}
                                    alt="banner img"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Global Style overrides - Isse dots hamesha slide ke niche aur center mein aayenge */}
                <style>{`
        /* Swiper container ko thoda space dena dots ke liye */
        .banner-slider-container .swiper {
          padding-bottom: 50px !important;
        }

        /* Dots ki position slide ke bahar niche set karna */
        .banner-slider-container .swiper-pagination {
          bottom: 0px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
          width: 100% !important;
        }

        /* Default dots ko style karna */
        .banner-slider-container .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          border-radius: 99px !important;
          margin: 0 !important;
          transition: all 0.3s ease !important;
        }

        /* Active dot ko lamba (pill shape) banana */
        .banner-slider-container .swiper-pagination-bullet-active {
          width: 28px !important;
          background: #001d3d !important;
        }
      `}</style>
            </div>
        </>
    );
};

export default RiskPrevention;