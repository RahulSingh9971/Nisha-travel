import React from "react";
import GlobalOpportunities from "../components/Recruitment/GlobalOpportunities";
import RecruitmentOverseasSection from "../components/home/RecruitmentOverseasSection";
import EmigrantsCards from "../components/Recruitment/EmigrantsCards";
import IndustriesWeCater from "../components/Recruitment/IndustriesWeCater";
import FAQSection from "../components/Recruitment/FAQSection";
import ServicesContactpage from "../components/Recruitment/ServicesContactpage";
import DeploymentProcess from "../components/Recruitment/DeploymentProcess";
import JobCards from "../components/JobsPage/JobCards";
import ContactSection from "../components/JobsPage/ContactSection";
import DownloadBrochure from "../components/JobsPage/DownloadBrochure";
import SecurityAndPartners from "../components/SecurityAndPartners";

const Recruitment = () => {
  return (
    <main>
      <GlobalOpportunities />
      <JobCards/>
      {/* <RecruitmentOverseasSection /> */}
      <EmigrantsCards />
      <IndustriesWeCater />
      <DeploymentProcess/>
      <SecurityAndPartners/>
      <FAQSection />
      {/* <ServicesContactpage /> */}
      <DownloadBrochure/>
       <ContactSection/>
    </main>
  );
};

export default Recruitment;
