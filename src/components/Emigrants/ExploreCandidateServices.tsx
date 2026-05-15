import React from 'react';
import imgPlacement from '../../assets/images/image (2).png';
import imgVisaDocs from '../../assets/images/image (3).png';
import imgDataflow from '../../assets/images/image (4).png';
import imgSkillTesting from '../../assets/images/image (5).png';
import imgTravelSupport from '../../assets/images/image (6).png';

const ExploreCandidateServices = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-manrope">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          
          {/* Top Left Content (Spans 2 Columns on Desktop) */}
          <div className="sm:col-span-2 flex flex-col justify-center pr-4 mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
              <span className="text-[#0a1e3f] block">Explore</span>
              <span className="text-[#c1272d] block mt-1">Candidate Services</span>
            </h2>
            <p className="text-[#5e6d7c] text-base md:text-lg leading-relaxed font-medium max-w-lg">
              Discover a wide range of value-added services, from document attestation to premium visa support, designed to make your overseas journey smoother, faster, and completely hassle-free.
            </p>
          </div>

          {/* Top Right - Service Card 1 */}
          <div className="relative h-72 sm:h-80 lg:h-auto min-h-[260px] rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img 
              src={imgPlacement} 
              alt="Overseas Job Placement" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(109,242,167,0)_45.47%,#302D48_100%)]"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-extrabold text-lg md:text-xl leading-snug pr-6">
              Overseas Job <br className="hidden md:block"/> Placement
            </h3>
          </div>

          {/* Top Right - Service Card 2 */}
          <div className="relative h-72 sm:h-80 lg:h-auto min-h-[260px] rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img 
              src={imgVisaDocs} 
              alt="Visa & Documentation Solutions" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(109,242,167,0)_45.47%,#302D48_100%)]"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-extrabold text-lg md:text-xl leading-snug pr-6">
              Visa & Documentation <br className="hidden md:block"/> Solutions
            </h3>
          </div>

          {/* Bottom Row - Service Card 3 */}
          <div className="relative h-72 sm:h-80 rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img 
              src={imgDataflow} 
              alt="Dataflow & Prometric Assistance" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(109,242,167,0)_45.47%,#302D48_100%)]"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-extrabold text-lg md:text-xl leading-snug pr-6">
              Dataflow & Prometric <br className="hidden md:block"/> Assistance
            </h3>
          </div>

          {/* Bottom Row - Service Card 4 */}
          <div className="relative h-72 sm:h-80 rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img 
              src={imgSkillTesting} 
              alt="Skill Testing & Trade Tests" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(109,242,167,0)_45.47%,#302D48_100%)]"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-extrabold text-lg md:text-xl leading-snug pr-6">
              Skill Testing & <br className="hidden md:block"/> Trade Tests
            </h3>
          </div>

          {/* Bottom Row - Service Card 5 */}
          <div className="relative h-72 sm:h-80 rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img 
              src={imgTravelSupport} 
              alt="Travel & Pre-Departure Support" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(109,242,167,0)_45.47%,#302D48_100%)]"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-extrabold text-lg md:text-xl leading-snug pr-6">
              Travel & Pre- <br className="hidden md:block"/> Departure Support
            </h3>
          </div>

          {/* Bottom Row - Card 6: CTA Grid Block */}
          <div className="bg-[#2e6cb2] h-72 sm:h-80 rounded-[24px] p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-white text-2xl md:text-[26px] font-bold leading-[1.3] tracking-tight pr-2">
              Explore Other solutions we offer
            </h3>
            <div>
              <button 
                onClick={() => window.location.href = '/ourcoreservices'}
                className="bg-[#c1272d] hover:bg-red-700 text-white text-xs tracking-widest font-bold py-3.5 px-6 shadow-md transition-all active:scale-95 uppercase whitespace-nowrap"
              >
                KNOW MORE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreCandidateServices;
