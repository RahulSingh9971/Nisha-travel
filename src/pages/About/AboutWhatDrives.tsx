import React from "react";
import OverseasJourney from "../../components/AboutUs/what-drives/OverseasJourney";
import BannerSection from "../../components/AboutUs/BannerSection";
import whatDrivesBannerImg from "../../assets/images/banner2.webp";
import WhyChooseUs from "../../components/AboutUs/what-drives/WhyChooseUs";
import { EmpoweringFamilies } from "../../components/AboutUs/what-drives/EmpoweringFamilies";
import { VisionMission } from "../../components/AboutUs/what-drives/VisionMission";
import { JourneyCTA } from "../../components/AboutUs/what-drives/JourneyTogether";
const path = [
  // { label: "Home", href: "/" },
  { label: "About us", href: "/about/whatdrives" },
  { label: "What We Drives?" }
];

const AboutWhatDrives = () => {
  return (
    <main>
      <BannerSection title="What We Drives?" bannerImg={whatDrivesBannerImg} path={path}/>
      <OverseasJourney />
      <WhyChooseUs />
      <EmpoweringFamilies />
      <VisionMission />
      <JourneyCTA />
    </main>
  );
};

export default AboutWhatDrives;
