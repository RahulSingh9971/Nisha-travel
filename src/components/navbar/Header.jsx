import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/fulllogo.svg";
import { MdOutlineMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { API_CONFIG } from "../../config/apiConfig";
import axios from "axios";
// const IoIosArrowForwardtIcon = IoIosArrowForward as React.ElementType;

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dynamicVisaLinks, setDynamicVisaLinks] = useState([]);
  const [dynamicAttestationLinks, setDynamicAttestationLinks] = useState([]);
  const [dynamicDocumentLinks, setDynamicDocumentLinks] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchVisaLinks = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/visa-stamping-navbar-links`, {
          headers: API_CONFIG.HEADERS
        });
        const data = response.data;
        if (data.success) {
          const links = data.data.map((item) => {
            const countryData = item.country;
            const visaTypes = item.visa_types || [];
            
            const resultObj = {
              title: `${countryData.name} Visa`,
              to: item.urls.frontend_country_url,
            };

            if (visaTypes.length > 0) {
              resultObj.col3 = visaTypes.map(vt => ({
                title: vt.name,
                to: vt.urls.frontend_type_url
              }));
            }
            return resultObj;
          });
          setDynamicVisaLinks(links);
        }
      } catch (error) {
        console.error("Error fetching visa links:", error);
      }
    };
    fetchVisaLinks();
  }, []);

  useEffect(() => {
    const fetchAttestationLinks = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/attestation-navbar-links`, {
          headers: API_CONFIG.HEADERS
        });
        const data = response.data;
        if (data.success) {
          const links = data.data.map((item) => ({
            title: item.country_name 
              ? (item.country_name.toLowerCase().includes('embassy') ? item.country_name : `${item.country_name} Embassy`) 
              : item.title,
            to: item.frontend_url || `/attestation-details/${item.slug}`
          }));
          setDynamicAttestationLinks(links);
        }
      } catch (error) {
        console.error("Error fetching attestation links:", error);
      }
    };
    fetchAttestationLinks();
  }, []);

  useEffect(() => {
    const fetchDocumentLinks = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/document-attestation-navbar-links`, {
          headers: API_CONFIG.HEADERS
        });
        const data = response.data;
        if (data.success) {
          const links = data.data.map((item) => ({
            title: item.name,
            to: item.frontend_url || `/document-attestations/${item.slug}`
          }));
          setDynamicDocumentLinks(links);
        }
      } catch (error) {
        console.error("Error fetching document links:", error);
      }
    };
    fetchDocumentLinks();
  }, []);


  const navLinks = [
    { title: "Home", to: "/" },
    {
      title: "Who we are",
      to: "/about/who-we-are",
      dropdown: [
        {
          subMenuCol1: [
            // {
            //   id: "weare",
            //   title: "Who we are",
            //   to: "/about/weare",
            // },
            {
              id: "journey",
              title: "Our Journey",
              to: "/about/our-journey"
            },
            {
              id: "drives",
              title: "What drives us",
              to: "/about/mission-and-vision"
            },
            {
              id: "leadership",
              title: "Leadership",
              to: "/about/leadership"
            },
            {
              id: "philosophy",
              title: "Our values / Philosophy",
              to: "/about/core-values"
            },
            {
              id: "corporate",
              title: "Corporate Social Responsibility",
              to: "/about/csr"
            }
          ]
        }
      ]
    },
    {
      title: "Services",
      to: "/ourcoreservices",
      dropdown: [
        {
          subMenuCol1: [
            {
              id: "Recruitment",
              title: "Recruitment",
              to: "/recruitment",
              col2: [
                {
                  title: "Industries",
                  to:"/visa-services"
                },
                {
                  title: "Jobs Abroad",
                  to: "/jobs"
                },
                {
                  title: "Foreign Employers (FE)",
                  to: "/foreign-employers"
                },
                {
                  title: "Emigrants",
                  to: "/emigrants"
                }
              ]
            },
            {
              id: "VisaStamping",
              title: "Visa Stamping & Assistance",
              to: "/visa-services",
              col2: dynamicVisaLinks.length > 0 ? dynamicVisaLinks : [
                {
                  title: "Saudi Visa Stamping",
                  to: "#",
                },
                {
                  title: "Kuwait Visa Stamping",
                  col3: [
                    {
                      to: "/visa-services",
                      title: "Work Visa",
                    },
                    {
                      title: "Family Visit",
                      to: "#",
                    },
                    {
                      title: "Business Visit",
                      to: "#",
                    },
                    {
                      title: "Transit Visa",
                      to: "#",
                    },

                  ]
                },

                {
                  title: "UK Visa",
                  to: "#",

                },
                {
                  title: "China Visa",
                  to: "#",
                },
                {
                  title: "EU Visa",
                  to: "#",
                },
                {
                  title: "Africa Visa",
                  to: "#",
                },
                {
                  title: "Other Countries",
                  to: "#",
                }
              ]
            },
            {
              id: "Emigration",
              title: "Emigration Clearance",
              to: "#",
              col2: [
                {
                  title: "For ECR Passports"
                },
                {
                  title: "For Nurses"
                }
              ]
            },
            {
              id: "Attestation",
              title: "Attestation ",
              to: "/attestationdocument",
              col2: [
                ...dynamicAttestationLinks,
                ...dynamicDocumentLinks
              ]
            },
            {
              id: "Abroad",
              title: "Study Abroad",
              to: "/study-abroad-page",
              col2: [
                {
                  title: "Consulting",
                  to: "/study-abroad-page#programs"
                },
                {
                  title: "STEM Programs",
                  to: "/study-abroad-page#programs"
                },
                {
                  title: "Medicine Programs",
                  to: "/study-abroad-page#programs"
                },
                {
                  title: "Paramedics & Nursing Programs",
                  to: "/study-abroad-page#programs"
                },
                {
                  title: "Arts & Commerce Programs",
                  to: "/study-abroad-page#programs"
                },
                {
                  title: "Film Making Programs",
                  to: "/study-abroad-page#programs"
                }
              ]
            },
            {
              id: "Study",
              title: "Study in India",
              to: "/study-abroad-page#study-in-india",
              col2: [
                {
                  title: "Career Counselling",
                  to: "/study-abroad-page#study-in-india"
                }
              ]
            },
            {
              id: "Travel",
              title: "Travel & Holidays",
              to: "#",
              col2: [
                {
                  title: "Holiday Packages",
                  to: "#",
                },
                {
                  title: "Air Ticketing",
                  to: "#",
                },
                {
                  title: "Explore India",
                  to: "#",
                },
                {
                  title: "Explore North India",
                  to: "#",
                },
                {
                  title: "Explore North East",
                  to: "#",
                },
                {
                  title: "Explore Kerala",
                  to: "#",
                }
              ]
            },
            {
              id: "Appointment",
              title: "Appointment Assistance",
              to: "#",
              col2: [
                {
                  title: "NORKA",
                  to: "#",
                },
                {
                  title: "GAMCA",
                  to: "#",
                },
                {
                  title: "PCC",
                  to: "#",
                },
                {
                  title: "VFS",
                  to: "#",
                }
              ]
            },
            {
              id: "Specialised",
              title: "Specialised Services",
              // to: "#",
              col2: [
                {
                  title: "DataFlow Verification"
                },
                {
                  title: "Prometric Exam"
                },
                {
                  title: "DHA (Dubai Health Authority) Exam"
                },
                {
                  title: "MOH Saudi Exam"
                },
                {
                  title: "IELTS"
                },
                {
                  title: "Nurse & Midwifery Registration"
                },
                {
                  title: "Paramedics Registration"
                }
              ]
            }
          ]
        }
      ]
    },
    { title: "Jobs", to: "/jobs" },
    {
      title: "Recruitment ",
      to: "/recruitment",
      dropdown: [
        {
          subMenuCol1: [
            // {
            //   id: "Recruitment",
            //   title: "Recruitment",
            //   to: "/recruitment",
            //   col2: [
            //     {
            //       title: "Industries"
            //     },
            //     {
            //       title: "Jobs Abroad",
            //       to: "/jobs"
            //     },
            //     {
            //       title: "Foreign Employers (FE)"
            //     },
            //     {
            //       title: "Emigrants"
            //     }
            //   ]
            // },
            { id: "Industries", title: "Industries" ,to:"/visa-services"},
            {
              id: "jobs",
              title: "Jobs Abroad",
              to: "/jobs"
            },
            {
              id: "Foreign",
              title: "Foreign Employers (FE)",
              to: "/foreign-employers"
            },
            {
              id: "Emigrants",
              title: "Emigrants",
              to: "/emigrants"
            }
          ]
        }
      ]
    },
    { title: "Gallery", to: "/gallery" },
    { title: "Blog", to: "/blog" },
    { title: "Contact", to: "/contact" }
  ];


  // parent + active items
  const [activeParent, setActiveParent] = useState(null);
  const [activeLeftItem, setActiveLeftItem] = useState(null);
  const [activeCol2Item, setActiveCol2Item] = useState(null);

  // nav parent hover (Who we are / Services / Recruitment)
  const handleParentEnter = (link) => {
    if (!link.dropdown) return;

    setActiveParent(link.title);

    const firstMenu = link.dropdown[0];
    const firstLeft = firstMenu?.subMenuCol1?.[0] || null;

    setActiveLeftItem(firstLeft);

    const firstCol2 = firstLeft?.col2?.[0] || null;
    setActiveCol2Item(firstCol2);
  };

  const handleParentLeave = () => {
    setActiveParent(null);
    setActiveLeftItem(null);
    setActiveCol2Item(null);
  };

  const handleLeftHover = (item) => {
    setActiveLeftItem(item);
    const firstCol2 = item?.col2?.[0] || null;
    setActiveCol2Item(firstCol2);
  };

  const handleCol2Click = (item) => {
    setActiveCol2Item(item);
    // if (item.to) navigate(item.to);
  };

  const hasLongTitle = (items = []) =>
    items.some((item) => (item?.title || "").trim().length > 30);

  return (
    <header className="bg-white shadow-sm">
      <div className="bg-primary-navyblue text-primary-white py-2 flex gap-x-2 overflow-x-hidden w-full">
        <motion.div
          className=""
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          style={{ width: "max-content" }}
        >
          {" "}
          <div className="text-sm font-medium whitespace-nowrap">
            🚧 SITE UNDER MAINTENANCE - We are currently performing maintenance
            to improve your experience. For immediate assistance, contact us at
            hello@nisatravels.com 🚧
          </div>
        </motion.div>
        <motion.div
          className=""
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          style={{ width: "max-content" }}
        >
          <div className="text-sm font-medium whitespace-nowrap">
            🚧 SITE UNDER MAINTENANCE - We are currently performing maintenance
            to improve your experience. For immediate assistance, contact us at
            hello@nisatravels.com 🚧
          </div>
        </motion.div>
      </div>
      {/* Top bar with logo, approval, and track button */}
      <div className={`${isScrolled ? "fixed top-0 left-0 w-full shadow-md" : "relative"} bg-white z-50 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto lg:px-6 md:pr-12 md:pl-8 pr-[16px]">
          <div className="flex justify-between items-center py-1 lg:pr-4">
            <div className="flex items-center xl:space-x-4 md:space-x-2">       
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Nisa Travel Agency Logo"
                  className="xl:h-[69px] md:h-[80px] h-[60px]"
                />
              </Link>             
              <div className="hidden lg:block border-l pl-4">
                <p className="text-primary-teal xl:text-[14px] md:text-[13px] font-normal xl:leading-[22px] md:leading-[20px]">
                  Approved by
                  <span className="font-extrabold block">
                    {" "}
                    The Ministry of External Affairs, Government of India
                  </span>
                  <span className="block">
                    {" "}
                    License No: B0646/DEL/PER/1000+/4¾/7922/2007
                  </span>
                </p>
              </div>
            </div>
            <Link to="/track-application" className="lg:flex hidden items-center justify-center bg-primary-red hover:bg-red-700 text-primary-white text-[16px] xl:px-8 md:px-6 xl:h-[44px] md:h-[40px] font-semibold font-poppins rounded-none">
              TRACK HERE
            </Link>
            <MdOutlineMenu
              onClick={() => setSidebarOpen(true)}
              className="md:text-[48px] text-[30px] block lg:hidden text-accent-orange"
            />
          </div>
        </div>
      </div>

      <div className={`lg:block  lg:w-full hidden bg-primary-red z-50 transition-all duration-300 
  ${isScrolled ? "lg:fixed top-[76px]" : "lg:block"}`}>
        <div className="xl:px-[90px] mx-auto relative ">
          <nav className="flex items-center justify-end h-12">
            <div className="flex items-center space-x-8 font-poppins">
              {navLinks.map((link) => (
                <div key={link.title} className="relative lg:left-0" onMouseEnter={() => handleParentEnter(link)}
                  onMouseLeave={handleParentLeave}>

                  <Link
                    to={link.to || "#"}
                    className="flex items-center gap-2 text-primary-white  px-3 py-[6px] inline-block"
                  >
                    {link.title}
                    {link.dropdown && (
                      <IoIosArrowDown
                        className={`text-[20px] transition-transform duration-500 
                         ${activeParent === link.title ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>


                  {activeParent === link.title &&
                    activeLeftItem && (
                      <div
                        className="
                      absolute top-full pt-2
                     left-1/2 -translate-x-1/2 right-0
                      z-30 w-fit max-auto
                      opacity-100 visible
                      transition-all duration-200 ease-out
                    "
                      >
                        <div className="bg-white rounded-[0px] shadow-lg w-full h-full max-h-[calc(100vh-140px)] overflow-y-auto overflow-x-visible">
                        <div className="flex items-center gap-2 pt-10 pb-3 pl-8 pr-6">
                          <span className="h-10 w-[6px] bg-primary-red" />
                          <Link to={link.to} className="text-[30px] font-bold hover:text-primary-red">{link.title}</Link>
                        </div>
                        <div className="mx-auto transition-all duration-300 ease-in-out">

                          {link.dropdown.map((menu, idx) => {
                            const hasCol2 = activeLeftItem?.col2 && activeLeftItem.col2.length > 0;
                            const hasCol3 = activeCol2Item?.col3 && activeCol2Item.col3.length > 0;
                            const col2HasLongTitle = hasLongTitle(activeLeftItem?.col2);
                            const col3HasLongTitle = hasLongTitle(activeCol2Item?.col3);

                            // Default compact layout, sirf long text hone par width badhe
                            let containerWidth = "min-w-[300px]"; // Default (Col 1)
                            if (hasCol2 && hasCol3) {
                              containerWidth = col2HasLongTitle || col3HasLongTitle
                                ? "min-w-[900px]"
                                : "min-w-[840px]";
                            } else if (hasCol2) {
                              containerWidth = col2HasLongTitle
                                ? "min-w-[700px]"
                                : "min-w-[620px]";
                            }
                            return (
                              <div
                                key={idx}
                                className={`flex h-full ${containerWidth} transition-all duration-300 items-start`}
                              >

                                <div className="w-[300px] flex-shrink-0 space-y-6 pb-10 pt-4 pl-8 pr-6">

                                  {menu.subMenuCol1.map((item) => (
                                    <Link
                                      key={item.id}
                                      to={item.to}
                                      type="button"
                                      onMouseEnter={() =>
                                        handleLeftHover(item)
                                      }
                                      className={`flex hover:underline items-start justify-between gap-4 text-[15px] ${activeLeftItem?.id === item.id
                                        ? "text-primary-red font-semibold"
                                        : "text-[#002661] font-medium"
                                        } hover:text-primary-red`}
                                    >
                                      {item.title}
                                      {activeLeftItem?.col2 && (
                                        <IoIosArrowForward
                                          className={` text-[16px] transition-transform ${activeCol2Item?.title === item.title ? "translate-x-1" : ""
                                            }`}
                                        />
                                      )}
                                    </Link>
                                  ))}
                                </div>


                                {activeLeftItem?.col2 && activeLeftItem.col2.length > 0 && (<div className={`${col2HasLongTitle ? "w-[400px]" : "w-[320px]"} flex-shrink-0 space-y-6 pb-10 pt-4 border-l border-gray-200`}>
                                  {activeLeftItem?.col2?.map((item, index) => {

                                    const itemHasCol3 = item.col3 && item.col3.length > 0;

                                    return (
                                      <Link
                                        key={index}
                                        to={item.to}
                                        type="button"

                                        onMouseEnter={() => handleCol2Click(item)}
                                        className={`w-full text-left ${col2HasLongTitle ? "" : "whitespace-nowrap"} flex items-start justify-between gap-4 text-[15px] px-7 transition-all duration-200
    ${activeCol2Item?.title === item.title
                                            ? `text-primary-red font-semibold underline ${itemHasCol3 ? "bg-[#F6F5F3] py-5" : "py-0"
                                            }`
                                            : "text-[#002661] font-medium "
                                          } 
    /* Extra safeguard: mouse move karte waqt visual feedback ke liye */
    hover:text-primary-red hover:underline
  `}                              >
                                        {item.title}


                                        {itemHasCol3 && (
                                          <IoIosArrowForward
                                            className={` text-[16px] transition-transform ${activeCol2Item?.title === item.title ? "translate-x-1" : ""
                                              }`}
                                          />
                                        )}
                                      </Link>
                                    );
                                  })}
                                </div>)}


                                {hasCol3 && (
                                  <div className={`${col3HasLongTitle ? "w-[320px]" : "w-[280px]"} flex-shrink-0 space-y-6 bg-[#F6F5F3] pb-10 pt-4 pl-8 pr-8`}>
                                    {activeCol2Item?.col3?.map((item, index) => (
                                      <Link
                                        key={index}
                                        to={item.to}
                                        className={`block ${col3HasLongTitle ? "" : "whitespace-nowrap"} hover:underline text-[15px] text-[#002661] font-medium hover:text-primary-red`}
                                      >
                                        {item.title}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div></div></div>
                    )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        logo={logo}
        navLinks={navLinks}
      />
    </header>
  );
}
