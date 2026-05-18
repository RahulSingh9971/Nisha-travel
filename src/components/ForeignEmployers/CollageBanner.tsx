import React from 'react';
import bannerImg from '../../assets/images/image 62.png';

const CollageBanner = ({ data }: { data?: any }) => {
  const imageUrl = data?.gallery && data.gallery.length > 0 ? data.gallery[0].image_url : bannerImg;
  return (
    <section className="max-w-7xl mx-auto overflow-hidden">
      <img
        src={imageUrl}
        alt="Nisa Recruitment Collage"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default CollageBanner;
