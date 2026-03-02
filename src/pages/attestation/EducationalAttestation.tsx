import EducationalDocuments from '../../components/attestation/academicattestation/EducationalDocuments'
import CompactChecklist from '../../components/attestation/academicattestation/CompactChecklist'
import DocumentChecklist from '../../components/attestation/academicattestation/DocumentChecklist'
import { JourneyCTA } from '../../components/AboutUs/leadership/JourneyAspirations'

const EducationalAttestation = () => {
    return (
        <main>
            <EducationalDocuments />
            <DocumentChecklist />
            <CompactChecklist />
            <JourneyCTA/>
        </main>
    )
}

export default EducationalAttestation