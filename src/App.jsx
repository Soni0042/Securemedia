import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import ContactUs from "./pages/contact/ContactUs";



// Import your page components
import Home from "./pages/Home";
import AboutSAM from "./pages/about/AboutSAM";
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
        <Route path="/about/AboutSAM" element={<AboutSAM />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}
