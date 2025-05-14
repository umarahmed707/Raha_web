import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom'

export default function Cardsection() {
  
  return (
    <div><div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-center lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
          Why do you need
        </h1>
        <h2 className="text-3xl sm:text-[40px] lg:text-[55px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
          Payroll Processing?
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
          Accurate and timely payroll processing is essential for small businesses to maintain employee trust,
          avoid legal issues, and focus on growth.
        </p>
        <Link to="/Consultationform">
        <button
          className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:border hover:bg-none hover:text-[#1445C2]"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Request Consultation
        </button>
        </Link>
      </div>
    
      
      <div className="flex flex-col w-full lg:w-1/1 gap-6 mb-5 lg:mt-0">
      
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Calculate Payroll"
              parah="Determine gross pay, deductions, and net pay based on hours, rate, and applicable laws."
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Issue Payments"
              parah="Distribute checks or initiate direct deposits securely and on schedule. Maintain payment records."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="File Taxes"
              parah="Withhold and remit income, social security, unemployment, and medicare taxes. File returns on time."
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Maintain Records"
              parah="Securely store employee data, pay stubs, tax forms, and other payroll documents."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
