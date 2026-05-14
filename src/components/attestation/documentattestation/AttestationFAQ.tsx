import React, { useState } from 'react';

const faqData = [
  {
    question: "How much does it cost?",
    answer: "The cost depends on the type of document and the destination country. Please contact us for a detailed quote."
  },
  {
    question: "What is the processing time?",
    answer: "Processing time varies by document type and country, typically taking 7-14 working days."
  },
  {
    question: "Do I need to submit original documents?",
    answer: "Yes, original documents are usually required for physical attestation stamps."
  },
  {
    question: "Is the process safe and secure?",
    answer: "Absolutely. We ensure end-to-end security and tracking for all your documents."
  },
  {
    question: "Can I track my application?",
    answer: "Yes, we provide a tracking mechanism so you can monitor your application status at any time."
  },
  {
    question: "Do you offer collection and delivery?",
    answer: "Yes, we provide safe collection and delivery services for your convenience."
  }
];

const AttestationFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default as in image

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#EAF0F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[54px] font-extrabold leading-tight">
            <span className="text-[#c20c15] block mb-2">Frequently</span>
            <span className="text-[#0d213b]">Asked Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-[25px] transition-all duration-300 h-fit ${isOpen ? 'p-8' : 'p-6'}`}
              >
                <button
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-bold text-[18px] md:text-[20px] text-[#0d213b] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <div className="w-8 h-8 rounded-full border-2 border-[#0d213b] flex items-center justify-center text-[#0d213b]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-[#0d213b] flex items-center justify-center text-[#0d213b]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AttestationFAQ;