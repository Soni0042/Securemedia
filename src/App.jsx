import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";



// Import your page components
import Home from "./pages/Home";
// import AboutUs from "./pages/about/AboutUs";
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
        {/* Example extra route:
        <Route path="/about" element={<AboutUs />} /> 
        */}
      </Routes>
    </Router>
  );
}
