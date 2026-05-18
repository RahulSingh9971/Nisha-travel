import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_CONFIG } from '../../config/apiConfig';
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
import TestimonialSection from '../../components/common/TestimonialSection';

const ForeignEmployers = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/recruitment-fe-page`, {
          headers: API_CONFIG.HEADERS
        });
        if (response.data.success || response.data.status === 'success' || response.data.data) {
          setData(response.data.data || response.data);
        }
      } catch (error) {
        console.error("Error fetching FE page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Loading...</div>;
  }

  return (
    <main>
      <ForeignEmployersHero data={data?.hero} />
      <TrustedByEmbassies data={data?.embassy_section} />
      <ServingEmployersMap data={data?.map_section} />
      <GlobalPartnerSection data={data?.trust_section} />
      <RecruitmentServicesSection data={data?.services_section} />

      <WhyChooseUs data={data?.why_choose_section} />
      <CollageBanner data={data?.why_choose_section} />
      <IndustriesWeCater data={data?.industries_section} />
      <RecruitmentProcessRoad data={data?.process_section} />
      <CommitmentExcellence data={data?.commitment_section} />
      <PartnerCallToAction data={data?.partner_section} />

      {data?.reviews_section && (
        <>
          <div className="bg-primary-lightblue md:py-10 py-8 rounded-b-[85%]" />
          <TestimonialSection data={data.reviews_section} />
        </>
      )}

      <ContactSection />
    </main>
  );
};

export default ForeignEmployers;
