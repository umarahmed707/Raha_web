import React from 'react';
import Logo from '../assets/image/RahaLogo.png'
import InLogo from '../assets/image/InLogo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleClick = () => {
    const element = document.getElementById("Service");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-gradient-to-b from-[#ffffff] to-[#DADADA] text-gray-800 border-t border-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto md:mx-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <Link to='/'>
          <img src={Logo} className="text-xl font-bold mb-2 "/>
          </Link>
          <p className="text-sm mb-4">
            Our team at RAHA is dedicated to ensuring your books are accurate, compliance is maintained, and your financial decisions are backed by strategic insights.
          </p>
          <div className="inline-block mt-2">
            <img src={InLogo} alt="LinkedIn" className="w-8 h-8" />
        </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
           <Link to='/#Service' onClick={handleClick}> <li className="hover:underline">Services</li></Link>
            <Link to='/Industrial'><li className="hover:underline">Industries</li></Link>
           <Link to='/Insight'> <li className="hover:underline">Insights</li></Link>
           <Link to='/Pricing'> <li className="hover:underline">Pricing</li></Link>
           <Link to='/About'> <li className="hover:underline">About</li></Link>
           <Link to='/ContactUs'> <li className="hover:underline">Contact</li></Link>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Reach out to us</h3>
          <form className="space-y-2">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 px-3 py-2 bg-[E8E8E8] shadow-lg  rounded" required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-3 py-2 bg-[E8E8E8] shadow-lg  rounded" required
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-3 py-2 bg-[E8E8E8] shadow-lg rounded h-24" required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" required
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="text-xs text-center text-gray-500 mt-8">
        © 2021 - 2023 RAHA Financials LLC. All rights reserved. RAHA Financials refers to the RAHA Financials network and/or one or more of its member firms, each of which is a separate legal entity.
      </div>
    </footer>
  );
};

export default Footer;
