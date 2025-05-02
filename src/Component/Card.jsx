import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="flex flex-wrap justify-center gap-5 mt-5 mx-5">
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img1}
          title="Bookkeeping"
          parah="This is the foundation of good financial management, tracking income and expenses."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img2}
          title="Software Selection and Setup"
          parah="Choosing and implementing accounting software that meets the specific needs of the business."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img3}
          title="LLC Registration"
          parah="Creates a limited liability company, separating your personal assets from business ones. Protects you financially."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img1}
          title="Payroll Processing"
          parah="Calculating and distributing salaries and wages to employees, withholding and paying payroll taxes."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img2}
          title="ITIN"
          parah="Assigned by the IRS for non-SSN holders who need to file US tax returns or open financial accounts."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img3}
          title="Tax Filing"
          parah="Ensures your business complies with tax regulations and maximizes deductions to minimize tax liability."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img1}
          title="Financial Reporting"
          parah="Drafting reports like income statements and balance sheets to understand the financial health of the business."
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img2}
          title="Business Budgeting"
          parah="Creating a spending plan for the business based on projected income and expenses."
        />
      </div>

      <div className="flex w-full flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5 sm:gap-4 pb-5" data-aos="zoom-in">
        <button className="rounded-lg py-2 px-2 sm:py-2 sm:px-6 text-xs sm:text-sm text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2] w-[48%] sm:w-auto">
          Request Consultation
        </button>
        <button className="border-2 text-xs sm:text-sm rounded-lg py-1 sm:py-2 sm:px-2 text-[#1445C2] w-[30%] sm:w-[10%]">
          Call Us
        </button>
      </div>
    </div>
  );
}
