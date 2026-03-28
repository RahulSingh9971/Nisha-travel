import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}
// Props type define karein
interface BannerSectionProps {
  title: string;
  bannerImg: string;
  position?: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  bannerImg,
  position
}) => {
  return (
    <div
      className="relative w-full md:h-[280px] h-50 flex font-manrope items-center justify-center text-primary-white"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
    backgroundPosition: position
        
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Title */}
      <div className="flex flex-col md:gap-3 gap-2">
        <h1 className="relative tracking-wide leading-tight lg:text-[42px] text-3xl font-extrabold z-10 text-center">
          {title}
        </h1>
        {/* Breadcrumb */}
        {/* <nav className="relative z-10 mb-2 w-full flex justify-center">
          <ol className="flex space-x-1 text-primary-navybluetext-[16px] font-medium">
            {path.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.href ? (
                  <li>
                    <Link to={item.href} className="hover:underline text-primary-white">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li
                    className={idx === path.length - 1 ? "text-[#ed5f0d]" : ""}
                  >
                    {item.label}
                  </li>
                )}
                {idx < path.length - 1 && (
                  <li>
                    <span className="mx-1 text-primary-white">/</span>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav> */}
      </div>
    </div>
  );
};

export default BannerSection;
