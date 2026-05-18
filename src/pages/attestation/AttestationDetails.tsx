import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { API_CONFIG } from '../../config/apiConfig';

import illustration from '../../assets/images/visa_stamping_illustration.png';
import TrustedGlobalVisa from '../../components/attestation/documentattestation/TrustedGlobalVisa';
import WhatIsAttestation from '../../components/attestation/documentattestation/WhatIsAttestation';
import HowToAttest from '../../components/attestation/documentattestation/HowToAttestSection';
import AttestationProcess from '../../components/attestation/documentattestation/AttestationProcess';
import NisaHelps from '../../components/attestation/documentattestation/NisaHelps';
import AttestationFAQ from '../../components/attestation/documentattestation/AttestationFAQ';
import TestimonialSection from "../../components/common/TestimonialSection";
import ContactSection from '../../components/JobsPage/ContactSection';

const AttestationDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttestation = async () => {
      try {
        setLoading(true);
        const currentSlug = slug || 'kuwait';
        const response = await axios.get(`${API_CONFIG.BASE_URL}/attestations/${currentSlug}`, {
          headers: API_CONFIG.HEADERS
        });
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching attestation details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAttestation();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-[60vh] flex items-center justify-center font-poppins text-[#0d213b]">Page not found.</div>;
  }

  const {
    hero,
    what_is_section,
    embassy_section,
    process_section,
    help_section,
    partner_section,
    testimonials_section,
    faq_section,
    specialized_services_section
  } = data;

  return (
    <main className="font-poppins mb-24 mt-4 lg:mt-8">
      {/* Hero Section */}
      <section className="bg-[#f8faff] py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-extrabold text-[#0d213b] leading-[1.1] mb-4" dangerouslySetInnerHTML={{ __html: hero?.title || 'Attestation' }}>
            </h1>
            {hero?.subtitle && (
              // <h2 className="text-[20px] font-bold text-[#c20c15] mb-2">{hero.subtitle}</h2>
              <p className="text-gray-500 text-[14px] md:text-[15px] mb-8 max-w-[400px] leading-relaxed">{hero.subtitle}</p>
            )}
            <p className="text-gray-500 text-[14px] md:text-[15px] mb-8 max-w-[400px] leading-relaxed">
              {hero?.description}
            </p>
            {hero?.cta && (
              <Link to={hero.cta.link} className="inline-block bg-[#c20c15] text-white font-bold text-[13px] uppercase px-10 py-3 rounded-[3px] hover:bg-red-800 transition-colors tracking-wide">
                {hero.cta.text}
              </Link>
            )}
          </div>
          <div className="md:w-1/2 flex justify-end md:justify-center">
            <img
              src={hero?.banner_url || illustration}
              alt="Attestation"
              className="w-full max-w-[500px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <WhatIsAttestation data={what_is_section} />
      <HowToAttest data={embassy_section} />
      <AttestationProcess data={process_section} />
      <NisaHelps data={help_section} />

      <TrustedGlobalVisa data={partner_section} />

      <div className="bg-primary-lightblue md:py-10 py-8 rounded-b-[85%]" />
      <TestimonialSection data={testimonials_section} />
      <div className="bg-primary-lightblue md:py-14 py-10 rounded-t-[85%]" />
      <AttestationFAQ data={faq_section} />

      {/* Specialized Services Section */}
      {specialized_services_section && specialized_services_section.cards && specialized_services_section.cards.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#002661] leading-tight mb-4">
              {specialized_services_section.title}
            </h2>
            <p className="text-gray-500 mb-12">{specialized_services_section.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialized_services_section.cards.map((card: any, index: number) => (
                <div key={index} className="rounded-[20px] overflow-hidden flex flex-col items-start text-left relative" style={{ backgroundColor: card.bg_color || '#0b2a57' }}>
                  <img src={card.image_url} alt={card.title} className="w-full h-[200px] object-cover" />
                  <div className="p-8 pb-10 flex flex-col items-start">
                    <h3 className="text-[24px] font-bold mb-4" style={{ color: card.text_color || '#fff' }}>{card.title}</h3>
                    <p className="mb-6 opacity-80" style={{ color: card.text_color || '#fff' }}>{card.description}</p>
                    <Link to={card.link} className="font-bold text-[14px] hover:underline" style={{ color: card.text_color || '#fff' }}>{card.link_text}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </main>
  );
};

export default AttestationDetails;
