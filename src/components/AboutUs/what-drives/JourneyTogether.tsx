import girlImg from "../../../assets/images/girl.png";
import svgimg from "../../../assets/images/subtract.svg"; // Replace with your actual image

export const JourneyCTA: React.FC = () => (
  <section className="relative md:py-16 pt-10">
  <div className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 ">
      <div className="relative z-10  grid md:grid-cols-2 grid-cols-1 items-center justify-between">
      <div>
        <h3 className="max-w-xl text-3xl tracking-wide leading-tight font-semibold text-primary-navyblue">
          Ready to begin your journey?
          <br />
          <span className="">Let’s write your success story together.</span>
        </h3>
      </div>
     <div className="md:absolute -bottom-16 right-0">
       <img
        src={girlImg}
        alt="Traveler"
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
