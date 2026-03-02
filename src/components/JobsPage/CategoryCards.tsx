import React, { useState, useEffect } from "react";

import { 
  FaStore, FaPenNib, FaUsersCog, FaChartLine, 
  FaLaptopCode, FaCoins, FaBriefcase, FaBullhorn, 
  FaHardHat, FaBell, FaCode 
} from "react-icons/fa";

// 1. Icon components ko as React.ElementType cast karein
const FaStoreIcon = FaStore as React.ElementType;
const FaPenNibIcon = FaPenNib as React.ElementType;
const FaUsersCogIcon = FaUsersCog as React.ElementType;
const FaChartLineIcon = FaChartLine as React.ElementType;
const FaLaptopCodeIcon = FaLaptopCode as React.ElementType;
const FaCoinsIcon = FaCoins as React.ElementType;
const FaBriefcaseIcon = FaBriefcase as React.ElementType;
const FaBullhornIcon = FaBullhorn as React.ElementType;
const FaHardHatIcon = FaHardHat as React.ElementType;
const FaBellIcon = FaBell as React.ElementType;
const FaCodeIcon = FaCode as React.ElementType;

// 2. Mapping mein in elements ka istemal karein
const iconMap: { [key: string]: React.ReactNode } = {
  "fa-store": <FaStoreIcon />,
  "fa-pen-nib": <FaPenNibIcon />,
  "fa-users-gear": <FaUsersCogIcon />,
  "fa-chart-line": <FaChartLineIcon />,
  "fa-laptop-code": <FaLaptopCodeIcon />,
  "fa-coins": <FaCoinsIcon />,
  "fa-briefcase": <FaBriefcaseIcon />,
  "fa-bullhorn": <FaBullhornIcon />,
  "fa-hard-hat": <FaHardHatIcon />,
  "fa-concierge-bell": <FaBellIcon />,
};

const API_BASE_URL = "https://cms.nisatravels.com/api";
const API_KEY = "7802a1979d7472728fe22f93ccaf3755";

const CategoryCards: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/jobs/categories`, {
          headers: { 
            "x-api-key": API_KEY, 
            "Accept": "application/json" 
          }
        });
        const result = await response.json();
        
        // Console log for debugging
        console.log("Categories Data:", result);

        if (result.success) {
          setCategories(result.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <div className="text-center py-20 font-bold">Loading Categories...</div>;
  return (
    <section className="bg-[#EAF0F6] font-manrope ">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-12 px-4 xl:py-20 lg:py-16 py-10 ">
        <h2 className="xl:text-5xl md:text-4xl text-3xl text-center font-extrabold text-[#0E313A] mb-3">
          Browse by category
        </h2>
        <p className="text-center text-[#6C757D] text-[16px] mb-10">
          Find the job that's perfect for you. About 800+ new jobs everyday
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
         {categories.map((category) => (
            <div key={category.id} className="flex gap-2 items-center bg-white rounded-xl shadow p-4">
              {/* <img src={category.icon} alt="icon" className="h-10" /> */}
             <div 
                className="h-12 w-12 flex items-center justify-center rounded-lg text-xl shrink-0"
                style={{ backgroundColor: `${category.color}20`, color: category.color }}
              >
                {iconMap[category.icon] || <FaCodeIcon />} 
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-extrabold text-[#05264E]">{category.name}</div>
                <div className="text-sm font-semibold text-[#4F5E64] ">
                  {category.jobs_count} Jobs Available
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default CategoryCards;
