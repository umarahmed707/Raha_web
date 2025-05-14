import React, { useEffect } from 'react'
import Insights from '../assets/image/insightscard.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Bookmid() {
      useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);
  return (
    <div>
     <div
      className="w-full h-auto px-4 md:px-20 py-10 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${Insights})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Heading */}
      <div className="text-white text-center" data-aos="fade-up">
        <h1 className="font-bold text-[32px] md:text-[60px] tracking-[-0.06em]">Our Process</h1>
        <p className="mt-4 text-sm md:text-lg">
          With our experienced team, we provide top-notch bookkeeping operations to make sure your business keeps running smoothly. Our process includes data collection, analysis, and making formal reports.
        </p>
      </div>

      {/* Process Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        {/* Step 1 */}
        <div className="Spot" data-aos="zoom-in" data-aos-delay="0">
          <div className="SpotCard w-87 lg:w-90 h-auto p-4 hover:text-black bg-opacity-10 rounded-lg text-white">
            <div className="coloredNum">01.</div>
            <h2 className="text-xl font-bold my-1">Data collection</h2>
            <p className="text-[16px]">
              By securely gathering your financial documents, with the help of online portals and other suitable methods, we create a collection to make a draft of all the data.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="Spot" data-aos="zoom-in" data-aos-delay="100">
          <div className="SpotCard w-87 lg:w-90 h-auto p-4 hover:text-black   bg-opacity-10 rounded-lg text-white">
            <div className="coloredNum">02.</div>
            <h2 className="text-xl font-bold my-1">Analysis and review</h2>
            <p className="text-[16px]">
              Our dedicated team of accounting professionals pays close attention to detail as they categorize transactions and ensure that your accounts are accurately reconciled.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="Spot" data-aos="zoom-in" data-aos-delay="200">
          <div className="SpotCard w-87 lg:w-90 h-auto p-4 hover:text-black  bg-opacity-10 rounded-lg text-white">
            <div className="coloredNum">03.</div>
            <h2 className="text-xl font-bold my-1">Reporting and insights</h2>
            <p className="text-[16px]">
              We take the time to thoroughly analyze your financial situation and deliver tailored advice to ensure you grasp your business's financial well-being.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center mx-10 gap-3 mt-5 pb-5" data-aos="fade-up" data-aos-delay="300">
        <Link to="/Consultationform">
          <button className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-white hover:to-gray-300 hover:text-[#1445C2] hover:border w-auto">
            Request Consultation
          </button>
        </Link>
        <button
          onClick={() => (window.location.href = 'tel:+16282004141')}
          className="border text-[#1445C2] text-xs sm:text-[18px] rounded-lg py-1 sm:py-4 sm:px-4 bg-gradient-to-b from-white to-gray-300 hover:from-[#587EDB] hover:to-[#1445C2] hover:text-white w-[30%] sm:w-[10%]"
        >
          Call Us
        </button>
      </div>
    </div>
              </div>
   
  )
}
