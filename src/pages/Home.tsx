import DocumentAttestationSection from "../components/home/DocumentAttestationSection";
import GlobalPartnerSection from "../components/home/GlobalPartnerSection";
import HeroSection from "../components/home/HeroSection";
import RecruitmentOverseasSection from "../components/home/RecruitmentOverseasSection";
import ServiceCards from "../components/home/ServiceCards";
import TestimonialsContactSection from "../components/home/TestimonialsContactSection";
import TrustedVisaSection from "../components/home/TrustedVisaSection";
import VisaEmigrationJobsSection from "../components/home/VisaEmigrationJobsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <TrustedVisaSection />
      <RecruitmentOverseasSection />
      <GlobalPartnerSection />
      <VisaEmigrationJobsSection />
      <DocumentAttestationSection />
      <TestimonialsContactSection />
    </>
  );
}
