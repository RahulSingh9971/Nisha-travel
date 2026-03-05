import icon1 from "../../../assets/images/sicon1.svg"
import icon2 from "../../../assets/images/sicon2.svg"
import icon3 from "../../../assets/images/sicon3.svg"
import icon4 from "../../../assets/images/sicon4.svg"
import icon5 from "../../../assets/images/sicon5.svg"

function NisaTravelAgency() {
  const features = [
    {
      icon: icon1,
      title: "Protecting Emigrants",
      desc: "Ensures Indian workers are not exposed to fraudulent recruitment practices, misrepresentations, or illegal fees.",
    },
    {
      icon: icon2,
      title: "Assisting Foreign Employers",
      desc: "Guarantees authentic candidates, verified documentation, and lawful recruitment, reducing legal and operational risks.",
    },
    {
      icon: icon3,
      title: "Transparent Operations",
      desc: "All recruitment follows MEA guidelines, with proper agreements and records.",
    },
    {
      icon: icon4,
      title: "Fraud Prevention",
      desc: "Helps identify and prevent recruitment scams, fake job offers, or illegal intermediaries.",
    },
    {
      icon:icon5,
      title: "Global Compliance",
      desc: "Adherence to international standards and Indian law ensures safe, ethical, and reliable overseas employment services.",
    },
  ];

  return (
    <section className="bg-primary-lightblue font-manrope md:pt-8 md:pb-16 py-10">
      <div className="max-w-7xl mx-auto lg:px-8 md:px-12 px-4">
        <div className="grid lg:grid-cols-2 gap-5 mb-10 justify-between items-center">
          <h1 className="md:text-4xl text-3xl font-extrabold tracking-wide leading-10">
            <span className="font-medium font-renfrew text-primary-red">Nisa Travel Agency</span>
            <span className="font-extrabold  block text-primary-gray ">is Registered &amp;</span>
            <span className="font-extrabold  text-primary-gray">Authorized by MEA</span>
          </h1>
          <div className=" flex justify-end">
            <p className="max-w-xl text-primary-gray text-[16px] leading-7 font-medium">
              Under the Emigration Act, 1983, Recruiting Agents (RAs) are
              required to register with the Protector General of Emigrants (PGE)
              or the respective Protector of Emigrants (PoE) based on their
              territorial jurisdiction. This registration ensures that all
              recruitment activities are fully legal, transparent, and compliant
              with Indian law, safeguarding both emigrants and foreign
              employers.
            </p>
          </div>
        </div>
    {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-2">
              <img src={item.icon} alt={item.title} className="w-auto h-14" />
              <h3 className="font-extrabold md:pt-[24px] pt-[18px] text-[22px] text-primary-gray">
                {item.title}
              </h3>
              <p className="text-primary-gray text-[16px] leading-7 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NisaTravelAgency;
