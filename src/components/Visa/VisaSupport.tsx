import React from 'react';

interface VisaCard {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const visaTypes: VisaCard[] = [
  {
    title: "Work Visa",
    description: "Allows individuals to live and work legally in a foreign country for a specific employer, role, or contract-based employment period.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-teal-900/60"
  },
  {
    title: "Business Visa",
    description: "Grants entry for short-term business activities like meetings, negotiations, conferences, or market visits without engaging in full-time employment.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-slate-900/60"
  },
  {
    title: "Dependent Visa",
    description: "Allows spouses, children, or dependents of a primary visa holder to live, study, or sometimes work in the destination country legally.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800",
    bgColor: "bg-gray-900/60"
  },
  {
    title: "Family Visa",
    description: "Enables family members to reunite and reside together in a foreign country, offering long-term stay options based on sponsorship.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
    bgColor: "bg-indigo-900/60"
  },
  {
    title: "Medical Visa",
    description: "Permits foreign nationals to travel for medical treatment, surgeries, or specialized healthcare unavailable in their home country.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-orange-500/60"
  },
  {
    title: "Student Visa",
    description: "Allows individuals to study full-time in accredited foreign institutions, granting residence for the duration of the academic course.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-cyan-500/60"
  },
  {
    title: "Seaman Visa",
    description: "Issued to crew members joining ships or vessels, enabling international travel, transit, and boarding for maritime duties.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-sky-600/60"
  },
  {
    title: "Transit Visa",
    description: "Allows short-term passage through a country's airport or borders while traveling to another destination.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-stone-600/60"
  },
  {
    title: "Visit Visa",
    description: "Grants temporary entry for tourism, leisure, meeting relatives, or short personal trips without permitting work residence.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    bgColor: "bg-teal-500/60"
  }
];

export default function VisaSupport() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-Manrope">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            We Support All <br />
            <span className="text-primary-red">Visa Types</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-gray-500 text-sm leading-relaxed">
            A quick guide to various visa types, helping you understand their 
            purpose, eligibility, and use for work, travel, study, medical, and family needs.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaTypes.map((visa, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-lg"
          >
            {/* Background Image */}
            <img 
              src={visa.image} 
              alt={visa.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Color Overlay */}
            <div className={`absolute inset-0 ${visa.bgColor} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity`} />
            
            {/* Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-primary-white mb-2">{visa.title}</h3>
              <p className="text-primary-white/90 text-xs leading-relaxed line-clamp-3">
                {visa.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}