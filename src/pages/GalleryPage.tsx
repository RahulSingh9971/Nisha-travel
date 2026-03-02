import React from "react";
import Gallery from "../components/gallery/Gallery";
import BannerSection from "../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../assets/images/gallery4.jpg";
const path = [
  // { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Gallery" },
];
const GalleryPage = () => {
  return (
    <main>
      <BannerSection
        title="Gallery"
        bannerImg={whoWeAreBannerImg}
        path={path}
      />
      <Gallery />
    </main>
  );
};

export default GalleryPage;
