import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="bg-white text-black px-6 py-4 flex items-center justify-between shadow" style={{ height: "90px" }}>
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="../src/images/New Logo 1.png"
            alt="Company Logo"
            className="h-full max-h-12 object-contain"
            style={{ maxHeight: "150px" }}
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="flex items-center space-x-6">
        {/* Home */}
        <li>
          <Link to="/" className="hover:text-[#E53935]">Home</Link>
        </li>

        {/* About Us */}
        <li className="relative group">
          <span className="flex items-center hover:text-[#E53935] cursor-default select-none">
            About Us <FaChevronDown className="ml-1 text-xs" />
          </span>
          <ul className="absolute left-0 top-full w-48 bg-white border border-gray-200 hidden group-hover:block rounded shadow-lg z-50">
            <li><Link to="/about/AboutSAM" className="block px-4 py-2 hover:bg-gray-100">About SAM</Link></li>
            <li><Link to="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Mission</Link></li>
            <li><Link to="/about/vision" className="block px-4 py-2 hover:bg-gray-100">Vision</Link></li>
          </ul>
        </li>

        {/* Services */}
        <li className="relative group">
          <span className="flex items-center hover:text-[#E53935] cursor-default select-none">
            Services <FaChevronDown className="ml-1 text-xs" />
          </span>
          <ul className="absolute left-0 top-full w-56 bg-white border border-gray-200 hidden group-hover:block rounded shadow-lg z-50">
            <li><Link to="/services/affiliate-marketing" className="block px-4 py-2 hover:bg-gray-100">Affiliate Marketing</Link></li>
            <li><Link to="/services/performance-marketing" className="block px-4 py-2 hover:bg-gray-100">Performance Marketing</Link></li>
            <li><Link to="/services/seo" className="block px-4 py-2 hover:bg-gray-100">SEO</Link></li>
            <li><Link to="/services/email-marketing" className="block px-4 py-2 hover:bg-gray-100">Email Marketing</Link></li>
            <li><Link to="/services/ecommerce-marketing" className="block px-4 py-2 hover:bg-gray-100">Ecommerce Marketing</Link></li>
            <li><Link to="/services/lead-generation" className="block px-4 py-2 hover:bg-gray-100">Lead Generation</Link></li>
          </ul>
        </li>

        {/* Contact Us */}
        <li>
          <Link to="/contact" className="flex items-center hover:text-[#E53935] transition-colors ">
            Contact Us
          </Link>
        </li>

        {/* Blog */}
        <li>
          <Link to="/blog" className="hover:text-[#E53935]">Blog</Link>
        </li>

        {/* Gallery */}
        <li className="relative group">
          <span className="flex items-center hover:text-[#E53935] cursor-default select-none">
            Gallery <FaChevronDown className="ml-1 text-xs" />
          </span>
          <ul className="absolute left-0 top-full w-40 bg-white border border-gray-200 hidden group-hover:block rounded shadow-lg z-50">
            <li><Link to="/gallery/in-house" className="block px-4 py-2 hover:bg-gray-100">In-House</Link></li>
            <li><Link to="/gallery/event" className="block px-4 py-2 hover:bg-gray-100">Event</Link></li>
          </ul>
        </li>

        {/* SAM's Workforce */}
        <li className="relative group">
          <span className="flex items-center hover:text-[#E53935] cursor-default select-none">
            SAM's Workforce <FaChevronDown className="ml-1 text-xs" />
          </span>
          <ul className="absolute left-0 top-full w-44 bg-white border border-gray-200 hidden group-hover:block rounded shadow-lg z-50">
            <li><Link to="/people-in-sam" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Careers</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
