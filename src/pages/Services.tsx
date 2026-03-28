import OurServices from "../components/services/OurServices";
import whoWeAreBannerImg from "../assets/images/gallery4.jpg";
import BannerSection from "../components/AboutUs/BannerSection";
import RealWorldServices from "../components/services/RealWorldServices";
import SecurityAndPartners from "../components/SecurityAndPartners";

const ServicesPage = () => {
  return (
    <main>
      <BannerSection
        title="Our Core Services"
        bannerImg={whoWeAreBannerImg}
         position="50% 30%"
      />
      <OurServices />
      <SecurityAndPartners/>
      <RealWorldServices />
    </main>
  );
};

export default ServicesPage;
