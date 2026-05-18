import React, { useState, useEffect, useRef } from 'react';

// --- 1. ANIMATED NUMBER COMPONENT (Triggers every scroll) ---
const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Parse strings like "1.5M+" into numeric 1.5 and suffix "M+"
  const numericValue = parseFloat(value.replace(/[^\d.]/g, '')) || 0;
  const suffix = value.replace(/[\d.]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        } else {
          // Reset when scrolling away so it re-animates next time
          setHasStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Determine decimal places (e.g., 1.5 has 1 decimal, 50 has 0)
      const decimals = value.includes('.') ? 1 : 0;
      const currentCount = (progress * numericValue).toFixed(decimals);
      
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [hasStarted, numericValue, duration, value]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

// --- 2. STAT CIRCLE COMPONENT (With Pop-in & Float) ---
const StatCircle = ({ size, bgColor, textColor, value, label, valueSize, labelSize, position, shadow = 'shadow-lg' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`absolute rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 ease-out transform 
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} 
      ${shadow} ${bgColor} ${textColor} ${position}`}
      style={{ 
        width: size, 
        height: size, 
        animation: isVisible ? `float 3s ease-in-out infinite alternate` : 'none' 
      }}
    >
      <span className={`font-bold ${valueSize}`}>
        <AnimatedNumber value={value} />
      </span>
      <span className={`leading-tight ${labelSize}`}>{label}</span>
    </div>
  );
};

// --- 3. MAIN SECTION ---
export default function GlobalPartnerSection({ data = null }) {
  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-6 md:px-12 px-4 md:py-16 py-10 overflow-hidden">
      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            from { transform: translateY(0px); }
            to { transform: translateY(15px); }
          }
        `}
      </style>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="md:pr-8 relative z-10">
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight">
            {data?.title ? (
              <span className="text-primary-navyblue" dangerouslySetInnerHTML={{ __html: data.title }} />
            ) : (
              <>
                <span className="text-primary-red block mb-3">Trusted Global</span>
                <span className="text-primary-navyblue">Visa Partner</span>
              </>
            )}
          </h2>
          <p className="mt-6 text-gray-600 leading-[26px]">
            {data?.description || "With over 1.5M documents processed, 50k+ global customers, and 7k+ successful overseas recruitments across 33 years, our track record reflects trust, efficiency, and proven expertise worldwide."}
          </p>
            {data?.cta ? (
              data.cta.link?.startsWith('http') ? (
                <a href={data.cta.link} target="_blank" rel="noopener noreferrer" className="mt-28 inline-block bg-primary-red hover:bg-red-700 text-primary-white font-semibold py-3 px-6 rounded-none text-sm tracking-wider transition-all hover:shadow-lg active:scale-95">
                  • {data.cta.text} •
                </a>
              ) : (
                <a href={data.cta.link} className="mt-28 inline-block bg-primary-red hover:bg-red-700 text-primary-white font-semibold py-3 px-6 rounded-none text-sm tracking-wider transition-all hover:shadow-lg active:scale-95">
                  • {data.cta.text} •
                </a>
              )
            ) : (
            <button className="mt-28 bg-primary-red hover:bg-red-700 text-primary-white font-semibold py-3 px-6 rounded-none text-sm tracking-wider transition-all hover:shadow-lg active:scale-95">
              • KNOW MORE •
            </button>
          )}
        </div>

        {/* Right Column: Bubble Stats */}
        <div className="relative h-[450px] w-full mt-10 md:mt-0">
          {/* Decorative small dots */}
          <div className="absolute top-0 right-20 w-5 h-5 bg-[#DD565C] rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-16 right-12 w-8 h-8 bg-[#DD565C] rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute top-1/2 left-0 w-8 h-8 bg-[#DD565C] rounded-full opacity-40"></div>

          {/* Main stats bubbles */}
          {data?.stats?.length > 0 ? (
            data.stats.map((stat, index) => {
              // Simple layout for dynamic items since we don't have absolute positions
              const positions = [
                "top-0 left-10 md:left-20",
                "top-16 md:right-[140px]",
                "top-10 right-4 md:right-6",
                "bottom-4 right-10 md:right-20"
              ];
              const sizes = [130, 240, 120, 140];
              const valueSizes = ["text-3xl font-extrabold", "text-5xl font-extrabold", "text-2xl font-extrabold", "text-4xl font-extrabold"];
              
              return (
                <StatCircle
                  key={index}
                  size={sizes[index % sizes.length]}
                  bgColor={stat.color ? `bg-[${stat.color}]` : "bg-primary-red"}
                  textColor="text-[#06213F]"
                  value={stat.value}
                  label={stat.label}
                  valueSize={valueSizes[index % valueSizes.length]}
                  labelSize="text-xs"
                  position={positions[index % positions.length]}
                  shadow="shadow-xl border border-white/50"
                />
              )
            })
          ) : (
            <>
              <StatCircle
                size={130}
                bgColor="bg-primary-red"
                textColor="text-primary-white"
                value="50k+"
                label="Customer Globally"
                valueSize="text-3xl font-extrabold"
                labelSize="text-xs"
                position="top-0 left-10 md:left-20"
              />
              
              <StatCircle
                size={240}
                bgColor="bg-[#93BBD533]"
                textColor="text-[#06213F]"
                value="1.5M+"
                label="Documents Processed"
                valueSize="text-5xl font-extrabold"
                labelSize="text-base"
                position="top-16 md:right-[140px] -translate-x-1/2 -translate-y-1/2"
                shadow="shadow-xl border border-white/50"
              />
              
              <StatCircle
                size={120}
                bgColor="bg-white"
                textColor="text-[#06213F]"
                value="7k+"
                label="Successful Recruitment"
                valueSize="text-2xl font-extrabold"
                labelSize="text-xs"
                position="top-10 right-4 md:right-6"
                shadow="shadow-2xl"
              />
              
              <StatCircle
                size={140}
                bgColor="bg-[#002661]"
                textColor="text-primary-white"
                value="33"
                label="Years of Overseas Recruitment"
                valueSize="text-4xl font-extrabold"
                labelSize="text-xs"
                position="bottom-4 right-10 md:right-20"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}