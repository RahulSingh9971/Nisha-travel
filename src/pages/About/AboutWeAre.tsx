
import NisaTravelAgency from "../../components/AboutUs/who-are/NisaTravelAgency";
import OurImpact from "../../components/AboutUs/who-are/OurImpact";
import whoWeAreBannerImg from "../../assets/images/banner1.webp";
import BannerSection from "../../components/AboutUs/BannerSection";
import Downloadbrochure from "../../components/AboutUs/who-are/Downloadbrochure";
import WhoWeAre  from "../../components/AboutUs/who-are/WhoWeAre";

// Define the path for breadcrumb
const path = [
  // { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about/weare" },
  { label: "Who We Are?" }
];

const AboutWeAre = () => {
  return (
    <main>
      <BannerSection title="Who We Are?" bannerImg={whoWeAreBannerImg}  path={path}/>
      <WhoWeAre />
      <OurImpact />
      <NisaTravelAgency />
      <Downloadbrochure/>
    </main>
  );
};

export default AboutWeAre;
