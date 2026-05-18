import { Link } from "react-router-dom";
import heroIllustration from "../../../assets/images/academic-documents-hero.png";

const AcademicDocumentsHero = ({ data }: { data?: any }) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-10 px-4 md:px-10 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="order-2 lg:order-1">
          <h1 className="font-manrope text-[40px] leading-[1.1] md:text-[54px] lg:text-[60px] font-extrabold tracking-[-0.03em]">
            <span className="block text-primary-navyblue">{data?.hero?.title || data?.title || "Academic or Educational"}</span>
            <span className="mt-2 block text-primary-red">{data?.hero?.subtitle || data?.subtitle || "Documents Attestation"}</span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-8 font-medium text-[#5D6472] md:text-[18px]">
            {data?.hero?.description || data?.description || "Our visa experts guide you through every step from document preparation to application submission ensuring a smooth and successful process for any destination."}
          </p>

          <Link
            to={data?.hero?.cta?.link || data?.cta?.link || "/contact"}
            className="mt-8 inline-flex bg-primary-red px-9 py-3 font-poppins text-[14px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-red-700"
          >
            {data?.hero?.cta?.text || data?.cta?.text || "Apply Visa"}
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src={data?.hero?.banner_url || data?.banner_url || heroIllustration}
            alt={data?.hero?.title || data?.title || "Academic documents attestation illustration"}
            className="w-full max-w-[640px] mx-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AcademicDocumentsHero;
