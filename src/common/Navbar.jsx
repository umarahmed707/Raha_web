
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/image/RahaLogo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to #Service if on homepage, else navigate to homepage first then scroll
  const handleServiceClick = () => {
    if (location.pathname === "/") {
      scroll.scrollTo(document.getElementById("Service").offsetTop - 70, { smooth: true });
    } else {
      // Navigate to homepage and scroll after short delay
      window.location.href = "/#Service";
    }
  };

  return (
    <nav className="bg-white relative shadow-lg rounded-lg px-2 py-3 mx-4 md:mx-20 z-50">
      <div className="max-w-9xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-black text-2xl font-bold">
          <img src={Logo} alt="Logo" className="w-[130px] ml-5" />
        </Link>

        {/* Desktop Menu */}
        <div className="md:flex hidden items-center space-x-8 text-[18px] ">

          {/* Services Dropdown */}
          <div className="group relative inline-block h-full text-left">
            <button
              onClick={handleServiceClick}
              className="hover:text-[#1445C2] focus:outline-none text-[20px] font-semibold"
              type="button"
            >
              Services
            </button>

            <div className="hidden group-hover:block absolute z-10 ml-[-400px] left-0 bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-screen max-w-6xl mt-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left text-black">

                <div>
                  <Link to="/Book" className="font-bold mb-2 block">Accounting and Bookkeeping Services</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Full Service Booking</li>
                    <li>Accounts Payable and Receivable</li>
                    <li>General Ledger and Management</li>
                    <li>Bank Reconciliation</li>
                  </ul>
                </div>

                <div>
                  <Link to="/Software" className="font-bold mb-2 block">Software Setup and Integration</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Setting up Xero and QuickBooks</li>
                    <li>Accounting Software Integration</li>
                    <li>Process Automation Implementation</li>
                    <li>Financial Reporting and Dashboard Configuration</li>
                  </ul>
                </div>

                <div>
                  <Link to="/LLC" className="font-bold mb-2 block">LLC Registration</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Tax Planning and Filing</li>
                    <li>International Tax Compliance</li>
                    <li>Indirect Tax Management</li>
                  </ul>
                </div>

                <div>
                  <Link to="/Payroll" className="font-bold mb-2 block">Global Services</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Global Payroll Management</li>
                    <li>International Tax Compliance</li>
                    <li>Multi-Country Financial Reporting</li>
                    <li>Currency Management</li>
                  </ul>
                </div>

                <div>
                  <Link to="/Itin" className="font-bold mb-2 block">ITIN Services</Link>
                  <ul className="space-y-1 text-sm">
                    <li>What is an ITIN?</li>
                    <li>Apply for a New ITIN</li>
                    <li>Renew Existing ITIN</li>
                    <li>ITIN for Dependents</li>
                    <li>Documents Required</li>
                    <li>Common FAQs</li>
                  </ul>
                </div>

                <div>
                  <Link to="/Tax" className="font-bold mb-2 block">Tax Services</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Tax Planning and Filing</li>
                    <li>International Tax Compliance</li>
                    <li>Indirect Tax Management</li>
                  </ul>
                </div>

                <div>
                  <Link to="/Financial" className="font-bold mb-2 block">Financial Management and Consulting</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Financial Planning and Analysis</li>
                    <li>Strategic Financial Consulting</li>
                    <li>Budgeting and Forecasting</li>
                    <li>Cash Flow Management</li>
                  </ul>
                </div>

                <div>
                  <Link to="/Bussiness" className="font-bold mb-2 block">Business Budgeting</Link>
                  <ul className="space-y-1 text-sm">
                    <li>Create a Business Budget</li>
                    <li>Expense Tracking Strategies</li>
                    <li>Revenue Forecasting</li>
                    <li>Budgeting for Startups</li>
                    <li>Cash Flow Management</li>
                    <li>Cost-Cutting Techniques</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="group relative inline-block text-left">
            <Link to="/Industrial">
              <button className="hover:text-[#1445C2] inline-flex justify-center font-semibold w-full text-[20px] text-black focus:outline-none">
                Industries
              </button>
            </Link>

            <div className="hidden group-hover:block absolute z-50 ml-[-500px] left-0 bg-white border border-gray-300 rounded-lg shadow-lg p-8 w-[1100px] mt-2">
              <div className="grid grid-cols-4 gap-8 text-left  text-sm">
                <div>
                  <Link to="/Hospita" className="font-bold text-[18px] mb-2 block">Hospitality and Food Services</Link>
                  <ul className="space-y-1">
                    <li>Restaurants and Cafes</li>
                    <li>Hotels and Resorts</li>
                    <li>Catering Services</li>
                    <li>Event Management</li>
                  </ul>
                </div>
                <div>
                  <Link to="/Retail" className="font-bold text-[18px] mb-2 block">E-commerce and Retail</Link>
                  <ul className="space-y-1">
                    <li>Online Marketplaces</li>
                    <li>Fashion and Apparel</li>
                    <li>Electronics and Gadgets</li>
                    <li>Speciality Stores</li>
                  </ul>
                </div>
                <div>
                  <Link to="/Real" className="font-bold text-[18px] mb-2 block">Real Estate</Link>
                  <ul className="space-y-1">
                    <li>Property Management</li>
                    <li>Real Estate Development</li>
                    <li>Rental Services</li>
                    <li>Commercial Real Estate</li>
                  </ul>
                </div>
                <div>
                  <Link to="/Technology" className="font-bold text-[18px] mb-2 block">Technology and Startups</Link>
                  <ul className="space-y-1">
                    <li>Software Development</li>
                    <li>IT Services</li>
                    <li>Mobile App Development</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>

                <div className="col-span-4 border-t my-4"></div>

                <div>
                  <Link to="/Healthcare" className="font-bold text-[18px] mb-2 block">Healthcare and Medical Services</Link>
                  <ul className="space-y-1">
                    <li>Hospitals and Clinics</li>
                    <li>Medical Device Manufacturers</li>
                    <li>Telehealth Services</li>
                    <li>Pharmaceutical Companies</li>
                  </ul>
                </div>
                <div>
                  <Link to="/Energy" className="font-bold text-[18px] mb-2 block">Energy and Utilities</Link>
                  <ul className="space-y-1">
                    <li>Renewable Energy</li>
                    <li>Utilities Providers</li>
                    <li>Oil and Gas Industry</li>
                    <li>Sustainable Technologies</li>
                  </ul>
                </div>
                <div>
                  <Link to="/Agriculture" className="font-bold text-[18px] mb-2 block">Agriculture and Farming</Link>
                  <ul className="space-y-1">
                    <li>Crop Farming</li>
                    <li>Livestock Farming</li>
                    <li>Agribusiness</li>
                    <li>Agricultural Equipment</li>
                  </ul>
                </div>
                <div>
                  <Link to="/Construction" className="font-bold text-[18px] mb-2 block">Construction and Infrastructure</Link>
                  <ul className="space-y-1">
                    <li>Commercial Construction</li>
                    <li>Residential Construction</li>
                    <li>Infrastructure Development</li>
                    <li>Engineering Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other links */}
          <Link to="/Insight" className="text-black text-[20px] font-semibold hover:text-[#1445C2]">Insights</Link>
          <Link to="/Pricing" className="text-black text-[20px] font-semibold hover:text-[#1445C2]">Pricing</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/ContactUs">
            <button className="Contact ">
              Contact Us
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
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-[#F7F9FD] rounded-lg p-4 font-medium text-[17px]">
          {/* Using ScrollLink for smooth scroll if on homepage */}
          <ScrollLink
            to="Service"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-black hover:text-[#1445C2]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </ScrollLink>
          <Link to="/Industrial" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-[#1445C2]">Industries</Link>
          <Link to="/Insight" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-[#1445C2]">Insights</Link>
          <Link to="/Pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-[#1445C2]">Pricing</Link>
          <Link to="/ContactUs" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="BlueBtn">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
