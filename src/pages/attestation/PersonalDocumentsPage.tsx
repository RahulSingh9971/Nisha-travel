import { JourneyCTA } from "../../components/AboutUs/leadership/JourneyAspirations";
import OtherAttestationLinks from "../../components/attestation/academicattestation/OtherAttestationLinks";
import PersonalDocumentsHero from "../../components/attestation/privateattestation/PersonalDocumentsHero";
import PersonalRequiredChecklist from "../../components/attestation/privateattestation/PersonalRequiredChecklist";
import travelerImage from "../../assets/images/girl.png";

const PersonalDocumentsPage = () => {
  return (
    <main>
      <PersonalDocumentsHero />
      <PersonalRequiredChecklist />
      <OtherAttestationLinks
        links={[
          { label: "Academic or Educational", to: "/academic-documents-attestation", variant: "filled" },
          { label: "Commercial", to: "/commercial-documents-attestation", variant: "outline" },
        ]}
      />
      <JourneyCTA
        title="Turning aspirations into achievements, one journey at a time."
        image={travelerImage}
      />
    </main>
  );
};

export default PersonalDocumentsPage;
