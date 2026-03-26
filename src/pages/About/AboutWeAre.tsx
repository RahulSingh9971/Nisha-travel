import React, { useState, useEffect } from "react";
import axios from "axios";

import OurImpact from "../../components/AboutUs/who-are/OurImpact";
import whoWeAreBannerImg from "../../assets/images/banner1.webp";
import BannerSection from "../../components/AboutUs/BannerSection";
import Downloadbrochure from "../../components/AboutUs/who-are/Downloadbrochure";
import WhoWeAre from "../../components/AboutUs/who-are/WhoWeAre";
import { API_CONFIG } from "../../config/apiConfig"
import NisaTravelAgency from "../../components/AboutUs/who-are/NisaTravelAgency";

const AboutWeAre = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/who-we-are`, {
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

  // Now it is safe to destructure because apiData is guaranteed to exist
  const {
    experience_years = 0,
    experience_text = "",
    title = "",
    description_1 = "",
    description_2 = "",
    image_url = "",
    impact_title = "",
    impact_description = "",
    stats = [],
    mea_title = "",
    mea_description = "",
    mea_features = [],
    brochure_title = "",
    brochure_description = "",
    brochure_pdf_url = "#",
    brochure_bg_image_url = "",
    saudi_wakla_pdf_url = "#"
  } = apiData;
  return (
    <main>
      <BannerSection title="Who We Are?" bannerImg={whoWeAreBannerImg} position="50% 30%" />

      <WhoWeAre data={{
        experience_years,
        experience_text,
        title,
        description_1,
        description_2,
        image_url
      }} />

      <OurImpact 
        title={impact_title}
        description={impact_description}
        stats={stats} 
      />

      <NisaTravelAgency 
        title={mea_title}
        description={mea_description}
        features={mea_features} 
      />

      <Downloadbrochure 
        title={brochure_title}
        description={brochure_description}
        pdfUrl={brochure_pdf_url}
        bgImg={brochure_bg_image_url}
        saudiWakalaUrl={saudi_wakla_pdf_url} 
      />
    </main>
  );
};
export default AboutWeAre;
