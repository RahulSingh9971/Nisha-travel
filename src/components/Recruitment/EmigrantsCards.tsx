import React from "react";
import employerImg from "../../assets/images/employee.svg";
import emigrantImg from "../../assets/images/employee2.svg";

const cardData = [
  {
    image: employerImg,
    title: "Foreign Employers",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "KNOW MORE"
  },
  {
    image: emigrantImg,
    title: "Emigrants",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "KNOW MORE"
  }
];

export default function EmigrantsCards() {
  return (
    <section className=" py-8 lg:px-8 md:px-12 px-4 bg-white font-manrope">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cardData.map((card, idx) => (
          <div key={idx} className="flex flex-col max-w-lg items-center text-center md:text-left md:items-start">
            <img src={card.image} alt={card.title} className="w-75 h-56 mb-6" />
            <h2 className="lg:text-4xl text-3xl font-extrabold text-[#002661] mb-4">{card.title}</h2>
            <p className="mb-6 text-[#002661] text-base leading-relaxed">{card.text}</p>
            <button className="bg-[#C40808] text-white font-bold px-8 py-2 shadow hover:bg-red-700 transition">{card.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
