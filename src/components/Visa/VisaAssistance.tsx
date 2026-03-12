import React, { useState } from "react";
import familyImg from "../../assets/images/visasection.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import imgprevention from '../../assets/images/imgprevention.png'
import { BsPatchCheckFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import img from "../../assets/images/Rectangle.png"
import downloadwhite from "../../assets/images/download-white.svg";
import downloadred from "../../assets/images/download-red.svg";
import bowcher from "../../assets/images/bowcher.webp";
// 2. Swiper CSS import karna ZAROORI hai
import 'swiper/css';
import 'swiper/css/pagination';
import { LuCirclePlus } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { IconType } from "react-icons";
import flagUrl1 from '../../assets/images/saudiflag.png'
import flagUrl2 from '../../assets/images/kuwaithflag.png'
import flagUrl3 from '../../assets/images/qater.png'
import flagUrl4 from '../../assets/images/bahrain.png'
import flagUrl5 from '../../assets/images/omanflag.png'
import flagUrl6 from '../../assets/images/uaeflag.png'
import flagUrl7 from '../../assets/images/iraqflag.png' 
import SecurityAndPartners from "../SecurityAndPartners";

const GrLocationIcon = HiOutlineLocationMarker as React.ElementType;
const IoIosArrowDownIcon = IoIosArrowDown as React.ElementType;
const locationsList: string[] = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Pune",
];
interface VisaCard {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}
const visaTypes: VisaCard[] = [
  {
    title: "Work Visa",
    description: "Allows individuals to live and work legally in a foreign country for a specific employer, role, or contract-based employment period.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-teal-900/60"
  },
  {
    title: "Business Visa",
    description: "Grants entry for short-term business activities like meetings, negotiations, conferences, or market visits without engaging in full-time employment.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-slate-900/60"
  },
  {
    title: "Dependent Visa",
    description: "Allows spouses, children, or dependents of a primary visa holder to live, study, or sometimes work in the destination country legally.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800",
    bgColor: "bg-gray-900/60"
  },
  {
    title: "Family Visa",
    description: "Enables family members to reunite and reside together in a foreign country, offering long-term stay options based on sponsorship.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
    bgColor: "bg-indigo-900/60"
  },
  {
    title: "Medical Visa",
    description: "Permits foreign nationals to travel for medical treatment, surgeries, or specialized healthcare unavailable in their home country.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-orange-500/60"
  },
  {
    title: "Student Visa",
    description: "Allows individuals to study full-time in accredited foreign institutions, granting residence for the duration of the academic course.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-cyan-500/60"
  },
  {
    title: "Seaman Visa",
    description: "Issued to crew members joining ships or vessels, enabling international travel, transit, and boarding for maritime duties.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-sky-600/60"
  },
  {
    title: "Transit Visa",
    description: "Allows short-term passage through a country's airport or borders while traveling to another destination.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-stone-600/60"
  },
  {
    title: "Visit Visa",
    description: "Grants temporary entry for tourism, leisure, meeting relatives, or short personal trips without permitting work residence.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-teal-500/60"
  }
];
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
interface FAQItem {
  question: string;
  answer: string;
  iconOpen: IconType;
  iconClosed: IconType;
}
const faqs: FAQItem[] = [
  {
    question: "What is embassy visa stamping?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "How long does it take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "What if my documents have errors?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Can I travel while stamping is in process?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Do I need medical tests?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Do I need medical tests?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
];

type FAQCardProps = {
  faq: FAQItem;
};
// Expandable FAQ Card
const FAQCard: React.FC<FAQCardProps> = ({ faq }) => {
  const [open, setOpen] = useState(false);
  const Icon = open ? faq.iconClosed : faq.iconOpen;
  const IconComponent = Icon as React.ElementType;
  return (
    // <div
    //   className={`bg-primary-lightblue border-2 border-dashed border-[#06213F] rounded-xl mb-4 px-6 py-5 transition-all duration-300 shadow-sm ${
    //     open ? "border border-[#c3d5eb]" : ""
    //   }`}
    //   style={{ cursor: "pointer" }}
    //   onClick={() => setOpen(!open)}
    // >
    //   <div className="flex items-center justify-between font-extrabold text-[#002661]">
    //     <span className=" text-lg">{faq.question}</span>
    //     <span >
    //       <IconComponent className="font-extrabold text-[25px] "  />
    //     </span>
    //   </div>
    //   {open && faq.answer && (
    //     <div className="max-w-[80%] mt-2 text-[#002661] text-sm ">{faq.answer}</div>
    //   )}
    // </div>
    <div

      className={`bg-primary-white rounded-3xl mb-4 px-6 py-5 transition-all duration-300 shadow-sm cursor-pointer ${open ? "border border-[#c3d5eb]" : ""
        }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between font-extrabold text-[#002661]">
        <span className="text-lg">{faq.question}</span>
        <span>
          <IconComponent className="font-extrabold text-[25px]" />
        </span>
      </div>

      {open && faq.answer && (
        <div className="max-w-[80%] mt-2 text-[#002661] text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  );
};
interface Partner {
  name: string;
  flagUrl: string; // Replace with your actual asset paths
}
  const partners: Partner[] = [
    { name: 'SAUDI EMBASSY', flagUrl: flagUrl1 },
    { name: 'KUWAIT EMBASSY', flagUrl: flagUrl2 },
    { name: 'QATAR EMBASSY', flagUrl: flagUrl3 },
    { name: 'BAHRAIN EMBASSY', flagUrl: flagUrl4 },
    { name: 'OMAN EMBASSY', flagUrl: flagUrl5},
    { name: 'UAE EMBASSY', flagUrl: flagUrl6},
    { name: 'IRAQ EMBASSY', flagUrl: flagUrl7 },
  ];

const VisaAssistance = () => {

  return (
    <>
      <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-24 md:pt-16 py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-14 items-center">
          <div className="">
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
              <span className="text-primary-red">Visa Assistance</span>
              <span className="text-primary-navyblue pl-2">Made Simple</span>
            </h2>
            <p className="lg:pt-0 md:pt-2 text-primary-gray text-[16px] leading-7 font-medium">
              Our visa experts guide you through every step — from document
              preparation to application submission — ensuring a smooth and
              successful process for any destination.
            </p>
            <div className=" pt-8 font-bold text-[18px]">
              <button className="text-[16px] uppercase text-primary-white bg-primary-red px-8 py-2 ">
                Apply VISA
              </button>
            </div>
          </div>
          <img
            src={familyImg}
            alt="Happy Family"
            className=" w-full mx-auto lg:order-1 order-2"
          />
        </div>

        {/* User Journey Card (Floating/Highlighted Box) */}
        <div className="w-full flex justify-center pt-20">
          <div className="md:bg-primary-lightblue rounded-xl flex flex-col items-center w-fit lg:px-20 md:px-10 md:py-8 ">
            <div className="flex md:flex-row flex-col gap-4 text-lg font-bold text-[#002661] ">
              <div className="flex gap-4">
                <p>I'm applying for</p>
                <div className="flex items-center bg-white w-fit rounded py-[2px] px-2 shadow-[0px_18px_40px_0px_#190F091A]">
                  <select
                    className="pl-1 pr-3 text-[13px] font-medium text-[13px] opacity-[80%] text-[#444444] outline-none appearance-none "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Visa Type
                    </option>
                    {locationsList.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDownIcon className="cursor-pointer text-gray-400 text-[14px]" />
                </div>
              </div>
              <div className="flex gap-4">
                <p> and I'm going to</p>
                <div className="flex items-center bg-white w-fit rounded py-[2px] px-2 shadow-[0px_18px_40px_0px_#190F091A]">
                  <GrLocationIcon className="text-gray-400 text-[15px]" />
                  <select
                    className="pl-1 pr-3 text-[13px] font-medium text-[13px] opacity-[80%] text-[#444444] outline-none appearance-none "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    {locationsList.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDownIcon className="cursor-pointer text-gray-400 text-[14px]" />
                </div>
              </div>
            </div>
            <button className="mt-5 md:px-10 px-5 md:py-2 py-1 border-2 border-[#002661] text-[#002661] font-bold hover:bg-[#19303D] hover:text-primary-white transition">
              TAKE TO THE WEBSITE
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12 font-Manrope">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              We Support All <br />
              <span className="text-primary-red">Visa Types</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-sm leading-relaxed">
              A quick guide to various visa types, helping you understand their
              purpose, eligibility, and use for work, travel, study, medical, and family needs.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaTypes.map((visa, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <img
                src={visa.image}
                alt={visa.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Color Overlay */}
              <div className={`absolute inset-0 ${visa.bgColor} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity`} />

              {/* Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-primary-white mb-2">{visa.title}</h3>
                <p className="text-primary-white/90 text-xs leading-relaxed line-clamp-3">
                  {visa.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="font-manrope w-full md:py-16 py-10 px-4 bg-white overflow-hidden">

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
        </div>
        <div className="relative w-full max-w-7xl mx-auto md:py-16 py-10 px-6 overflow-hidden font-monerap">

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
        </div>
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
      </section>
      <section className="bg-[#EAF0F6] lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 font-manrope">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-extrabold leading-[44px] mb-2">
            {/* <span className="text-primary-red">Frequently</span> */}
            <span className="text-[#06213F] block">Frequently Asked Questions</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <FAQCard faq={faq} key={idx} />
          ))}
        </div>
        {/* <div className="flex justify-center mt-10">
        <button className="bg-primary-red text-primary-white font-bold rounded-full px-8 py-3 shadow hover:bg-red-700 transition">
          GET EMIGRATION SUPPORT
        </button>
      </div> */}
      </section>
      <section className="max-w-7xl mx-auto lg:px-6 md:px-10 px-4 xl:py-10 lg:py-16 py-5 flex flex-col md:flex-row items-center gap-10">
        {/* Text & Buttons */}
        <div className="flex-1">
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-3 leading-tight">
            <span className="text-primary-red">Download </span>
            <span className="text-primary-navyblue"> Brochure</span>
          </h1>
          <p className="mb-8 text-primary-gray text-base font-medium leading-7">
            Join us on this journey as we share our expertise, ignite conversation
          </p>
          <div className="flex xl:flex-row flex-col gap-3 lg:w-full md:w-full w-full ">
            <button className="flex items-center justify-center gap-2 bg-primary-red px-4 lg:text-[14px] text-[12px] text-primary-white font-bold  py-2 hover:bg-primary-red transition">
              <img src={downloadwhite} alt="downloadwhite" className="" />{" "}
              VISA DOCUMENT CHECKLIST PDF
            </button>
            <button className="flex items-center justify-center gap-2 border-[#E74C3C] px-4 lg:text-[14px] text-[12px] border-[3px] text-primary-red font-bold py-2 transition">
              <img src={downloadred} alt="downloadred" className="" /> DOWNLOAD
              SAUDI WAKALA
            </button>
            <button className="flex items-center justify-center gap-2 px-4 lg:text-[14px] text-[12px] text-primary-red font-bold py-2 transition">
              <img src={downloadred} alt="downloadred" className="" /> RECRUITMENT FORM
            </button>
          </div>
        </div>
        {/* Illustration - replace with actual image */}
        <div>
          <img
            src={bowcher} // Replace with correct img path
            alt="Brochure Illustration"
            className="w-full lg:h-[300px] h-[280px]"
          />
        </div>
      </section>
      <SecurityAndPartners/>
      <section>
           <div className="bg-white pt-16 px-4 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold text-[#1a365d] mb-10">We're Official Partners</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="flex items-center bg-[#f0f4f8] p-2 rounded shadow-sm border border-gray-100"
              >
                <img 
                  src={partner.flagUrl} 
                  alt={partner.name} 
                  className="w-20 h-10 object-cover mr-3 shadow-sm" 
                />
                <span className="text-[14px] font-extrabold text-gray-700 tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Authorization Text */}
          <div className="text-primary-gray font-semibold text-[14px] leading-relaxed max-w-2xl mx-auto">
            <p>We're authorised by the Embassy (The Royal Embassy of Saudi Arabia)</p>
            <p>The Embassy of State of Kuwait</p>
            <p>The Consulate of State of Kuwait</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default VisaAssistance;
