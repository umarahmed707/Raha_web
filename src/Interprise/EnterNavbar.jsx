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
           <div className="group relative inline-block h-full text-left">
                    <button
                   
                      className=" text-white focus:outline-none text-[20px] font-semibold"
                      type="button"
                    >
                      Services
                    </button>
        
                    <div className="hidden group-hover:block absolute z-10 ml-[-400px] left-0 bg-gray-50 border border-gray-300 rounded-lg shadow-lg p-6 w-screen max-w-6xl mt-2">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left text-black">
        
                        <div>
                          <Link to="/Book" className="font-bold mb-2 block">Accounting and Bookkeeping Services</Link>
                          <ul className="space-y-1 text-[16px]">
                            <li>Full Service Booking</li>
                            <li>Accounts Payable and Receivable</li>
                            <li>General Ledger and Management</li>
                            <li>Bank Reconciliation</li>
                          </ul>
                        </div>
        
                        <div>
                          <Link to="/Software" className="font-bold mb-2 block">Software Setup and Integration</Link>
                          <ul className="space-y-1 text-[16px]">
                            <li>Setting up Xero and QuickBooks</li>
                            <li>Accounting Software Integration</li>
                            <li>Process Automation Implementation</li>
                            <li>Financial Reporting and Dashboard Configuration</li>
                          </ul>
                        </div>
        
                        <div>
                          <Link to="/LLC" className="font-bold mb-2 block">LLC Registration</Link>
                          <ul className="space-y-1 text-[16px] ">
                            <li>Tax Planning and Filing</li>
                            <li>International Tax Compliance</li>
                            <li>Indirect Tax Management</li>
                          </ul>
                        </div>
        
                        <div>
                          <Link to="/Payroll" className="font-bold mb-2 block">Global Services</Link>
                          <ul className="space-y-1 text-[16px]">
                            <li>Global Payroll Management</li>
                            <li>International Tax Compliance</li>
                            <li>Multi-Country Financial Reporting</li>
                            <li>Currency Management</li>
                          </ul>
                        </div>
        
                        <div>
                          <Link to="/Itin" className="font-bold mb-2 block">ITIN Services</Link>
                          <ul className="space-y-1 text-[16px]">
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
                          <ul className="space-y-1 text-[16px]">
                            <li>Tax Planning and Filing</li>
                            <li>International Tax Compliance</li>
                            <li>Indirect Tax Management</li>
                          </ul>
                        </div>
        
                        <div>
                          <Link to="/Financial" className="font-bold mb-2 block">Financial Management and Consulting</Link>
                          <ul className="space-y-1 text-[16px]">
                            <li>Financial Planning and Analysis</li>
                            <li>Strategic Financial Consulting</li>
                            <li>Budgeting and Forecasting</li>
                            <li>Cash Flow Management</li>
                          </ul>
                        </div>
        
                        <div>
                          <Link to="/Bussiness" className="font-bold mb-2 block">Business Budgeting</Link>
                          <ul className="space-y-1 text-[16px]">
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
            <div className="group relative inline-block text-left">
                      <Link to="/Industrial">
                        <button className=" text-white inline-flex justify-center font-semibold w-full text-[20px] ">
                          Industries
                        </button>
                      </Link>
          
                      <div className="hidden group-hover:block absolute z-50 ml-[-500px] left-0 bg-gray-50 border border-gray-300 rounded-lg shadow-lg p-8 w-[1100px] mt-2">
                        <div className="grid grid-cols-4 gap-8 text-left  text-sm">
                          <div>
                            <Link to="/Hospita" className="font-bold text-[18px] mb-2 block">Hospitality and Food Services</Link>
                            <ul className="space-y-1 text-[16px]">
                              <li>Restaurants and Cafes</li>
                              <li>Hotels and Resorts</li>
                              <li>Catering Services</li>
                              <li>Event Management</li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/Retail" className="font-bold text-[18px] mb-2 block">E-commerce and Retail</Link>
                            <ul className="space-y-1 text-[16px]">
                              <li>Online Marketplaces</li>
                              <li>Fashion and Apparel</li>
                              <li>Electronics and Gadgets</li>
                              <li>Speciality Stores</li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/Real" className="font-bold text-[18px] mb-2 block">Real Estate</Link>
                            <ul className="space-y-1 text-[16px]">
                              <li>Property Management</li>
                              <li>Real Estate Development</li>
                              <li>Rental Services</li>
                              <li>Commercial Real Estate</li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/Technology" className="font-bold text-[18px] mb-2 block">Technology and Startups</Link>
                            <ul className="space-y-1 text-[16px]">
                              <li>Software Development</li>
                              <li>IT Services</li>
                              <li>Mobile App Development</li>
                              <li>Artificial Intelligence</li>
                            </ul>
                          </div>
          
                          <div className="col-span-4 border-t my-4"></div>
          
                          <div>
                            <Link to="/Healthcare" className="font-bold text-[18px] mb-2 block">Healthcare and Medical Services</Link>
                            <ul className="space-y-1  text-[16px]">
                              <li>Hospitals and Clinics</li>
                              <li>Medical Device Manufacturers</li>
                              <li>Telehealth Services</li>
                              <li>Pharmaceutical Companies</li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/Energy" className="font-bold text-[18px] mb-2 block">Energy and Utilities</Link>
                            <ul className="space-y-1 text-[16px]">
                              <li>Renewable Energy</li>
                              <li>Utilities Providers</li>
                              <li>Oil and Gas Industry</li>
                              <li>Sustainable Technologies</li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/Agriculture" className="font-bold text-[18px] mb-2 block">Agriculture and Farming</Link>
                            <ul className="space-y-1 text-[16px] ">
                              <li>Crop Farming</li>
                              <li>Livestock Farming</li>
                              <li>Agribusiness</li>
                              <li>Agricultural Equipment</li>
                            </ul>
                          </div>
                          <div>
                            <Link to="/Construction" className="font-bold text-[18px] mb-2 block">Construction and Infrastructure</Link>
                            <ul className="space-y-1 text-[16px]">
                              <li>Commercial Construction</li>
                              <li>Residential Construction</li>
                              <li>Infrastructure Development</li>
                              <li>Engineering Services</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
