import React from 'react';

interface DocItem {
    title: string;
    description: string;
}

const docs: DocItem[] = [
    { title: "10th (SSC)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "HSE (12th)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Diploma", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Degree", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Marksheets", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Transcript", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Migration Certificate", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Provisional Certificate", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Transfer Certificate", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
];

const DocumentChecklist: React.FC = () => {
    return (
        <>   <section className="bg-primary-lightblue font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:pt-10 md:pt-16 py-10  ">
            <div className='max-w-6xl mx-auto'>
                <div className="text-center mb-12">
                    <h2 className="md:text-4xl text-3xl font-extrabold text-primary-red">Required Documents &</h2>
                    <h2 className="md:text-4xl text-3xl font-extrabold text-primary-gray">Checklist</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
                    {docs.map((doc, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="font-extrabold text-primary-gray text-lg mb-2">{doc.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {doc.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="bg-primary-red hover:bg-red-700 text-primary-white font-bold py-2 px-6 rounded-full text-xs uppercase tracking-wider transition-colors">
                        Download Checklist (PDF)
                    </button>
                </div>
            </div>
        </section> <div className='pt-10' /></>
    );
};

export default DocumentChecklist;