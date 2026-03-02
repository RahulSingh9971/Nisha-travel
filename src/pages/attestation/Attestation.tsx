import AttestationDocument from '../../components/attestation/documentattestation/AttestationDocument'
import TrustedGlobalVisa from '../../components/attestation/documentattestation/TrustedGlobalVisa'
import ContactSection from '../../components/JobsPage/ContactSection'

const Attestation = () => {
    return (
        <main>
            <AttestationDocument />
            <TrustedGlobalVisa />
            <ContactSection />
        </main>
    )
}

export default Attestation