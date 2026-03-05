import React from 'react';
import flagUrl1 from '../../assets/images/saudiflag.png'
import flagUrl2 from '../../assets/images/kuwaithflag.png'
import flagUrl3 from '../../assets/images/qater.png'
import flagUrl4 from '../../assets/images/bahrain.png'
import flagUrl5 from '../../assets/images/omanflag.png'
import flagUrl6 from '../../assets/images/uaeflag.png'
import flagUrl7 from '../../assets/images/iraqflag.png'

import img1 from '../../assets/images/iso.png'
import img2 from '../../assets/images/dataprotection.png'
import img3 from '../../assets/images/approvedbedge.png'
import img4 from '../../assets/images/nda.png'
import img5 from '../../assets/images/sdh.png'

interface Partner {
  name: string;
  flagUrl: string; // Replace with your actual asset paths
}

const SecurityAndPartners: React.FC = () => {
  const partners: Partner[] = [
    { name: 'SAUDI EMBASSY', flagUrl: flagUrl1 },
    { name: 'KUWAIT EMBASSY', flagUrl: flagUrl2 },
    { name: 'QATAR EMBASSY', flagUrl: flagUrl3 },
    { name: 'BAHRAIN EMBASSY', flagUrl: flagUrl4 },
    { name: 'OMAN EMBASSY', flagUrl: flagUrl5},
    { name: 'UAE EMBASSY', flagUrl: flagUrl6},
    { name: 'IRAQ EMBASSY', flagUrl: flagUrl7 },
  ];

  return (
    <section className="w-full bg-primary-lightblue font-manrope">
      {/* Security & Compliance Section */}
      <div className="bg-[#e8f1f8] py-12 px-4 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold text-[#1a365d] mb-10">Security & Compliance</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-6xl mx-auto">
         
          {/* Badge Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            <img src={img1} alt="Data Protection" className="md:h-36 md:w-[180px] h-20 w-20" />
            <img src={img2} alt="Embassy Approved" className="md:h-36 md:w-36 h-20 w-20" />
            <img src={img3} alt="NDA" className="md:h-36 md:w-36 h-20 w-20" />
            <img src={img4} alt="Secure Handling" className="md:h-36 md:w-36 h-20 w-20" />
            <img src={img5} alt="Secure Handling" className="md:h-36 md:w-36 h-20 w-20" />
            
          </div>
        </div>
      </div>

      {/* Official Partners Section */}
      <div className="bg-white pt-16 px-4 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold text-[#1a365d] mb-10">We're Official Partners</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="flex items-center bg-[#f0f4f8] p-2 rounded shadow-sm border border-gray-100"
              >
                <img 
                  src={partner.flagUrl} 
                  alt={partner.name} 
                  className="w-20 h-10 object-cover mr-3 shadow-sm" 
                />
                <span className="text-[14px] font-extrabold text-gray-700 tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Authorization Text */}
          <div className="text-primary-gray font-semibold text-[14px] leading-relaxed max-w-2xl mx-auto">
            <p>We're authorised by the Embassy (The Royal Embassy of Saudi Arabia)</p>
            <p>The Embassy of State of Kuwait</p>
            <p>The Consulate of State of Kuwait</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndPartners;