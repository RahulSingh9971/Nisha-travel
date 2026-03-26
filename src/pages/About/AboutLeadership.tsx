import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../../config/apiConfig"
import BannerSection from "../../components/AboutUs/BannerSection";
import { JourneyCTA } from "../../components/AboutUs/leadership/JourneyAspirations";
import FounderSection from "../../components/AboutUs/leadership/FounderSection";

const AboutLeadership = () => {
    const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 2. Axios call (headers ke saath)
        const response = await axios.get(`${API_CONFIG.BASE_URL}/leadership`, {
          headers: API_CONFIG.HEADERS
        });
        const result = response.data;

        if (result.success) {
          setApiData(result.data);
          console.log("✅leadership:", result.data);
        }
      } catch (error: any) {
        // Axios errors ko handle karna aasaan hai
        console.error("❌ Axios Error:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // --- MOVE THESE CHECKS ABOVE THE DESTRUCTURING ---
  if (loading) return <div className="py-20 text-center font-bold">Loading...</div>;
  if (!apiData) return <div className="py-20 text-center text-red-500">Failed to load data.</div>;

  const {
    title = "Leadership",
    hero_bg_image_url = "",
    leader_name = "Team Leader",
    leader_role = "Leadership",
    leader_quote = "",
    leader_image_url = "",
    vision_title = "",
    vision_desc = "",
    vision_features = [], // Features missing ho toh empty array
    bottom_title = "",
    bottom_image_url = ""
  } = apiData || {};
  return (
    <main>
    <BannerSection 
        title={title} 
        bannerImg={hero_bg_image_url} 
        position="50% 60%" 
      />
    <FounderSection 
        name={leader_name}
        role={leader_role}
        quote={leader_quote}
        image={leader_image_url}
        visionTitle={vision_title}
        visionDesc={vision_desc}
        features={vision_features} 
      />
     <JourneyCTA 
        title={bottom_title} 
        image={bottom_image_url}
      />
    </main>
  );
};

export default AboutLeadership;
