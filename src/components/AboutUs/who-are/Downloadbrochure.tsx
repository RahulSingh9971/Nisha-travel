import downloadwhite from "../../../assets/images/download-white.svg";
import downloadred from "../../../assets/images/download-red.svg";
import bowcher from "../../../assets/images/bowcher.webp";
import { FaFileArrowDown } from "react-icons/fa6";

const FaFileArrowDownIcon = FaFileArrowDown as React.ElementType;

interface DownloadBrochureProps {
  title: string | null | undefined;
  description?: string | null | undefined;
  pdfUrl: string | null | undefined;
  bgImg: string | null | undefined;
  saudiWakalaUrl?: string | null | undefined;
}
const Downloadbrochure = ({ title, description, pdfUrl, bgImg, saudiWakalaUrl }: DownloadBrochureProps) => {
  if (!pdfUrl) return null; // PDF nahi hai toh hide kar do

  return (
    <>
      <section className="bg-primary-lightblue">

        {/* Download Brochure Section */}
      </section>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-10 px-4 xl:py-10 lg:py-16 py-5 flex flex-col md:flex-row items-center gap-10">
        {/* Text & Buttons */}
        <div className="flex-1">
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-3 leading-tight">
            <span className="text-primary-red">
              {title?.includes("Download") ? "Download " : ""}
            </span>
            <span className="text-primary-navyblue">
              {title?.replace("Download", "") || "Brochure"}
            </span>
          </h1>
          <p className="mb-8 text-primary-gray text-base font-medium leading-7">
            {description}
          </p>
          <div className="flex lg:flex-row flex-col gap-3 lg:w-[85%]">
            <a
              href={pdfUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center bg-primary-red px-6 py-3 text-white font-bold text-center"
            >
              <FaFileArrowDownIcon className="text-white" />
              DOWNLOAD BROCHURE
            </a>

            {/* Saudi Wakala Link - Only show if URL exists in API */}

            <a href={saudiWakalaUrl || "#"} target="_blank" rel="noreferrer" className="flex gap-2 items-center border-2 border-primary-red px-6 py-3 text-primary-red font-bold text-center">
              <FaFileArrowDownIcon className="text-primary-red" />   DOWNLOAD SAUDI WAKALA
            </a>
          </div>
        </div>
        {/* Illustration - replace with actual image */}
        <div>
          <img
            src={bgImg ?? undefined}
            alt={title ?? "Brochure"}
            className="w-full lg:h-[300px] h-[280px]"
          />
        </div>
      </div>
    </>
  );
};

export default Downloadbrochure;