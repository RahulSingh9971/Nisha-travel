import React from 'react';
import { motion } from 'framer-motion';
import roadImg from '../../assets/images/Gemini_Generated_Image_r8iw84r8iw84r8iw 1.png';

const steps = [
  {
    id: 1,
    number: "01",
    title: "Employer Requirement Analysis",
    top: "71%",
    left: "11%",
    textStyle: "bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-center"
  },
  {
    id: 2,
    number: "02",
    title: "Receiving Demand Letter & Power of Attorney",
    top: "78%",
    left: "47.5%",
    textStyle: "left-full top-1/2 -translate-y-1/2 ml-3 w-48 text-left"
  },
  {
    id: 3,
    number: "03",
    title: "Candidate Sourcing & Shortlisting",
    top: "53%",
    left: "33.5%",
    textStyle: "bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-center"
  },
  {
    id: 4,
    number: "04",
    title: "Trade Testing & Interview Coordination",
    top: "55%",
    left: "57%",
    textStyle: "left-full top-1/2 -translate-y-1/2 ml-3 w-48 text-left"
  },
  {
    id: 5,
    number: "05",
    title: "Offer & Contract Signing",
    top: "33%",
    left: "51%",
    textStyle: "bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-center"
  },
  {
    id: 6,
    number: "06",
    title: "Documentation & Medical Processing",
    top: "34%",
    left: "81%",
    textStyle: "left-full top-1/2 -translate-y-1/2 ml-3 w-48 text-left"
  },
  {
    id: 7,
    number: "07",
    title: "Attestation, Visa Stamping & Emigration Clearance",
    top: "25%",
    left: "74.5%",
    textStyle: "left-full top-1/2 -translate-y-1/2 ml-3 w-56 text-left"
  },
  {
    id: 8,
    number: "08",
    title: "Deployment & Reporting",
    top: "10.5%",
    left: "77%",
    textStyle: "left-full top-1/2 -translate-y-1/2 ml-3 w-48 text-left"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4
    }
  }
};

const pinVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.6 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const RecruitmentProcessRoad = ({ data }: { data?: any }) => {
  const displaySteps = steps.map((step, index) => {
    if (data?.steps && data.steps[index]) {
      return { ...step, title: data.steps[index].title };
    }
    return step;
  });

  return (
    <section className="bg-[#edf3f7] py-16 font-manrope overflow-hidden relative">

      {/* Title Block (Padded Container) */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8 relative z-10 mb-10">
        {data?.title ? (
           <h2 className="text-3xl md:text-4xl font-extrabold leading-tight" dangerouslySetInnerHTML={{ __html: data.title }} />
        ) : (
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-[#c1272d] block">Our Recruitment</span>
            <span className="text-[#0a1e3f]">Process</span>
          </h2>
        )}
      </div>

      {/* Winding Road Wrapper (Un-padded, flush to screen edge) */}
      <div className="w-full relative overflow-x-auto pb-8 scrollbar-hide">
        <div className="min-w-[900px] relative aspect-[2/1] max-w-full mr-auto ml-0">

          {/* Background road squiggle image */}
          <img
            src={data?.image_url || roadImg}
            alt="Recruitment Roadmap"
            className="absolute inset-0 w-full h-full object-fill select-none"
          />

          {/* Map Pins Overlay */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute inset-0"
          >
            {displaySteps.map((step) => (
              <motion.div
                key={step.id}
                variants={pinVariants}
                style={{ top: step.top, left: step.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group z-20"
              >
                {/* The Red Pin Shape */}
                <div className="relative flex flex-col items-center animate-bounce-slow">

                  {/* Pin circle and icon */}
                  <div className="w-9 h-9 bg-[#c1272d] text-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(193,39,45,0.4)] border-2 border-white font-bold text-sm relative z-10 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Pin Tip Pointer */}
                  <div className="w-3 h-3 bg-[#c1272d] rotate-45 -mt-1.5 shadow-md border-b border-r border-white/20 relative z-0"></div>

                  {/* Dynamic Label Text */}
                  <div className={`absolute ${step.textStyle} pointer-events-none`}>
                    <span className="text-[#0a1e3f] font-bold text-xs md:text-[13.5px] leading-[1.3] block whitespace-normal group-hover:text-[#c1272d] transition-colors duration-200 drop-shadow-sm">
                      {step.title}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default RecruitmentProcessRoad;
