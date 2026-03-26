import svgimg from "../../../assets/images/subtract.svg"; // Replace with your actual image

interface JourneyCTAProps {
  title?: string;
  image?: string;
}

export const JourneyCTA: React.FC<JourneyCTAProps> = ({ title, image }) => (
  <section className="relative md:py-16 pt-10">
    <div className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 ">
      <div className="relative z-10  grid md:grid-cols-2 grid-cols-1 items-center justify-between">
        <div>
          <h3 className="pb-7 max-w-sm text-2xl tracking-wide lg:!leading-[36px] font-semibold text-primary-navyblue">
            {title}
          </h3>
          <button className="flex items-center gap-3 bg-[#001D3D] text-[14px] text-white px-4 py-3 font-semibold uppercase tracking-wider transition-all hover:bg-opacity-90">
            <span className="h-1 w-1 rounded-full bg-white" />
            <span>Contact Us</span>
            <span className="h-1 w-1 rounded-full bg-white" />
          </button>
        </div>
        <div className="md:absolute -bottom-16 md:right-20">
          <img
            src={image}
            alt="Success Story"
            className="w-auto md:h-[370px] h-70 object-cover rounded-xl mt-6 md:mt-0"
          />
        </div>
      </div>

      <img
        src={svgimg}
        alt="svg"
        className="z-0 absolute bottom-0 left-0 w-full object-cover md:h-full h-[200px] "
      />
    </div>
  </section>
);
