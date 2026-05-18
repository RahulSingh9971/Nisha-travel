import React from 'react';

const WhatIsAttestation = ({ data }: { data?: any }) => {
  if (data) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          {/* Header */}
          <h2 
            className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-16"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          {/* Dynamic Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 justify-center">
            {data.items?.map((item: any, index: number) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-6">
                  <img 
                    src={item.image_url} 
                    alt={item.text} 
                    className="w-[64px] h-[64px] object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#002661] mb-3">
                  {item.text}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[340px] mx-auto">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        {/* Header */}
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-16">
          What is <br className="hidden md:block" />
          <span className="text-[#c20c15]">Kuwait Attestation?</span>
        </h2>

        {/* Two Columns Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* Column 1: Legalizing your documents */}
          <div className="flex flex-col items-center">
            {/* Scale Icon Image */}
            <div className="mb-6">
              <img 
                src={require('../../../assets/images/fi_994414.svg').default || require('../../../assets/images/fi_994414.svg')} 
                alt="Scale Icon" 
                className="w-[64px] h-[64px] object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#002661] mb-3">
              Legalizing your documents
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-[340px] mx-auto">
              Kuwait attestation is the official process of legalizing your
              documents so they are accepted by Kuwaiti authorities and
              institutions.
            </p>
          </div>

          {/* Column 2: Why it matters? */}
          <div className="flex flex-col items-center">
            {/* Chat Bubble Icon Image */}
            <div className="mb-6">
              <img 
                src={require('../../../assets/images/fi_8522272.svg').default || require('../../../assets/images/fi_8522272.svg')} 
                alt="Chat Question Icon" 
                className="w-[64px] h-[64px] object-contain"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#002661] mb-3">
              Why it matters?
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-[340px] mx-auto">
              Why it matters? for employment, study, business
              <br className="hidden md:block" />
              or residency purpose.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsAttestation;