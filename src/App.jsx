import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import ContactUs from "./pages/contact/ContactUs";




// Import your page components
import Home from "./pages/Home";
import AboutSAM from "./pages/about/AboutSAM";
import InHouse from "./pages/gallery/InHouse";
import Event from "./pages/gallery/Event";
import Affiliate from "./pages/services/AffiliateMarketing";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import SEO from "./pages/services/SEO";
import EmailMarketing from "./pages/services/EmailMarketing";
import EcommerceMarketing from "./pages/services/EcommerceMarketing";
import PeopleInSAM from "./pages/PeopleInSAM";
import PrivacyPolicy from "./pages/PrivacyPolicy";



// import Services from "./pages/services/Services";
// etc...

export default function App() {
  return (
    <Router>
      {/* Navbar on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutSAM />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery/in-house" element={<InHouse />} />
        <Route path="/gallery/Event" element={<Event />} />
        <Route path="/services/affiliate-marketing" element={<Affiliate/>} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing/>} />
        <Route path="/services/seo" element={<SEO/>} />
        <Route path="/services/email-marketing" element={<EmailMarketing/>} />
        <Route path="/services/ecommerce-marketing" element={<EcommerceMarketing/>} />
        <Route path="/people-in-sam" element={<PeopleInSAM/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        
        
        

        

      </Routes>
    </Router>
  );
}
