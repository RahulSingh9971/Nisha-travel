import React, { useState, useEffect } from "react";
import { IoCallOutline, IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { API_CONFIG } from "../../config/apiConfig";
import Swal from "sweetalert2";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const IoCallOutlineIcon = IoCallOutline as React.ElementType;
const LuMailIcon = LuMail as React.ElementType;
const IoCallIcon = IoCall as React.ElementType;
const FaLocationDotIcon = FaLocationDot as React.ElementType;

const contactBlocks = [
  {
    icon: <LuMailIcon />,
    label: "General Queries:",
    value: "hello@nisatravels.com",
  },
  {
    icon: <LuMailIcon />,
    label: "Recruitment & Jobs:",
    value: "jobs@nisatravels.com",
  },
  {
    icon: <LuMailIcon />,
    label: "Visa & Emigration:",
    value: "services@nisatravels.com",
  },
  {
    icon: <LuMailIcon />,
    label: "Attestation & Logisticisation:",
    value: "services@nisatravels.com",
  },
  {
    icon: <LuMailIcon />,
    label: "Business Queries:",
    value: "biz@nisatravels.com",
  },
  {
    icon: <IoCallOutlineIcon />,
    label: "Helpline (Kochi):",
    value: "9188650002",
  },
  {
    icon: <IoCallOutlineIcon />,
    label: "Helpline (Head Office):",
    value: "9958070464",
  },
  { icon: <IoCallOutlineIcon />, label: "Toll Free", value: "-" },
];

const branchesIndia = [
  {
    city: "New Delhi",
    address:
      "Room No. 317, TT South Ex Plaza II, Leelaram Market, South Ex Part II, New Delhi - 110049, INDIA.",
    icons: [<FaLocationDotIcon />, <IoCallIcon />],
  },
  {
    city: "Mumbai",
    address:
      "Office No. 90, 2nd Floor, Empire Building, Dr. D.N. Road, Fort, Mumbai, Maharashtra-400001.",
    icons: [<FaLocationDotIcon />, <IoCallIcon />],
  },
  {
    city: "Kochi",
    address:
      "Nisa Tower, C P Ummer Rd. near Ambedkar Stadium, Ernakulam South, Kochi, Ernakulam, Kerala 682035",
    icons: [<FaLocationDotIcon />, <IoCallIcon />],
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "fa-envelope":
    case "envelope":
      return <LuMailIcon />;
    case "fa-phone":
    case "phone":
    case "call":
      return <IoCallOutlineIcon />;
    default:
      return <LuMailIcon />;
  }
};

const ContactPage: React.FC = () => {
  const [tab, setTab] = useState("India");
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/contact-page`, {
          headers: API_CONFIG.HEADERS
        });
        if (response.data.success) {
          setPageData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching contact page data:", error);
      }
    };
    fetchPageData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country_code: "+91",
    reason: "General Enquiry"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API_CONFIG.BASE_URL}/contact`, formData, {
        headers: API_CONFIG.HEADERS
      });

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: response.data.message || "Thank you for contacting us! We will get back to you shortly.",
          confirmButtonColor: "#002661",
        });
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          message: "", 
          country_code: "+91", 
          reason: "General Enquiry" 
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#E74C3C",
        });
      }
    } catch (error: any) {
      console.error("API Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "Server error. Please check your connection.",
        confirmButtonColor: "#E74C3C",
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper to get active branches based on tab
  const activeBranches = pageData?.branches 
    ? (tab === "India" ? pageData.branches.india : pageData.branches.international)
    : (tab === "India" ? branchesIndia : []);

  const activeContactInfo = pageData?.contact_info || contactBlocks;

  return (
    <>
      <div className="bg-white font-manrope max-w-7xl mx-auto px-4 md:px-12 lg:px-8 md:py-10 py-5">
        <div className="flex lg:flex-row flex-col xl:gap-8 lg:gap-1 md:gap-8">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <p className="mb-4 text-primary-gray text-base leading-relaxed">
              Let’s start planning your next adventure.
            </p>
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-extrabold mb-8">
              <span className="text-primary-red">We’re just a</span>
              <br className="hidden md:block" />
              <span className="text-primary-navyblue">message away</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="grid gap-8 mt-4">
              <div className="w-[90%] grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-primary-navyblue font-semibold">Full Name*</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="placeholder:text-gray-400 border-2 border-primary-navyblue w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary-navyblue font-semibold">Email Address*</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-gray-400 border-2 border-primary-navyblue w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-primary-navyblue font-semibold">Phone Number*</label>
                  <PhoneInput
                    country={"in"}
                    value={formData.country_code + formData.phone}
                    onChange={(value, data: any) => {
                      const dialCode = data.dialCode;
                      const phoneNumber = value.startsWith(dialCode) 
                        ? value.slice(dialCode.length) 
                        : value;
                      setFormData({ 
                        ...formData, 
                        phone: phoneNumber, 
                        country_code: `+${dialCode}` 
                      });
                    }}
                    containerClass="!w-full"
                    inputClass="!w-full !h-[50px] !border-2 !border-primary-navyblue !rounded-md !text-base focus:!ring-2 focus:!ring-primary-red"
                    buttonClass="!border-2 !border-primary-navyblue !border-r-0 !rounded-l-md !bg-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-primary-navyblue font-semibold">Reason for Inquiry*</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="border-2 border-primary-navyblue w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red transition-all text-base"
                    required
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Visa Services">Visa Services</option>
                    <option value="Attestation Services">Attestation Services</option>
                    <option value="Recruitment & Jobs">Recruitment & Jobs</option>
                    <option value="Business Partnership">Business Partnership</option>
                    <option value="Feedback/Complaint">Feedback/Complaint</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-primary-navyblue font-semibold">Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="placeholder:text-gray-400 border-2 border-primary-navyblue w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red transition-all text-base"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-red hover:bg-primary-navyblue'} md:w-fit w-full px-12 text-white font-bold py-4 rounded-md transition-all duration-300 shadow-lg transform hover:-translate-y-1`}
              >
                {loading ? "SENDING..." : "SUBMIT MESSAGE"}
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="mt-3 md:mt-0 xl:border-l-[3px] xl:pl-10 border-gray-200">
            <h2 className=" md:text-3xl text-2xl font-extrabold md:mb-8 mb-4">
              <span className="text-primary-red">We’re here to help</span>
              <br className="hidden md:block" />
              <span className="text-primary-navyblue">get in touch!</span>
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-2 text-sm">
              {activeContactInfo.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex md:gap-2 gap-3 items-center py-3 text-primary-navyblue"
                >
                  <div className="md:w-14 w-11 md:h-14 h-11 p-2 flex items-center justify-center rounded-full border-primary-navyblue border-2">
                    <span className="text-[22px]">
                      {item.icon && typeof item.icon === 'string' ? getIcon(item.icon) : (item.icon || <LuMailIcon />)}
                    </span>
                  </div>

                  <div className="flex flex-col md:gap-2 gap-1">
                    <span className="font-bold md:text-[18px] text-[16px]">
                      {item.label}
                    </span>

                    {item.value && (
                      <span className="font-medium md:text-[16px] text-[14px] truncate">
                        {/* Check if it's an Email (contains @) */}
                        {item.value.includes("@") ? (
                          <a href={`mailto:${item.value}`} className="hover:text-primary-red hover:underline transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          /* Otherwise treat as Phone number */
                          <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="hover:text-primary-red hover:underline transition-colors">
                            {item.value}
                          </a>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-lightblue">
        <div className=" font-manrope max-w-7xl mx-auto md:py-16 py-10 px-4 md:px-12 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-center lg:text-5xl md:text-4xl text-3xl text-primary-navyblue font-extrabold pb-2">
              Our Branches
            </h2>
            <p className="font-inter text-center text-primary-navyblue pb-4 opacity-[60%]">
              Contact us today for expert advice, and unbeatable deals your
              career starts here!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center gap-3 rounded-full p-1 bg-white border border-[#d2d5db] w-fit mb-7">
              <button
                className={`font-bold px-6 md:py-2 py-1 lg:w-[250px] md:w-[200px]  rounded-full ${tab === "India"
                    ? "bg-primary-red text-primary-white"
                    : " text-primary-navyblue"
                  }`}
                onClick={() => setTab("India")}
              >
                India
              </button>
              <button
                className={`font-bold px-6 md:py-2 py-1 lg:w-[250px] md:w-[200px] rounded-full ${tab === "International"
                    ? "bg-primary-red text-primary-white"
                    : "bg-white text-primary-navyblue"
                  }`}
                onClick={() => setTab("International")}
              >
                International
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:gap-10 md:gap-4 gap-10 pt-3">
            {activeBranches.map((branch: any, idx: number) => (
              <div key={idx} className="w-full">
                <div className="w-10 h-1 bg-primary-navyblue" />
                <div className="font-bold text-primary-navyblue text-xl mb-1 mt-3">
                  {branch.name || branch.city}
                </div>
                <div className="text-primary-navyblue font-semibold opacity-[80%] text-sm mb-4">
                  {branch.address}
                </div>
                <div className="flex gap-2">
                    <a 
                      href={branch.map_url || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex justify-center items-center w-8 h-8 text-primary-navyblue md:border-2 border border-primary-navyblue hover:bg-primary-navyblue hover:text-white transition-all"
                    >
                      <FaLocationDotIcon />
                    </a>
                    {branch.phone && (
                      <a 
                        href={`tel:${branch.phone}`}
                        className="flex justify-center items-center w-8 h-8 text-primary-navyblue md:border-2 border border-primary-navyblue hover:bg-primary-navyblue hover:text-white transition-all"
                      >
                        <IoCallIcon />
                      </a>
                    )}
                </div>
              </div>
            ))}
          </div>
          {activeBranches.length === 0 && (
            <p className="text-center text-primary-gray py-10 italic">No branches found in this region.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
