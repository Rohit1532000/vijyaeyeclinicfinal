import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import VisionMission from "./pages/VisionMission";
import CoreValues from "./pages/CoreValues";
import CommunityOutreach from "./pages/CommunityOutreach";
import InsuranceAndCashless from "./pages/InsuranceAndCashless";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundAndReturns from "./pages/RefundAndReturns";
import AppointmentBooking from "./pages/AppointmentBooking";
import Specialities from "./pages/specialities/Specialities";
import ComprehensiveOphthalmology from "./pages/specialities/ComprehensiveOphthalmology";
import CataractTreatment from "./pages/specialities/CataractTreatment";
import LasikRefractiveTreatment from "./pages/specialities/LasikRefractiveTreatment";
import GlaucomaTreatment from "./pages/specialities/GlaucomaTreatment";
import DiabeticEyeCare from "./pages/specialities/DiabeticEyeCare";
import SquintEyeTreatment from "./pages/specialities/SquintEyeTreatment";
import PediatricOphthalTreatment from "./pages/specialities/PediatricOphthalTreatment";
import OculoplastyTreatment from "./pages/specialities/OculoplastyTreatment";
import CorneaTreatment from "./pages/specialities/CorneaTreatment";
import RetinaTreatment from "./pages/specialities/RetinaTreatment";
import MyopiaTreatment from "./pages/specialities/MyopiaTreatment";
import VitrectomySurgery from "./pages/specialities/VitrectomySurgery";
import Optometry from "./pages/specialities/Optometry";
import InternationalPatientTreatmentSpeciality from "./pages/specialities/InternationalPatientTreatment";
import InternationalPatientTreatmentPage from "./pages/InternationalPatientTreatment";
import MedicalInsurance from "./pages/MedicalInsurance";
import OpticalsByNeha from "./pages/OpticalsByNeha";
import NagadevanahalliBranch from "./pages/NagadevanahalliBranch";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import NigeriaLanding from "./pages/international/NigeriaLanding";
import KenyaLanding from "./pages/international/KenyaLanding";
import MalawiLanding from "./pages/international/MalawiLanding";
import BotswanaLanding from "./pages/international/BotswanaLanding";
import ZimbabweLanding from "./pages/international/ZimbabweLanding";
import GhanaLanding from "./pages/international/GhanaLanding";
import TanzaniaLanding from "./pages/international/TanzaniaLanding";
import EthiopiaLanding from "./pages/international/EthiopiaLanding";
import SomaliaLanding from "./pages/international/SomaliaLanding";
import SenegalLanding from "./pages/international/SenegalLanding";
import SaudiArabiaLanding from "./pages/international/SaudiArabiaLanding";
import UAELanding from "./pages/international/UAELanding";
import OmanLanding from "./pages/international/OmanLanding";
import KuwaitLanding from "./pages/international/KuwaitLanding";
import QatarLanding from "./pages/international/QatarLanding";
import BahrainLanding from "./pages/international/BahrainLanding";
import YemenLanding from "./pages/international/YemenLanding";
import IraqLanding from "./pages/international/IraqLanding";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/community-outreach" element={<CommunityOutreach />} />
          <Route path="/insurance-cashless" element={<InsuranceAndCashless />} />
          <Route path="/appointment-booking" element={<AppointmentBooking />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/specialities/comprehensive-ophthalmology" element={<ComprehensiveOphthalmology />} />
          <Route path="/specialities/cataract-treatment" element={<CataractTreatment />} />
          <Route path="/specialities/lasik-refractive-treatment" element={<LasikRefractiveTreatment />} />
          <Route path="/specialities/glaucoma-treatment" element={<GlaucomaTreatment />} />
          <Route path="/specialities/diabetic-eye-care" element={<DiabeticEyeCare />} />
          <Route path="/specialities/squint-eye-treatment" element={<SquintEyeTreatment />} />
          <Route path="/specialities/pediatric-ophthal-treatment" element={<PediatricOphthalTreatment />} />
          <Route path="/specialities/oculoplasty-treatment" element={<OculoplastyTreatment />} />
          <Route path="/specialities/cornea-treatment" element={<CorneaTreatment />} />
          <Route path="/specialities/retina-treatment" element={<RetinaTreatment />} />
          <Route path="/specialities/myopia-treatment" element={<MyopiaTreatment />} />
          <Route path="/specialities/vitrectomy-surgery" element={<VitrectomySurgery />} />
          <Route path="/specialities/optometry" element={<Optometry />} />
          <Route path="/specialities/international-patient-treatment" element={<InternationalPatientTreatmentSpeciality />} />
          <Route path="/international-patient-treatment" element={<InternationalPatientTreatmentPage />} />
          <Route path="/facilities/medical-insurance" element={<MedicalInsurance />} />
          <Route path="/facilities/insurance-cashless" element={<InsuranceAndCashless />} />
          <Route path="/facilities/opticals-by-neha" element={<OpticalsByNeha />} />
          <Route path="/facilities/nagadevanahalli" element={<NagadevanahalliBranch />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-and-returns" element={<RefundAndReturns />} />
          <Route path="/international/nigeria" element={<NigeriaLanding />} />
          <Route path="/international/kenya" element={<KenyaLanding />} />
          <Route path="/international/malawi" element={<MalawiLanding />} />
          <Route path="/international/botswana" element={<BotswanaLanding />} />
          <Route path="/international/zimbabwe" element={<ZimbabweLanding />} />
          <Route path="/international/ghana" element={<GhanaLanding />} />
          <Route path="/international/tanzania" element={<TanzaniaLanding />} />
          <Route path="/international/ethiopia" element={<EthiopiaLanding />} />
          <Route path="/international/somalia" element={<SomaliaLanding />} />
          <Route path="/international/senegal" element={<SenegalLanding />} />
          <Route path="/international/saudi-arabia" element={<SaudiArabiaLanding />} />
          <Route path="/international/uae" element={<UAELanding />} />
          <Route path="/international/oman" element={<OmanLanding />} />
          <Route path="/international/kuwait" element={<KuwaitLanding />} />
          <Route path="/international/qatar" element={<QatarLanding />} />
          <Route path="/international/bahrain" element={<BahrainLanding />} />
          <Route path="/international/yemen" element={<YemenLanding />} />
          <Route path="/international/iraq" element={<IraqLanding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
