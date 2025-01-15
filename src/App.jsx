import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import  { Suspense, lazy } from "react";

// Lazy Loaded Pages
const ForBusiness = lazy(()=>import ('./LandingPage_components/LandingPage_header_components/ForBusiness'))
const CancellationRefundPolicies = lazy(() => import("./LandingPage_components/LandingPage_Footer_Components/Cancellation_refund_policies"));
const PrivacyPolicy = lazy(() => import("./LandingPage_components/LandingPage_Footer_Components/Privacy_policy"));

// Critical Pages Loaded Upfront
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import AboutUs from "./LandingPage_components/LandingPage_Footer_Components/Aboutus"
import ContactUs from "./LandingPage_components/LandingPage_Footer_Components/Contactus"
import TermsAndConditions from "./LandingPage_components/LandingPage_Footer_Components/Terms_Conditions"



import For_developers from "./LandingPage_components/LandingPage_header_components/For_developers";
import Super_chip from "./LandingPage_components/LandingPage_header_components/Super_chip";
import ChatbotInterface from "./pages/Chatbot_Interface";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Critical Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/fordevelopers" element={<For_developers />} />
            <Route path="/forbusiness" element={<ForBusiness />} />
            <Route path="/superchip" element={<Super_chip />} />

            {/* Lazy Loaded Pages */}
            <Route path="/chatbot" element={<ChatbotInterface />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/cancellation-policy" element={<CancellationRefundPolicies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* 404 Fallback */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
