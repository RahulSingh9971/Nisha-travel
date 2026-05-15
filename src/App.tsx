import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About/AboutWeAre";
import ContactPage from "./pages/Contact";
import Header from "./components/navbar/Header";
import Footer from "./components/Footer";
import AboutDrives from "./pages/About/AboutWhatDrives";
import AboutLeadership from "./pages/About/AboutLeadership";
import AboutPhilosophy from "./pages/About/AboutPhilosophy";
import AboutCorporate from "./pages/About/AboutCorporate";
import MaintenancePopup from "./components/MaintenencePopup";
import Recruitment from "./pages/Recruitment";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/Services";
import VisaPage from "./pages/VisaPage";
import AboutJourneyAwards from "./pages/About/AboutJourneyAwards";
import PolicyPage from "./pages/PolicyPage";
import ScrollToTop from "./components/ScrollTotop";
import AttestationDetails from "./pages/attestation/AttestationDetails";
import Attestation from "./pages/attestation/Attestation";
import EducationalAttestation from "./pages/attestation/EducationalAttestation";
import PrivateAttestation from "./pages/attestation/PrivateAttestation";
import CompactAttestation from "./pages/attestation/CompactAttestation";
import AcademicDocumentsPage from "./pages/attestation/AcademicDocumentsPage";
import CommercialDocumentsPage from "./pages/attestation/CommercialDocumentsPage";
import PersonalDocumentsPage from "./pages/attestation/PersonalDocumentsPage";
import Jobs from "./pages/JobPages/Jobs";
import JobPosting from "./components/JobsPage/jobdetailpage/JobPosting";
import StudyAbroadPage from "./pages/Services/StudyAbroadPage";
import VisaStampingDetailPage from "./pages/VisaStampingDetailPage";
import WhatsAppIcon from "./components/WhatsAppIcon";
import FloatingDownloadCTA from "./components/FloatingDownloadCTA";
import TrackApplication from "./pages/TrackApplication";
import ApplicationStatus from "./pages/ApplicationStatus";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import wakalaImage from "./assets/images/nta-wakala.jpg";
import ForeignEmployers from "./pages/ForeignEmployers/ForeignEmployers";
import Emigrants from "./pages/Emigrants/Emigrants";
import TravelHolidays from "./pages/TravelHolidays/TravelHolidays";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen ">
        <ScrollToTop />
        <MaintenancePopup />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/who-we-are" element={<AboutPage />} />
            <Route path="/about/our-journey" element={<AboutJourneyAwards />} />
            <Route path="/about/mission-and-vision" element={<AboutDrives />} />
            <Route path="/about/leadership" element={<AboutLeadership />} />
            <Route path="/about/core-values" element={<AboutPhilosophy />} />
            <Route path="/about/csr" element={<AboutCorporate />} />
            <Route path="/ourcoreservices" element={<ServicesPage />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/visa-services" element={<VisaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/policies/:slug" element={<PolicyPage />} />
            <Route path="/attestationdocument" element={<Attestation />} />
            <Route path="/attestationeducation" element={<EducationalAttestation />} />
            <Route path="/attestationprivate" element={<PrivateAttestation />} />
            <Route path="/attestationcommercial" element={<CompactAttestation />} />
            <Route path="/academic-documents-attestation" element={<AcademicDocumentsPage />} />
            <Route path="/commercial-documents-attestation" element={<CommercialDocumentsPage />} />
            <Route path="/personal-documents-attestation" element={<PersonalDocumentsPage />} />
            <Route path="/job_opening_details/:slug" element={<JobPosting />} />
            <Route path="/attestation-details" element={<AttestationDetails />} />
            <Route path="/JobPosting/:slug" element={<JobPosting />} />
            <Route path="/study-abroad-page" element={<StudyAbroadPage />} />
            <Route
              path="/visa-stamping/:country"
              element={<VisaStampingDetailPage />}
            />
            <Route path="/track-application" element={<TrackApplication />} />
            <Route path="/application-status" element={<ApplicationStatus />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />
            <Route path="/foreign-employers" element={<ForeignEmployers />} />
            <Route path="/emigrants" element={<Emigrants />} />
            <Route path="/travel-holidays" element={<TravelHolidays />} />
          </Routes>
        </main>
        <Footer />
        <FloatingDownloadCTA
          fileUrl={wakalaImage}
          label="Download Saudi Wakala"
        />
        <WhatsAppIcon
          phoneNumber="9958218855"
          message="I'm interested in your services!"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
