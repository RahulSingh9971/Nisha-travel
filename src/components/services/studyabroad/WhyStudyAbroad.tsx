import React from 'react';
// These imports resolve to string paths in Webpack/Vite
import Award from '../../../assets/images/award.png';
import Target from '../../../assets/images/hundrade.png';
import Landmark from '../../../assets/images/education.png';
import Users from '../../../assets/images/counselling.png';

interface StatItem {
  icon: string; 
  title: string;
  desc: string;
  highlight: boolean;
}

const WhyStudyAbroad: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: Award,
      title: "33+ Years of Excellence",
      desc: "A legacy built on trust, transparency, and results.",
      highlight: false
    },
    {
      icon: Target,
      title: "100% Success-Focused Guidance",
      desc: "From counselling to visa approval, every step is handled by experts.",
      highlight: true
    },
    {
      icon: Landmark,
      title: "Affordable Global Education",
      desc: "Study abroad opportunities starting at ₹9 Lakhs* with flexible options.",
      highlight: false
    },
    {
      icon: Users,
      title: "Personalised Counselling",
      desc: "Every student receives one-on-one career-focused guidance.",
      highlight: false
    }
  ];

  const benefits = [
    { title: "Access to globally recognised universities", img: "https://images.unsplash.com/photo-1498243639159-04980f576212?q=80&w=800" },
    { title: "Better career opportunities & international exposure", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
    { title: "Opportunity to work while studying", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800" },
    { title: "Multicultural learning environment", img: "https://images.unsplash.com/photo-1523240715639-99a8080f1e4c?q=80&w=800" },
    { title: "Pathways to global careers and PR opportunities", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { title: "Higher return on education investment", img: "https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?q=80&w=800" }
  ];

  return (
    <>
    <section className=" pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#001f3f] mb-12">
          Why Study Abroad <span className="text-primary-red">With NTA</span>
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`p-6  transition-all duration-300`}
            >
              <div className="mb-4">
                {/* FIXED: Changed stats.icon to stat.icon */}
                <img src={stat.icon} alt={stat.title} className="w-10 h-10 object-contain" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 leading-tight">{stat.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
           </div>
    </section>
   <section className="bg-primary-lightblue py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Benefits Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 h-64 shadow-md">
                <img 
                  src={benefit.img} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h5 className="text-lg font-bold text-[#001f3f] leading-tight group-hover:text-primary-red transition-colors">
                {benefit.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyStudyAbroad;