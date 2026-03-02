import React, { useState } from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";
import gallery9 from "../../assets/images/gallery9.jpg";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const IoArrowBackOutlineIcon = IoArrowBackOutline as React.ElementType;
const IoArrowForwardOutlineIcon = IoArrowForwardOutline as React.ElementType;

const categories = [
  "All",
  "Delhi",
  "Mumbai",
  "Kochi",
  "Events",
  "Recruitment",
  "Delegations",
];
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [

  { src: gallery1, alt: "Event 1", category: "Delhi" },
  { src: gallery2, alt: "Event 1", category: "Delhi" },
  { src: gallery3, alt: "Event 1", category: "Delegations" },
  { src: gallery4, alt: "Event 1", category: "Delegations" },
  { src: gallery5, alt: "Event 1", category: "Events" },
  { src: gallery6, alt: "Event 1", category: "Kochi" },
  { src: gallery7, alt: "Event 1", category: "Recruitment" },
  { src: gallery8, alt: "Event 1", category: "Delhi" },
  { src: gallery9, alt: "Event 2", category: "Mumbai" },
  { src: gallery9, alt: "Event 2", category: "Events" },
  { src: gallery9, alt: "Event 2", category: "Events" },
  { src: gallery9, alt: "Event 2", category: "Events" },
  { src: gallery9, alt: "Event 2", category: "Events" },

];

const imagesPerPage = 12;

const GalleryComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);


  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const pageCount = Math.ceil(filteredImages.length / imagesPerPage);
  const pagedImages = filteredImages.slice(
    (page - 1) * imagesPerPage,
    page * imagesPerPage
  );
  function handleTab(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }
  function goToPage(p: number) {
    setPage(p);
  }

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 md:px-8 xl:pt-20 lg:pt-16 py-10">
   
      <div className="flex justify-center">
        <div className="md:bg-[#EAF0F6] w-fit p-1 md:rounded-full flex md:flex-row flex-col justify-center gap-2 mb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleTab(cat)}
              className={`lg:px-6 px-4 py-2 rounded-full text-[16px]  font-extrabold ${
                activeCategory === cat
                  ? "bg-[#c40808] text-white"
                  : " text-[#0E313A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
        {pagedImages.map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[250px] object-cover border border-[#eee]"
            />
          </div>
        ))}
      </div>
  
      <div className="flex border-[#EAECF0] border-t-[2px] font-inter font-semibold justify-between items-center px-1 py-8">
        <button
          className={`md:flex hidden gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg ${
            page === 1 ? "text-[#344054]" : "text-[#333]"
          }`}
          onClick={() => goToPage(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          <IoArrowBackOutlineIcon className="text-[22px]" /> Previous
        </button>
        <button
          className={`flex md:hidden gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg ${
            page === 1 ? "text-[#344054]" : "text-[#333]"
          }`}
          onClick={() => goToPage(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          <IoArrowBackOutlineIcon className="text-[22px]" /> 
        </button>
        <div className="flex items-center gap-1">
          {[...Array(pageCount)].map((_, idx) => (
            <button
              key={idx}
              className={`w-10 h-10 rounded-lg ${
                page === idx + 1
                  ? "bg-[#F9F5FF] text-[#7F56D9] font-bold"
                  : "bg-white text-[#667085]"
              }`}
              onClick={() => goToPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <button
          className={`md:flex hidden gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg ${
            page === pageCount ? "text-[#344054]" : "text-[#333]"
          }`}
        
          onClick={() => goToPage(Math.min(page + 1, pageCount))}
          disabled={page === pageCount}
        >
          Next <IoArrowForwardOutlineIcon className="text-[22px]" />
        </button>
        <button
          className={`flex md:hidden gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg ${
            page === pageCount ? "text-[#344054]" : "text-[#333]"
          }`}
        
          onClick={() => goToPage(Math.min(page + 1, pageCount))}
          disabled={page === pageCount}
        >
          <IoArrowForwardOutlineIcon className="text-[22px]" />
        </button>
      </div>
    </div>
  );
};
export default GalleryComponent;




// export default GalleryComponent;
// import React, { useState, useEffect } from "react";
// import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
// const IoArrowBackOutlineIcon = IoArrowBackOutline as React.ElementType;
// const IoArrowForwardOutlineIcon = IoArrowForwardOutline as React.ElementType;
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

// interface GalleryImage {
//   id: number;
//   title: string;
//   category: string;
//   image_url: string;
// }

// interface PaginationMeta {
//   current_page: number;
//   last_page: number;
//   total: number;
// }

// const GalleryComponent: React.FC = () => {
//   const [images, setImages] = useState<GalleryImage[]>([]);
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [page, setPage] = useState(1);
//   const [meta, setMeta] = useState<PaginationMeta | null>(null);
//   const [loading, setLoading] = useState(true);

//   const imagesPerPage = 12;
  
// const API_BASE_URL = "https://cms.nisatravels.com/api";
// const API_KEY = "7802a1979d7472728fe22f93ccaf3755";

// const fetchGalleryData = async () => {
//   // Now we use the hardcoded strings directly
//   setLoading(true);
//   try {
//     const url = new URL(`${API_BASE_URL}/gallery`);
//     url.searchParams.append("page", page.toString());
//     url.searchParams.append("per_page", "12");
    
//     if (activeCategory !== "All") {
//       url.searchParams.append("category", activeCategory);
//     }

//   const response = await fetch(url.toString(), {
//   headers: {
//     "x-api-key": API_KEY, // Try this instead of Authorization
//     "Accept": "application/json",
//   },
// });

//     const result = await response.json();
//     if (result.success) {
//       setImages(result.data);
//       setCategories(result.categories);
//       setMeta(result.meta);
//     }
//   } catch (error) {
//     console.error("API Error:", error);
//   } finally {
//     setLoading(false);
//   }
// };
//   useEffect(() => {
//     fetchGalleryData();
//   }, [page, activeCategory]);

//   const handleTab = (cat: string) => {
//     setActiveCategory(cat);
//     setPage(1);
//   };

//   return (
//     <div className="bg-white max-w-7xl mx-auto px-4 md:px-8 xl:pt-20 lg:pt-16 py-10">
  
//       <div className="flex justify-center overflow-x-auto pb-4">
//         <div className="md:bg-[#EAF0F6] w-fit p-1 md:rounded-full flex md:flex-row flex-col justify-center gap-2 mb-6">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleTab(cat)}
//               className={`lg:px-6 px-4 py-2 rounded-full text-[16px] font-extrabold transition-colors ${
//                 activeCategory === cat
//                   ? "bg-[#c40808] text-white"
//                   : "text-[#0E313A] hover:bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {loading ? (
//         <div className="h-[400px] flex justify-center items-center font-bold text-xl">Loading Gallery...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
//           {images.map((img) => (
//             <div key={img.id} className="relative group overflow-hidden rounded-lg">
//               <img
//                 src={img.image_url}
//                 alt={img.title}
//                 className="w-full h-[250px] object-cover border border-[#eee] transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
//                 {img.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {meta && meta.last_page > 1 && (
//         <div className="flex border-[#EAECF0] border-t-[2px] font-inter font-semibold justify-between items-center px-1 py-8">
//           <button
//             className="flex gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg disabled:opacity-50"
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             disabled={page === 1}
//           >
//             <IoArrowBackOutlineIcon className="text-[22px]" /> <span className="hidden md:inline">Previous</span>
//           </button>

//           <div className="flex items-center gap-1">
//             {[...Array(meta.last_page)].map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`w-10 h-10 rounded-lg hidden sm:block ${
//                   page === idx + 1
//                     ? "bg-[#F9F5FF] text-[#7F56D9] font-bold"
//                     : "bg-white text-[#667085]"
//                 }`}
//                 onClick={() => setPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//             <span className="sm:hidden text-sm text-gray-500">Page {page} of {meta.last_page}</span>
//           </div>

//           <button
//             className="flex gap-2 items-center px-4 py-2 border-[#D0D5DD] border-[2px] rounded-lg disabled:opacity-50"
//             onClick={() => setPage((p) => Math.min(p + 1, meta.last_page))}
//             disabled={page === meta.last_page}
//           >
//             <span className="hidden md:inline">Next</span> <IoArrowForwardOutlineIcon className="text-[22px]" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryComponent;