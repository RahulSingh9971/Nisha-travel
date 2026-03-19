import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/images/Vision statement-pana 1.png";
import blogimg1 from "../assets/images/blogimg-1.png";
import blogimg2 from "../assets/images/blogimg-2.png";
import blogimg3 from "../assets/images/blogimg-3.png";
import blogimg4 from "../assets/images/blogimg-4.png";
import blogimg5 from "../assets/images/blogimg-5.png";
import blogimg6 from "../assets/images/blogimg-6.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const BlogPage: React.FC = () => {
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="bg-[#f0f4f8] w-full pt-16 md:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-6">
              <span className="text-[#c20c15] block mb-2">Travel Tips, Visa</span>
              <span className="text-[#0d213b] block">Updates & Guides</span>
            </h1>
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] max-w-[90%] md:max-w-full">
              Stay updated with travel insights, visa processes, documentation
              guides, and helpful tips from Nisa Travel Agency to make your travel
              planning easier and more reliable.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={illustration}
              alt="Visa and Travel Guide Illustration"
              className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-white w-full pt-16 md:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

          {/* Main Article (Left) */}
          <div className="flex flex-col">
            <img
              src={blogimg1}
              alt="Eiffel Tower"
              className="w-full h-auto rounded-[24px] object-cover mb-8 aspect-[4/3] lg:aspect-auto lg:h-[400px]"
            />
            <div className="flex flex-col flex-1">
              <div className="text-[13px] text-gray-500 font-bold mb-3 uppercase tracking-wide">
                OCTOBER 8, 2025 <span className="mx-2">•</span> 3 MINUTE READ
              </div>
              <Link to="/blog-detail">
                <h3 className="text-3xl md:text-[32px] font-bold text-[#0d213b] mb-4 hover:text-[#c20c15] transition-colors">
                  How to visa for moving abroad?
                </h3>
              </Link>
              <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
              <div className="flex items-center justify-between mt-auto">
                <Link to="/blog-detail" className="text-[#c20c15] font-bold hover:underline">Read More</Link>
                <span className="bg-[#c20c15] text-white text-[10px] md:text-xs font-bold px-4 py-[6px] rounded-full uppercase tracking-wider">
                  BY CAELIN COLEMAN
                </span>
              </div>
            </div>
          </div>

          {/* Side Articles (Right) */}
          <div className="flex flex-col space-y-10 lg:pl-4">
            {[blogimg2, blogimg3, blogimg4].map((img, i) => (
              <div className="flex flex-col sm:flex-row gap-6" key={i}>
                <img
                  src={img}
                  alt="Article Thumbnail"
                  className="w-full sm:w-[260px] h-[200px] sm:h-[180px] rounded-[24px] object-cover flex-shrink-0"
                />
                <div className="flex flex-col flex-1 py-1">
                  <div className="text-[11px] text-gray-500 font-bold mb-2 uppercase tracking-wide">
                    3 MINUTE READ <span className="mx-1">•</span> JUNE 26, 2024
                  </div>
                  <Link to="/blog-detail">
                    <h4 className="text-[22px] font-bold text-[#0d213b] mb-3 leading-tight hover:text-[#c20c15] transition-colors">
                      How does the study abroad process work?
                    </h4>
                  </Link>
                  <p className="text-gray-600 text-[14px] mb-5 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <Link to="/blog-detail" className="text-[#c20c15] font-bold text-[14px] hover:underline">Read More</Link>
                    <span className="bg-[#c20c15] text-white text-[9px] font-bold px-3 py-[4px] rounded-full uppercase tracking-wider">
                      BY CAELIN COLEMAN
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Grid Articles Section */}
      <section className="bg-white w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

          {[blogimg5, blogimg2, blogimg6, img2, img3, img4].map((imgSrc, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative mb-5">
                <img
                  src={imgSrc}
                  alt="Blog Category"
                  className="w-full h-[220px] rounded-[24px] object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-[#c20c15] text-white text-[9px] md:text-[10px] font-bold px-3 py-[6px] rounded-full uppercase tracking-wider">
                  BY CAELIN COLEMAN
                </span>
              </div>
              <div className="text-[12px] text-gray-500 font-bold mb-3 uppercase tracking-wide">
                3 MINUTE READ <span className="mx-1">•</span> OCTOBER 8, 2025
              </div>
              <Link to="/blog-detail">
                <h4 className="text-[20px] md:text-[22px] font-bold text-[#0d213b] mb-3 leading-tight hover:text-[#c20c15] transition-colors">
                  How to visa for moving abroad as a full time student?
                </h4>
              </Link>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <Link to="/blog-detail" className="text-[#c20c15] font-bold text-[14px] hover:underline mt-auto">Read More</Link>
            </div>
          ))}

        </div>

        {/* Pagination component */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-16 flex items-center justify-between border-t border-gray-100 pt-8 pb-10">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm text-[#0d213b] font-semibold hover:bg-gray-50">
            <span className="text-lg leading-none mb-[2px]">←</span> Previous
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {[1, 2, 3, '...', 8, 9, 10].map((page, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium ${page === 1
                    ? 'bg-[#f5f0ff] text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50'
                  } ${page === '...' ? 'cursor-default hover:bg-transparent text-gray-400' : ''}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm text-[#0d213b] font-semibold hover:bg-gray-50">
            Next <span className="text-lg leading-none mb-[2px]">→</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;
