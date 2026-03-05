// import React from "react";
import process1 from "../../assets/images/process1.svg";
import process2 from "../../assets/images/process2.svg";
import process3 from "../../assets/images/process3.svg";
import process4 from "../../assets/images/process4.svg";
import process5 from "../../assets/images/process5.svg";
import process6 from "../../assets/images/process6.svg";
import process7 from "../../assets/images/process7.svg";
import processimg from "../../assets/images/processimg.png";

// const DeploymentProcess: React.FC = () => {
//   const deploymentSteps = [
//     { label: "Receive Offer Letter", icon: process1 },
//     { label: "Offer Letter Accepted", icon: process2 },
//     { label: "Issue PCC & Receive Visa", icon: process3 },
//     { label: "Medical Checkups", icon: process4 },
//     { label: "Visa Stamping", icon: process5 },
//     { label: "Receive Air Tickets", icon: process6},
//     { label: "Departure", icon: process7 },
//   ];

//   return (
//     <section className="bg-[#F4F8FF] font-manrope">
//       <div className=" max-w-7xl mx-auto px-4 md:px-8 lg:pt-16 py-10">
//         <div className="text-center md:mb-14 mb-10">
//           <h2 className="md:text-4xl text-3xl font-extrabold leading-[44px] mb-2">
//             <span className="text-primary-red">After selection</span>
//             <span className="text-[#06213F] block">Deployment Process</span>
//           </h2>
//         </div>
//         <div className="flex flex-col md:flex-row gap-10 ">
//           <ol className="flex-1 space-y-4">
//             {deploymentSteps.map((step, idx) => (
//               <li key={step.label} className="flex items-center gap-3">
//                 <div className="px-3 h-12 flex items-center justify-center bg-white rounded-md">
//                   <span className="text-[#002661] font-extrabold text-lg min-w-[32px]">
//                   {String(idx + 1).padStart(2, "0")}
//                 </span>
//                 </div>
//                  <div className="flex items-center gap-4 w-[80%] px-3 h-12 bg-white rounded-md">
//                 <img src={step.icon} alt="process" className="h-7"/>
//                 <span className="font-extrabold text-[#002661]">
//                   {step.label}
//                 </span>
//                 </div>
//               </li>
//             ))}
//           </ol>

//           <div className="flex-1 flex items-center justify-center">
//             <img
//               src={processimg}
//               alt="Deployment Process"
//               className="w-full max-w-md"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DeploymentProcess;
import React from "react";
// ... (your existing imports)
import "../../index"

const DeploymentProcess: React.FC = () => {
  const deploymentSteps = [
    { label: "Receive Offer Letter", icon: process1 },
    { label: "Offer Letter Accepted", icon: process2 },
    { label: "Issue PCC & Receive Visa", icon: process3 },
    { label: "Medical Checkups", icon: process4 },
    { label: "Visa Stamping", icon: process5 },
    { label: "Receive Air Tickets", icon: process6 },
    { label: "Departure", icon: process7 },
  ];

  return (
    <section className="bg-[#F4F8FF] font-manrope overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:pt-16 py-10">
        <div className="text-center md:mb-14 mb-10">
          <h2 className="md:text-4xl text-3xl font-extrabold leading-[44px] mb-2">
            <span className="text-primary-red">After selection</span>
            <span className="text-[#06213F] block">Deployment Process</span>
          </h2>
        </div>

        <div className="flex flex-col  md:items-center lg:flex-row gap-10 relative">
          <ol className="flex-1 space-y-8 relative">

            <div className="animate-sequence-loop">
              <div className="absolute left-[23px] top-6 bottom-6 w-[5px] bg-gray-200 overflow-hidden">
                <div
                  className="h-full w-full bg-blue-500 origin-top animate-line-draw-infinite"
                />
              </div>

              {deploymentSteps.map((step, idx) => (
                <li key={step.label} className="flex items-center gap-6 relative z-10 mb-8 last:mb-0">
                  {/* The Indicator: Glowing Dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100 opacity-0 animate-pop-in-infinite"
                      style={{ animationDelay: `${idx * 0.6}s` }}
                    >
                      <div className="w-3 h-3 bg-blue-600 rounded-sm shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                    </div>
                  </div>

                  {/* The Content: Slide-in Card */}
                  <div
                    className="flex items-center gap-4 w-full lg:max-w-sm md:w-[450px] px-4 h-14 bg-white rounded-md shadow-sm border border-gray-100 opacity-0 animate-slide-in-infinite"
                    style={{ animationDelay: `${(idx * 0.6) + 0.2}s` }}
                  >
                    <img src={step.icon} alt="icon" className="h-7 w-7 object-contain" />
                    <span className="font-extrabold text-[#002661] text-sm md:text-base">
                      {step.label}
                    </span>
                  </div>
                </li>
              ))}
            </div>
          </ol>

          <div className="flex-1 flex items-center justify-center">
            <img src={processimg} alt="Deployment Process" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentProcess;