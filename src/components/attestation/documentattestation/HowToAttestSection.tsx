import React from 'react';

const HowToAttest = ({ data }: { data?: any }) => {
  if (data) {
    return (
      <section className="py-20 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 
              className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-4"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            {data.description && (
              <p className="text-gray-500 text-[15px] mb-2 whitespace-pre-wrap">{data.description}</p>
            )}
          </div>

          {/* Dynamic Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {data.services?.map((service: any, index: number) => (
              <div key={index} className="flex flex-col">
                <div className="bg-white rounded-2xl shadow-sm p-4 w-[72px] h-[72px] flex items-center justify-center mb-6">
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 
                  className="text-[22px] font-bold text-[#002661] mb-4 leading-snug"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <ul className="text-gray-500 text-[15px] space-y-2 list-disc pl-4 marker:text-gray-400">
                  {service.points?.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-4">
            How to attest from the <br className="hidden md:block" />
            <span className="text-[#c20c15]">Kuwait Embassy?</span>
          </h2>
          <p className="text-gray-500 text-[15px] mb-2">
            Kuwait attestation can only be processed via Embassy authorised & MEA Approved recruitment agencies.
          </p>
          <p className="text-[#002661] text-[15px] font-semibold">
            We are Kuwait Embassy Authorised for Attestation & Visa Stamping services.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm p-4 w-[72px] h-[72px] flex items-center justify-center mb-6">
              <img
                src={require('../../../assets/images/fi_1940690.svg').default || require('../../../assets/images/fi_1940690.svg')}
                alt="Academic Attestation"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-[22px] font-bold text-[#002661] mb-4 leading-snug">
              For Academic /Educational<br />document attestation
            </h3>
            <ul className="text-gray-500 text-[15px] space-y-2 list-disc pl-4 marker:text-gray-400">
              <li>HRD attestation</li>
              <li>MEA attestation</li>
              <li>Kuwait Embassy attestation.</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm p-4 w-[72px] h-[72px] flex items-center justify-center mb-6">
              <img
                src={require('../../../assets/images/fi_694642.svg').default || require('../../../assets/images/fi_694642.svg')}
                alt="Personal Attestation"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-[22px] font-bold text-[#002661] mb-4 leading-snug">
              For Personal<br />Document attestation
            </h3>
            <ul className="text-gray-500 text-[15px] space-y-2 list-disc pl-4 marker:text-gray-400">
              <li>State Home Department attestation</li>
              <li>SDM & MEA attestation</li>
              <li>Kuwait Embassy attestation.</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl shadow-sm p-4 w-[72px] h-[72px] flex items-center justify-center mb-6">
              <img
                src={require('../../../assets/images/fi_4298940.svg').default || require('../../../assets/images/fi_4298940.svg')}
                alt="Commercial Attestation"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-[22px] font-bold text-[#002661] mb-4 leading-snug">
              For Commercial<br />Document attestation
            </h3>
            <ul className="text-gray-500 text-[15px] space-y-2 list-disc pl-4 marker:text-gray-400">
              <li>Chamber of Commerce attestation</li>
              <li>SDM & MEA attestation</li>
              <li>Kuwait Embassy attestation.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowToAttest;