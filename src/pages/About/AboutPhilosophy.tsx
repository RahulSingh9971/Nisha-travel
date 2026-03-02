import BannerSection from "../../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../../assets/images/banner4.webp";
import ValuesSection from "../../components/AboutUs/philosophy/ValueCard";
const path = [
  // { label: "Home", href: "/" },
  { label: "About us", href: "/about/philosophy" },
  { label: "Our Values / Philosophy" }
];

const AboutPhilosophy = () => {
  return (
    <main>
      <BannerSection
        title="Our Values / Philosophy"
        bannerImg={whoWeAreBannerImg}
        path={path}
      />
      <ValuesSection/>
    </main>
  );
};

export default AboutPhilosophy;
