import React from "react";
import JobHeroSection from "../../components/JobsPage/JobHeroSection";
import CategoryCards from "../../components/JobsPage/CategoryCards";
import JobCards from "../../components/JobsPage/JobCards";
import GlobalPartnerSection from "../../components/home/GlobalPartnerSection";
import JobsByLocation from "../../components/JobsPage/JobsByLocation";
import ContactSection from "../../components/JobsPage/ContactSection";
import DownloadBrochure from "../../components/JobsPage/DownloadBrochure";


const Jobs = () => {
  return (
    <main>
      <JobHeroSection />
      <CategoryCards />
      <JobCards />
      <GlobalPartnerSection />
      <JobsByLocation />
      <DownloadBrochure/>
      <ContactSection />
    </main>
  );
};

export default Jobs;
