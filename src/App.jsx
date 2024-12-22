import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import Chatbot_Interface from "./pages/Chatbot_Interface";
//import Payment_Card from "./Payment_interface/Payment_card";
import Aboutus from "./LandingPage_components/LandingPage_Footer_Components/Aboutus";
import Contactus from "./LandingPage_components/LandingPage_Footer_Components/Contactus";
import Terms_Conditions from "./LandingPage_components/LandingPage_Footer_Components/Terms_Conditions";
import Cancellation_refund_policies from "./LandingPage_components/LandingPage_Footer_Components/Cancellation_refund_policies";
import Privacy_policy from "./LandingPage_components/LandingPage_Footer_Components/Privacy_policy";
import For_developers from "./LandingPage_components/LandingPage_header_components/For_developers";
function App() {
  return (
    <BrowserRouter basename="/"  > {/* Ensure the basename matches your subdirectory */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chatbot" element={<Chatbot_Interface />} />
        {/* <Route path="/payment" element={<Payment_Card />} /> */}
         <Route path="/aboutus" element={<Aboutus/>} />
         <Route path="/contactus" element={<Contactus/>} />
         <Route path="/terms" element={<Terms_Conditions/>} />
         <Route path="/cancellation" element={<Cancellation_refund_policies/>} />
         <Route path="/privacy" element={<Privacy_policy/>}/>
         <Route path="/fordevelopers" element={<For_developers/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
