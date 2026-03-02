const StatCircle = ({
  size,
  bgColor,
  textColor,
  value,
  label,
  valueSize,
  labelSize,
  position,
  shadow = "shadow-lg",
}) => (
  <div
    className={`absolute rounded-full flex flex-col items-center justify-center text-center p-4 ${shadow} ${bgColor} ${textColor} ${position}`}
    style={{ width: size, height: size }}
  >
    <span className={`font-bold ${valueSize}`}>{value}</span>
    <span className={`leading-tight ${labelSize}`}>{label}</span>
  </div>
);

export default function OurImpact() {
  return (
    <section className=" overflow-hidden font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-24 xl:pb-48 md:pt-16 md:pb-32 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:gap-20 gap-10 items-center justify-between">
          {/* Right Column: Bubble Stats */}
          <div className="relative h-96 md:order-1 order-2">
            {/* Decorative dots */}
            <div className="absolute top-0 right-20 w-5 h-5 bg-[#DD565C] rounded-full opacity-80"></div>
            <div className="absolute bottom-16 right-12 w-8 h-8 bg-[#DD565C] rounded-full opacity-80"></div>
            <div className="absolute top-1/2 -translate-y-1/2 lg:left-8 md:-left-12 w-8 h-8 bg-[#DD565C] rounded-full opacity-80"></div>

            {/* Main stats bubbles */}
            <StatCircle
              size={120}
              bgColor="bg-[#C40808]"
              textColor="text-white"
              value="50k+"
              label="Customer Globally"
              valueSize="text-3xl"
              labelSize="text-xs"
              position="top-0 lg:left-24"
            />
            <StatCircle
              size={240}
              bgColor="bg-[#93BBD533]"
              textColor="text-[#06213F]"
              value="1.5M+"
              label="Documents Processed"
              valueSize="text-5xl"
              labelSize="text-base"
              position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              shadow="shadow-xl"
            />
            <StatCircle
              size={110}
              bgColor="bg-white"
              textColor="text-[#06213F]"
              value="7k+"
              label="Successful Recruitment"
              valueSize="text-2xl"
              labelSize="text-xs"
              position="top-8 right-0"
              shadow="shadow-2xl"
            />
            <StatCircle
              size={120}
              bgColor="bg-[#002661]"
              textColor="text-white"
              value="33"
              label="Years of Overseas Recruitment"
              valueSize="text-4xl"
              labelSize="text-xs"
              position="bottom-0 right-24"
            />
          </div>{" "}
          {/* Left Column: Text Content */}
          <div className="md:order-2 order-1">
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide leading-tight">
              <span className="text-red-600">Our impact</span>
              <br />
              <span className="text-[#002661]">speaks for itself:</span>
            </h2>
            <p className="mt-6 text-[#666666] text-[16px] leading-7 font-medium">
              We have built a robust network with branch offices in Mumbai &
              Cochin and Beyond India, our global presence extends to Kuwait,
              Qatar, Saudi Arabia, Oman, UAE, United Kingdom, Portugal, Germany,
              GermanyMauritius, Malaysia, Vietnam, Lesotho, and
              Zimbabwe—strengthening our international reach and reputation.
            </p>
                      <p className="mt-6 text-[#666666] text-[16px] leading-7 font-medium"> At
              Nisa Travel Agency, we don’t just provide recruitment solutions—we
              build lasting relationships, empower businesses, and open doors to
              new opportunities for thousands of professionals worldwide.</p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
