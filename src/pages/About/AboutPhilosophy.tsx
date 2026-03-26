import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../../config/apiConfig"
import BannerSection from "../../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../../assets/images/banner4.webp";
import ValuesSection from "../../components/AboutUs/philosophy/ValueCard";

const AboutPhilosophy = () => {
      const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 2. Axios call (headers ke saath)
        const response = await axios.get(`${API_CONFIG.BASE_URL}/our-values`, {
          headers: API_CONFIG.HEADERS
        });
        const result = response.data;

        if (result.success) {
          setApiData(result.data);
          console.log("✅our value:", result.data);
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
  title = "Our Philosophy", // Default title agar admin ne nahi dala
  description = "", 
  values_list = [], // Sabse zaroori: Array ko empty rakhein taaki .map() na toote
  promise_title = "Our Promise",
  promise_image_url = "/fallback-image.jpg" // Local image as backup
} = apiData || {};
  return (
    <main>
      <BannerSection
        title={apiData.title || "Our Values / Philosophy"}
        bannerImg={apiData.hero_bg_image_url || whoWeAreBannerImg}
        position="50% 30%"
      />
      
      {/* Passing all relevant data to the section */}
      <ValuesSection 
        description={apiData.description}
        values={apiData.values_list}
        promiseTitle={apiData.promise_title}
        promiseDesc={apiData.promise_desc}
        promiseImage={apiData.promise_image_url}
      />
    </main>
  );
};

export default AboutPhilosophy;
