import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom';

export default function SoftwareCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 lg:mx-20 mb-10 flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-start mx-3 lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
         Why You Need <span className="text-3xl sm:text-[40px] lg:text-[50px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
         Business Payment Collection Services
        </span>
        </h1>
       
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mr-10">
         To maintain a healthy cashflow and achieve financial stability , your business needs a proper payment collection system. Our experts at Raha Financials offer complete support.
        </p>
     <Link to="/Consultationform">
    <button className="rounded-lg py-3 px-4 sm:py-4 mt-5 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto">
      Request Consultation
    </button>
    </Link>
      </div>
    
      
      <div className="flex flex-col w-full lg:w-1/1 gap-6  lg:mt-0">
      
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Invoicing"
              parah="Accurate invoices are issued accurately with precise details about payment."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Payment Generation"
              parah="We offer clients different payment options such as credit cards, checks, ACH transfers, etc."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Collection Software"
              parah="We recommend automated collection systems like XERO and QuickBooks to automate tasks such as sending reminders, tracking payments, and generating reports."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Debt collection laws"
              parah="We follow all relevant debt collection laws and regulations to collect payments."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
