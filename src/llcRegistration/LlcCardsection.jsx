import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom';

export default function LlcCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 lg:mx-20 my-5 flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-center lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
          Why do you need <span className="text-3xl sm:text-[40px] lg:text-[55px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
        LLC Registration?
        </span>
        </h1>
     
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
        Shield your personal finances from business risks. Enjoy potential tax advantages over other business structures. Manage your business with greater flexibility.
        </p>
          <Link to="/Consultationform">
         <button className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 mt-5 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto">
           Request Consultation
         </button>
         </Link>
      </div>
    
      
      <div className="flex flex-col w-full lg:w-1/1 gap-6  lg:mt-0">
      
        <div className="flex flex-col sm:flex-row gap-5" >
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Liability Protection"
              parah="Understand how an LLC safeguards your personal assets."
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Tax Implications"
              parah="Learn about the different tax options available for LLCs."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Operating Agreement"
              parah="Create a legal document outlining ownership and operations."
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="State Requirements"
              parah="Familiarize yourself with your state's LLC formation."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
