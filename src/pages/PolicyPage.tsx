import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_CONFIG } from "../config/apiConfig";

interface PolicyData {
  id: number;
  title: string;
  slug: string;
  content: string;
  updated_at: string;
}

const PolicyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [policy, setPolicy] = useState<PolicyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_CONFIG.BASE_URL}/policies/${slug}`, {
          headers: API_CONFIG.HEADERS as any,
        });
        const resData = await res.json();

        if (resData.success && resData.data) {
          setPolicy(resData.data);
          document.title = `${resData.data.title} - Nisa Travel Agency`;
        } else {
          setPolicy(null);
        }
      } catch (error) {
        console.error("Error fetching policy:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPolicy();
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-manrope text-[#05264E]">
        Loading Policy...
      </div>
    );
  }

  if (!policy) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center font-manrope text-[#05264E]">
        Policy page not found.
      </div>
    );
  }

  return (
    <section className="font-manrope max-w-7xl mx-auto lg:px-8 md:px-12 px-4 xl:py-24 md:py-16 py-10 mb-20">
      <h1 className="md:text-4xl text-3xl text-center font-extrabold text-[#c20c15] md:mb-10 mb-6">
        {policy.title}
      </h1>

      {/* Content wrapper to handle HTML content gracefully */}
      <div
        className="prose max-w-none text-gray-600 text-[15px] leading-relaxed space-y-4"
        style={{ color: "#4b5563" }}
        dangerouslySetInnerHTML={{ __html: policy.content }}
      />
    </section>
  );
};

export default PolicyPage;
