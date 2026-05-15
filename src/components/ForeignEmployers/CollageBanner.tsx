import React from 'react';
import bannerImg from '../../assets/images/image 62.png';

const CollageBanner = () => {
  return (
    <section className="max-w-7xl mx-auto overflow-hidden">
      <img
        src={bannerImg}
        alt="Nisa Recruitment Collage"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default CollageBanner;
