import React from "react";
import familyImg from "../../../assets/images/recruitment.png";


const EducationalDocuments = () => {

    return (
        <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 py-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 lg:gap-10 gap-10 items-center">
                <img src={familyImg} alt="Happy Family" className="md:order-2 order-1 w-full mx-auto" />
                <div className="md:order-1 order-2">
                    <h2 className="xl:text-[38px] md:text-4xl text-3xl font-extrabold mb-2 leading-wider">
                        <span className="text-[#C40808]">Academic or </span>
                        <span className="text-[#0E313A] block">Educational Documents</span>
                    </h2>
                    <p className="md:pt-4 pt-2 pb-3 md:pb-6 text-[#666666] text-[16px] leading-7 font-medium ">
                       Our visa experts guide you through every step — from document preparation to application submission — ensuring a smooth and successful process for any destination.
                    </p>
                    <button className="font-Poppins uppercase text-[16px] font-bold bg-[#C40808] text-white px-8 py-2">
                        Apply Visa
                    </button>
                </div>
            </div>
        </section>)
};
export default EducationalDocuments;