import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_CONFIG } from "../../config/apiConfig";

interface Service {
  id: number;
  title: string;
  short_description: string;
  image_url: string;
  link: string;
  sort_order: number;
  has_detail_page: boolean;
}

const OurServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/services?with_page=0`, {
          headers: API_CONFIG.HEADERS
        });
        if (response.data && response.data.status === "success") {
          // Sort services by sort_order
          const sortedServices = response.data.data.sort(
            (a: Service, b: Service) => a.sort_order - b.sort_order
          );
          setServices(sortedServices);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-primary-lightblue font-poppins lg:px-6 md:px-12 px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:gap-12 gap-8">
        {loading ? (
          <div className="col-span-1 md:col-span-2 text-center py-10">
            Loading services...
          </div>
        ) : (
          services.map((service) => (
            <div
              key={service.id}
              className=" bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={service.image_url}
                alt={service.title}
                className="w-full xl:h-[240px] md:h-[160px] h-[140px] object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="font-bold text-[#002661] text-lg mb-2">
                  {service.title}
                </div>
                <div className="text-[#002661] opacity-[60%] text-sm xl:mb-8 mb-6">
                  {service.short_description}
                </div>
                <div className="mt-auto">
                  {service.link ? (
                    <Link to={service.link}>
                      <button className="font-manrope bg-primary-red text-primary-white font-bold text-sm px-5 xl:py-3 py-2 rounded-lg">
                        LEARN MORE
                      </button>
                    </Link>
                  ) : (
                    <button className="font-manrope bg-primary-red text-primary-white font-bold text-sm px-5 xl:py-3 py-2 rounded-lg">
                      LEARN MORE
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OurServices;
