import { Link } from "react-router-dom";
import fepageimghero from "../../assets/images/fepageimghero.png";

const ForeignEmployersHero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center gap-10 px-4 md:px-10 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="order-2 lg:order-1">
          <h1 className="font-manrope text-[40px] leading-[1.2] md:text-[48px] lg:text-[54px] font-extrabold tracking-[-0.02em]">
            <span className="block text-primary-navyblue">Trusted International Recruitment</span>
            <span className="block text-primary-navyblue">Partner for <span className="text-primary-red">Reliable Workforce</span></span>
            <span className="block text-primary-red">Deployment</span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-7 font-medium text-[#5D6472] md:text-[18px]">
            MEA & Embassy-approved India's best international recruitment agency providing professional, skilled and unskilled workforce for Gulf, Europe & global employers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center bg-primary-red px-8 py-3 font-poppins text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-red-700"
            >
              REQUEST RECRUITMENT PROPOSAL
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center border-[2px] border-primary-navyblue text-primary-navyblue px-8 py-3 font-poppins text-[13px] font-bold uppercase tracking-[0.04em] transition hover:bg-primary-navyblue hover:text-white"
            >
              SCHEDULE A CALL
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={fepageimghero}
            alt="Foreign Employers Hero"
            className="w-full max-w-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ForeignEmployersHero;
