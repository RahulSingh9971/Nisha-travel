import React from "react";
import blogimg1 from "../assets/images/blogimg-1.png";
import blogimg4 from "../assets/images/blogimg-4.png";
import blogimg5 from "../assets/images/blogimg-5.png";
import blogimg6 from "../assets/images/blogimg-6.png";
import img2 from "../assets/images/img2.png";
import img4 from "../assets/images/img4.png";

const BlogDetailPage: React.FC = () => {
  return (
    <div className="font-poppins bg-white mt-[0px] lg:mt-[20px] mb-20">

      {/* Banner / Hero Image */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 pt-8">
        <img
          src={img2}
          alt="Tower Bridge Banner"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-[24px]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop';
          }}
        />
      </section>

      {/* Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Content Area */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">
              3 MINUTE READ <span className="mx-1">•</span> JUNE 26, 2024
            </span>
            <span className="bg-[#ffc107] text-[#0d213b] text-[10px] font-bold px-3 py-[4px] rounded-full uppercase tracking-wider">
              BY CAELIN COLEMAN
            </span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#0d213b] mb-8 leading-[1.3]">
            5 Reasons Visa Applications are Rejected in 2026 (And How to Avoid Them)
          </h1>

          <div className="prose max-w-none text-gray-600 text-[15px] leading-relaxed space-y-6">
            <p>
              Applying for a visa used to be about checking boxes on a paper form. In 2026, the game has changed. With
              embassies now using AI-supported screening and digital travel history analysis, your "invisible" profile matters
              as much as your physical documents. If you're planning to move or travel this year, here are the top five pitfalls
              we're seeing at our agency—and exactly how to steer clear.
            </p>

            <h3 className="text-[#0d213b] font-bold text-[18px] mt-8 mb-4">1. The "Social Media" Red Flag</h3>
            <p>Many applicants are surprised to learn that immigration officers in countries like the U.S. and Australia now routinely screen public social media profiles.</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><span className="font-semibold text-[#0d213b]">The Trap:</span> Posting about "looking for a job" while applying for a simple tourist visa.</li>
              <li><span className="font-semibold text-[#0d213b]">The Fix:</span> Ensure your digital footprint matches your stated intent. Keep your profiles professional and private during the application window.</li>
            </ul>

            <h3 className="text-[#0d213b] font-bold text-[18px] mt-8 mb-4">2. Inconsistent "Digital Travel History"</h3>
            <p>In 2026, data-sharing between borders is near-instant. If you overstayed by even two days in a "visa-free" country three years ago, the system will flag it.</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><span className="font-semibold text-[#0d213b]">The Trap:</span> Failing to disclose a minor past refusal or overstay because you think "it was a different country."</li>
              <li><span className="font-semibold text-[#0d213b]">The Fix:</span> Honesty is the only policy. Always disclose past issues; a pivot in your circumstances is easier to explain than a lie.</li>
            </ul>

            <h3 className="text-[#0d213b] font-bold text-[18px] mt-8 mb-4">3. Unexplained "Large Deposits"</h3>
            <p>Financial legitimacy is a major focus this year. Sudden, large infusions of cash into your bank account right before applying are a massive red flag for "visa fraud."</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><span className="font-semibold text-[#0d213b]">The Trap:</span> Borrowing money from a friend to "pad" your account for a week.</li>
              <li><span className="font-semibold text-[#0d213b]">The Fix:</span> Maintain a "healthy" balance for at least 3-6 months. If you receive a legitimate large sum (like a property sale), include the legal source documents.</li>
            </ul>

            <h3 className="text-[#0d213b] font-bold text-[18px] mt-8 mb-4">4. Ignoring the "Bleisure" & Digital Nomad Rules</h3>
            <p>With more people working remotely, many try to work on a tourist visa. In 2026, countries have specific "Digital Nomad" or "Remote Work" permits.</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><span className="font-semibold text-[#0d213b]">The Trap:</span> Entering as a tourist but bringing a full office setup and intending to stay for 6 months.</li>
              <li><span className="font-semibold text-[#0d213b]">The Fix:</span> Apply for the correct category. Many countries now offer 1-year remote work visas that are often easier to get than traditional work permits.</li>
            </ul>

            <h3 className="text-[#0d213b] font-bold text-[18px] mt-8 mb-4">5. Weak "Ties to Home"</h3>
            <p>The #1 reason for rejection remains the "intent to return." Officers want to know you won't disappear into their country.</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><span className="font-semibold text-[#0d213b]">The Trap:</span> Not providing enough evidence of your life back home (property, family, or a stable job).</li>
              <li><span className="font-semibold text-[#0d213b]">The Fix:</span> Provide "Social and Economic Stability" proof. This includes employment letters, enrollment in studies, or even community leadership roles.</li>
            </ul>

            <h3 className="text-[#0d213b] font-bold text-[18px] mt-8 mb-4">Final Thought</h3>
            <p>A visa isn't just a stamp; it's the key to your next chapter. Don't let a minor clerical error or a digital footprint oversight hold you back.</p>
            <p>Ready to start your journey? Our experts at Nisa Travel Agency offer personalized document audits and mock interviews to ensure your first application is your last one.</p>
          </div>
        </div>

        {/* Right Sidebar Form Area */}
        <div className="lg:col-span-4">
          <div className="bg-[#f4f7f9] rounded-[16px] overflow-hidden sticky top-[120px]">
            <div className="bg-[#0d213b] p-6 text-white pb-8">
              <p className="text-sm text-gray-300 mb-1">Let's start planning your next adventure.</p>
              <h3 className="text-xl md:text-[22px] font-bold leading-tight">We're just a message away.</h3>
            </div>

            <form className="p-6 space-y-4 font-poppins -mt-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">First Name*</label>
                <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">Email Address*</label>
                <input type="email" placeholder="Enter Email Address" className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">Phone Number*</label>
                <input type="tel" placeholder="Enter Phone Number" className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">Message</label>
                <textarea placeholder="Type Your Message" rows={4} className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15] resize-none"></textarea>
              </div>
              <button className="bg-[#c20c15] text-white font-bold text-[12px] uppercase px-8 py-3 rounded-[4px] hover:bg-red-800 transition-colors">
                SUBMIT
              </button>
            </form>
          </div>
        </div>

      </section>

      {/* Grid Articles Section */}
      <section className="bg-white w-full py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

          {[blogimg6, img4, blogimg5].map((imgSrc, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative mb-5">
                <img
                  src={imgSrc}
                  alt="Blog Category"
                  className="w-full h-[220px] rounded-[24px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
                <span className="absolute bottom-4 left-4 bg-[#c20c15] text-white text-[9px] md:text-[10px] font-bold px-3 py-[6px] rounded-full uppercase tracking-wider">
                  BY CAELIN COLEMAN
                </span>
              </div>
              <div className="text-[12px] text-gray-500 font-bold mb-3 uppercase tracking-wide">
                3 MINUTE READ <span className="mx-1">•</span> OCTOBER 8, 2025
              </div>
              <h4 className="text-[20px] md:text-[22px] font-bold text-[#0d213b] mb-3 leading-tight">
                How to visa for moving abroad as a full time student?
              </h4>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <a href="#" className="text-[#c20c15] font-bold text-[14px] hover:underline mt-auto">Read More</a>
            </div>
          ))}

        </div>

        {/* Pagination component */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-16 flex items-center justify-between border-t border-gray-100 pt-8 pb-4">
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

export default BlogDetailPage;
