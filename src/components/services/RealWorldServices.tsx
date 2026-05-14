import grayStar from "../.././assets/images/grayStar.png";
import redStar from "../.././assets/images/redStar.png";
import google from "../.././assets/images/google.png";

import TestimonialSection from "../common/TestimonialSection";



const RealWorldServices: React.FC = () => {
  return (
    <section className="relative bg-white font-manrope">
      {/* Testimonials Section */}
      <div className="bg-primary-lightblue md:py-10 py-8 rounded-b-[85%]" />
      <TestimonialSection />
      <div className="bg-primary-lightblue md:py-[60px] py-14 rounded-t-[85%]" />
       <div className="mt-auto">
              <button className="absolute left-1/2 -translate-x-1/2 md:bottom-10 bottom-8 bg-primary-red text-primary-white font-bold text-sm px-5 py-2 ">
                CONTACT US
              </button>
            </div>
    </section>
  );
};

export default RealWorldServices;
