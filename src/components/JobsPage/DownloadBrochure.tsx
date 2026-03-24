import downloadwhite from "../../assets/images/download-white.svg";
import downloadred from "../../assets/images/download-red.svg";
import bowcher from "../../assets/images/bowcher.webp";
import wakalaPdf from "../../assets/pdf/NTA Wakala.pdf";
import { handleWakalaDownload } from "../../utils/downloadHelpers";

const DownloadBrochure: React.FC = () => (
  <>

    <div className="max-w-7xl mx-auto lg:px-6 md:px-10 px-4 md:py-8 py-5 flex flex-col md:flex-row items-center gap-10">
      {/* Text & Buttons */}
      <div className="flex-1">
        <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-3 leading-tight">
          <span className="text-primary-red">Download </span>
          <span className="text-primary-navyblue"> Brochure</span>
        </h1>
        <p className="mb-8 text-primary-gray text-base font-medium leading-7">
          Join us on this journey as we share our expertise, ignite conversation
        </p>
        <div className="flex xl:flex-row flex-col gap-3 lg:w-[80%] md:w-full w-[90%] ">
          <button className="flex items-center justify-center gap-2 bg-primary-red px-4 lg:text-[18px] text-[14px] text-primary-white font-bold  py-2 hover:bg-primary-red transition">
            <img src={downloadwhite} alt="downloadwhite" className="" />{" "}
            DOWNLOAD BROCHURE
          </button>
          <button onClick={() => handleWakalaDownload(wakalaPdf)} className="flex items-center justify-center gap-2 border-[#E74C3C] px-4 lg:text-[18px] text-[14px] border-[3px] text-primary-red font-bold py-2 hover:shadow-md transition">
            <img src={downloadred} alt="downloadred" className="" /> DOWNLOAD
            SAUDI WAKALA
          </button>
        </div>
      </div>
      {/* Illustration - replace with actual image */}
      <div>
        <img
          src={bowcher} // Replace with correct img path
          alt="Brochure Illustration"
          className="w-full lg:h-[300px] h-[280px]"
        />
      </div>
    </div>
  </>
);

export default DownloadBrochure;
