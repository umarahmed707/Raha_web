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
<div className= "text-center " data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-[40px] lg:mx-75 sm:text-[60px] lg:text-[65px] font-semibold tracking-[-0.06em] leading-[40px] lg:leading-[50px]">
            Our Suite of Business and
             Accounting Solutions
          </h1>
          <p className="text-[16px] sm:text-[19px] mt-5 mx-15">
            Full-service accounting solutions for enterprises and small businesses.
            <br /> Tax, bookkeeping, payroll, and more.
          </p>
        </div>
<div className="flex flex-wrap justify-center gap-5 mt-5 mx-5" >

  {/* Bookkeeping Card */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Book" className="w-full flex justify-center">
      <CardLayouts
        img={img1}
        title="Bookkeeping"
        parah="This is the foundation of good financial management, tracking income and expenses."
      />
    </Link>
  </div>

  {/* Software Selection Card */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Software" className="w-full flex justify-center">
      <CardLayouts
        img={img2}
        title="Software Selection and Setup"
        parah="Choosing and implementing accounting software that meets the specific needs of the business."
      />
    </Link>
  </div>

  {/* LLC Registration */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/LLC" className="w-full flex justify-center">
      <CardLayouts
        img={img3}
        title="LLC Registration"
        parah="Creates a limited liability company, separating your personal assets from business ones. Protects you financially."
      />
    </Link>
  </div>

  {/* Payroll Processing */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Payroll" className="w-full flex justify-center">
      <CardLayouts
        img={img1}
        title="Payroll Processing"
        parah="Calculating and distributing salaries and wages to employees, withholding and paying payroll taxes."
      />
    </Link>
  </div>

  {/* ITIN */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Itin" className="w-full flex justify-center">
      <CardLayouts
        img={img2}
        title="ITIN"
        parah="Assigned by the IRS for non-SSN holders who need to file US tax returns or open financial accounts."
      />
    </Link>
  </div>

  {/* Tax Filing */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Tax" className="w-full flex justify-center">
      <CardLayouts
        img={img3}
        title="Tax Filing"
        parah="Ensures your business complies with tax regulations and maximizes deductions to minimize tax liability."
      />
    </Link>
  </div>

  {/* Financial Reporting */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Financial" className="w-full flex justify-center">
      <CardLayouts
        img={img1}
        title="Financial Reporting"
        parah="Drafting reports like income statements and balance sheets to understand the financial health of the business."
      />
    </Link>
  </div>

  {/* Business Budgeting */}
  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
    <Link to="/Bussiness" className="w-full flex justify-center">
      <CardLayouts
        img={img2}
        title="Business Budgeting"
        parah="Creating a spending plan for the business based on projected income and expenses."
      />
    </Link>
  </div>

  {/* Buttons Section */}
  <div className="flex w-full flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5 sm:gap-4 pb-5" data-aos="zoom-in">
     <Link to="/Consultationform">
    <button className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-[auto] sm:w-auto">
      Request Consultation
    </button>
    </Link>
    <button
    onClick={() => window.location.href = 'tel:+16282004141'}
    className="border text-[#1445C2] text-xs sm:text-[18px] rounded-lg py-1 sm:py-4 sm:px-4 bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#587EDB] hover:to-[#1445C2] hover:text-white w-[30%] sm:w-[10%]">
      Call Us
    </button>
  </div>
</div>
</section>
</>
  );
}
