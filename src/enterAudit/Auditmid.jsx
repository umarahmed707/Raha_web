import React from 'react'
import Insights from '../assets/image/insightscard.png'
import { Link } from 'react-router-dom';
export default function Softwaremid() {
  return (
    <div>
               <div className="w-full h-auto px-4 md:px-20 py-16 bg-cover bg-center rounded-lg~" data-aos="zoom-in"
          style={{
            backgroundImage: `url(${Insights})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
      >
          <div className="text-white text-center" data-aos="zoom-in">
            <h1 className="font-bold text-[32px] md:text-[60px] lg:mx-45 leading-9 lg:leading-15 tracking-[-0.06em]">How Our Audit and Assurance Services Work</h1>
            <p className="mt-4 text-sm md:text-lg">
            At Raha Financials, our talented audit and assurance team is committed to providing quality, independence, and objectivity.
            </p>
          </div>
      
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            
          <div className='Spot' data-aos="zoom-in">
      <div className="SpotCard w-86 h-auto p-4">
        <div className="coloredNum">
          01.
        </div>
        <h2 className="text-xl font-bold my-1" >Planning and Risk Assessment</h2>
        <p className="text-[16px] space-y-1 opacity-90">
        Starting with an initial meeting, we follow a risk-based methodology and assess key risks to the financial statements.
        </p>
      </div>
      </div>
      
      
           <div className='Spot' data-aos="zoom-in">
      <div className="SpotCard w-86 h-auto p-4">
        <div className="coloredNum">
          02.
        </div>
        <h2 className="text-xl font-bold my-1" >Audit Execution</h2>
        <p className="text-[16px] space-y-1 opacity-90">
       We evaluate evidence and perform various tests to assess the adequacy of internal controls.
        </p>
      </div>
      </div>
      <div className='Spot' data-aos="zoom-in">
      <div className="SpotCard w-86 h-auto p-4">
        <div className="coloredNum">
          03.
        </div>
        <h2 className="text-xl font-bold my-1" >Reporting</h2>
        <p className="text-[16px] space-y-1 opacity-90">
       We provide a thorough audit or assurance report on the financial statements Reporting.
        </p>
      </div>
      </div>
      
          </div>
                 <div className="flex  flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5  pb-5" data-aos="zoom-in">
     <Link to="/Consultationform">
    <button className="rounded-lg py-2 border px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto">
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
        <div className='text-center mt-15' data-aos="zoom-in">
                  <h1 className='sm:text-[45px] text-5xl lg:text-[75px] tracking-tighter font-semibold '>Did you find what you were <br /><span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[75px]  tracking-[-0.06em]'>looking for?</span></h1>
                
                <Link to="/Consultationform">
    <button className="rounded-lg py-2 border px-2 sm:py-4 mt-10 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto">
      Request Consultation
    </button>
    </Link>
              </div>
    </div>
  )
}
