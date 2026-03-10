import React from 'react';
import img1 from '../assets/images/iso.png'
import img2 from '../assets/images/dataprotection.png'
import img3 from '../assets/images/approvedbedge.png'
import img4 from '../assets/images/nda.png'
import img5 from '../assets/images/sdh.png'

const SecurityAndPartners: React.FC = () => {


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
   
    </section>
  );
};

export default SecurityAndPartners;