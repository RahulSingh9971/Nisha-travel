import { useEffect, useState , useRef } from "react";
import doubleThree from "../../../assets/images/thirty-three.webp"
import sectionTwoHero from "../../../assets/images/whoweare.webp";


// ---------------- COUNTER HOOK (scroll + slow) ----------------
const useScrollCounter = (target: number, duration = 2500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
   let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
         
          animateCount();
        } else {
          
          setCount(0);
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.2 } 
    );

    const animateCount = () => {
     let startTime: number | null = null

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        
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

export const WhoWeAre = ({ percentage, label }: { percentage: number, label: string }) => {
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e6e6e6"
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[calc(100%-22px)] h-[calc(100%-22px)] bg-primary-navyblue rounded-full flex items-center justify-center">
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
    <section ref={ref} className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <div className="flex items-center mb-6">
            <div className="text-8xl font-extrabold" style={thirtyThreeStyle}>
           {count33}
            </div>
            <p className="ml-4 text-lg font-extrabold text-gray-700 leading-tight">
              Years of Overseas
              <br />
              Recruitment & Support
            </p>
          </div>

          <h2 className="font-extrabold xl:text-5xl md:text-4xl text-3xl font-bold text-primary-navyblue leading-tight">
            Who We Are?
          </h2>

          <p className="md:mt-6 mt-4 text-primary-gray text-[16px] leading-7 font-medium">
            Founded in 1992, Nisa Travel Agency is a trusted name in overseas
            recruitment, licensed and approved by the Ministry of External
            Affairs, Government of India (License No:
            B-0646/DEL/PER/1000+/5/7922/2007). With our corporate office in New
            Delhi and a strong presence across major Indian cities, we have been
            shaping global careers and building international partnerships for
            more than three decades.
          </p>
          <p className="md:mt-6 mt-4 text-primary-gray text-[16px] leading-7 font-medium">
            Over the years, we have grown into a trusted name in overseas
            recruitment, helping organizations worldwide find the right talent
            while supporting individuals in achieving their career aspirations
            abroad. Our guiding principle has always been simple—quality,
            integrity, and excellence in service. With over 33 years of
            expertise, we understand the ever-evolving needs of businesses and
            candidates, and deliver solutions that are efficient, reliable, and
            future-ready.
          </p>

        </div>

        {/* Right Column */}
        <div className="relative">
          <img
            src={sectionTwoHero}
            alt="Woman at airport checking her watch"
            className="w-full h-auto"
          />
         
        </div>
      </div>
    </section>
  );
}
