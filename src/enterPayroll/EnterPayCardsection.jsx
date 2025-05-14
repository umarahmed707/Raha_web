import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom'

export default function SoftwareCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 lg:mx-20 my-10 flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-start ml-5 lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
          Why Payroll Advisory by <span className="text-3xl sm:text-[40px] lg:text-[50px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
          Raha Financials?
        </span>
        </h1>
       
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mr-10">
          At Raha Financials, we have a team of adp run payroll experts, quicken payroll experts, oracle payroll experts, and intuit payroll experts. These professionals help us to make sure your business is operating at its full potential.
        </p>
   
          <Link to="/Consultationform">
    <button className="rounded-lg py-3 px-4 mt-5 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto"  data-aos="fade-up"
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
              title="Payroll Assessment"
              parah="It includes assessing your current payroll practices like its systems, processes, and compliance status."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Payroll Analysis"
              parah="Identification of areas for improvement like risks or inefficiencies."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Processing Recommendations"
              parah="It includes process improvements, system upgrades, or changes to payroll policies."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Implementation"
              parah="Implementation
Implementation of the recommended changes, offering guidance efficiently processing payrolls."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
