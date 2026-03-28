import React, { useState, useEffect } from "react";
import familyImg from "../../assets/images/visasection.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import imgprevention from '../../assets/images/imgprevention.png';
import { BsPatchCheckFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import img from "../../assets/images/Rectangle.png";
import downloadwhite from "../../assets/images/download-white.svg";
import downloadred from "../../assets/images/download-red.svg";
import bowcher from "../../assets/images/bowcher.webp";
import 'swiper/css';
import 'swiper/css/pagination';
import { LuCirclePlus } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { IconType } from "react-icons";
import flagUrl1 from '../../assets/images/saudiflag.png';
import flagUrl2 from '../../assets/images/kuwaithflag.png';
import flagUrl3 from '../../assets/images/qater.png';
import flagUrl4 from '../../assets/images/bahrain.png';
import flagUrl5 from '../../assets/images/omanflag.png';
import flagUrl6 from '../../assets/images/uaeflag.png';
import flagUrl7 from '../../assets/images/iraqflag.png';
import SecurityAndPartners from "../SecurityAndPartners";
import { API_CONFIG } from "../../config/apiConfig";
import wakalaPdf from "../../assets/pdf/NTA Wakala.pdf";
import { handleWakalaDownload } from "../../utils/downloadHelpers";

const GrLocationIcon = HiOutlineLocationMarker as React.ElementType;
const IoIosArrowDownIcon = IoIosArrowDown as React.ElementType;
const IoArrowBackOutlineIcon = BsPatchCheckFill as React.ElementType;

// ── Types ────────────────────────────────────────────────
interface HeroData {
  title: string;
  title_highlight: string;
  description: string;
  image_url: string;
  cta: { text: string; link: string };
}
interface StatItem { label: string; value: string; icon: string; }
interface FeatureItem { icon: string; label: string; }
interface RiskItem { title: string; icon?: string; }
interface FAQItem { question: string; answer: string; iconOpen: IconType; iconClosed: IconType; }
interface BrochureFile { label: string; file_url: string; }
interface PartnerItem { name: string; logo_url: string; }
interface SecurityBadge { name: string; logo_url: string; }
interface StampingDoc { title: string; sort_order: number; condition?: string; }
interface StampingRecord {
  id: number;
  title: string;
  country: { id: number; name: string; flag_icon: string };
  category: { id: number; name: string; slug: string };
  overview: string;
  process: string;
  timeline: string;
  price: string;
  price_note: string;
  note: string | null;
  documents: StampingDoc[];
  supporting_documents: StampingDoc[];
}
interface MasterCountry { id: number; name: string; flag_icon: string; }
interface MasterCategory { id: number; name: string; slug: string; }

interface ApiData {
  page: {
    hero: HeroData;
    visa_types?: { title: string; title_highlight: string; description: string };
    why_choose_us?: { title: string; title_highlight: string; stats: StatItem[] };
    processing_updates?: { title: string; features: FeatureItem[] };
    risk_prevention?: { title: string; image_url: string; items: RiskItem[] };
    faq?: { title: string; items: { question: string; answer: string }[] };
    brochure?: { title: string; files: BrochureFile[] };
    partners?: { title: string; items: PartnerItem[] };
    security?: { title: string; badges: SecurityBadge[] };
  };
  masters: {
    countries: MasterCountry[];
    categories: MasterCategory[];
  };
  stampings: StampingRecord[];
}

// ── Default/Fallback static data ─────────────────────────
const defaultPartners = [
  { name: 'SAUDI EMBASSY', flagUrl: flagUrl1 },
  { name: 'KUWAIT EMBASSY', flagUrl: flagUrl2 },
  { name: 'QATAR EMBASSY', flagUrl: flagUrl3 },
  { name: 'BAHRAIN EMBASSY', flagUrl: flagUrl4 },
  { name: 'OMAN EMBASSY', flagUrl: flagUrl5 },
  { name: 'UAE EMBASSY', flagUrl: flagUrl6 },
  { name: 'IRAQ EMBASSY', flagUrl: flagUrl7 },
];

const defaultRiskItems = [
  { id: '01', text: 'Rejections due to incomplete documents', icon: '📝' },
  { id: '02', text: 'Embassy form errors', icon: '📋' },
  { id: '03', text: 'Attestation mismatches', icon: '🔍' },
  { id: '04', text: 'Photograph non-compliance', icon: '🖼️' },
  { id: '05', text: 'Medical or PCC issues', icon: '🏥' },
];

const defaultUpdates = [
  { text: "Live application status" },
  { text: "WhatsApp updates" },
  { text: "Alerts when embassy processing changes" },
  { text: "Timeline predictions" },
  { text: "Dedicated account manager" },
];

const defaultSlides = [
  { id: 1, title: "UAE Visa Medical Rules Updated (Nov 2025)" },
  { id: 2, title: "Saudi Embassy Guidelines Updated (Nov 2025)" },
  { id: 3, title: "Qatar Attestation Process Updated (Nov 2025)" },
];

// ── Expandable FAQ Card ──────────────────────────────────
const FAQCard: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [open, setOpen] = useState(false);
  const Icon = open ? faq.iconClosed : faq.iconOpen;
  const IconComponent = Icon as React.ElementType;
  return (
    <div
      className={`bg-primary-white rounded-3xl mb-4 px-6 py-5 transition-all duration-300 shadow-sm cursor-pointer ${open ? "border border-[#c3d5eb]" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between font-extrabold text-[#002661]">
        <span className="text-lg">{faq.question}</span>
        <span><IconComponent className="font-extrabold text-[25px]" /></span>
      </div>
      {open && faq.answer && (
        <div className="max-w-[80%] mt-2 text-[#002661] text-sm">{faq.answer}</div>
      )}
    </div>
  );
};

// ── Stamping Detail Modal ────────────────────────────────
const StampingModal: React.FC<{ stamping: StampingRecord; onClose: () => void }> = ({ stamping, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      onClick={e => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold">✕</button>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{stamping.country.flag_icon}</span>
        <div>
          <h3 className="text-2xl font-extrabold text-[#002661]">{stamping.title}</h3>
          <span className="text-sm font-semibold text-white bg-primary-red px-3 py-1 rounded-full">{stamping.category.name}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#EAF0F6] rounded-xl p-4">
          <p className="text-xs text-gray-500 font-semibold">Timeline</p>
          <p className="text-[#002661] font-extrabold">{stamping.timeline}</p>
        </div>
        <div className="bg-[#EAF0F6] rounded-xl p-4">
          <p className="text-xs text-gray-500 font-semibold">Price</p>
          <p className="text-[#002661] font-extrabold">{stamping.price}</p>
        </div>
      </div>
      {stamping.overview && (
        <div className="mb-4">
          <h4 className="font-extrabold text-[#002661] mb-1">Overview</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{stamping.overview}</p>
        </div>
      )}
      {stamping.process && (
        <div className="mb-4">
          <h4 className="font-extrabold text-[#002661] mb-1">Process</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{stamping.process}</p>
        </div>
      )}
      {stamping.documents?.length > 0 && (
        <div className="mb-4">
          <h4 className="font-extrabold text-[#002661] mb-2">Required Documents</h4>
          <ul className="space-y-1">
            {stamping.documents.map((doc, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500 font-bold">✓</span> {doc.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {stamping.supporting_documents?.length > 0 && (
        <div className="mb-4">
          <h4 className="font-extrabold text-[#002661] mb-2">Supporting Documents</h4>
          <ul className="space-y-1">
            {stamping.supporting_documents.map((doc, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-blue-400 font-bold">•</span>
                {doc.title}
                {doc.condition && <span className="text-xs text-gray-400">({doc.condition})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
      {stamping.price_note && (
        <p className="text-xs text-gray-400 mt-4 italic">{stamping.price_note}</p>
      )}
    </div>
  </div>
);

// ── Main Component ───────────────────────────────────────
const VisaAssistance = () => {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_CONFIG.BASE_URL}/visa-stamping-page`, {
          headers: API_CONFIG.HEADERS,
        });
        const result = await res.json();
        if (result.success && result.data) {
          setApiData(result.data);
        }
      } catch (err) {
        console.error("Visa stamping page fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ── Derived data ──
  const hero = apiData?.page?.hero;
  const stats = apiData?.page?.why_choose_us?.stats ?? [];
  const whyTitle = apiData?.page?.why_choose_us?.title ?? "Why Choose";
  const whyHighlight = apiData?.page?.why_choose_us?.title_highlight ?? "Nisa Travels";
  const updates = apiData?.page?.processing_updates?.features ?? defaultUpdates;
  const updatesTitle = apiData?.page?.processing_updates?.title ?? "Real-Time Visa Processing Updates";
  const riskItems = apiData?.page?.risk_prevention?.items
    ? apiData.page.risk_prevention.items.map((item, i) => ({
        id: String(i + 1).padStart(2, '0'),
        text: item.title,
        icon: item.icon ?? '📋',
      }))
    : defaultRiskItems;
  const riskTitle = apiData?.page?.risk_prevention?.title ?? "Risk and Error Prevention";
  const faqs: FAQItem[] = (apiData?.page?.faq?.items ?? []).map(f => ({
    question: f.question,
    answer: f.answer,
    iconOpen: LuCirclePlus,
    iconClosed: RxCrossCircled,
  }));
  const faqTitle = apiData?.page?.faq?.title ?? "Frequently Asked Questions";
  const brochureFiles = apiData?.page?.brochure?.files ?? [];
  const brochureTitle = apiData?.page?.brochure?.title ?? "Download Brochure";
  const countries = apiData?.masters?.countries ?? [];
  const categories = apiData?.masters?.categories ?? [];
  const allStampings = apiData?.stampings ?? [];
  const filteredStampings = allStampings.filter(s => {
    const matchCountry = selectedCountry ? s.country.name === selectedCountry : true;
    const matchCategory = selectedCategory ? s.category.slug === selectedCategory : true;
    return matchCountry && matchCategory;
  });

  // Visa categories from masters for the "We Support All Visa Types" section
  const visaCategoryColors = [
    "bg-teal-900/60", "bg-slate-900/60", "bg-gray-900/60",
    "bg-indigo-900/60", "bg-orange-500/60", "bg-cyan-500/60",
    "bg-sky-600/60", "bg-stone-600/60", "bg-teal-500/60"
  ];

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-24 md:pt-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-14 items-center">
          <div>
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
              <span className="text-primary-red">
                {loading ? "Visa Stamping" : (hero?.title ?? "Professional Visa")}
              </span>
              <span className="text-primary-navyblue pl-2">
                {loading ? "Services" : (hero?.title_highlight ?? "Stamping Services")}
              </span>
            </h2>
            <p className="lg:pt-0 md:pt-2 text-primary-gray text-[16px] leading-7 font-medium">
              {loading
                ? "Our visa experts guide you through every step — from document preparation to application submission — ensuring a smooth and successful process."
                : (hero?.description ?? "Expert visa stamping assistance for all your international travel needs.")}
            </p>
            <div className="pt-8 font-bold text-[18px]">
              <a href={hero?.cta?.link ?? "/contact"}>
                <button className="text-[16px] uppercase text-primary-white bg-primary-red px-8 py-2">
                  {hero?.cta?.text ?? "GET STARTED"}
                </button>
              </a>
            </div>
          </div>
          <img
            src={hero?.image_url ?? familyImg}
            alt="Visa Stamping"
            className="w-full mx-auto lg:order-1 order-2 rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).src = familyImg; }}
          />
        </div>

        {/* ── Filter Bar ── */}
        <div className="w-full flex justify-center pt-20">
          <div className="md:bg-primary-lightblue rounded-xl flex flex-col items-center w-fit lg:px-20 md:px-10 md:py-8">
            <div className="flex md:flex-row flex-col gap-4 text-lg font-bold text-[#002661]">
              <div className="flex gap-4">
                <p>I'm applying for</p>
                <div className="flex items-center bg-white w-fit rounded py-[2px] px-2 shadow-[0px_18px_40px_0px_#190F091A]">
                  <select
                    className="pl-1 pr-3 text-[13px] font-medium opacity-[80%] text-[#444444] outline-none appearance-none"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Visa Type</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.slug}>{cat.name}</option>
                    ))}
                  </select>
                  <IoIosArrowDownIcon className="cursor-pointer text-gray-400 text-[14px]" />
                </div>
              </div>
              <div className="flex gap-4">
                <p>and I'm going to</p>
                <div className="flex items-center bg-white w-fit rounded py-[2px] px-2 shadow-[0px_18px_40px_0px_#190F091A]">
                  <GrLocationIcon className="text-gray-400 text-[15px]" />
                  <select
                    className="pl-1 pr-3 text-[13px] font-medium opacity-[80%] text-[#444444] outline-none appearance-none"
                    value={selectedCountry}
                    onChange={e => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {countries.map(c => (
                      <option key={c.id} value={c.name}>{c.flag_icon} {c.name}</option>
                    ))}
                  </select>
                  <IoIosArrowDownIcon className="cursor-pointer text-gray-400 text-[14px]" />
                </div>
              </div>
            </div>
            <button
              className="mt-5 md:px-10 px-5 md:py-2 py-1 border-2 border-[#002661] text-[#002661] font-bold hover:bg-[#19303D] hover:text-primary-white transition"
              onClick={() => {
                const country = selectedCountry;
                if (country) {
                  window.open(`/visa-stamping/${encodeURIComponent(country)}`, '_blank');
                }
              }}
            >
              SEARCH VISA STAMPING
            </button>
          </div>
        </div>
      </section>

      {/* ── Visa Types Section (from masters.categories) ── */}
      <section className="max-w-7xl mx-auto px-4 py-12 font-Manrope">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              We Support All <br />
              <span className="text-primary-red">
                {apiData?.page?.visa_types?.title_highlight ?? "Visa Types"}
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-sm leading-relaxed">
              {apiData?.page?.visa_types?.description ??
                "A quick guide to various visa types, helping you understand their purpose, eligibility, and use for work, travel, study, medical, and family needs."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(categories.length > 0 ? categories : [
            { id: 1, name: "Work Visa", slug: "work-visa" },
            { id: 2, name: "Business Visa", slug: "business-visa" },
            { id: 3, name: "Dependent Visa", slug: "dependent-visa" },
            { id: 4, name: "Family Visa", slug: "family-visa" },
            { id: 5, name: "Medical Visa", slug: "medical-visa" },
            { id: 6, name: "Student Visa", slug: "student-visa" },
          ]).map((cat, index) => (
            <div
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-lg"
              onClick={() => { setSelectedCategory(cat.slug); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className={`absolute inset-0 ${visaCategoryColors[index % visaCategoryColors.length]} opacity-90`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-primary-white mb-2">{cat.name}</h3>
                <p className="text-primary-white/80 text-xs">Click to explore stamping options →</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us Stats ── */}
      {stats.length > 0 && (
        <section className="bg-[#002661] py-12 px-4 font-manrope">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-extrabold text-white">
              {whyTitle} <span className="text-primary-red">{whyHighlight}</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-sm text-white/70 font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Processing Updates & Risk Prevention ── */}
      <section>
        <div className="font-manrope w-full md:py-16 py-10 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:mb-16 mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#002d5b]">
                {updatesTitle}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
              {updates.map((update: any, index: number) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="text-blue-600">
                    {update.icon
                      ? <span className="text-2xl">{update.icon}</span>
                      : <IoArrowBackOutlineIcon size={28} fill="currentColor" className="text-primary-white fill-blue-600" />
                    }
                  </div>
                  <p className="text-[#002d5b] font-extrabold text-sm md:text-base leading-tight">
                    {update.label ?? update.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Prevention */}
        <div className="relative w-full max-w-7xl mx-auto md:py-16 py-10 px-6 overflow-hidden font-monerap">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-20 gap-8 items-start relative z-10">
            <div className="md:col-span-5">
              <h2 className="md:text-4xl text-3xl font-extrabold text-[#06213F] mb-2">
                {riskTitle.split(' ').slice(0, -2).join(' ')} <br />
                <span className="text-primary-red">{riskTitle.split(' ').slice(-2).join(' ')}</span>
              </h2>
              <div className="mt-8 rounded-2xl overflow-hidden">
                <img
                  src={apiData?.page?.risk_prevention?.image_url ?? imgprevention}
                  alt="Risk Assessment"
                  className="w-full h-auto object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = imgprevention; }}
                />
              </div>
            </div>
            <div className="md:block hidden md:col-span-1 pt-4"></div>
            <div className="md:col-span-6 pt-4">
              <p className="text-gray-500 text-[14px] md:text-[16px] mb-10 max-w-lg leading-relaxed">
                With over 1.5M documents processed, 50k+ global customers, and 7k+ successful
                overseas recruitments across 33 years, our track record reflects trust, efficiency, and proven expertise worldwide.
              </p>
              <div className="space-y-3">
                {riskItems.map((item) => (
                  <div key={item.id} className="flex items-stretch gap-2 group cursor-default">
                    <div className="bg-primary-lightblue text-[#002d5b] text-[18px] font-extrabold px-4 flex items-center justify-center rounded-md">
                      {item.id}
                    </div>
                    <div className="bg-primary-lightblue flex-1 px-4 py-3 flex items-center gap-3 rounded-md group-hover:bg-[#e6ecf2] transition-colors">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-[#002d5b] font-extrabold text-[16px] md:text-base">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Swiper / Processing Slides */}
        <div className="w-full max-w-7xl mx-auto px-4 md:py-10 py-5 relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: false }}
            className="rounded-3xl overflow-visible"
          >
            {defaultSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative bg-[#001d3d] min-h-[150px] md:min-h-[180px] flex items-center">
                  <div className="p-10 md:p-14 z-20 w-full">
                    <h3 className="max-w-md text-2xl md:text-3xl font-bold text-primary-white mb-6">{slide.title}</h3>
                    <button className="bg-white text-[#001d3d] px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105">
                      Read More
                    </button>
                  </div>
                  <img className="absolute bottom-0 right-0 z-10 hidden md:block h-full" src={img} alt="banner img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      {faqs.length > 0 && (
        <section className="bg-[#EAF0F6] lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 font-manrope">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-extrabold leading-[44px] mb-2">
              <span className="text-[#06213F] block">{faqTitle}</span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <FAQCard faq={faq} key={idx} />
            ))}
          </div>
        </section>
      )}

      {/* ── Brochure Section ── */}
      <section className="max-w-7xl mx-auto lg:px-6 md:px-10 px-4 xl:py-10 lg:py-16 py-5 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-3 leading-tight">
            <span className="text-primary-red">Download </span>
            <span className="text-primary-navyblue">{brochureTitle}</span>
          </h1>
          <p className="mb-8 text-primary-gray text-base font-medium leading-7">
            Join us on this journey as we share our expertise, ignite conversation
          </p>
          <div className="flex xl:flex-row flex-col gap-3 lg:w-full md:w-full w-full">
            {brochureFiles.length > 0 ? (
              brochureFiles.map((file, i) => (
                <a key={i} href={file.file_url} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center gap-2 bg-primary-red px-4 lg:text-[14px] text-[12px] text-primary-white font-bold py-2 hover:bg-red-700 transition">
                    <img src={downloadwhite} alt="download" />
                    {file.label.toUpperCase()}
                  </button>
                </a>
              ))
            ) : (
              <>
                <button className="flex items-center justify-center gap-2 bg-primary-red px-4 lg:text-[14px] text-[12px] text-primary-white font-bold py-2 hover:bg-primary-red transition">
                  <img src={downloadwhite} alt="downloadwhite" /> VISA DOCUMENT CHECKLIST PDF
                </button>
                <button onClick={() => handleWakalaDownload(wakalaPdf)} className="flex items-center justify-center gap-2 border-[#E74C3C] px-4 lg:text-[14px] text-[12px] border-[3px] text-primary-red font-bold py-2 transition">
                  <img src={downloadred} alt="downloadred" /> DOWNLOAD SAUDI WAKALA
                </button>
                <button className="flex items-center justify-center gap-2 px-4 lg:text-[14px] text-[12px] text-primary-red font-bold py-2 transition">
                  <img src={downloadred} alt="downloadred" /> RECRUITMENT FORM
                </button>
              </>
            )}
          </div>
        </div>
        <div>
          <img src={bowcher} alt="Brochure Illustration" className="w-full lg:h-[300px] h-[280px]" />
        </div>
      </section>

      <SecurityAndPartners />

      {/* ── Partners Section ── */}
      <section>
        <div className="bg-white pt-16 px-4 text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold text-[#1a365d] mb-10">
            {apiData?.page?.partners?.title ?? "We're Official Partners"}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {(apiData?.page?.partners?.items && apiData.page.partners.items.length > 0
                ? apiData.page.partners.items.map(p => ({ name: p.name, flagUrl: p.logo_url }))
                : defaultPartners
              ).map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center bg-[#f0f4f8] p-2 rounded shadow-sm border border-gray-100"
                >
                  <img
                    src={partner.flagUrl}
                    alt={partner.name}
                    className="w-20 h-10 object-cover mr-3 shadow-sm"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-[14px] font-extrabold text-gray-700 tracking-tight">{partner.name}</span>
                </div>
              ))}
            </div>
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
