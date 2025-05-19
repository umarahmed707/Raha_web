import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function MidSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mb-10">
      {/* Background Video */}
      <video
        src="/Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      ></video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <div className="max-w-4xl" data-aos="fade-down">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 mx-5">
            Why Outsourced Accounting <br /> Makes a Difference
          </h1>
          <p className="text-[18px] mb-4 leading-6 md:leading-8">
            In today’s fast-paced business landscape, staying ahead demands focus, innovation, and agility.
            However, managing your financial operations can become a time-consuming and complex endeavor 
            that diverts your attention from what truly matters – growing your business. 
            This is where outsourced accounting steps in to create a tailor-made financial strategy for your business.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 justify-center" data-aos="zoom-in-up">
          <Link to="/About">
            <button className="Call-btn">Who We Are</button>
          </Link>
          <button
            onClick={() => {
              const element = document.getElementById("Service");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="Call-btn"
          >
            Our Services
          </button>
          <Link to="/ContactUs">
            <button className="Call-btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
