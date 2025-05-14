import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import midImage from '../assets/image/Mid.png';
import { Link } from 'react-router-dom';

export default function AccountingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" text-gray-800 mb-20">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${midImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="text-white py-40 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Why Outsourced Accounting <br /> Makes a Difference
          </h1>
          <p className="text-lg mb-4">
            In today’s fast-paced business landscape, staying ahead demands focus, innovation, and agility. 
            However, managing your financial operations can become a time-consuming and complex endeavor that diverts your attention from what truly matters – growing your business. 
            This is where outsourced accounting steps in to create a tailor-made financial strategy for your business.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 justify-center" data-aos="zoom-in-up">
        <Link to='/About'>
          <button className="text-[12px] lg:text-xl font-semibold px-4 py-3 bg-gradient-to-b from-[#ffffff] to-[#DADADA] text-black hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white rounded-lg">
            Who we are
          </button>
          </Link>
        <button
  onClick={() => {
    const element = document.getElementById('Service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="text-[12px] lg:text-xl font-semibold px-4 py-3 bg-gradient-to-b from-[#ffffff] to-[#DADADA] text-black hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white rounded-lg"
>
  Our Services
</button>

          <Link to='/ContactUs'>
          <button className="text-[12px] lg:text-xl font-semibold px-4 py-3 bg-gradient-to-b from-[#ffffff] to-[#DADADA] text-black hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white rounded-lg">
            Contact us
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
