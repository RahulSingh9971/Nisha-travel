import AcademicDocumentsHero from "../../components/attestation/academicattestation/AcademicDocumentsHero";
import OtherAttestationLinks from "../../components/attestation/academicattestation/OtherAttestationLinks";
import RequiredDocumentsChecklist from "../../components/attestation/academicattestation/RequiredDocumentsChecklist";
import { JourneyCTA } from "../../components/AboutUs/leadership/JourneyAspirations";
import travelerImage from "../../assets/images/girl.png";

const AcademicDocumentsPage = () => {
  return (
    <main>
      <AcademicDocumentsHero />
      <RequiredDocumentsChecklist />
      <OtherAttestationLinks
        links={[
          { label: "Personal or Private", to: "/personal-documents-attestation", variant: "filled" },
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

export default AcademicDocumentsPage;
