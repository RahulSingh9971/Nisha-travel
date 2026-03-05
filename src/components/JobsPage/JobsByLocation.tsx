import React, { useState, useEffect } from "react";
import joblocation1 from "../../assets/images/joblocation1.png";
import joblocation2 from "../../assets/images/joblocation2.png";
import joblocation3 from "../../assets/images/joblocation3.png";
import joblocation4 from "../../assets/images/joblocation4.png";
import joblocation5 from "../../assets/images/joblocation5.png";
import joblocation6 from "../../assets/images/joblocation6.png";
import { API_CONFIG } from "../../config/apiConfig"

// Images ka array taaki loop mein use ho sake
const locationImages = [joblocation1, joblocation2, joblocation3, joblocation4, joblocation5, joblocation6];



const JobsByLocation: React.FC = () => {

  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/jobs/countries`,  {
                headers: API_CONFIG.HEADERS,
              });

        const result = await response.json();
        if (result.success) {
          setLocations(result.data);
        }
        // console.log("1. API Full Response:", result);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  if (loading) return <div className="text-center py-20">Loading Locations...</div>;
  return (

    <>
      <section className="bg-primary-lightblue">
        {/* Heading */}
        <div className=" max-w-7xl mx-auto px-4 md:px-8 xl:pt-20 lg:pt-16 py-10">
          <div className="text-center mb-10">
            <h1 className="xl:text-5xl md:text-4xl text-3xl font-extrabold lg:mb-6 mb-4 leading-tight">
              <span className="text-primary-red">Jobs by </span>
              <span className="text-primary-navyblue"> Location</span>
            </h1>
            <p className="mb-7 text-primary-gray text-base font-medium leading-7">
              Find your favourite jobs and get the benefits of yourself
            </p>
          </div>

          <div className="max-w-7xl mx-auto xl:pt-20 lg:pt-16 py-10">


            {/* ROW 1: Pehle 3 Cards (Index 0, 1, 2) */}
            <div className="flex md:flex-row flex-col w-full gap-6 mb-6">
              {locations.slice(0, 3).map((loc: any, index: number) => {
                // Manual widths: 0 -> 28%, 1 -> 32%, 2 -> 40%
                const row1Widths = ["md:w-[28%]", "md:w-[32%]", "md:w-[40%]"];
                return (
                  <div
                    key={index}
                    className={`bg-white shadow rounded-xl p-2 flex flex-col ${row1Widths[index]}`}
                  >
                    <img
                      src={locationImages[index % locationImages.length]}
                      alt={loc.country}
                      className="h-40 object-cover rounded-xl mb-4 w-full"
                    />
                    <div className="flex flex-col gap-2 px-2 pb-4">
                      <h3 className="text-lg font-bold text-[#05264E]">{loc.country}</h3>
                      <div className="flex justify-between text-[#66789C] text-sm">
                        <span>{loc.vacancies} Vacancies</span>
                        <span>{loc.companies} Companies</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ROW 2: Baki ka sara data (Index 3 onwards) */}
            {locations.length > 3 && (
              <div className="flex md:flex-row flex-col w-full gap-6 mb-14">
                {locations.slice(3).map((loc: any, index: number) => {
                  // Row 2 widths: Index 0 (original 3) -> 32%, 1 -> 40%, 2 -> 28%
                  const row2Widths = ["md:w-[32%]", "md:w-[40%]", "md:w-[28%]"];

                  return (
                    <div
                      key={index + 3}
                      className={`bg-white shadow rounded-xl p-2 flex flex-col ${row2Widths[index % 3]}`}
                    >
                      <img
                        src={locationImages[(index + 3) % locationImages.length]}
                        alt={loc.country}
                        className="h-40 object-cover rounded-xl mb-4 w-full"
                      />
                      <div className="flex flex-col gap-2 px-2 pb-4">
                        <h3 className="text-lg font-bold text-[#05264E]">{loc.country}</h3>
                        <div className="flex justify-between text-[#66789C] text-sm">
                          <span>{loc.vacancies} Vacancies</span>
                          <span>{loc.companies} Companies</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Download Brochure Section */}
      </section>

    </>
  )
};

export default JobsByLocation;
