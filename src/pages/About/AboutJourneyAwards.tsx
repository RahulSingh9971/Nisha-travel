import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../../config/apiConfig";
import { JourneyAndAwards } from '../../components/AboutUs/our-journey/JourneyAndAwards';
import BannerSection from "../../components/AboutUs/BannerSection";

const AboutJourneyAwards = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/our-journey`, {
          headers: API_CONFIG.HEADERS
        });
        if (response.data.success) {
          setApiData(response.data.data);
        }
      } catch (error: any) {
        console.error("❌ Axios Error:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // TRICK: Jab tak loading hai, blank ya spinner dikhao 
  // Isse 'null' properties read karne ka error kabhi nahi aayega
  if (loading) return <div className="py-20 text-center font-bold">Loading Our Journey...</div>;
  if (!apiData) return null;

  return (
    <main>
      <BannerSection
        title={apiData.title || "Our Journey"}
        bannerImg={apiData.hero_bg_image_url}
        position="50% 30%"
      />
      
      <JourneyAndAwards 
        title={apiData.title}
        subtitle={apiData.subtitle_highlight}
        desc1={apiData.description_1}
        desc2={apiData.description_2}
        mainImg={apiData.main_image_url}
        secondaryImg={apiData.secondary_image_url}
        caption={apiData.secondary_image_caption}
        awardsTitle={apiData.awards_title}
        awardsHighlight={apiData.awards_highlight}
        awardsDesc={apiData.awards_description}
        // TRICK: Agar awards empty hain toh empty array bhejo
        awardsList={apiData.awards || []} 
      />
    </main>
  );
}

export default AboutJourneyAwards;