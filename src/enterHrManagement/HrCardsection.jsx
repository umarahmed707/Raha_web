import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom';

export default function SoftwareCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 mt-5  lg:mx-20  flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-start lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
          Why We Need <span className="text-3xl sm:text-[40px] lg:text-[50px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
         HR Management and Outsourcing?
        </span>
        </h1>
       
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mr-10">
     Effective HR practices are vital for attracting top talent and outsourcing this service can help your business reduce overhead costs. Our talented team offers extraordinary HR services that can surely boost employees' morale.
        </p>
      
          <Link to="/Consultationform">
                     <button className="rounded-lg py-3 px-4 mt-5 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto " data-aos="fade-up"
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
              title="Recruitment and Selection"
              parah="We help in the identification and hiring of qualified candidates."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Employee Onboarding"
              parah="We adjust and welcome new employees and provide necessary training for them."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Payroll and Benefits"
              parah="We carefully manage employee wages and benefits packages."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Performance Management"
              parah="We provide complete employee performance evaluation and feedback."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
