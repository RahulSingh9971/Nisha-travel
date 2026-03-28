import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_CONFIG } from "../config/apiConfig";

// Fallback images
import illustration from "../assets/images/Vision statement-pana 1.png";

interface HeaderData {
  breadcrumb: string;
  hero_title: string;
  hero_title_highlight: string;
  hero_description: string;
  hero_image_url: string;
}

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  color: string;
}

interface Blog {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  short_description: string;
  author: string;
  published_date: string;
  category: BlogCategory;
  featured_image_url: string;
  is_featured: boolean;
  reading_time: string;
}

interface BlogMeta {
  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
}

const BlogPage: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [meta, setMeta] = useState<BlogMeta | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchBlogPageData = async () => {
      try {
        setLoading(true);
        // Using Promise.all for concurrent requests
        const [headerRes, blogsRes] = await Promise.all([
          fetch(`${API_CONFIG.BASE_URL}/blog-page`, { headers: API_CONFIG.HEADERS as any }),
          fetch(`${API_CONFIG.BASE_URL}/blogs?page=${currentPage}`, { headers: API_CONFIG.HEADERS as any })
        ]);

        const headerDataRes = await headerRes.json();
        const blogsDataRes = await blogsRes.json();

        if (headerDataRes.status === "success") {
          setHeaderData(headerDataRes.data);
        }

        if (blogsDataRes.status === "success") {
          setBlogs(blogsDataRes.data);
          setMeta(blogsDataRes.meta);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPageData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && meta && page <= meta.last_page) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading && !headerData) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Loading Blogs...</div>;
  }

  const mainArticle = blogs[0];
  const sideArticles = blogs.slice(1, 4);
  const gridArticles = blogs.slice(4);

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="bg-[#f0f4f8] w-full pt-16 md:pt-20 lg:pt-24 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-6">
              <span className="text-[#c20c15] block mb-2">{headerData?.hero_title || "Travel Tips, Visa"}</span>
              <span className="text-[#0d213b] block">{headerData?.hero_title_highlight || "Updates & Guides"}</span>
            </h1>
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] max-w-[90%] md:max-w-full">
              {headerData?.hero_description || "Stay updated with travel insights, visa processes, documentation guides, and helpful tips from Nisa Travel Agency to make your travel planning easier and more reliable."}
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={headerData?.hero_image_url || illustration}
              alt="Visa and Travel Guide Illustration"
              className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = illustration;
              }}
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-white w-full pt-16 md:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Main Article (Left) */}
          {mainArticle ? (
            <div className="flex flex-col">
              <img
                src={mainArticle.featured_image_url}
                alt={mainArticle.title}
                className="w-full h-auto rounded-[24px] object-cover mb-8 aspect-[4/3] lg:aspect-auto lg:h-[400px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop';
                }}
              />
              <div className="flex flex-col flex-1">
                <div className="text-[13px] text-gray-500 font-bold mb-3 uppercase tracking-wide">
                  {mainArticle.published_date} <span className="mx-2">•</span> {mainArticle.reading_time}
                </div>
                <Link to={`/blog-detail/${mainArticle.slug}`}>
                  <h3 className="text-3xl md:text-[32px] font-bold text-[#0d213b] mb-4 hover:text-[#c20c15] transition-colors">
                    {mainArticle.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
                  {mainArticle.short_description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link to={`/blog-detail/${mainArticle.slug}`} className="text-[#c20c15] font-bold hover:underline">Read More</Link>
                  <span className="bg-[#c20c15] text-white text-[10px] md:text-xs font-bold px-4 py-[6px] rounded-full uppercase tracking-wider">
                    BY {mainArticle.author}
                  </span>
                </div>
              </div>
            </div>
          ) : (
             <div className="flex flex-col justify-center text-gray-400">No main article available</div>
          )}

          {/* Side Articles (Right) */}
          <div className="flex flex-col space-y-10 lg:pl-4">
            {sideArticles.map((article) => (
              <div className="flex flex-col sm:flex-row gap-6" key={article.id}>
                <img
                  src={article.featured_image_url}
                  alt={article.title}
                  className="w-full sm:w-[260px] h-[200px] sm:h-[180px] rounded-[24px] object-cover flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop';
                  }}
                />
                <div className="flex flex-col flex-1 py-1">
                  <div className="text-[11px] text-gray-500 font-bold mb-2 uppercase tracking-wide">
                    {article.reading_time} <span className="mx-1">•</span> {article.published_date}
                  </div>
                  <Link to={`/blog-detail/${article.slug}`}>
                    <h4 className="text-[22px] font-bold text-[#0d213b] mb-3 leading-tight hover:text-[#c20c15] transition-colors">
                      {article.title}
                    </h4>
                  </Link>
                  <p className="text-gray-600 text-[14px] mb-5 line-clamp-2">
                    {article.short_description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <Link to={`/blog-detail/${article.slug}`} className="text-[#c20c15] font-bold text-[14px] hover:underline">Read More</Link>
                    <span className="bg-[#c20c15] text-white text-[9px] font-bold px-3 py-[4px] rounded-full uppercase tracking-wider">
                      BY {article.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Grid Articles Section */}
      {gridArticles.length > 0 && (
      <section className="bg-white w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {gridArticles.map((article) => (
            <div key={article.id} className="flex flex-col h-full">
              <div className="relative mb-5">
                <img
                  src={article.featured_image_url}
                  alt={article.title}
                  className="w-full h-[220px] rounded-[24px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
                <span className="absolute bottom-4 left-4 text-white text-[9px] md:text-[10px] font-bold px-3 py-[6px] rounded-full uppercase tracking-wider" style={{ backgroundColor: article.category?.color || '#c20c15' }}>
                  {article.category?.name || "TRAVEL"}
                </span>
              </div>
              <div className="text-[12px] text-gray-500 font-bold mb-3 uppercase tracking-wide">
                {article.reading_time} <span className="mx-1">•</span> {article.published_date}
              </div>
              <Link to={`/blog-detail/${article.slug}`}>
                <h4 className="text-[20px] md:text-[22px] font-bold text-[#0d213b] mb-3 leading-tight hover:text-[#c20c15] transition-colors">
                  {article.title}
                </h4>
              </Link>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-2">
                {article.short_description}
              </p>
              <div className="mt-auto">
                <Link to={`/blog-detail/${article.slug}`} className="text-[#c20c15] font-bold text-[14px] hover:underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Pagination component */}
      {meta && meta.last_page > 1 && (
        <section className="bg-white w-full pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between border-t border-gray-100 pt-8 mt-4 pb-10">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-semibold transition-colors ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#0d213b] hover:bg-gray-50'}`}
            >
              <span className="text-lg leading-none mb-[2px]">←</span> Previous
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {Array.from({ length: meta.last_page }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === page
                      ? 'bg-[#c20c15] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
               onClick={() => handlePageChange(currentPage + 1)}
               disabled={currentPage === meta.last_page}
               className={`flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-semibold transition-colors ${currentPage === meta.last_page ? 'text-gray-400 cursor-not-allowed' : 'text-[#0d213b] hover:bg-gray-50'}`}
            >
              Next <span className="text-lg leading-none mb-[2px]">→</span>
            </button>
          </div>
        </section>
      )}

    </div>
  );
};

export default BlogPage;
