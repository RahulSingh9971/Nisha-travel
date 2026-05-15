import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
}) => {
  const [count, setCount] = useState<string | number>(0);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const numericValue: number =
    parseFloat(value.replace(/[^\d.]/g, "")) || 0;

  const suffix: string = value.replace(/[\d.]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        } else {
          setHasStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );

      const decimals = value.includes(".") ? 1 : 0;

      const currentCount = (
        progress * numericValue
      ).toFixed(decimals);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () =>
      window.cancelAnimationFrame(animationFrame);
  }, [hasStarted, numericValue, duration, value]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

interface StatBubbleProps {
  size: number;
  bgColor: string;
  textColor: string;
  value: string;
  label: string;
  valueSize: string;
  labelSize: string;
  position: string;
  shadow?: string;
  delay: string;
}

const StatBubble: React.FC<StatBubbleProps> = ({
  size,
  bgColor,
  textColor,
  value,
  label,
  valueSize,
  labelSize,
  position,
  shadow = "shadow-lg",
  delay,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`absolute rounded-full flex flex-col items-center justify-center text-center p-5 transition-all duration-1000 ease-out transform 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"} 
      ${shadow} ${bgColor} ${textColor} ${position} hover:scale-105 cursor-default`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: isVisible
          ? `float 3s ease-in-out infinite alternate`
          : "none",
        animationDelay: delay,
      }}
    >
      <span className={`font-extrabold mb-1 tracking-tight ${valueSize}`}>
        <AnimatedNumber value={value} />
      </span>
      <span className={`font-bold leading-[1.2] tracking-wide px-1 ${labelSize}`}>
        {label}
      </span>
    </div>
  );
};

const HappyCandidatesStats = () => {
  return (
    <section className="bg-white overflow-hidden font-manrope py-16 md:py-24 lg:py-32">
      
      {/* Floating Keyframe Inject */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1 max-w-xl flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] mb-6">
              <span className="text-[#0a1e3f] block">Happy</span>
              <span className="text-[#c1272d] block mt-2">Candidates</span>
            </h2>
            <p className="text-[#5e6d7c] text-[16px] md:text-[17px] leading-[1.75] font-medium mb-12 text-left pr-2">
              With over 1.5M documents processed, 50k+ global customers, and 7k+ successful overseas recruitments across 33 years, our track record reflects trust, efficiency, and proven expertise worldwide.
            </p>
            
            <button 
              onClick={() => window.location.href = '/about-us'}
              className="bg-[#c1272d] hover:bg-red-700 text-white text-[13px] tracking-widest font-bold py-4 px-8 shadow-md transition-all active:scale-95 flex items-center uppercase group"
            >
              <span className="w-1 h-1 rounded-full bg-white mr-2 inline-block group-hover:scale-150 transition-transform"></span>
              KNOW MORE
              <span className="w-1 h-1 rounded-full bg-white ml-2 inline-block group-hover:scale-150 transition-transform"></span>
            </button>
          </div>

          {/* Right Column: Interactive Bubble Graphic */}
          <div className="order-1 lg:order-2 relative h-[450px] sm:h-[500px] w-full flex items-center justify-center">
            
            {/* Decorative background dots */}
            <div className="absolute top-12 right-1/4 w-5 h-5 bg-[#db5156]/80 rounded-full z-0 animate-pulse"></div>
            <div className="absolute bottom-32 right-8 w-8 h-8 bg-[#db5156]/80 rounded-full z-0 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 bg-[#db5156]/80 rounded-full z-0 animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Central Massive Bubble: 98% Repeat Employer Demand */}
            <StatBubble 
              size={260}
              bgColor="bg-[#EBF2FA]"
              textColor="text-[#0a1e3f]"
              value="98%"
              label="Repeat Employer Demand"
              valueSize="text-5xl md:text-6xl"
              labelSize="text-base md:text-[17px]"
              position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              shadow="shadow-[0_20px_60px_-15px_rgba(10,30,63,0.1)]"
              delay="0s"
            />

            {/* Top Left Bubble: 1M+ Active database */}
            <StatBubble 
              size={150}
              bgColor="bg-[#c1272d]"
              textColor="text-white"
              value="1M+"
              label="Active data base"
              valueSize="text-3xl md:text-4xl"
              labelSize="text-[12px] md:text-[13px]"
              position="top-8 left-8 sm:left-16 lg:left-8 xl:left-16 z-20"
              shadow="shadow-[0_15px_40px_-10px_rgba(193,39,45,0.4)]"
              delay="0.5s"
            />

            {/* Top Right Bubble: 7k+ Successfully Placed */}
            <StatBubble 
              size={120}
              bgColor="bg-white"
              textColor="text-[#0a1e3f]"
              value="7k+"
              label="Successfully Placed"
              valueSize="text-2xl md:text-3xl"
              labelSize="text-[11px] md:text-[12px]"
              position="top-4 right-4 sm:right-12 lg:right-4 xl:right-12 z-20 border border-gray-50"
              shadow="shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)]"
              delay="1s"
            />

            {/* Bottom Right Bubble: 34 Years of Service */}
            <StatBubble 
              size={140}
              bgColor="bg-[#0a1e3f]"
              textColor="text-white"
              value="34"
              label="Years of Service"
              valueSize="text-3xl md:text-4xl"
              labelSize="text-[12px] md:text-[13px]"
              position="bottom-8 right-12 sm:right-24 lg:right-12 xl:right-24 z-20"
              shadow="shadow-[0_15px_40px_-10px_rgba(10,30,63,0.4)]"
              delay="1.5s"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default HappyCandidatesStats;
