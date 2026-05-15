import React from 'react';
import EmigrantsHero from '../../components/Emigrants/EmigrantsHero';
import TrustedByEmbassies from '../../components/ForeignEmployers/TrustedByEmbassies';
import WhyCandidatesTrustUs from '../../components/Emigrants/WhyCandidatesTrustUs';
import ExploreCandidateServices from '../../components/Emigrants/ExploreCandidateServices';
import OurCommitmentToYou from '../../components/Emigrants/OurCommitmentToYou';
import GlobalPartnerSection from '../../components/home/GlobalPartnerSection';
import EmigrantJobsAbroad from '../../components/Emigrants/EmigrantJobsAbroad';
import OurAdditionalServices from '../../components/Emigrants/OurAdditionalServices';
import CommitmentExcellence from '../../components/ForeignEmployers/CommitmentExcellence';
import IndustriesWeCater from '../../components/Recruitment/IndustriesWeCater';
import EmigrantCTA from '../../components/Emigrants/EmigrantCTA';
import ContactSection from '../../components/JobsPage/ContactSection'; // Utilizing standard contact to make page look complete

const Emigrants = () => {
  return (
    <main className="min-h-screen bg-white pt-[80px]">
      <EmigrantsHero />
      <TrustedByEmbassies />
      <WhyCandidatesTrustUs />
      <ExploreCandidateServices />
      <OurCommitmentToYou />
      <GlobalPartnerSection />
      <EmigrantJobsAbroad />
      <OurAdditionalServices />
      <CommitmentExcellence imageLeft={true} />
      <EmigrantCTA />
      <ContactSection />
    </main>
  );
};

export default Emigrants;
