import React, { useState } from 'react';
import { LuCirclePlus } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { IconType } from "react-icons";
import img1 from "../../../assets/images/Study Essentials.png"
import img2 from "../../../assets/images/universities.png"
import Award from '../../../assets/images/award.png';
import Target from '../../../assets/images/hundrade.png';
import Landmark from '../../../assets/images/education.png';
import Users from '../../../assets/images/counselling.png';
import bannerimg from "../../../assets/images/study-abroad-banner.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import mapimg from '../../../assets/images/map.png'
import roadmap from '../../../assets/images/road-map.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SecurityAndPartners from '../../SecurityAndPartners';

const IoIosArrowBackIcon = IoIosArrowBack as React.ElementType;
const IoIosArrowForwardIcon = IoIosArrowForward as React.ElementType;

interface StatItem {
  icon: string;
  title: string;
  desc: string;
  highlight: boolean;
}
interface CourseData {
  id: number;
  title: string;
  image: string;
  overlayText?: string;
  link: string;
}
interface Step {
  id: string;
  number: string;
  title: string;
  position: string; // Tailwind positioning classes
}
interface FAQItem {
  question: string;
  answer: string;
  iconOpen: IconType;
  iconClosed: IconType;
}

const faqs: FAQItem[] = [
  {
    question: "How does the study abroad process work?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "What are the requirements for a student visa?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "What are the requirements for a student visa?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  },
  {
    question: "What are the requirements for a student visa?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  }
];
// const steps: Step[] = [
//   { id: '1', number: '01', title: 'Profile Assessment & Counseling', position: 'bottom-[15%] left-[10%]' },
//   { id: '2', number: '02', title: 'University & Course Selection', position: 'bottom-[10%] left-[32%]' },
//   { id: '3', number: '03', title: 'Application Submission', position: 'top-[42%] left-[23%]' },
//   { id: '4', number: '04', title: 'Offer Letter & Scholarship', position: 'bottom-[35%] left-[45%]' },
//   { id: '5', number: '05', title: 'Visa Preparation & Interview', position: 'top-[22%] left-[42%]' },
//   { id: '6', number: '06', title: 'Pre-Departure Briefing', position: 'bottom-[45%] right-[25%]' },
//   { id: '7', number: '07', title: 'Arrival & Settling In', position: 'top-[10%] right-[35%]' },
// ];
const UniversityDisciplines: React.FC = () => {

  const stats: StatItem[] = [
    {
      icon: Award,
      title: "33+ Years of Excellence",
      desc: "A legacy built on trust, transparency, and results.",
      highlight: false
    },
    {
      icon: Target,
      title: "100% Success-Focused Guidance",
      desc: "From counselling to visa approval, every step is handled by experts.",
      highlight: true
    },
    {
      icon: Landmark,
      title: "Affordable Global Education",
      desc: "Study abroad opportunities starting at ₹9 Lakhs* with flexible options.",
      highlight: false
    },
    {
      icon: Users,
      title: "Personalised Counselling",
      desc: "Every student receives one-on-one career-focused guidance.",
      highlight: false
    }
  ];

  const benefits = [
    { title: "Access to globally recognised universities", img: "https://images.unsplash.com/photo-1498243639159-04980f576212?q=80&w=800" },
    { title: "Better career opportunities & international exposure", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
    { title: "Opportunity to work while studying", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800" },
    { title: "Multicultural learning environment", img: "https://images.unsplash.com/photo-1523240715639-99a8080f1e4c?q=80&w=800" },
    { title: "Pathways to global careers and PR opportunities", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { title: "Higher return on education investment", img: "https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?q=80&w=800" }
  ];

  const disciplines = [
    ["Accounting & Finance", "Architecture", "Artificial Intelligence", "Biotechnology", "Business & Management", "Computer Science", "Cyber Security", "Data Science", "Engineering"],
    ["Hospitality & Tourism", "Information Technology", "Law", "MBA", "Medicine & Healthcare", "Media & Communication", "Psychology", "Science & Research"]
  ];

  const essentials = [
    "Education Loans", "Money Transfer Services", "Health Insurance", "Student Banking",
    "Accommodation Assistance", "International SIM Cards", "Guardianship Services",
    "Forex Cards", "ISIC (International Student Identity Card)"
  ];
  const courseData: CourseData[] = [
    {
      id: 1,
      title: "Course Advice based on career goals",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
      overlayText: "RIGHT COURSE FOR YOUR CAREER",
      link: "#"
    },
    {
      id: 2,
      title: "University Shortlisting across top global institutions",
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=600",
      link: "#"
    },
    {
      id: 3,
      title: "QS World University Rankings based recommendations",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/QS_World_University_Rankings_Logo.svg/1200px-QS_World_University_Rankings_Logo.svg.png",
      link: "#"
    },
    {
      id: 4,
      title: "QS World University Rankings based recommendations",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/QS_World_University_Rankings_Logo.svg/1200px-QS_World_University_Rankings_Logo.svg.png",
      link: "#"
    },
    // Add more items to see the slider in action!
  ];
  const Programs = [
    { title: "Free Counseling & Profile Assessment", img: "https://images.unsplash.com/photo-1498243639159-04980f576212?q=80&w=800" },
    { title: "STEM Programs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
    { title: "Medicine Programs", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800" },
    { title: "Paramedics & Nursing Programs", img: "https://images.unsplash.com/photo-1523240715639-99a8080f1e4c?q=80&w=800" },
    { title: "Arts & Commerce Programs", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { title: "Film Making Programs", img: "https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?q=80&w=800" }
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 py-5 grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-14 items-center">

        <div className="lg:max-w-xl md:max-w-lg">
          <p className='text-[14px] text-primary-red'>{'Home > Service > Study Abroad'}</p>
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4 mt-1">
            <span className="text-primary-navyblue xl:leading-[59px] md:leading-[49px]">Build Your Future with Global Education</span>
          </h2>
          <p className="lg:pt-0 md:pt-2 text-primary-gray text-[16px] leading-7 font-medium">
            With over 33 years of trusted legacy, Nisa Travel Agency has helped thousands of students successfully begin their international education journey.
          </p>
          <div className="flex gap-5 items-center pt-8 font-bold text-[14px]">
            <button className="uppercase text-primary-white bg-primary-red px-6 py-2 ">
              Book a Free Consultation
            </button>

          </div>
        </div>
        <img
          src={bannerimg}
          alt="Happy Family"
          className=" lg:w-full md:w-[500px] w-full h-full mx-auto"
        />
      </section>
      <section className=" pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-center text-primary-navyblue mb-12">
            Why Study Abroad <span className="text-primary-red">With NTA</span>
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mb-20">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-6 text-primary-navyblue transition-all duration-300`}
              >
                <div className="mb-4">
                  <img src={stat.icon} alt={stat.title} className="w-10 h-10 object-contain" />
                </div>
                <h4 className="font-bold mb-2 text-[18px] leading-tight">{stat.title}</h4>
                <p className="text-sm  leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary-lightblue py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Benefits Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {benefits.map((benefit, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4 h-64 shadow-md">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h5 className="max-w-[70%] text-lg font-bold text-[#001f3f] leading-tight group-hover:text-primary-red transition-colors">
                  {benefit.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-0 py-10 relative">
        <h2 className="text-4xl font-bold text-center text-primary-navyblue mb-12">Find a Course</h2>

        <div className='xl:px-0 lg:px-10 md:px-0'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative"
          >
            {courseData.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="flex flex-col items-center">
                  {/* Image Container */}
                  <div className="relative aspect-[1.1/0.8] overflow-hidden rounded-2xl shadow-sm">
                    {/* {course.overlayText && (
                    <div className="absolute inset-0 bg-red-900/40 z-10 flex items-center p-8">
                      <p className="text-white text-2xl font-bold leading-tight w-2/3 uppercase">
                        {course.overlayText}
                      </p>
                    </div>
                  )} */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-[300px] h-full object-cover"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="mt-3 max-w-[80%] text-center space-y-2">
                    <h3 className="text-primary-navyblue font-extrabold text-[19px] leading-snug min-h-[3rem]">
                      {course.title}
                    </h3>
                    <a
                      href={course.link}
                      className="inline-block text-primary-red font-bold text-[12px] uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <button className="prev-button absolute left-[-10px] top-[40%] -translate-y-1/2 z-20 p-2 text-gray-800 hover:text-primary-red transition-colors">
              <IoIosArrowBackIcon size={32} strokeWidth={3} />
            </button>
            <button className="next-button absolute right-[-10px] top-[40%] -translate-y-1/2 z-20 p-2 text-gray-800 hover:text-primary-red transition-colors">
              <IoIosArrowForwardIcon size={32} strokeWidth={3} />
            </button>
          </Swiper>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Top Section: Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
          <div className="max-w-xl">
            <img
              src={img2}
              alt="University Building"
              className="w-full lg:h-[460px] md:h-[500px] object-cover"
            />
          </div>
          <div className="max-w-lg bg-primary-white text-primary-navyblue">
            <h2 className="text-3xl font-extrabold mb-6 leading-[42px]">
              Explore a wide range of disciplines offered by global universities:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 px-2">
              {disciplines.map((column, i) => (
                <ul key={i} className="space-y-1">
                  {column.map((item) => (
                    <li key={item} className="flex items-start text-sm font-extrabold">
                      <span className="mr-2 text-slate-900">•</span> {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <button className="mt-12 px-4 py-[6px] bg-primary-red text-primary-white font-bold text-sm hover:bg-red-800 transition-colors uppercase tracking-wider">
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Section: Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
          <div className="order-2 md:order-1 text-primary-navyblue max-w-lg bg-primary-white">
            <h2 className="text-3xl font-bold mb-6 leading-[42px]">
              Study Essentials, Everything you need beyond admissions.
            </h2>
            <ul className="space-y-1">
              {essentials.map((item) => (
                <li key={item} className="flex items-start text-sm font-extrabold px-2">
                  <span className="mr-2 text-slate-900">•</span> {item}
                </li>
              ))}
            </ul>
            <button className="mt-12 px-4 py-[6px] bg-primary-red text-primary-white font-bold text-sm hover:bg-red-800 transition-colors uppercase tracking-wider">
              Contact Us
            </button>
          </div>
          <div className="order-1 md:order-2 w-full">
            <img
              src={img1}
              alt="Student Studying"
              className="w-full lg:h-[460px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className='relative'>
        <img src={mapimg} alt='map-image' />
        <div className='absolute bottom-10 xl:px-[140px] lg:px-[100px] md:px-[50px]'> <p className='text-primary-white text-[14px]  text-center'>United Kingdom, Ireland, Germany, Canada, New Zealand, Australia, United States of America, France, Netherlands, Italy, Sweden, Switzerland, Denmark, Malaysia, Singapore, Japan, South Korea, China, United Arab Emirates, Russia, Bulgaria, Georgia, Kazakhstan, Uzbekistan, Philippines, Ukraine</p></div>
      </section>
      <SecurityAndPartners/>
      <section className="relative w-full mx-auto py-20 bg-white overflow-hidden">
        {/* Header Section */}
        <div className="xl:mb-12 md:mb-0 xl:pl-20 md:pl-10 pl-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] leading-tight max-w-md">
            Step-by-Step Study Abroad Process
          </h2>
        </div>

        {/* Roadmap Container */}
        <div className="relative md:min-h-[600px] min-h-[250px] w-full">
          {/* The Winding Road Background Image */}
          <div className="absolute left-0 lg:bottom-0 z-0">
            <img
              src={roadmap}
              alt="Roadmap path"
              className="w-full md:h-[620px] object-contain opacity-90"
            />
          </div>

          {/* Markers and Labels Overlay */}
          {/* {steps.map((step) => (
          <div 
            key={step.id} 
            className={`absolute z-10 flex flex-col items-center group transition-transform hover:scale-105 ${step.position}`}
          >
           
            <div className="relative mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#e31e24] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {step.number}
              </div>
            
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#e31e24]"></div>
            </div>

          
            <div className="w-32 md:w-40 text-center">
              <p className="text-[#002147] font-bold text-xs md:text-sm leading-tight">
                {step.title}
              </p>
            </div>
          </div>
        ))} */}
        </div>

        {/* Bottom Right Description */}
        <div className="absolute md:bottom-10 md:right-10 right-5 max-w-xs text-right block">
          <p className="text-gray-500 md:text-sm text-[12px] leading-relaxed">
            A quick guide to various visa types, helping you understand their purpose, eligibility, and use for work, travel, study, medical, and family needs.
          </p>
        </div>
      </section>
      <section className="bg-primary-lightblue py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Benefits Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {Programs.map((benefit, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl flex justify-center mb-4 h-44 w-[300px] shadow-md">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h5 className="max-w-[70%] text-lg font-extrabold text-[#001f3f] leading-tight group-hover:text-primary-red transition-colors">
                  {benefit.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className="bg-[#ED1A3A] text-white p-8 md:p-12 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Left Side: Logo */}
          <div className="text-6xl md:text-8xl font-black tracking-tighter">
            IELTS<span className="text-sm font-normal align-top text-primary-navyblue">™</span>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6 lg:mr-28">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base font-bold">
              <li>Book an IELTS Test</li>
              <li>What is IELTS?</li>
              <li>IELTS Preparation & Training</li>
            </ul>

            <button className="bg-primary-white text-primary-navyblue font-bold py-2 px-6 hover:bg-gray-100 transition-colors w-fit uppercase text-sm tracking-wider">
              Prepare for IELTS
            </button>
          </div>
        </div>
        <div className="py-16 px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-navyblue mb-2">
            Prefer to <span className="text-primary-red">Study in India</span>
          </h2>

          <p className="text-primary-navyblue font-extrabold text-lg leading-relaxed mb-8">
            We also assist students with admissions to leading Indian universities
            and institutions, helping them choose the right course and college
            based on their career goals.
          </p>

          <button className="bg-primary-red text-white font-bold py-2 px-8 hover:bg-red-700 transition-all uppercase text-sm tracking-wide">
            Explore Study in India
          </button>
        </div>
      </section>
      <section className="bg-[#EAF0F6] lg:px-8 md:px-12 px-4 pt-5 font-manrope">
        <div className=" text-center mb-10">
          <h2 className="md:text-5xl text-3xl font-extrabold lg:leading-[64px] mb-2">
            <span className="text-primary-red block md:mb-3">Frequently</span>
            <span className="text-[#06213F]  ">Asked Questions</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => {
            // Yahan check ho raha hai ki ye wala index open hai ya nahi
            const isOpen = activeIndex === idx;
            const IconComponent = (isOpen ? faq.iconClosed : faq.iconOpen) as React.ElementType;
            return (
              <div
                key={idx}
                className={`bg-primary-white rounded-3xl mb-4 px-6 py-5 transition-all duration-300 shadow-sm cursor-pointer ${isOpen ? "border border-[#c3d5eb]" : ""
                  }`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center justify-between font-extrabold text-[#002661]">
                  <span className="text-lg">{faq.question}</span>
                  <span>
                    <IconComponent className="font-extrabold text-[25px]" />
                  </span>
                </div>

                {isOpen && (
                  <div className="max-w-[80%] mt-2 text-[#002661] text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-primary-red text-primary-white font-bold px-8 py-3 shadow hover:bg-red-700 transition">
            Book a Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default UniversityDisciplines;