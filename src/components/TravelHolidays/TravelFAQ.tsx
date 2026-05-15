import React, { useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the study abroad process work?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What are the requirements for a student visa?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How does the study abroad process work?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What are the requirements for a student visa?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const LuCirclePlusIcon = LuCirclePlus as React.ElementType;
const RxCrossCircledIcon = RxCrossCircled as React.ElementType;

const FAQCard: React.FC<{ faq: FAQItem; defaultOpen?: boolean }> = ({ faq, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white rounded-3xl mb-4 px-6 py-5 transition-all duration-300 shadow-sm ${open ? "border border-[#c3d5eb]" : ""
        }`}
      style={{ cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between font-extrabold text-[#002661]">
        <span className="text-[17px]">{faq.question}</span>
        <span>
          {open ? (
            <RxCrossCircledIcon className="font-extrabold text-[25px] text-[#002661]" />
          ) : (
            <LuCirclePlusIcon className="font-extrabold text-[25px] text-[#002661]" />
          )}
        </span>
      </div>
      {open && faq.answer && (
        <div className="mt-3 text-[#5e6d7c] text-[14px] leading-relaxed pr-10">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const TravelFAQ: React.FC = () => {
  return (
    <section className="bg-[#EAF0F6] lg:px-8 md:px-12 px-4 py-16 md:py-24 font-manrope">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-[42px] font-extrabold leading-[1.2] mb-2 tracking-tight">
          <span className="text-[#c1272d]">Frequently</span>
          <br />
          <span className="text-[#06213F]">Asked Questions</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-6 gap-y-2">
        {faqs.map((faq, idx) => (
          <FAQCard faq={faq} key={idx} defaultOpen={idx === 0 || idx === 1} />
        ))}
      </div>
    </section>
  );
};

export default TravelFAQ;
