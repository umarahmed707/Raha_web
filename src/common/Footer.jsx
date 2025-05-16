import React from 'react';
import Logo from '../assets/image/RahaLogo.png'
import InLogo from '../assets/image/InLogo.png'
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const handleClick = () => {
    const element = document.getElementById("Service");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yahan aap form validation ya API call kar sakte hain agar chahein

    // Form successful submit hone ke baad thank you page par redirect
    navigate("/thankyou");
  };
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#ffffff] text-gray-800 border-t border-gray-300 px-6 py-10">
      <div className="max-w-[1600px] md:mx-15  gap-8 flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div>
          <Link to='/'>
          <img src={Logo} className="text-xl font-bold mb-2 "/>
          </Link>
          <p className="text-[16px] leading-5 mb-4 w-[350px]">
            Our team at RAHA is dedicated to ensuring your books are accurate,compliance  is maintained, and your financial decisions are backed by strategic insights.
          </p>
          <div className="inline-block mt-2">
            <img src={InLogo} alt="LinkedIn" className="w-8 h-8" />
        </div>
        </div>

        {/* Quick Links */}
<div>
  <h3 className="font-bold text-[20px] mb-2">Quick Links</h3>
  <ul className="space-y-1 text-[18px]">
    <li className="hover:underline">
      <Link to="/#Service" onClick={handleClick} className="block w-full">
        Services
      </Link>
    </li>
    <li className="hover:underline">
      <Link to="/Industrial" className="block w-full">
        Industries
      </Link>
    </li>
    <li className="hover:underline">
      <Link to="/Insight" className="block w-full">
        Insights
      </Link>
    </li>
    <li className="hover:underline">
      <Link to="/Pricing" className="block w-full">
        Pricing
      </Link>
    </li>
    <li className="hover:underline">
      <Link to="/About" className="block w-full">
        About
      </Link>
    </li>
    <li className="hover:underline">
      <Link to="/ContactUs" className="block w-full">
        Contact
      </Link>
    </li>
  </ul>
</div>

        {/* Contact Form */}
        <div>
          <h3 className="font-bold text-[20px] mb-2">Reach out to us</h3>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 px-3 py-3 bg-[#E8E8E8] shadow-lg focus:outline-none focus:ring-1 focus:ring-[#1445C2]  rounded" required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-3 py-3 bg-[#E8E8E8] shadow-lg focus:outline-none focus:ring-1 focus:ring-[#1445C2]  rounded" required
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-3 py-2 bg-[#E8E8E8]  shadow-lg focus:outline-none focus:ring-1 focus:ring-[#1445C2] rounded h-24" required
            />
            <button
              type="submit"
              className="BlueBtn" 
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="text-[16px] text-center text-gray-500 mt-8 lg:mx-45">
        © 2021 - 2023 RAHA Financials LLC. All rights reserved. RAHA Financials refers to the RAHA Financials network and/or one or more of its member firms, each of which is a separate legal entity.
      </div>
    </footer>
  );
};

export default Footer;
