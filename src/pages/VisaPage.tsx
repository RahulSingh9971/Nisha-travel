import React from 'react'
import VisaAssistance from '../components/Visa/VisaAssistance'
import VisaContact from '../components/Visa/VisaContact'
import VisaDownloadbrochure from '../components/Visa/VisaDownloadbrochure'
import VisaFAQSection from '../components/Visa/VisaFAQSection'
import SecurityAndPartners from '../components/Visa/SecurityAndPartners'
import RiskPrevention from '../components/Visa/RiskPrevention'
import VisaSupport from '../components/Visa/VisaSupport'

const VisaPage = () => {
  return (
    <main>
        <VisaAssistance/>
        <VisaSupport/>
        <RiskPrevention/>
        <VisaFAQSection/>
        <VisaDownloadbrochure/>
        <SecurityAndPartners/>
        {/* <NisaTravelAgency/> */}
        {/* <ExploreServices/> */}
        {/* <VisaTypesGrid/> */}
        <VisaContact />
    </main>
  )
}

export default VisaPage