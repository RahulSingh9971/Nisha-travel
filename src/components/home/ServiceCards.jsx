import { Link } from "react-router-dom";

const services = [
  {
    title: "Apply for Visa",
    link:"visaservices",
    description: "Nisa Travel Agency is a provider of low cost planning in USA.",
    buttonText: "APPLY VISA"
  },
  {
    title: "Book Appointment",
     link:"#",
    description: "Nisa Travel Agency is a provider of low cost planning in USA.",
    buttonText: "BOOK NOW"
  },
  {
    title: "Find a Centre",
     link:"#",
    description: "Nisa Travel Agency is a provider of low cost planning in USA.",
    buttonText: "FIND A CENTRE"
  },
  {
    title: "Premium Services",
     link:"#",
    description: "Nisa Travel Agency is a provider of low cost planning in USA.",
    buttonText: "VIEW MORE"
  }
];

export default function ServiceCards() {
  return (
    <section className="">
      <div className="font-manrope max-w-7xl mx-auto lg:px-6 md:px-12 px-4 md:pt-24 md:pb-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 lg:gap-x-2 gap-8 relative md:-mt-32 -mt-[55px] z-10">
          {services.map((service, index) => (
            <div key={index} className="border-[#0E313A33] border bg-white shadow-lg flex flex-col mx-2">
              <div className="p-6 flex-grow">
                <h3 className="text-[18px] font-extrabold text-primary-navyblue mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-navyblue font-semibold text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="px-0 pb-0 pt-2">
             <Link  to={service.link}><button
               
                  className="w-full bg-[#002661] font-extrabold text-left px-6 hover:bg-primary-red text-primary-white font-semibold py-3 text-[14px] rounded-none"
                  variant="default"
                >
                  {service.buttonText}
                </button></Link>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}