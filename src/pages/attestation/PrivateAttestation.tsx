import EducationalDocuments from '../../components/attestation/academicattestation/EducationalDocuments'
import CompactChecklist from '../../components/attestation/academicattestation/CompactChecklist'
import DocumentChecklist from '../../components/attestation/academicattestation/DocumentChecklist'
import PrivateDocumentChecklist from '../../components/attestation/privateattestation/PrivateDocumentChecklist'
import PrivateChecklist from '../../components/attestation/privateattestation/PrivateChecklist'
import PersonalDocuments from '../../components/attestation/privateattestation/PersonalDocuments'
import { JourneyCTA } from '../../components/AboutUs/leadership/JourneyAspirations'

const PrivateAttestation = () => {
    return (
        <main>
            <PersonalDocuments/>
            <PrivateDocumentChecklist/>
            <PrivateChecklist/>
            <JourneyCTA/>
        </main>
    )
}

export default PrivateAttestation