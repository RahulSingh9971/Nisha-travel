import React from 'react';
import icon from '../../../assets/images/check.png'

const docLabels: string[] = [
    "Invoice", "Bill of Supply", "Incorporation Certificate", "Commercial Lease Agreement", "Chamber of Commerce Certificate",
    "Chamber of Commerce Certificate", "Commercial Affidavit"
];

const CommercialChecklist: React.FC = () => {
    return (
        <>
        <section className="bg-primary-lightblue font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 py-10  ">
            <div className='max-w-6xl mx-auto'> <div className="text-center mb-12">
                <h2 className="md:text-4xl text-3xl font-extrabold text-primary-red">Required Documents &</h2>
                <h2 className="md:text-4xl text-3xl font-extrabold text-primary-navyblue">Checklist</h2>
            </div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {docLabels.map((label, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm border border-slate-100"
                        >
                            <img src={icon} className="w-5 h-5" />
                            <span className="font-extrabold text-primary-navyblue text-[16px] whitespace-nowrap">{label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="bg-primary-red hover:bg-red-800 text-primary-white font-bold py-2 px-6 rounded-full text-xs uppercase tracking-wider">
                        Download Checklist (PDF)
                    </button>
                </div>
            </div>
        </section>
          <div className='pt-20' />
        </>
    );
};

export default CommercialChecklist;