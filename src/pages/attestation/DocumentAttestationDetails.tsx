import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { API_CONFIG } from '../../config/apiConfig';

import AcademicDocumentsHero from '../../components/attestation/academicattestation/AcademicDocumentsHero';
import RequiredDocumentsChecklist from '../../components/attestation/academicattestation/RequiredDocumentsChecklist';
import OtherAttestationLinks from '../../components/attestation/academicattestation/OtherAttestationLinks';
import { JourneyCTA } from '../../components/AboutUs/leadership/JourneyAspirations';
import travelerImage from '../../assets/images/girl.png';

import WhatIsAttestation from '../../components/attestation/documentattestation/WhatIsAttestation';
import HowToAttest from '../../components/attestation/documentattestation/HowToAttestSection';
import AttestationProcess from '../../components/attestation/documentattestation/AttestationProcess';
import NisaHelps from '../../components/attestation/documentattestation/NisaHelps';
import TrustedGlobalVisa from '../../components/attestation/documentattestation/TrustedGlobalVisa';
import TestimonialSection from "../../components/common/TestimonialSection";
import AttestationFAQ from '../../components/attestation/documentattestation/AttestationFAQ';

const DocumentAttestationDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        let currentSlug = slug;
        if (!currentSlug) {
          const path = window.location.pathname.toLowerCase();
          if (path.includes('commercial')) currentSlug = 'commercial-documents-attestation';
          else if (path.includes('personal') || path.includes('private')) currentSlug = 'personal-private-attestation';
          else currentSlug = 'academic-educational-attestation';
        }

        const response = await axios.get(`${API_CONFIG.BASE_URL}/document-attestations/${currentSlug}`, {
          headers: API_CONFIG.HEADERS
        });
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching document attestation details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Page not found.</div>;
  }

  return (
    <main>
      <AcademicDocumentsHero data={data} />
      
      {data.what_is_section?.items?.length > 0 && <WhatIsAttestation data={data.what_is_section} />}
      {data.embassy_section?.services?.length > 0 && <HowToAttest data={data.embassy_section} />}
      {data.process_section?.steps?.length > 0 && <AttestationProcess data={data.process_section} />}
      {data.help_section?.features?.length > 0 && <NisaHelps data={data.help_section} />}
      {data.partner_section?.stats?.length > 0 && <TrustedGlobalVisa data={data.partner_section} />}
      
      {data.testimonials_section?.items?.length > 0 && (
        <>
          <div className="bg-primary-lightblue md:py-10 py-8 rounded-b-[85%]" />
          <TestimonialSection data={data.testimonials_section} />
        </>
      )}

      {data.faq_section?.items?.length > 0 && (
        <>
          <div className="bg-primary-lightblue md:py-14 py-10 rounded-t-[85%]" />
          <AttestationFAQ data={data.faq_section} />
        </>
      )}

      <RequiredDocumentsChecklist data={data} />
      <OtherAttestationLinks
        links={data.other_attestations?.map((link: any, index: number) => ({
          label: link.title,
          to: `/document-attestations/${link.slug}`,
          variant: index % 2 === 0 ? "filled" : "outline"
        })) || []}
      />
      <JourneyCTA
        title="Turning aspirations into achievements, one journey at a time."
        image={travelerImage}
      />
    </main>
  );
};

export default DocumentAttestationDetails;
