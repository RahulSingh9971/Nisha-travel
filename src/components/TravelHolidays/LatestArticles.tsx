import React from 'react';
import { Link } from 'react-router-dom';

// Assuming existing blog images from assets will be used
import blogImg1 from '../../assets/images/blogimg-1.png';
import blogImg2 from '../../assets/images/blogimg-2.png';
import blogImg3 from '../../assets/images/blogimg-3.png';

const articles = [
  {
    id: 1,
    image: blogImg1,
    author: 'BY CAELIN COLEMAN',
    meta: '3 MINUTE READ • OCTOBER 8, 2025',
    title: 'How to visa for moving abroad as a full time student?',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: '/blog'
  },
  {
    id: 2,
    image: blogImg2,
    author: 'BY CAELIN COLEMAN',
    meta: '3 MINUTE READ • OCTOBER 8, 2025',
    title: 'How to visa for moving abroad as a full time student?',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: '/blog'
  },
  {
    id: 3,
    image: blogImg3,
    author: 'BY CAELIN COLEMAN',
    meta: '3 MINUTE READ • OCTOBER 8, 2025',
    title: 'How to visa for moving abroad as a full time student?',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: '/blog'
  }
];

const LatestArticles: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white font-manrope">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <h2 className="text-[#0a1e3f] text-4xl md:text-[44px] font-extrabold leading-[1.2] tracking-tight mb-12">
          Read Our <span className="text-[#c1272d]">Latest articles</span>
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative w-full h-[240px] md:h-[260px] rounded-[20px] overflow-hidden mb-5">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-[#c1272d] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[4px]">
                  {article.author}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <p className="text-[#0a1e3f] text-[11px] font-extrabold uppercase tracking-widest mb-3">
                  {article.meta}
                </p>
                <h3 className="text-[#0a1e3f] text-[22px] font-extrabold leading-[1.3] mb-3 group-hover:text-[#c1272d] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#5e6d7c] text-[15px] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                {/* Read More Link */}
                <Link to={article.link} className="mt-auto inline-block">
                  <span className="text-[#c1272d] text-[14px] font-bold hover:underline underline-offset-4 transition-all">
                    Read More
                  </span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestArticles;
