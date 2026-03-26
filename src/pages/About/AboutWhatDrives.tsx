import React, { useState, useEffect } from "react";
import axios from "axios";
import OverseasJourney from "../../components/AboutUs/what-drives/OverseasJourney";
import BannerSection from "../../components/AboutUs/BannerSection";
import whatDrivesBannerImg from "../../assets/images/banner2.webp";
import WhyChooseUs from "../../components/AboutUs/what-drives/WhyChooseUs";
import { EmpoweringFamilies } from "../../components/AboutUs/what-drives/EmpoweringFamilies";
import { VisionMission } from "../../components/AboutUs/what-drives/VisionMission";
import { JourneyCTA } from "../../components/AboutUs/what-drives/JourneyTogether";
import { API_CONFIG } from "../../config/apiConfig"

interface WhyCard {
  title: string;
  description: string;
  icon?: string;     // Optional if you don't use it
  icon_url: string;  // Required for your <img> tag
}

interface whatdrivesdata {
  id: number;
  title: string;
  journey_title: string;
  journey_desc_1: string;
  journey_desc_2: string;
  journey_desc_3: string;
  why_title: string;
  why_desc: string;
  why_cards: WhyCard[];
  empower_title: string;
  empower_desc: string;
  vision_desc: string;
  mission_desc: string;
  cta_title: string;
  hero_bg_image_url: string;
  journey_image_url: string;
  empower_image_url: string;
  cta_image_url: string;
}

const AboutWhatDrives = () => {
  const [apiData, setApiData] = useState<whatdrivesdata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/what-drives-us`, {
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
// --- MOVE THESE CHECKS ABOVE THE DESTRUCTURING ---
  if (loading) return <div className="py-20 text-center font-bold">Loading...</div>;
  if (!apiData) return <div className="py-20 text-center text-red-500">Failed to load data.</div>;

  // 2. Destructuring with Defaults: Taki "Undefined" ka khatra khatam ho jaye
  const {
    title = "What Drives Us",
    hero_bg_image_url = "",
    journey_title = "",
    journey_desc_1 = "",
    journey_desc_2 = "",
    journey_desc_3 = "",
    journey_image_url = "",
    why_title = "",
    why_desc = "",
    why_cards = [],
    empower_title = "",
    empower_desc = "",
    empower_image_url = "",
    vision_desc = "",
    mission_desc = "",
    cta_title = "",
    cta_image_url = ""
  } = apiData || {};

  return (
    <main>
      <BannerSection 
        title={title} 
        bannerImg={hero_bg_image_url || whatDrivesBannerImg} 
        position="50% 30%" 
      />
      
      <OverseasJourney 
        title={journey_title}
        // Filter out empty descriptions to avoid blank spaces
        descriptions={[journey_desc_1, journey_desc_2, journey_desc_3].filter(d => d)}
        image={journey_image_url} 
      />

      <WhyChooseUs 
        title={why_title}
        description={why_desc}
        cards={why_cards} 
      />

      <EmpoweringFamilies 
        title={empower_title}
        description={empower_desc}
        image={empower_image_url}
      />

      <VisionMission 
        vision={vision_desc}
        mission={mission_desc} 
      />

      <JourneyCTA 
        title={cta_title}
        image={cta_image_url}
      />
    </main>
  );
};

export default AboutWhatDrives;
