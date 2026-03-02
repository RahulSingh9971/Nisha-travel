import EducationalDocuments from '../../components/attestation/academicattestation/EducationalDocuments'
import CompactChecklist from '../../components/attestation/academicattestation/CompactChecklist'
import DocumentChecklist from '../../components/attestation/academicattestation/DocumentChecklist'
import CommercialDocumentChecklist from '../../components/attestation/commercialdocuments/CommercialDocumentChecklist'
import CommercialChecklist from '../../components/attestation/commercialdocuments/CommercialChecklist'
import CommercialDocuments from '../../components/attestation/commercialdocuments/CommercialDocuments'
import { JourneyCTA } from '../../components/AboutUs/leadership/JourneyAspirations'

const CompactAttestation = () => {
    return (
        <main>
            <CommercialDocuments />
            <CommercialDocumentChecklist />
            <CommercialChecklist />
            <JourneyCTA/>
        </main>
    )
}

export default CompactAttestation