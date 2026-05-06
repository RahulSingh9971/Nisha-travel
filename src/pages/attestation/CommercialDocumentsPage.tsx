import { JourneyCTA } from "../../components/AboutUs/leadership/JourneyAspirations";
import OtherAttestationLinks from "../../components/attestation/academicattestation/OtherAttestationLinks";
import CommercialDocumentsHero from "../../components/attestation/commercialdocuments/CommercialDocumentsHero";
import CommercialRequiredChecklist from "../../components/attestation/commercialdocuments/CommercialRequiredChecklist";
import travelerImage from "../../assets/images/girl.png";

const CommercialDocumentsPage = () => {
  return (
    <main>
      <CommercialDocumentsHero />
      <CommercialRequiredChecklist />
      <OtherAttestationLinks
        links={[
          { label: "Personal or Private", to: "/personal-documents-attestation", variant: "filled" },
          { label: "Academic or Educational", to: "/academic-documents-attestation", variant: "outline" },
        ]}
      />
      <JourneyCTA
        title="Turning aspirations into achievements, one journey at a time."
        image={travelerImage}
      />
    </main>
  );
};

export default CommercialDocumentsPage;
