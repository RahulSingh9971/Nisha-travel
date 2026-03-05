import { useEffect, useState, useRef } from "react";
import doubleThree from "../.././assets/images/thirty-three.webp"
import sectionTwoHero from "../.././assets/images/section-two-hero.png"
import Globe2 from "../.././assets/images/Globe2.png"
import FilePenLine from "../.././assets/images/FilePenLine.png"

// ---------------- COUNTER HOOK (scroll + slow) ----------------
const useScrollCounter = (target, duration = 5000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let animationFrameId;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Start or Restart animation
          animateCount();
        } else {
          // Reset when scrolling away so it's ready to play again
          setCount(0);
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.2 } // Adjust this to trigger sooner or later
    );

    const animateCount = () => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        // Use Math.floor for integers
        setCount(Math.floor(percentage * target));

        if (percentage < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return { count, ref };
};
const CircularProgress = ({ percentage }) => {
  const size = 130;
  const strokeWidth = 10;
  const radius = (size / 2) - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[140px] h-[140px]">

      {/* Red/Grey Progress Circle */}
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#dd3333"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      {/* Blue Circle - Ise chhota karne ke liye w-1/2 aur h-1/2 use kiya hai */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="bg-[#06213F] rounded-full flex items-center justify-center shadow-lg"
          style={{
            width: '45%',  // Ise jitna kam karenge (e.g. 50%), blue circle utna chhota hoga
            height: '45%'
          }}
        >
          <span className="text-primary-white text-xl font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default function TrustedVisaSection() {
  const { count: count33, ref } = useScrollCounter(33, 2500);
  const thirtyThreeStyle = {
    backgroundImage: `url(${doubleThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <section ref={ref} className="bg-white md:py-4 pb-10  px-4 md:px-12 lg:px-8 font-manrope">

      <div className="max-w-[1200px] mx-auto w-full flex lg:flex-row md:flex-col flex-col gap-16 justify-between items-center">
        {/* Left Column */}
        <div className="lg:max-w-[48%]">
          <div className="flex items-center mb-1">
            <div className="text-[100px] md:text-[130px] font-extrabold" style={thirtyThreeStyle}>
              {count33}
            </div>
            <p className="ml-4 md:text-[22px] text-[16px] font-extrabold text-gray-700 leading-tight">
              Years of Overseas<br />Recruitment & Support
            </p>
          </div>

          <h2 className="xl:text-[50px] md:text-4xl text-3xl font-extrabold text-[#06213F] 
               leading-[1.3] md:leading-[1.1] tracking-tight">

            <span className="block mb-2">
              Trusted <span className="text-primary-red">Visa</span> &
            </span>
            <span className="text-primary-red">Emigration</span> solutions
          </h2>

          <p className="mt-6 text-primary-gray font-medium leading-[28px]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mt-[28px]">
            <div className="flex flex-col gap-2 items-start ">
              <div className="flex gap-4 items-center text-primary-red">
                <img src={Globe2} alt="Globe2" className="w-[55px] h-[55px]" />
                <h3 className="max-w-[60%] font-extrabold text-primary-navyblue text-[22px]">Content Needs to change</h3>
              </div>
              <p className="font-medium text-[16px] text-primary-gray pt-3">Almost do am or limits hearts. Resolve parties but why she shewing.</p>

            </div>
            <div className="flex flex-col gap-2 items-start">
              <div className="flex gap-4 items-center text-primary-red">
                <img src={FilePenLine} alt="FilePenLine" className="w-[55px] h-[55px]" />
                <h3 className="max-w-[60%] font-extrabold text-primary-navyblue text-[22px]">Content Needs to change</h3>
              </div>
              <p className="font-medium text-[16px] text-primary-gray pt-3">Regular do am or limits hearts. Resolve parties but why she shewing.</p>

            </div>
          </div>

          <button className="mt-8 bg-primary-red hover:bg-red-700 text-primary-white font-extrabold py-4 px-6 rounded-none text-sm tracking-wider">
            • DISCOVER MORE •
          </button>
        </div>

        {/* Right Column */}
        <div className="relative lg:w-[40%]">
          <img src={sectionTwoHero} alt="Woman at airport checking her watch" className="w-full lg:h-auto md:h-[550px] " />
          <div className="absolute -bottom-6 md:-left-12 bg-white px-4 md:py-8 py-4 shadow-2xl md:w-52 text-center flex flex-col justify-center items-center">
            <h4 className="font-extrabold text-[21px] text-primary-navyblue mb-3">Success Rate</h4>
            <div className="mx-auto">
              <CircularProgress percentage={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
