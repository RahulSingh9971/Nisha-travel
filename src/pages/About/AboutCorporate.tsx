import BannerSection from "../../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../../assets/images/banner5.png";
import CommitmentSection from "../../components/AboutUs/social-corporate/CommitmentSection";
const path = [
  // { label: "Home", href: "/" },
  { label: "About us", href: "/about/corporate" },
  { label: "Corporate Social Responsibility" }
];

const AboutCorporate = () => {
  return (
    <main>
      <BannerSection
        title="Corporate Social Responsibility "
        bannerImg={whoWeAreBannerImg}
        path={path}
      />
      <CommitmentSection />
    </main>
  );
};

export default AboutCorporate;
