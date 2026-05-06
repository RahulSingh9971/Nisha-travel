import { Link } from "react-router-dom";
import heroIllustration from "../../../assets/images/commercial-documents-hero.png";

const CommercialDocumentsHero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] items-center gap-10 px-4 md:px-10 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="order-2 lg:order-1">
          <h1 className="font-manrope text-[40px] leading-[1.1] md:text-[54px] lg:text-[60px] font-extrabold tracking-[-0.03em]">
            <span className="block text-primary-navyblue">Commercial</span>
            <span className="mt-2 block text-primary-red">Documents attestation</span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-8 font-medium text-[#5D6472] md:text-[18px]">
            Our visa experts guide you through every step from document
            preparation to application submission ensuring a smooth and
            successful process for any destination.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex bg-primary-red px-9 py-3 font-poppins text-[14px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-red-700"
          >
            Apply Visa
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src={heroIllustration}
            alt="Commercial documents attestation illustration"
            className="w-full max-w-[640px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialDocumentsHero;
