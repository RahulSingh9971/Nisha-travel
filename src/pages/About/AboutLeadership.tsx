import BannerSection from "../../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../../assets/images/banner3.webp";
import { JourneyCTA } from "../../components/AboutUs/leadership/JourneyAspirations";
import FounderSection from "../../components/AboutUs/leadership/FounderSection";
const path = [
  // { label: "Home", href: "/" },
  { label: "About us", href: "/about/leadership" },
  { label: "Leadership" }
];

const AboutLeadership = () => {
  return (
    <main>
      <BannerSection title="Leadership" bannerImg={whoWeAreBannerImg} path={path}/>
      <FounderSection />
      <JourneyCTA />
    </main>
  );
};

export default AboutLeadership;
