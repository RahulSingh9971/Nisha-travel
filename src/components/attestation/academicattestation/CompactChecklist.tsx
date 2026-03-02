import React from 'react';
import icon from '../../../assets/images/check.png'

const docLabels: string[] = [
  "10th (SSC)", "HSE (12th)", "Diploma", "Degree", "Marksheets",
  "Transcript", "Migration Certificate", "Provisional Certificate", "Transfer Certificate"
];

const CompactChecklist: React.FC = () => {
    return (
        <>
        <section className="bg-[#EAF0F6] font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 py-10  ">
            <div className='max-w-6xl mx-auto'> <div className="text-center mb-12">
                <h2 className="md:text-4xl text-3xl font-extrabold text-[#C40808]">Required Documents &</h2>
                <h2 className="md:text-4xl text-3xl font-extrabold text-[#0E313A]">Checklist</h2>
            </div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {docLabels.map((label, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm border border-slate-100"
                        >
                            <img src={icon} alt='imgicon' className="w-5 h-5" />
                            <span className="font-extrabold text-[#06213F] text-[16px] whitespace-nowrap">{label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#C40808] hover:bg-red-800 text-white font-bold py-2 px-6 rounded-full text-xs uppercase tracking-wider">
                        Download Checklist (PDF)
                    </button>
                </div>
            </div>
        </section>
          <div className='pt-20' />
        </>
    );
};

export default CompactChecklist;