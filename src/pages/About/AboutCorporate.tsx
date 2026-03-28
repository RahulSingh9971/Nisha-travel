import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../../config/apiConfig"
import BannerSection from "../../components/AboutUs/BannerSection";
import CommitmentSection from "../../components/AboutUs/social-corporate/CommitmentSection";

const AboutCorporate = () => {
        const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 2. Axios call (headers ke saath)
        const response = await axios.get(`${API_CONFIG.BASE_URL}/csr`, {
          headers: API_CONFIG.HEADERS
        });
        const result = response.data;

        if (result.success) {
          setApiData(result.data);
          console.log("✅corporate:", result.data);
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

  return (
    <main>
      <BannerSection
        title={apiData?.title || "Corporate Social Responsibility"}
        bannerImg={apiData?.hero_bg_image_url}
         position="50% 80%"
      />
      <CommitmentSection description={apiData?.description}
        commitmentTitle={apiData?.commitment_title}
        commitmentDesc={apiData?.commitment_desc}
        commitmentImage={apiData?.commitment_image_url}
        initiatives={apiData?.initiatives_list}/>
      
        {/* <CorporateJourneyAspiration title={apiData?.bottom_title} 
        image={apiData?.bottom_image_url}/> */}
    </main>
  );
};

export default AboutCorporate;
