import React from "react";
import { motion } from "framer-motion";
import icon1 from "../../assets/images/industry-icon1.svg";
import icon2 from "../../assets/images/industry-icon2.svg";
import icon3 from "../../assets/images/industry-icon3.svg";
import icon4 from "../../assets/images/industry-icon4.svg";
import icon5 from "../../assets/images/industry-icon5.svg";
import icon6 from "../../assets/images/industry-icon6.svg";
import icon7 from "../../assets/images/industry-icon7.svg";
import icon8 from "../../assets/images/industry-icon8.svg";
import icon9 from "../../assets/images/industry-icon9.svg";
import icon10 from "../../assets/images/industry-icon10.svg";
import icon11 from "../../assets/images/industry-icon11.svg";
import icon12 from "../../assets/images/industry-icon12.svg";
import icon13 from "../../assets/images/industry-icon13.svg";
import icon14 from "../../assets/images/industry-icon14.svg";
import icon15 from "../../assets/images/industry-icon15.svg";

interface IndustryItem {
  icon: string;
  label: string;
}

const industries: IndustryItem[] = [
  { icon: icon1, label: "LOGISTICS & TRANSPORTATION" },
  { icon: icon2, label: "AUTO MOBILE" },
  { icon: icon3, label: "RETAIL" },
  { icon: icon4, label: "SECURITY" },
  { icon: icon5, label: "E-COMMERCE" },
  { icon: icon6, label: "TEXTILE & GARMENTS" },
  { icon: icon7, label: "MEDIA & ADVERTISING" },
  { icon: icon8, label: "BANKING & INSURANCE" },
];

const construction: IndustryItem[] = [
  { icon: icon9, label: "OIL & GAS" },
  { icon: icon10, label: "EDUCATION" },
  { icon: icon11, label: "CIVIL CONSTRUCTION" },
  { icon: icon12, label: "HOTEL / RESTAURANTS & TOURISM" },
  { icon: icon13, label: "MEDICAL & HEALTH CARE" },
  { icon: icon14, label: "POWER & ENERGY" },
  { icon: icon15, label: "DAIRY & MEAT" },
];

interface MarqueeProps {
  items: IndustryItem[];
  direction?: "left" | "right";
  duration?: number;
}

const MarqueeRow: React.FC<MarqueeProps> = ({ items, direction = "left", duration = 25 }) => {
  // We double the items to create a seamless loop
  const doubledItems = [...items, ...items];

  return (
    <div className="flex overflow-hidden w-full py-3 group">
      <motion.div
        className="flex gap-x-14 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        // Optional: Pauses the marquee on hover for better UX
        whileHover={{ animationPlayState: "paused" }}
        style={{ width: "max-content" }}
      >
        {doubledItems.map((item, idx) => (
          <div key={`${item.label}-${idx}`} className="flex gap-4 items-center min-w-max px-2">
            <div className="bg-[#EAF0F6] rounded-full flex items-center justify-center w-14 h-14 shadow-sm border border-gray-100">
              <img 
                src={item.icon} 
                alt={item.label} 
                className="h-7 w-7 object-contain" 
              />
            </div>
            <span className="text-[16px] font-bold text-[#06213F] tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function IndustriesWeCater() {
  return (
    <section className="bg-white md:py-20 py-12 px-4 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          <span className="text-[#C40808]">Industries</span>{" "}
          <span className="text-[#223544]">We Cater</span>
        </h2>

        <div className="flex flex-col">
          {/* Top Row - Moving Left */}
          <MarqueeRow items={industries} direction="left" duration={30} />
          
          {/* Bottom Row - Moving Right */}
          <MarqueeRow items={construction} direction="right" duration={30} />
        </div>
      </div>
    </section>
  );
}