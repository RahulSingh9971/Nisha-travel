import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_CONFIG } from "../config/apiConfig";
import stampingIllustration from "../assets/images/visa_stamping_illustration.png";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { LuCirclePlus } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import TestimonialsContactSection from "../components/home/TestimonialsContactSection";

// ── Types ─────────────────────────────────────────────────
interface StampingDoc {
  title: string;
  sort_order: number;
  condition?: string;
}
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
interface FAQItem { question: string; answer: string; }

// ── FAQ Card ────────────────────────────────────────
const LuIcon = LuCirclePlus as React.ElementType;
const RxIcon = RxCrossCircled as React.ElementType;

const FAQCard: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`bg-white rounded-2xl mb-4 px-6 py-5 cursor-pointer shadow-sm transition-all duration-200 ${open ? "border border-[#c3d5eb]" : ""
        }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between font-extrabold text-[#002661]">
        <span className="text-[15px] pr-4">{faq.question}</span>
        <span className="flex-shrink-0">
          {open ? <RxIcon className="text-[22px]" /> : <LuIcon className="text-[22px]" />}
        </span>
      </div>
      {open && faq.answer && (
        <div className="mt-2 text-[#002661] text-sm leading-relaxed max-w-[90%]">{faq.answer}</div>
      )}
    </div>
  );
};


// ── Accordion Card ────────────────────────────────────────
const ChevronUp = FiChevronUp as React.ElementType;
const ChevronDown = FiChevronDown as React.ElementType;

const StampingCard: React.FC<{ stamping: StampingRecord; index: number }> = ({ stamping, index }) => {
  const [open, setOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind is 768px
      return isMobile ? index < 1 : index < 2;
    }
    return index < 2;
  });

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden mb-4">
      {/* Header / Toggle */}
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-bold text-[#1a1a1a] text-[17px] leading-tight">{stamping.title}</h3>
        <span className="text-gray-500 flex-shrink-0 ml-4">
          {open
            ? <ChevronUp size={20} />
            : <ChevronDown size={20} />}
        </span>
      </button>

      {/* Expanded Content */}
      {open && (
        <div className="px-5 pb-5 border-t border-gray-100">

          {stamping.overview && (
            <div className="mt-4 mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Overview:</p>
              <p className="text-gray-600 text-sm leading-relaxed">{stamping.overview}</p>
            </div>
          )}

          {stamping.documents?.length > 0 && (
            <div className="mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Documents Required:</p>
              <ol className="list-decimal list-inside space-y-[2px]">
                {[...stamping.documents]
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((doc, i) => (
                    <li key={i} className="text-sm text-gray-700">{doc.title}</li>
                  ))}
              </ol>
            </div>
          )}

          {stamping.supporting_documents?.length > 0 && (
            <div className="mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Supporting Documents Required (if):</p>
              <p className="text-sm text-gray-700">
                {[...stamping.supporting_documents]
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((doc, i) => (
                    <span key={i}>
                      {doc.condition && <span className="font-semibold">{doc.condition}</span>}
                      {doc.condition ? ' - ' : ''}
                      {doc.title}
                      {i < stamping.supporting_documents.length - 1 ? '. ' : ''}
                    </span>
                  ))}
              </p>
            </div>
          )}

          {stamping.process && (
            <div className="mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Process:</p>
              <p className="text-gray-600 text-sm leading-relaxed">{stamping.process}</p>
            </div>
          )}

          {stamping.timeline && (
            <div className="mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Timeline:</p>
              <p className="text-gray-600 text-sm">{stamping.timeline} - After receiving all required documents.</p>
            </div>
          )}

          {stamping.price && (
            <div className="mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Price:</p>
              <p className="text-gray-600 text-sm">{stamping.price}</p>
              {stamping.price_note && (
                <p className="text-gray-500 text-sm">{stamping.price_note}</p>
              )}
            </div>
          )}

          {stamping.note !== null && (
            <div className="mb-3">
              <p className="font-bold text-[#1a1a1a] text-sm mb-1">Note:</p>
              {stamping.note && <p className="text-gray-600 text-sm">{stamping.note}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────
const VisaStampingDetailPage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const navigate = useNavigate();

  const [stampings, setStampings] = useState<StampingRecord[]>([]);
  const [allCountries, setAllCountries] = useState<MasterCountry[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);


  // Decode country from URL (e.g. "Kuwait" → "Kuwait")
  const countryName = country ? decodeURIComponent(country) : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_CONFIG.BASE_URL}/visa-stamping-page`, {
          headers: API_CONFIG.HEADERS,
        });
        const result = await res.json();
        if (result.success && result.data) {
          setStampings(result.data.stampings ?? []);
          setAllCountries(result.data.masters?.countries ?? []);
          setFaqs(result.data.page?.faq?.items ?? []);
        }
      } catch (err) {
        console.error("Visa stamping detail page fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter stampings for this country
  const filteredStampings = stampings.filter(s =>
    countryName ? s.country.name.toLowerCase() === countryName.toLowerCase() : true
  );

  // Get country's flag icon from masters
  const countryData = allCountries.find(c => c.name.toLowerCase() === countryName.toLowerCase());

  return (
    <div className="font-manrope min-h-screen bg-white">
      {/* ── Banner ── */}
      <section className="w-full bg-[#ECF0FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex-1">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <button onClick={() => navigate("/visaservices")} className="hover:text-primary-red transition-colors">
                Visa Services
              </button>
              <span>›</span>
              <span className="text-[#002661] font-semibold">{countryName} Visa Stamping</span>
            </div>

            <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4 leading-tight">
              <span className="text-[#06213F]">{countryName}</span>{" "}
              <span className="text-primary-red">Visa Stamping</span>
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              {countryName} visa stamping is the process of validating your visa through the
              embassy after document verification, allowing you to legally travel, work, or
              stay in {countryName}.
            </p>

          </div>

          {/* Right: Illustration */}
          <div className="flex-shrink-0 md:w-[600px] w-full flex justify-center">
            <img
              src={stampingIllustration}
              alt="Visa Stamping Illustration"
              className="w-full max-w-[580px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Stamping Records ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredStampings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-extrabold text-[#002661] mb-2">No Records Found</p>
            <p className="text-gray-500 text-sm">
              No stamping records are available for {countryName} at the moment. Please check back later.
            </p>
            <button
              onClick={() => navigate("/visaservices")}
              className="mt-6 bg-primary-red text-white font-bold px-8 py-3 rounded hover:bg-red-700 transition-colors"
            >
              Back to Visa Services
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-[#002661]">
                {countryData?.flag_icon} {countryName} Stamping Options
                <span className="ml-2 text-sm font-semibold text-gray-400">
                  ({filteredStampings.length} found)
                </span>
              </h2>
            </div>

            {/* Two Column Grid for Accordion Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredStampings.map((stamping, index) => (
                <StampingCard key={stamping.id} stamping={stamping} index={index} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-primary-lightblue lg:px-8 md:px-12 px-4 md:py-16 py-10 font-manrope">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-extrabold leading-[44px] mb-2">
            <span className="text-primary-red">Frequently</span>
            <span className="text-[#06213F] block">Asked Questions</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {(faqs.length > 0 ? faqs : [
            { question: "What documents are required for visa stamping?", answer: "You will need your original passport, visa copy, passport-size photographs, and any country-specific documents as required by the embassy." },
            { question: "How long does the visa stamping process take?", answer: "Typically 10–25 working days after submission of all required documents, depending on the embassy workload." },
            { question: "What is the fee for visa stamping?", answer: "Fees vary by visa type and country. Please contact our service desk for the most updated pricing." },
            { question: "Can I track my visa stamping status?", answer: "Yes, our team will keep you updated at every stage. You can also contact us directly for status updates." },
          ]).map((faq, idx) => (
            <FAQCard faq={faq} key={idx} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/contact">
            <button className="bg-primary-red text-white font-bold px-8 py-3 uppercase text-sm hover:bg-red-700 transition-colors">
              BOOK A FREE CONSULTATION
            </button>
          </a>
        </div>
      </section>
      {/* ── FAQ Bottom Curve ── */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mt-1">
        <div className="bg-primary-lightblue md:py-8 py-8 rounded-b-[80%] scale-x-[1.2] md:scale-x-[1.1]"></div>
      </div>

      {/* ── Testimonials + Contact Section ── */}
      <TestimonialsContactSection />
    </div>
  );
};

export default VisaStampingDetailPage;
