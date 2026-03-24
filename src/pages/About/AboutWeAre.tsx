import React, { useState, useEffect } from "react";
import axios from "axios";

import OurImpact from "../../components/AboutUs/who-are/OurImpact";
import whoWeAreBannerImg from "../../assets/images/banner1.webp";
import BannerSection from "../../components/AboutUs/BannerSection";
import Downloadbrochure from "../../components/AboutUs/who-are/Downloadbrochure";
import WhoWeAre from "../../components/AboutUs/who-are/WhoWeAre";
import { API_CONFIG } from "../../config/apiConfig"
import NisaTravelAgency from "../../components/AboutUs/who-are/NisaTravelAgency";


// Define the path for breadcrumb
const path = [
  // { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about/weare" },
  { label: "Who We Are?" }
];

const AboutWeAre = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // 2. Axios call (headers ke saath)
        const response = await axios.get(`${API_CONFIG.BASE_URL}/who-we-are`, {
          headers: API_CONFIG.HEADERS
        });

        // Axios mein data hamesha 'response.data' ke andar milta hai
        const result = response.data;

        if (result.success) {
          setApiData(result.data);
          console.log("✅ Axios Data Received:", result.data);
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
  if (loading) return <div className="py-20 text-center font-bold">Loading...</div>;
  if (!apiData) return <div className="py-20 text-center text-red-500">Failed to load data.</div>;
  return (
    <main>
      <BannerSection title="Who We Are?" bannerImg={whoWeAreBannerImg} path={path} />
      <WhoWeAre data={{
        experience_years: apiData.experience_years,
        experience_text: apiData.experience_text,
        title: apiData.title,
        description_1: apiData.description_1,
        description_2: apiData.description_2,
        image_url: apiData.image_url
      }} />
      <OurImpact title={apiData.impact_title}
        description={apiData.impact_description}
        stats={apiData.stats} />

      <NisaTravelAgency title={apiData.mea_title}
        description={apiData.mea_description}
        features={apiData.mea_features} />

      <Downloadbrochure title={apiData.brochure_title}
        description={apiData.brochure_description}
        pdfUrl={apiData.brochure_pdf_url}
        bgImg={apiData.brochure_bg_image_url} 
        saudiWakalaUrl={apiData.saudi_wakla_pdf_url}/>
    </main>
  );
};

export default AboutWeAre;
