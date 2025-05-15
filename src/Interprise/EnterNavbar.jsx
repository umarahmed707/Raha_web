import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/Enterpriselogo.png";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <nav className="relative z-10 rounded-[0.9375rem] border border-white/10 bg-white/10 shadow-[0px_5px_15px_0px_rgba(255,255,255,0.05)] px-4 py-3 mx-4 mb-15 md:mx-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
        <img src={Logo} alt="Logo" className="w-[120px] ml-3" />
      </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[18px] font-semibold">
          <ScrollLink to="Service" smooth={true} duration={500} className="text-white  cursor-pointer">Services</ScrollLink>
          <Link to="/Industrial" className="text-white">Industries</Link>
          <Link to="/Insight" className="text-white">Insights</Link>
          <Link to="/Pricing" className="text-white">Pricing</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/ContactUs">
            <button className="px-6 py-3 rounded-[0.9375rem] border border-white/10 bg-white/10 shadow-[0px_5px_15px_0px_rgba(255,255,255,0.05)] text-white  bg-gradient-to-b hover:from-[#ffffff] hover:to-[#DADADA] hover:text-black font-semibold text-[16px] md:text-[18px]">
              Contact
            </button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-100 rounded-lg p-4 font-medium text-[17px]">
          <ScrollLink to="Service" smooth={true} duration={500} className="text-black hover:text-[#1445C2]">Services</ScrollLink>
          <Link to="/Industrial" className="text-black hover:text-[#1445C2]">Industries</Link>
          <Link to="/Insight" className="text-black hover:text-[#1445C2]">Insights</Link>
          <Link to="/Pricing" className="text-black hover:text-[#1445C2]">Pricing</Link>
          <Link to="/ContactUs">
            <button className="border-2 px-6 py-2 w-full rounded-lg bg-gradient-to-b text-white from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2]">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
