import React from "react";
import Gallery from "../components/gallery/Gallery";
import BannerSection from "../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../assets/images/gallery4.jpg";

const GalleryPage = () => {
  return (
    <main>
      <BannerSection
        title="Gallery"
        bannerImg={whoWeAreBannerImg}
        position="50% 30%"
      />
      <Gallery />
    </main>
  );
};

export default GalleryPage;
