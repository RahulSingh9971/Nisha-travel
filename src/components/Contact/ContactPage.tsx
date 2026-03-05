import React, { useState, useEffect } from "react";
import { IoCallOutline, IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { API_CONFIG } from "../../config/apiConfig";
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

const ContactPage: React.FC = () => {
const [tab, setTab] = useState("India");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/contact-page`, {
          headers: { "x-api-key": API_KEY, "Accept": "application/json" }
        });
        const result = await response.json();
        if (result.success) {
          setPageData(result.data);
        }
          console.log("1. contactpage Response:", result);
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };
    fetchPageData();
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country_code: "+91", // Default value
    reason: "General Enquiry"
  });

const API_BASE_URL = "https://cms.nisatravels.com/api";
const API_KEY = "7802a1979d7472728fe22f93ccaf3755";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Stop page reload
    setLoading(true);
    setStatusMsg({ type: "", text: "" });
    
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "x-api-key": API_KEY,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json();

      if (result.success) {
        setStatusMsg({ type: "success", text: "Thank you! Your message has been sent." });
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "", country_code: "+91", reason: "General Enquiry" });
      } else {
        setStatusMsg({ type: "error", text: result.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatusMsg({ type: "error", text: "Server error. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

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
              <span className="text-primary-navyblueblock">message away</span>
            </h2>
            
            {/* STATUS MESSAGE UI */}
            {statusMsg.text && (
              <div className={`mb-6 p-4 rounded-lg text-sm font-bold ${
                statusMsg.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-8 mt-4">
              <div className=" w-[90%] grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-primary-navyblue">First Name*</label>
                  <input
                  name="name" // API key ke mutabiq
                    value={formData.name}
                    onChange={handleChange}
                    className="placeholder:text-primary-navybluemd:border-2 border border-primary-navyblue w-full px-3 md:py-3 py-2"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary-navyblue">Email Address*</label>
                  <input
                  name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-primary-navybluemd:border-2 border border-primary-navyblue w-full px-3 py-3"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary-navyblue">Phone*</label>
                  <input
                  name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="placeholder:text-primary-navybluemd:border-2 border border-primary-navyblue w-full px-3 py-3"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary-navyblue">Message</label>
                  <input
                  name="message"
                  value={formData.message}
                    onChange={handleChange}
                    className="placeholder:text-primary-navybluemd:border-2 border border-primary-navyblue w-full px-3 py-3"
                    placeholder="Type Your Message"
                    required
                  />
                </div>
              </div>

              <button
              type="submit"
                  disabled={loading}
           className={`${loading ? 'bg-gray-400' : 'bg-primary-red'} w-[30%] text-primary-white font-bold px-5 py-2 mt-3`}
              >
               {loading ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="mt-3 md:mt-0 xl:border-l-[3px] xl:pl-10 border-gray-200">
            <h2 className=" md:text-3xl text-2xl font-extrabold md:mb-8 mb-4">
              <span className="text-primary-red">We’re here to help</span>
              <span className="text-primary-navyblueblock">get in touch!</span>
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-2 text-sm">
              {contactBlocks.map((item, idx) => (
                <div
                  key={idx}
                  className="flex md:gap-2 gap-3 items-center py-3 text-primary-navyblue"
                >
                  <div className="md:w-14 w-11 md:h-14 h-11 p-2 flex items-center justify-center rounded-full border-primary-navyblue border-2">
                    <span className="text-[22px]">{item.icon}</span>
                  </div>

                  {/* <div className="flex flex-col md:gap-2 gap-1">
                    <span className="font-bold md:text-[18px] text-[16px]">
                      {item.label}
                    </span>
                    {item.value && (
                      <span className="font-medium md:text-[16px] text-[14px] truncate">
                        {item.value}
                      </span>
                    )}
                  </div> */}
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
            <h2 className="text-center lg:text-5xl md:text-4xl text-3xl text-primary-navybluefont-extrabold pb-2">
              Our Branches
            </h2>
            <p className="font-inter text-center text-primary-navybluepb-4 opacity-[60%]">
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
          {tab === "India" && (
            <div className="grid md:grid-cols-3 lg:gap-10 md:gap-4 gap-10 pt-3">
              {branchesIndia.map((branch, idx) => (
                <div key={idx} className="w-[80%]">
                  <div className="w-10 h-1 bg-primary-navyblue" />
                  <div className="font-bold text-primary-navybluetext-xl mb-1 mt-3">
                    {branch.city}
                  </div>
                  <div className="text-primary-navybluefont-semibold opacity-[80%] text-sm mb-4">
                    {branch.address}
                  </div>
                  <div className="flex gap-2">
                    {branch.icons.map((icon, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex justify-center items-center w-8 h-8 text-primary-navybluemd:border-2 border border-primary-navyblue"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Add similar grid for International if needed */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
