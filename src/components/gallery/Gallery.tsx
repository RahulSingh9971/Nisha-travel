import React, { useState, useEffect } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import axios from "axios";
import { API_CONFIG } from "../../config/apiConfig";

const IoArrowBackOutlineIcon = IoArrowBackOutline as React.ElementType;
const IoArrowForwardOutlineIcon = IoArrowForwardOutline as React.ElementType;

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

interface PaginationMeta {
  current_page: number;
  last_page: number;
  total: number;
}

const GalleryComponent: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchGalleryData = async () => {
    setLoading(true);
    try {
      const url = new URL(`${API_CONFIG.BASE_URL}/gallery`);
      url.searchParams.append("page", page.toString());
      url.searchParams.append("per_page", "12");
      
      if (activeCategory !== "All") {
        url.searchParams.append("category", activeCategory);
      }

      const response = await axios.get(url.toString(), {
        headers: API_CONFIG.HEADERS,
      });

      const result = response.data;
      if (result.success) {
        setImages(result.data);
        setCategories(result.categories);
        setMeta(result.meta);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, activeCategory]);

  const handleTab = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 md:px-8 xl:pt-20 lg:pt-16 py-10">
      <div className="flex justify-center overflow-x-auto pb-4">
        <div className="md:bg-primary-lightblue w-fit p-1 md:rounded-full flex md:flex-row flex-col justify-center gap-2 mb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleTab(cat)}
              className={`lg:px-6 px-4 py-2 rounded-full text-[16px] font-extrabold transition-colors ${
                activeCategory === cat
                  ? "bg-primary-red text-primary-white"
                  : "text-primary-navyblue hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="h-[400px] flex justify-center items-center font-bold text-xl text-primary-navyblue">Loading Gallery...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {images.map((img) => (
            <div key={img.id} className="relative group overflow-hidden rounded-lg">
              <img
                src={img.image_url}
                alt={img.title}
                className="w-full h-[250px] object-cover border border-[#eee] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary-navyblue/50 text-primary-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      )}

      {meta && meta.last_page > 1 && (
        <div className="flex border-[#EAECF0] border-t-[2px] font-inter font-semibold justify-between items-center px-1 py-8">
          <button
            className="flex gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <IoArrowBackOutlineIcon className="text-[22px]" /> <span className="hidden md:inline">Previous</span>
          </button>

          <div className="flex items-center gap-1">
            {[...Array(meta.last_page)].map((_, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-lg hidden sm:block ${
                  page === idx + 1
                    ? "bg-[#F9F5FF] text-[#7F56D9] font-bold"
                    : "bg-white text-[#667085]"
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <span className="sm:hidden text-sm text-gray-500">Page {page} of {meta.last_page}</span>
          </div>

          <button
            className="flex gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(p + 1, meta.last_page))}
            disabled={page === meta.last_page}
          >
            <span className="hidden md:inline">Next</span> <IoArrowForwardOutlineIcon className="text-[22px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;