import downloadwhite from "../../assets/images/download-white.svg";
import downloadred from "../../assets/images/download-red.svg";
import bowcher from "../../assets/images/bowcher.webp";

const VisaDownloadbrochure: React.FC = () => (
  <>
    <div className="max-w-7xl mx-auto lg:px-6 md:px-10 px-4 xl:py-10 lg:py-16 py-5 flex flex-col md:flex-row items-center gap-10">
      {/* Text & Buttons */}
      <div className="flex-1">
        <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-3 leading-tight">
          <span className="text-[#C40808]">Download </span>
          <span className="text-[#0E313A]"> Brochure</span>
        </h1>
        <p className="mb-8 text-[#666666] text-base font-medium leading-7">
          Join us on this journey as we share our expertise, ignite conversation
        </p>
        <div className="flex xl:flex-row flex-col gap-3 lg:w-full md:w-full w-full ">
          <button className="flex items-center justify-center gap-2 bg-[#C40808] px-4 lg:text-[14px] text-[12px] text-white font-bold  py-2 hover:bg-red-600 transition">
            <img src={downloadwhite} alt="downloadwhite" className="" />{" "}
            VISA DOCUMENT CHECKLIST PDF
          </button>
          <button className="flex items-center justify-center gap-2 border-[#E74C3C] px-4 lg:text-[14px] text-[12px] border-[3px] text-[#C40808] font-bold py-2 hover:bg-red-600 transition">
            <img src={downloadred} alt="downloadred" className="" /> DOWNLOAD
            SAUDI WAKALA
          </button>
            <button className="flex items-center justify-center gap-2 px-4 lg:text-[14px] text-[12px] text-[#C40808] font-bold py-2 hover:bg-red-600 transition">
            <img src={downloadred} alt="downloadred" className="" /> RECRUITMENT FORM
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

export default VisaDownloadbrochure;