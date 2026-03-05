import React, { useState } from "react";
// import { IconType } from "react-icons";
import { LuCirclePlus } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { IconType } from "react-icons";
// FAQ question data
interface FAQItem {
  question: string;
  answer: string;
  iconOpen: IconType;
  iconClosed: IconType;
}

const faqs: FAQItem[] = [
  {
    question: "What services does Nisa Travel Agency provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus ,
    iconClosed: RxCrossCircled,
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus ,
    iconClosed: RxCrossCircled,
  },
  {
    question: "What documents are required for Recruitment?",
   answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus ,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Is medical testing mandatory for all applicants?",
   answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus ,
    iconClosed: RxCrossCircled,
  },
  {
    question: "How can I track my application status?",
   answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus ,
    iconClosed: RxCrossCircled,
  },
  {
    question: "Will you arrange travel after recruitment approval?",
   answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconOpen: LuCirclePlus ,
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
    <div
      className={`bg-primary-lightblue rounded-3xl mb-4 px-6 py-5 transition-all duration-300 shadow-sm ${
        open ? "border border-[#c3d5eb]" : ""
      }`}
      style={{ cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between font-extrabold text-[#002661]">
        <span className=" text-lg">{faq.question}</span>
        <span >
          <IconComponent className="font-extrabold text-[25px] "  />
        </span>
      </div>
      {open && faq.answer && (
        <div className="max-w-[80%] mt-2 text-[#002661] text-sm ">{faq.answer}</div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="bg-white lg:px-8 md:px-12 px-4 md:py-16 py-10 font-manrope">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold leading-[44px] mb-2">
          <span className="text-primary-red">Frequently</span>
          <span className="text-[#06213F] block">Asked Questions</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <FAQCard faq={faq} key={idx} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-primary-red text-primary-white font-bold rounded-full px-8 py-3 shadow hover:bg-red-700 transition">
          GET EMIGRATION SUPPORT
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
