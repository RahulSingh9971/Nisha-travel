import OurServices from "../components/services/OurServices";
import whoWeAreBannerImg from "../assets/images/gallery4.jpg";
import BannerSection from "../components/AboutUs/BannerSection";
import RealWorldServices from "../components/services/RealWorldServices";

const path = [
  { label: "service / visa", href: "/service/visa/coreservices" },
  { label: "our core services" }
];

const ServicesPage = () => {
  return (
    <main>
      <BannerSection
        title="Our Core Services"
        bannerImg={whoWeAreBannerImg}
        path={path}
      />
      <OurServices />
      <RealWorldServices />
    </main>
  );
};

export default ServicesPage;
