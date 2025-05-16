import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import CardLayouts from '../Layouts/CardLayouts';
import img1 from '../assets/image/Group1.png';
import img2 from '../assets/image/Group 2.svg';
import img3 from '../assets/image/Group3.svg';


export default function Card() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();  // Refresh AOS after the component mounts
  }, []);

  return (
<>
<section id="Service">
<div className= "text-center mt-[-35px] " data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-[40px] lg:mx-75 sm:text-[60px] lg:text-[65px] font-semibold tracking-[-0.06em] leading-[40px] lg:leading-[60px]">
            Our Suite of Business and
             Accounting Solutions
          </h1>
          <p className="text-[16px] sm:text-[19px] mt-5 mx-15">
            Full-service accounting solutions for enterprises and small businesses.
            <br /> Tax, bookkeeping, payroll, and more.
          </p>
        </div>
<div className="flex flex-wrap justify-center gap-5 mt-10 lg:mt-15 mx-5" >

  {/* Bookkeeping Card */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Book" className="w-full flex justify-center">
      <CardLayouts
        img={img1}
        title="Bookkeeping"
        parah="To obtain a clear view of your business’s economic standing, RAHA Financials provide accurate and efficient Bookkeeping of all business transactions."
      />
    </Link>
  </div>

  {/* Software Selection Card */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Software" className="w-full flex justify-center">
      <CardLayouts
        img={img2}
        title="Software Selection and Setup"
        parah="Optimal accounting software like Xero, Quickbooks etc are a necessity nowadays for any business. Our
                  Xero experts will help you in the selection and smooth operation of Xero software."
      />
    </Link>
  </div>

  {/* LLC Registration */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/LLC" className="w-full flex justify-center">
      <CardLayouts
        img={img3}
        title="LLC Registration"
        parah="To protect your assets and liabilities, we offer help in forming an LLC. Our LLC registration service is one of the best in the US."
      />
    </Link>
  </div>

  {/* Payroll Processing */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Payroll" className="w-full flex justify-center">
      <CardLayouts
        img={img1}
        title="Payroll Processing"
        parah="To ensure timely payments and compliance with all labor laws internationally, we offer top-notch payroll processing, adp workforce, adp run and Paychex payroll services."
      />
    </Link>
  </div>

  {/* ITIN */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Itin" className="w-full flex justify-center">
      <CardLayouts
        img={img2}
        title="ITIN"
        parah="We assist our non-resident US customers with obtaining an Individual Taxpayer Identification Number
                  (ITIN) which is needed to taxfiling US tax returns."
      />
    </Link>
  </div>

  {/* Tax Filing */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Tax" className="w-full flex justify-center">
      <CardLayouts
        img={img3}
        title="Tax Filing"
        parah="With our expertise in preparing and filing tax documents we offer taxact free, turbotax free file, turbo tax free usa service to follow tax regulations and maximize tax benefits."
      />
    </Link>
  </div>

  {/* Financial Reporting */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Financial" className="w-full flex justify-center">
      <CardLayouts
        img={img1}
        title="Financial Reporting"
        parah="Assistance in preparation of financial statements like h&r block file taxes, freshbook cloud
                  accounting and Xero financial statements to understand your business's financial performance."
      />
    </Link>
  </div>

  {/* Business Budgeting */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Bussiness" className="w-full flex justify-center">
      <CardLayouts
        img={img2}
        title="Business Budgeting"
        parah="We help in the creation of customized Xero budgeting and forecasting services and freshbooks budgeting
                  to track your income and expenses, which in turn help in making informed decisions."
      />
    </Link>
  </div>

  {/* Buttons Section */}
  <div className="flex w-full flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5 sm:gap-4 pb-5" data-aos="zoom-in">
     <Link to="/Consultationform">
    <button className="BlueBtn">
      Request Consultation
    </button>
    </Link>
    <button
    onClick={() => window.location.href = 'tel:+16282004141'}
    className="Call-btn">
      Call Us
    </button>
  </div>
</div>
</section>
</>
  );
}
