import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/RahaLogo.png";
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
    const handleClick = () => {
    const element = document.getElementById("Service");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white relative shadow-lg rounded-lg px-4 py-3 mx-4 md:mx-20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-black text-2xl font-bold">
          <img src={Logo} alt="Logo" className="w-[120px] ml-3" />
        </Link>

        {/* Desktop Menu */}
        <div className="md:flex hidden items-center space-x-8 text-[18px] font-semibold">
   <div class=" group inline-block h-full text-left">
  <Link to="/#Service" onClick={handleClick}>
      <button>
        Services
      </button>
    </Link>

  <div class="hidden group-hover:block absolute z-10 ml-[-400px] bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-6xl mt-2 ">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-left text-[black]">
     
      <div>
          <Link to="/Book"><h3 class="font-bold mb-2">Accounting and Bookkeeping Services</h3></Link>
        <ul class="space-y-1 text-sm">
          <li>Full Service Booking</li>
          <li>Accounts Payable and Receivable</li>
          <li>General Ledger and Management</li>
          <li>Bank Reconciliation</li>
        </ul>
      </div>
    
      <div>
        <Link to="/Software"> <h3 class="font-bold mb-2">Software Setup and Integration</h3></Link> 
        <ul class="space-y-1 text-sm">
          <li>Setting up Xero and QuickBooks</li>
          <li>Accounting Software Integration</li>
          <li>Process Automation Implementation</li>
          <li>Financial Reporting and Dashboard Configuration</li>
        </ul>
      </div>
      
      <div>
          <Link to="/LLC"> <h3 class="font-bold mb-2">LLC Registration</h3></Link>
        <ul class="space-y-1 text-sm">
          <li>Tax Planning and Filing</li>
          <li>International Tax Compliance</li>
          <li>Indirect Tax Management</li>
        </ul>
      </div>

      <div>
        <Link to="/Payroll"><h3 class="font-bold mb-2">Global Services</h3></Link>
        <ul class="space-y-1 text-sm">
          <li>Global Payroll Management</li>
          <li>International Tax Compliance</li>
          <li>Multi-Country Financial Reporting</li>
          <li>Currency Management</li>
        </ul>
      </div>
     
      <div>
          <Link to="/Itin"><h3 class="font-bold mb-2">ITIN Services</h3></Link>
        <ul class="space-y-1 text-sm">
          <li>What is an ITIN?</li>
      <li>Apply for a New ITIN</li>
      <li>Renew Existing ITIN</li>
      <li>ITIN for Dependents</li>
      <li>Documents Required</li>
      <li>Common FAQs</li>
        </ul>
      </div>
      <div>
          <Link to="/Tax"> <h3 class="font-bold mb-2">Tax Services</h3></Link>
        <ul class="space-y-1 text-sm">
          <li>Tax Planning and Filing</li>
          <li>International Tax Compliance</li>
          <li>Indirect Tax Management</li>
        </ul>
      </div>
     <div>
          <Link to="/Financial"><h3 class="font-bold mb-2">Financial Management and Consulting</h3></Link>
        <ul class="space-y-1 text-sm">
          <li>Financial Planning and Analysis</li>
          <li>Strategic Financial Consulting</li>
          <li>Budgeting and Forecasting</li>
          <li>Cash Flow Management</li>
        </ul>
      </div>
             <div>
       <Link to="/Bussiness"> <h3 class="font-bold mb-2">Business Budgeting</h3></Link>
        <ul class="space-y-1 text-sm">
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


         <div class="relative group inline-block  text-left">
          <Link to='/Industrial'>
  <button class="inline-flex justify-center w-full  text-[18px] font-medium text-gray-700 hover:bg-gray-50">
    Industries
  
  </button>
</Link>
  <div class="hidden group-hover:block absolute  z-50 ml-[-450px] bg-white border border-gray-300 rounded-lg shadow-lg p-8 w-[1100px] mt-2">
    <div class="grid grid-cols-4 gap-8 text-left text-gray-700 text-sm">
     
      <div>
       <Link to='/Hospita'> <h3 class="font-bold text-[18px] mb-2">Hospitality and Food Services</h3></Link>
        <ul class="space-y-1">
          <li>Restaurants and Cafes</li>
          <li>Hotels and Resorts</li>
          <li>Catering Services</li>
          <li>Event Management</li>
        </ul>
      </div>

    
      <div>
       <Link to='/Retail'>  <h3 class="font-bold text-[18px] mb-2">E-commerce and Retail</h3></Link>
        <ul class="space-y-1">
          <li>Online Marketplaces</li>
          <li>Fashion and Apparel</li>
          <li>Electronics and Gadgets</li>
          <li>Speciality Stores</li>
        </ul>
      </div>

     
      <div>
        <Link to='/Real'><h3 class="font-bold text-[18px] mb-2">Real Estate</h3></Link>
        <ul class="space-y-1">
          <li>Property Management</li>
          <li>Real Estate Development</li>
          <li>Rental Services</li>
          <li>Commercial Real Estate</li>
        </ul>
      </div>

     
      <div>
       <Link to='/Technology'> <h3 class="font-bold text-[18px] mb-2">Technology and Startups</h3></Link>
        <ul class="space-y-1">
          <li>Software Development</li>
          <li>IT Services</li>
          <li>Mobile App Development</li>
          <li>Artificial Intelligence</li>
        </ul>
      </div>

      
      <div class="col-span-4 border-t my-4"></div>

      
      <div>
        <Link to='/Healthcare'>  <h3 class="font-bold text-[18px] mb-2">Healthcare and Medical Services</h3></Link>
        <ul class="space-y-1">
          <li>Hospitals and Clinics</li>
          <li>Medical Device Manufacturers</li>
          <li>Telehealth Services</li>
          <li>Pharmaceutical Companies</li>
        </ul>
      </div>

      <div>
        <Link to='/Energy'><h3 class="font-bold text-[18px] mb-2">Energy and Utilities</h3></Link>
        <ul class="space-y-1">
          <li>Renewable Energy</li>
          <li>Utilities Providers</li>
          <li>Oil and Gas Industry</li>
          <li>Sustainable Technologies</li>
        </ul>
      </div>

      <div>
         <Link to='/Agriculture'> <h3 class="font-bold text-[18px] mb-2">Agriculture and Farming</h3></Link>
        <ul class="space-y-1">
          <li>Crop Farming</li>
          <li>Livestock Farming</li>
          <li>Agribusiness</li>
          <li>Agricultural Equipment</li>
        </ul>
      </div>

      <div>
       <Link to='/Construction'> <h3 class="font-bold text-[18px] mb-2">Construction and Infrastructure</h3></Link>
        <ul class="space-y-1">
          <li>Commercial Construction</li>
          <li>Residential Construction</li>
          <li>Infrastructure Development</li>
          <li>Engineering Services</li>
        </ul>
      </div>
    </div>
  </div>
</div>

          <Link to="/Insight" className="text-black hover:text-[#1445C2]">Insights</Link>
          <Link to="/Pricing" className="text-black hover:text-[#1445C2]">Pricing</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/ContactUs">
            <button className="px-6 py-3 rounded-lg text-black bg-[#ecebeb] hover:from-[#587EDB] bg-gradient-to-b hover:to-[#1445C2] hover:text-white font-semibold text-[16px] md:text-[18px]">
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
          <ScrollLink to="/Service" smooth={true} duration={500} className="text-black hover:text-[#1445C2]">Services</ScrollLink>
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
