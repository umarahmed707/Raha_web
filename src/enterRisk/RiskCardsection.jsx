import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom'

export default function SoftwareCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 lg:mx-20 lg:my-15 flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-start lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
          Why do you need <span className="text-3xl sm:text-[40px] lg:text-[50px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
         Risk Advisory?
        </span>
        </h1>
       
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mr-10">
        Allocate resources effectively based on projected income and expenses. Make informed business decisions based on financial projections. Identify potential financial challenges and develop mitigation strategies.
        </p>
    
             <Link to="/Consultationform">
    <button className="rounded-lg py-3 px-4 sm:py-4 mt-5 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto" 
       data-aos="fade-up"
          data-aos-delay="700">
      Request Consultation
    </button>
    </Link>
      </div>
    
      
      <div className="flex flex-col w-full lg:w-1/1 gap-6 mb-5 lg:mt-0">
      
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Data Analysis"
              parah="Gather and analyze historical financial data Data Analysis."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Revenue Forecasting"
              parah="Estimate future sales and income Revenue Forecasting."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Expense Budgeting"
              parah="Project operational costs and expenses Expense Budgeting."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Scenario Planning"
              parah="Develop multiple budget scenarios to address uncertainties ."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
