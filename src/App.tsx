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
import Jobs from "./pages/JobPages/Jobs";
import JobPosting from "./components/JobsPage/jobdetailpage/JobPosting";
import StudyAbroadPage from "./pages/Services/StudyAbroadPage";
import VisaStampingDetailPage from "./pages/VisaStampingDetailPage";
import WhatsAppIcon from "./components/WhatsAppIcon";
import TrackApplication from "./pages/TrackApplication";
import ApplicationStatus from "./pages/ApplicationStatus";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

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
            <Route path="/about/weare" element={<AboutPage />} />
            <Route path="/about/ourjourney" element={<AboutJourneyAwards />} />
            <Route path="/about/whatdrives" element={<AboutDrives />} />
            <Route path="/about/leadership" element={<AboutLeadership />} />
            <Route path="/about/philosophy" element={<AboutPhilosophy />} />
            <Route path="/about/corporate" element={<AboutCorporate />} />
            <Route path="/ourcoreservices" element={<ServicesPage />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/visaservices" element={<VisaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/policies/:slug" element={<PolicyPage />} />
            <Route path="/attestationdocument" element={<Attestation />} />
            <Route path="/attestationeducation" element={<EducationalAttestation />} />
            <Route path="/attestationprivate" element={<PrivateAttestation />} />
            <Route path="/attestationcommercial" element={<CompactAttestation />} />
            <Route path="/job_opening_details/:slug" element={<JobPosting />} />
            <Route path="/attestation-details" element={<AttestationDetails />} />
            <Route path="/JobPosting/:slug" element={<JobPosting />} />
            <Route path="/studyabroadpage" element={<StudyAbroadPage />} />
            <Route
              path="/visa-stamping/:country"
              element={<VisaStampingDetailPage />}
            />
            <Route path="/track-application" element={<TrackApplication />} />
            <Route path="/application-status" element={<ApplicationStatus />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppIcon
          phoneNumber="9958218855"
          message="I'm interested in your services!"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
