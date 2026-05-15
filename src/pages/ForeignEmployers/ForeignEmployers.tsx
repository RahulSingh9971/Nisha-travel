import React from 'react';
import ForeignEmployersHero from '../../components/ForeignEmployers/ForeignEmployersHero';
import TrustedByEmbassies from '../../components/ForeignEmployers/TrustedByEmbassies';
import ServingEmployersMap from '../../components/ForeignEmployers/ServingEmployersMap';
import GlobalPartnerSection from '../../components/home/GlobalPartnerSection';
import RecruitmentServicesSection from '../../components/ForeignEmployers/RecruitmentServicesSection';
import CommitmentExcellence from '../../components/ForeignEmployers/CommitmentExcellence';
import RecruitmentProcessRoad from '../../components/ForeignEmployers/RecruitmentProcessRoad';
import IndustriesWeCater from '../../components/Recruitment/IndustriesWeCater';
import WhyChooseUs from '../../components/ForeignEmployers/WhyChooseUs';
import CollageBanner from '../../components/ForeignEmployers/CollageBanner';
import PartnerCallToAction from '../../components/ForeignEmployers/PartnerCallToAction';
import ContactSection from '../../components/JobsPage/ContactSection'; // Using existing contact section to make it look full

const ForeignEmployers = () => {
  return (
    <main>
      <ForeignEmployersHero />
      <TrustedByEmbassies />
      <ServingEmployersMap />
      <GlobalPartnerSection />
      <RecruitmentServicesSection />

      <WhyChooseUs />
      <CollageBanner />
      <IndustriesWeCater />
      <RecruitmentProcessRoad />
      <CommitmentExcellence />
      <PartnerCallToAction />
      <ContactSection />
    </main>
  );
};

export default ForeignEmployers;
