import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { API_CONFIG } from "../../../config/apiConfig";

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
  position: string;
}
interface FAQItem {
  question: string;
  answer: string;
  iconOpen: IconType;
  iconClosed: IconType;
}

// Fallback FAQs
const fallbackFaqs: FAQItem[] = [
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

const UniversityDisciplines: React.FC = () => {

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await fetch(`${API_CONFIG.BASE_URL}/study-abroad-page`, {
          headers: API_CONFIG.HEADERS,
        });
        const result = await res.json();
        if (result.status === "success" || result.success) {
          setPageData(result.data);
        }
      } catch (error) {
        console.error("Study abroad page fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPageData();
  }, []);

  // ── Fallback static data ──
  const fallbackStats: StatItem[] = [
    { icon: Award, title: "33+ Years of Excellence", desc: "A legacy built on trust, transparency, and results.", highlight: false },
    { icon: Target, title: "100% Success-Focused Guidance", desc: "From counselling to visa approval, every step is handled by experts.", highlight: true },
    { icon: Landmark, title: "Affordable Global Education", desc: "Study abroad opportunities starting at ₹9 Lakhs* with flexible options.", highlight: false },
    { icon: Users, title: "Personalised Counselling", desc: "Every student receives one-on-one career-focused guidance.", highlight: false }
  ];

  const fallbackBenefits = [
    { caption: "Access to globally recognised universities", image_url: "https://images.unsplash.com/photo-1498243639159-04980f576212?q=80&w=800" },
    { caption: "Better career opportunities & international exposure", image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
    { caption: "Opportunity to work while studying", image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800" },
    { caption: "Multicultural learning environment", image_url: "https://images.unsplash.com/photo-1523240715639-99a8080f1e4c?q=80&w=800" },
    { caption: "Pathways to global careers and PR opportunities", image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { caption: "Higher return on education investment", image_url: "https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?q=80&w=800" }
  ];

  const fallbackDisciplines = ["Accounting & Finance", "Architecture", "Artificial Intelligence", "Biotechnology", "Business & Management", "Computer Science", "Cyber Security", "Data Science", "Engineering", "Hospitality & Tourism", "Information Technology", "Law", "MBA", "Medicine & Healthcare", "Media & Communication", "Psychology", "Science & Research"];

  const fallbackEssentials = [
    "Education Loans", "Money Transfer Services", "Health Insurance", "Student Banking",
    "Accommodation Assistance", "International SIM Cards", "Guardianship Services",
    "Forex Cards", "ISIC (International Student Identity Card)"
  ];

  const fallbackCourseData = [
    { id: 1, title: "Course Advice based on career goals", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600", link: "#" },
    { id: 2, title: "University Shortlisting across top global institutions", image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=600", link: "#" },
    { id: 3, title: "QS World University Rankings based recommendations", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/QS_World_University_Rankings_Logo.svg/1200px-QS_World_University_Rankings_Logo.svg.png", link: "#" },
    { id: 4, title: "QS World University Rankings based recommendations", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/QS_World_University_Rankings_Logo.svg/1200px-QS_World_University_Rankings_Logo.svg.png", link: "#" },
  ];

  const fallbackPrograms = [
    { title: "Free Counseling & Profile Assessment", image_url: "https://images.unsplash.com/photo-1498243639159-04980f576212?q=80&w=800" },
    { title: "STEM Programs", image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
    { title: "Medicine Programs", image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800" },
    { title: "Paramedics & Nursing Programs", image_url: "https://images.unsplash.com/photo-1523240715639-99a8080f1e4c?q=80&w=800" },
    { title: "Arts & Commerce Programs", image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { title: "Film Making Programs", image_url: "https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?q=80&w=800" }
  ];

  // ── Derived data from API or fallbacks ──
  const hero = pageData?.hero;
  const breadcrumb = pageData?.breadcrumb || 'Home > Service > Study Abroad';
  const whyStudyAbroad = pageData?.why_study_abroad;
  const stats = whyStudyAbroad?.benefits || fallbackStats;
  const benefitCards = pageData?.benefit_cards || fallbackBenefits;
  const findACourse = pageData?.find_a_course;
  const courseCards = findACourse?.cards || fallbackCourseData;
  const disciplineItems = pageData?.disciplines?.items || fallbackDisciplines;
  const halfLen = Math.ceil(disciplineItems.length / 2);
  const disciplines = [disciplineItems.slice(0, halfLen), disciplineItems.slice(halfLen)];
  const essentials = pageData?.study_essentials?.items || fallbackEssentials;
  const programs = pageData?.programs?.items || fallbackPrograms;
  const faqs = pageData?.faq?.items || fallbackFaqs;
  const ieltsLinks = pageData?.ielts?.links || [{ label: 'Book an IELTS Test' }, { label: 'What is IELTS?' }, { label: 'IELTS Preparation & Training' }];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-primary-red border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 py-5 grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-14 items-center">
        <div className="lg:max-w-xl md:max-w-lg">
          <p className='text-[14px] text-primary-red'>{breadcrumb}</p>
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4 mt-1">
            <span className="text-primary-navyblue xl:leading-[59px] md:leading-[49px]">
              {hero?.title || 'Build Your Future with'}{' '}
              <span className="text-primary-red">{hero?.title_highlight || 'Global Education'}</span>
            </span>
          </h2>
          <p className="lg:pt-0 md:pt-2 text-primary-gray text-[16px] leading-7 font-medium">
            {hero?.description || 'With over 33 years of trusted legacy, Nisa Travel Agency has helped thousands of students successfully begin their international education journey.'}
          </p>
          <div className="flex gap-5 items-center pt-8 font-bold text-[14px]">
            <Link to={hero?.cta?.link || '/contact'} className="uppercase text-primary-white bg-primary-red px-6 py-2 ">
              {hero?.cta?.text || 'Book a Free Consultation'}
            </Link>
          </div>
        </div>
        <img
          src={hero?.image_url || bannerimg}
          alt="Happy Family"
          className=" lg:w-full md:w-[500px] w-full h-full mx-auto"
        />
      </section>

      {/* ── Why Study Abroad Section ── */}
      <section className=" pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-primary-navyblue mb-12">
            {whyStudyAbroad?.title || 'Why Study Abroad'}{' '}
            <span className="text-primary-red">{whyStudyAbroad?.title_highlight || 'With NTA'}</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mb-20">
            {stats.map((stat: any, i: number) => (
              <div key={i} className={`p-6 text-primary-navyblue transition-all duration-300`}>
                <div className="mb-4">
                  {typeof stat.icon === 'string' && stat.icon.startsWith('fa-') ? (
                    <i className={`${stat.icon} text-4xl text-primary-red`}></i>
                  ) : (
                    <img src={stat.icon || Award} alt={stat.title} className="w-10 h-10 object-contain" />
                  )}
                </div>
                <h4 className="font-bold mb-2 text-[18px] leading-tight">{stat.title}</h4>
                <p className="text-sm  leading-relaxed">{stat.description || stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefit Cards Section ── */}
      <section className="bg-primary-lightblue py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {benefitCards.map((benefit: any, i: number) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4 h-64 shadow-md">
                  <img
                    src={benefit.image_url || bannerimg}
                    alt={benefit.caption || 'Benefit'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h5 className="max-w-[70%] text-lg font-bold text-[#001f3f] leading-tight group-hover:text-primary-red transition-colors">
                  {benefit.caption}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Find a Course Section ── */}
      <section className="max-w-7xl mx-auto px-0 py-10 relative">
        <h2 className="text-4xl font-bold text-center text-primary-navyblue mb-12">
          {findACourse?.title || 'Find a Course'}
        </h2>

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
            {courseCards.map((course: any, index: number) => (
              <SwiperSlide key={course.id || index}>
                <div className="flex flex-col items-center">
                  <div className="relative aspect-[1.1/0.8] overflow-hidden rounded-2xl shadow-sm">
                    <img
                      src={course.image_url || course.image || bannerimg}
                      alt={course.title}
                      className="w-[300px] h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 max-w-[80%] text-center space-y-2">
                    <h3 className="text-primary-navyblue font-extrabold text-[19px] leading-snug min-h-[3rem]">
                      {course.title}
                    </h3>
                    {course.description && (
                      <p className="text-sm text-gray-500 line-clamp-2">{course.description}</p>
                    )}
                    <Link
                      to={course.link || "#"}
                      className="inline-block text-primary-red font-bold text-[12px] uppercase tracking-wide hover:underline decoration-2 underline-offset-4"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <button className="prev-button absolute left-[-10px] top-[40%] -translate-y-1/2 z-20 p-2 text-gray-800 hover:text-primary-red transition-colors">
              <IoIosArrowBackIcon size={32} strokeWidth={3} />
            </button>
            <button className="next-button absolute right-[-10px] top-[40%] -translate-y-1/2 z-20 p-2 text-gray-800 hover:text-primary-red transition-colors">
              <IoIosArrowForwardIcon size={32} strokeWidth={3} />
            </button>
          </Swiper>
        </div>
      </section>

      {/* ── Disciplines & Study Essentials Section ── */}
      <section className="max-w-7xl mx-auto px-4 py-10 space-y-10">
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
              {pageData?.disciplines?.title || 'Explore a wide range of disciplines offered by global universities:'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 px-2">
              {disciplines.map((column: any, i: number) => (
                <ul key={i} className="space-y-1">
                  {column.map((item: any) => (
                    <li key={item} className="flex items-start text-sm font-extrabold">
                      <span className="mr-2 text-slate-900">•</span> {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <Link to="/contact">
              <button className="mt-12 px-4 py-[6px] bg-primary-red text-primary-white font-bold text-sm hover:bg-red-800 transition-colors uppercase tracking-wider">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
          <div className="order-2 md:order-1 text-primary-navyblue max-w-lg bg-primary-white">
            <h2 className="text-3xl font-bold mb-6 leading-[42px]">
              {pageData?.study_essentials?.title || 'Study Essentials'}, Everything you need beyond admissions.
            </h2>
            <ul className="space-y-1">
              {essentials.map((item: any) => (
                <li key={item} className="flex items-start text-sm font-extrabold px-2">
                  <span className="mr-2 text-slate-900">•</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <button className="mt-12 px-4 py-[6px] bg-primary-red text-primary-white font-bold text-sm hover:bg-red-800 transition-colors uppercase tracking-wider">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="order-1 md:order-2 w-full">
            <img
              src={pageData?.study_essentials?.image_url || img1}
              alt="Student Studying"
              className="w-full lg:h-[460px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Countries Map Section ── */}
      <section className='relative w-full overflow-hidden'>
        <img src={pageData?.countries?.map_image_url || mapimg} alt='map-image' className='w-full object-cover' />
        {pageData?.countries?.text && (
          <div className='absolute bottom-10 xl:px-[140px] lg:px-[100px] md:px-[50px] w-full'>
            <p className='text-primary-white text-[14px] text-center max-w-4xl mx-auto font-medium'>
              {pageData.countries.text}
            </p>
          </div>
        )}
      </section>

      <SecurityAndPartners />

      {/* ── Step-by-Step Process Section ── */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto xl:mb-12 md:mb-0 xl:pl-10 md:pl-10 pl-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] leading-tight max-w-md">
            {pageData?.process?.title || 'Step-by-Step Study Abroad Process'}
          </h2>
        </div>
        <div className="relative md:min-h-[600px] min-h-[250px] w-full">
          <div className="absolute left-0 lg:bottom-0 z-0">
            <img
              src={pageData?.process?.image_url || roadmap}
              alt="Roadmap path"
              className="max-w-8xl mx-auto w-full md:h-[620px] object-contain opacity-90"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto absolute md:bottom-10 md:right-10 right-5 max-w-xs text-right block">
          <p className="text-gray-500 md:text-sm text-[12px] leading-relaxed">
            A quick guide to various visa types, helping you understand their purpose, eligibility, and use for work, travel, study, medical, and family needs.
          </p>
        </div>
      </section>

      {/* ── Programs Section ── */}
      <section className="bg-primary-lightblue py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147]">
              {pageData?.programs?.title || 'Programs we offer'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {programs.map((program: any, i: number) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl flex justify-center mb-4 h-44 w-[300px] shadow-md">
                  <img
                    src={program.image_url || bannerimg}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h5 className="max-w-[70%] text-lg font-extrabold text-[#001f3f] leading-tight group-hover:text-primary-red transition-colors">
                  {program.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IELTS & Study in India Section ── */}
      <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className="bg-[#C61C30] text-white p-8 md:p-12 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="text-6xl md:text-8xl font-black tracking-tighter">
            IELTS<span className="text-sm font-normal align-top text-primary-navyblue">™</span>
          </div>
          <div className="flex flex-col gap-6 lg:mr-28">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base font-bold">
              {ieltsLinks.map((link: any, i: number) => (
                <li key={i}>{link.label}</li>
              ))}
            </ul>
            <Link to={pageData?.ielts?.cta?.link || '/contact'}>
              <button className="bg-primary-white text-primary-navyblue font-bold py-2 px-6 hover:bg-gray-100 transition-colors w-fit uppercase text-sm tracking-wider">
                {pageData?.ielts?.cta?.text || 'Prepare for IELTS'}
              </button>
            </Link>
          </div>
        </div>

        {/* ── Study in India ── */}
        <div className="py-16 px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-navyblue mb-2">
            {pageData?.study_in_india?.title || (
              <>Prefer to <span className="text-primary-red">Study in India</span></>
            )}
          </h2>
          <p className="text-primary-navyblue font-extrabold text-lg leading-relaxed mb-8">
            {pageData?.study_in_india?.description || 'We also assist students with admissions to leading Indian universities and institutions, helping them choose the right course and college based on their career goals.'}
          </p>
          <Link to={pageData?.study_in_india?.cta?.link || '/contact'}>
            <button className="bg-primary-red text-white font-bold py-2 px-8 hover:bg-red-700 transition-all uppercase text-sm tracking-wide">
              {pageData?.study_in_india?.cta?.text || 'Explore Study in India'}
            </button>
          </Link>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-[#EAF0F6] lg:px-8 md:px-12 px-4 pt-5 font-manrope">
        <div className=" text-center mb-10">
          <h2 className="md:text-5xl text-3xl font-extrabold lg:leading-[64px] mb-2">
            <span className="text-primary-red block md:mb-3">{pageData?.faq?.title || 'Frequently'}</span>
            <span className="text-[#06213F]  ">{pageData?.faq?.title_highlight || 'Asked Questions'}</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq: any, idx: number) => {
            const isOpen = activeIndex === idx;
            const IconComponent = (isOpen ? (faq.iconClosed || RxCrossCircled) : (faq.iconOpen || LuCirclePlus)) as React.ElementType;
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
          {pageData?.faq?.cta ? (
            <Link to={pageData.faq.cta.link}>
              <button className="bg-primary-red text-primary-white font-bold px-8 py-3 shadow hover:bg-red-700 transition">
                {pageData.faq.cta.text}
              </button>
            </Link>
          ) : (
            <button className="bg-primary-red text-primary-white font-bold px-8 py-3 shadow hover:bg-red-700 transition">
              Book a Free Consultation
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default UniversityDisciplines;