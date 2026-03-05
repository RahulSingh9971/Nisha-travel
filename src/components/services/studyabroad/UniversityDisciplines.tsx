import React from 'react';

const UniversityDisciplines: React.FC = () => {
  const disciplines = [
    ["Accounting & Finance", "Architecture", "Artificial Intelligence", "Biotechnology", "Business & Management", "Computer Science", "Cyber Security", "Data Science", "Engineering"],
    ["Hospitality & Tourism", "Information Technology", "Law", "MBA", "Medicine & Healthcare", "Media & Communication", "Psychology", "Science & Research"]
  ];

  const essentials = [
    "Education Loans", "Money Transfer Services", "Health Insurance", "Student Banking", 
    "Accommodation Assistance", "International SIM Cards", "Guardianship Services", 
    "Forex Cards", "ISIC (International Student Identity Card)"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-0">
      {/* Top Section: Image Left, Text Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="h-[400px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000" 
            alt="University Building" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:p-16 bg-white">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
            Explore a wide range of disciplines offered by global universities:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            {disciplines.map((column, i) => (
              <ul key={i} className="space-y-2">
                {column.map((item) => (
                  <li key={item} className="flex items-start text-sm text-slate-700 font-medium">
                    <span className="mr-2 text-slate-900">•</span> {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <button className="mt-8 px-8 py-2 bg-[#C21807] text-primary-white font-bold text-sm rounded-sm hover:bg-red-800 transition-colors uppercase tracking-wider">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Section: Text Left, Image Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1 p-8 lg:p-16 bg-white">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
            Study Essentials, Everything you need beyond admissions.
          </h2>
          <ul className="space-y-2">
            {essentials.map((item) => (
              <li key={item} className="flex items-start text-sm text-slate-700 font-medium">
                <span className="mr-2 text-slate-900">•</span> {item}
              </li>
            ))}
          </ul>
          <button className="mt-8 px-8 py-2 bg-[#C21807] text-primary-white font-bold text-sm rounded-sm hover:bg-red-800 transition-colors uppercase tracking-wider">
            Contact Us
          </button>
        </div>
        <div className="order-1 md:order-2 h-[400px] w-full">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000" 
            alt="Student Studying" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UniversityDisciplines;