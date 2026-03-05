import { useState } from "react";
import grayStar from "../.././assets/images/grayStar.png";
import redStar from "../.././assets/images/redStar.png";
import google from "../.././assets/images/google.png";
import sectionSixHero from "../.././assets/images/section-six-hero.png";
import { IoIosArrowDown } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Ellipse from "../.././assets/images/Ellipse.png";

const TestimonialCard = ({
  rating,
  title,
  description,
  name,
  location,
  avatar,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={redStar} alt={`average rating`} className="w-3 h-auto" />
      ))}
      <span className="ml-2 text-sm font-bold text-gray-800">{rating}</span>
    </div>
    <h3 className="font-extrabold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex items-center">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full mr-3 object-cover"
      />
      <div>
        <p className="font-medium text-gray-800 text-sm">{name}</p>
        <p className="font-medium text-gray-500 text-xs">{location}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialsContactSection() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaCountry: "",
    visaService: "",
    message: "",
  });
  
  // State for simple validation message
  const [phoneError, setPhoneError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "phone") setPhoneError(""); // Clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (formData.phone.length < 10) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }
    console.log("Form submitted:", formData);
  };
  const testimonials = [
    {
      rating: "5.0",
      title: "Best Visa Agency!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      name: "Tiffany",
      location: "from Canada",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      rating: "5.0",
      title: "Best Visa Agency!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      name: "Tiffany",
      location: "from Canada",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      rating: "5.0",
      title: "Best Visa Agency!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      name: "Tiffany",
      location: "from Canada",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      rating: "5.0",
      title: "Best Visa Agency!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      name: "Tiffany",
      location: "from Canada",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <section className="bg-white md:pt-16  font-manrope">
      {/* Testimonials Section */}

      <div className="pt-0 pb-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-4">
            <span className="text-primary-navyblue">Real Words from Real </span>
            <span className="text-primary-red">People</span>
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  src={grayStar}
                  alt={`average rating`}
                  className="w-3 h-auto"
                />
              ))}
              <span className="ml-2 font-bold text-gray-800">5.0</span>
              <span className="ml-1font-medium text-gray-600">(190+ Reviews)</span>
            </div>
            <img
              src={google}
              alt="Google"
              className="h-6 ml-4"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
       <img src={Ellipse} alt="Ellipse" className="rotate-180"/>
      <div className="bg-primary-lightblue md:pt-5 lg:pb-0 pb-10 px-4 ">
        <div className="max-w-7xl mx-auto px-4 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src={sectionSixHero}
                alt="Woman holding passport"
                className="w-full h-auto max-w-[700px] mx-auto rounded"
              />
            </div>

            <div className="pb-4">
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold text-primary-navyblue mb-4">
                Connect with us!
              </h2>
              <p className="text-primary-gray font-medium mb-8">
                Bridging talent with global opportunities through recruitment,
                visa, and document services.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <input
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-[#25224A5C] rounded-[2px] bg-white focus:outline-none "
                    />
                  </label>
                  <label className="block">
                    <input
                      placeholder="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-[#25224A5C] rounded-[2px] bg-white focus:outline-none "
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <PhoneInput
                      country={"in"} 
                      value={formData.phone}
                      onChange={(phone) => handleInputChange("phone", phone)}
                      containerClass="!w-full"
                      inputClass="!w-full !h-[42px] !border-[#25224A5C] !rounded-[2px] !font-medium focus:outline-none cursor-pointer "
                      buttonClass="!border-[#25224A5C] !bg-white !rounded-l-[2px]"
                      dropdownClass="!bg-white"
                      enableSearch={true}
                    />
                    {phoneError && <p className="text-primary-red text-[10px] absolute -bottom-5">{phoneError}</p>}
                  </div>

                  <label className="block relative ">
                    <select
                      value={formData.visaCountry}
                      onChange={(e) =>
                        handleInputChange("visaCountry", e.target.value)
                      }
                      className="appearance-none block w-full px-3 py-2 pr-10 border border-[#25224A5C] rounded-[2px] bg-white text-gray-400 font-medium focus:outline-none cursor-pointer"
                    >
                      <option value="" className="text-gray-600">Select your Core type</option>
                      <option value="usa" className="text-gray-600">USA</option>
                      <option value="canada" className="text-gray-600">Canada</option>
                      <option value="uk" className="text-gray-600">United Kingdom</option>
                      <option value="australia" className="text-gray-600">Australia</option>
                      <option value="uae" className="text-gray-600">UAE</option>
                      <option value="saudi" className="text-gray-600">Saudi Arabia</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    <IoIosArrowDown size={18} />
                  </div>
                  </label>
                </div>
                <label className="block relative">
                  <select
                    value={formData.visaCountry}
                    onChange={(e) =>
                      handleInputChange("visaService", e.target.value)
                    }
                    className="appearance-none block w-full px-3 py-2 pr-10 border border-[#25224A5C] rounded-[2px] bg-white text-gray-400 font-medium focus:outline-none cursor-pointer"
                  >
                    <option value="" className="text-gray-600">Select Our Core Services</option>
                    <option value="usa" className="text-gray-600">Recruitment & Overseas Employment</option>
                    <option value="canada" className="text-gray-600">Visa & Emigration Services</option>
                    <option value="uk" className="text-gray-600">Attestation & Document Services</option>
                    <option value="australia" className="text-gray-600">Education & Study Abroad</option>
                    <option value="uae" className="text-gray-600">Travel & Holidays</option>
                    <option value="saudi" className="text-gray-600">Specialised Services (Exams & related services)</option>
                    <option value="saudi" className="text-gray-600">Registrations & Appointments</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    <IoIosArrowDown size={18} />
                  </div>
                </label>
                <label className="block">
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#25224A5C] rounded-[2px] bg-white h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-primary-red hover:bg-red-700 text-primary-white font-bold py-3 px-8 rounded-none"
                >
                  APPLY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
