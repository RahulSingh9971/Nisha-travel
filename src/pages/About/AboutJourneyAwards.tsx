
import { JourneyAndAwards } from '../../components/AboutUs/our-journey/JourneyAndAwards'
import BannerSection from "../../components/AboutUs/BannerSection";
import whoWeAreBannerImg from "../../assets/images/banner5.png";

const path = [
  // { label: "Home", href: "/" },
  { label: "About us", href: "/about/ourjourney" },
  { label: "Our Journey" }
];
const AboutJourneyAwards = () => {
  return (
   <main>
    <BannerSection
        title="Our Journey "
        bannerImg={whoWeAreBannerImg}
        path={path}
      />
    <JourneyAndAwards/>
   </main>
  )
}

export default AboutJourneyAwards 