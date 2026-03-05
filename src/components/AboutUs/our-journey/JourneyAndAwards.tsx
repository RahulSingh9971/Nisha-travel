import React, { useState, useEffect } from "react";
import journeyImg from "../../../assets/images/ourjourney.png";
import journeyImg2 from "../../../assets/images/ourjourney2.png"; // adjust path as needed
const awards = [
  {
    year: "2011",
    title: "Pravasi Bharathi Shreyas Award",
  },
  {
    year: "2011",
    title: "Voice of Gulf Returnees Award",
  },
  {
    year: "2012",
    title: "Golden Achievement Award (Dubai)",
  },
  {
    year: "2014",
    title: "Pravasi Bharati Manavaseva Puraskaram",
  },
  {
    year: "2016",
    title: "Dr. B.R. Ambedkar Baba Saheb National Award",
  },
];
// Types based on your API response
interface Award {
  year: string;
  title: string;
}

interface JourneyData {
  title: string;
  subtitle_highlight: string;
  description_1: string;
  description_2: string;
  secondary_image_caption: string;
  awards_title: string;
  awards_highlight: string;
  awards_description: string;
  awards: Award[];
  main_image_url: string;
  secondary_image_url: string;
}

const API_BASE_URL = "https://cms.nisatravels.com/api";
const API_KEY = "7802a1979d7472728fe22f93ccaf3755";


export const JourneyAndAwards: React.FC = () =>{
  const [data, setData] = useState<JourneyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/our-journey`, {
          headers: { 
            "x-api-key": API_KEY, 
            "Accept": "application/json" 
          },
        });
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
        console.log("1. ourjourney Response:", result);
      } catch (error) {
        console.error("Error fetching journey data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJourneyData();
  }, []);

  // if (loading) return <div className="text-center py-20 font-bold">Loading Our Journey...</div>;
  // if (!data) return null;
   return (
  <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 md:py-16 py-10">
    <div className=" lg:gap-12 md:gap-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="lg:max-w-xl">
        <h2 className="max-w-md xl:text-5xl md:text-4xl text-3xl font-extrabold  md:mb-6 tracking-wide leading-tight">
          <span className="text-primary-navyblue">Our Journey</span>{" "}
          <span className="text-primary-red">Since 1992</span>
        </h2>
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
          Since our founding in 1992, Nisa Travel Agency has been committed to
          transforming aspirations into achievements. What began as a modest
          initiative to guide hardworking Indians toward overseas opportunities
          has grown into a trusted institution, recognized by the Ministry of
          External Affairs, Government of India
        </p>
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
          From our headquarters in New Delhi, we steadily expanded our reach to
          key cities across India, ensuring that opportunities are accessible to
          families everywhere. Over the past three decades, we have successfully
          conducted more than 7,000 recruitment drives, each one representing a
          new chapter of hope and progress for countless individuals and their
          families.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={journeyImg}
          alt="Overseas Journey Globe"
          className="w-[400px] h-auto"
        />
      </div>
    </div>
    <div className="pt-12 lg:gap-12 md:gap-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
      <div className="flex flex-col xl:w-[90%] lg:order-1 order-2 ">
        <img
          src={journeyImg2}
          alt="Overseas Journey Globe"
          className=" lg:h-auto md:h-[700px] h-80"
        />
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
          At Nisa Travel Agency, our story is built on trust, perseverance, and
          a promise that continues to guide us: to be the bridge between dreams
          and destinations.
        </p>
      </div>
      <div className="lg:max-w-xl lg:order-2 order-1">
        <h2 className="max-w-md xl:text-5xl md:text-4xl text-3xl font-extrabold  md:mb-6 tracking-wide leading-tight">
          <span className="text-primary-navyblue">Our Awards</span>{" "}
          <span className="text-primary-navyblue">& Achievements</span>
        </h2>
        <p className="md:mt-6 mt-3 text-primary-gray text-[16px] leading-7 font-medium">
          These milestones reflect not only our dedication to ethical
          recruitment but also our unwavering commitment to the welfare of the
          Indian workforce abroad.
        </p>
        <div className="p-6 max-w-md bg-white">
          <ul className="relative">
            {awards.map((award, idx) => (
              <li key={idx} className="pl-8 mb-8 last:mb-0 relative">
                {/* Dot & line */}
                <span className="absolute left-0 top-1.5 flex flex-col items-center">
                 <div className="flex items-center justify-center border-2 border-primary-navyblue rounded-full shadow p-[3px]">
                   <span className=" w-[9px] h-[9px] bg-primary-red rounded-full "></span>
                 </div>
                  {idx < awards.length - 1 && (
                    <span className="block w-[2px] h-[110px] bg-primary-navyblue mx-auto" />
                  )}
                </span>
                {/* Year and title */}
                <span className="block text-xl font-extrabold text-primary-red">
                  {award.year}
                </span>
                <span className="block font-extrabold text-primary-navyblue">
                  {award.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)};
