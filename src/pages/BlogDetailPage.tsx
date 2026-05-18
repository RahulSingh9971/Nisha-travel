import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_CONFIG } from "../config/apiConfig";
import axios from "axios";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import img2 from "../assets/images/img2.png";

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  color: string;
}

interface RelatedPost {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  featured_image_url: string;
  published_date: string;
  reading_time: string;
  category?: BlogCategory;
}

interface BlogDetail {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  short_description: string;
  description: string;
  author: string;
  published_date: string;
  category: BlogCategory;
  featured_image_url: string;
  is_featured: boolean;
  views: number;
  reading_time: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    og_image_url: string | null;
  };
  related_posts: RelatedPost[];
}

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country_code: "+91",
    reason: typeof window !== "undefined" ? window.location.href : ""
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, reason: window.location.href }));
  }, [slug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await axios.post(`${API_CONFIG.BASE_URL}/contact`, formData, {
        headers: API_CONFIG.HEADERS
      });

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: response.data.message || "Thank you for contacting us! We will get back to you shortly.",
          confirmButtonColor: "#002661",
        });
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          message: "", 
          country_code: "+91", 
          reason: window.location.href 
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#E74C3C",
        });
      }
    } catch (error: any) {
      console.error("API Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "Server error. Please check your connection.",
        confirmButtonColor: "#E74C3C",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_CONFIG.BASE_URL}/blogs/${slug}`, { headers: API_CONFIG.HEADERS as any });
        const resData = await res.json();

        if (resData.status === "success") {
          setBlog(resData.data);
          document.title = resData.data.meta?.title || resData.data.title;
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Loading Blog...</div>;
  }

  if (!blog) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Blog post not found or not published.</div>;
  }

  return (
    <div className="font-poppins bg-white mt-[0px] lg:mt-[20px] mb-20">

      {/* Banner / Hero Image */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 pt-8">
        <img
          src={blog.featured_image_url || img2}
          alt={blog.title}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-[24px]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop';
          }}
        />
      </section>

      {/* Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Content Area */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">
              {blog.reading_time} <span className="mx-1">•</span> {blog.published_date}
            </span>
            <span className="text-white text-[10px] font-bold px-3 py-[4px] rounded-full uppercase tracking-wider" style={{ backgroundColor: blog.category?.color || '#ffc107', color: '#fff' }}>
              {blog.category ? blog.category.name : `BY ${blog.author}`}
            </span>
          </div>

          <h1 className="text-[28px] md:text-[36px] font-bold text-[#0d213b] mb-4 leading-[1.3]">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <h2 className="text-[18px] md:text-[20px] text-gray-500 mb-8 leading-[1.3]">
              {blog.subtitle}
            </h2>
          )}

          <div
            className="prose max-w-none text-gray-600 text-[15px] leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>

        {/* Right Sidebar Form Area */}
        <div className="lg:col-span-4">
          <div className="bg-[#f4f7f9] rounded-[16px] overflow-hidden sticky top-[120px]">
            <div className="bg-[#0d213b] p-6 text-white pb-8">
              <p className="text-sm text-gray-300 mb-1">Let's start planning your next adventure.</p>
              <h3 className="text-xl md:text-[22px] font-bold leading-tight">We're just a message away.</h3>
            </div>

            <form className="p-6 space-y-4 font-poppins -mt-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">First Name*</label>
                <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="Enter Your Name" className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">Email Address*</label>
                <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Enter Email Address" className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">Phone Number*</label>
                <PhoneInput
                  country={"in"}
                  value={formData.country_code + formData.phone}
                  onChange={(value, data: any) => {
                    const dialCode = data.dialCode;
                    const phoneNumber = value.startsWith(dialCode) 
                      ? value.slice(dialCode.length) 
                      : value;
                    setFormData({ 
                      ...formData, 
                      phone: phoneNumber, 
                      country_code: `+${dialCode}` 
                    });
                  }}
                  inputClass="!w-full !border-gray-200 !rounded-md !text-sm focus:!border-[#c20c15] !h-[42px]"
                  buttonClass="!border-gray-200 !rounded-l-md !bg-gray-50"
                  containerClass="!w-full"
                />
              </div>
              
              <input name="reason" value={formData.reason} type="hidden" />

              <div>
                <label className="block text-[13px] font-semibold text-[#0d213b] mb-1">Message*</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Type Your Message" rows={4} className="w-full border border-gray-200 rounded-md px-3 py-[10px] text-sm focus:outline-none focus:border-[#c20c15] resize-none"></textarea>
              </div>
              <button type="submit" disabled={submitting} className={`bg-[#c20c15] text-white font-bold text-[12px] uppercase px-8 py-3 rounded-[4px] hover:bg-red-800 transition-colors ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {submitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>

      </section>

      {/* Grid Articles Section */}
      {blog.related_posts && blog.related_posts.length > 0 && (
        <section className="bg-white w-full py-12 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {blog.related_posts.map((article, i) => (
              <div key={i} className="flex flex-col h-full">
                <div className="relative mb-5">
                  <img
                    src={article.featured_image_url}
                    alt={article.title}
                    className="w-full h-[220px] rounded-[24px] object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?auto=format&fit=crop&q=80&w=1000';
                    }}
                  />
                  <span className="absolute bottom-4 left-4 bg-[#c20c15] text-white text-[9px] md:text-[10px] font-bold px-3 py-[6px] rounded-full uppercase tracking-wider" style={{ backgroundColor: article.category?.color || '#c20c15' }}>
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
                  <Link to={`/blog-detail/${article.slug}`} className="text-[#c20c15] font-bold text-[14px] hover:underline mt-auto">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default BlogDetailPage;
