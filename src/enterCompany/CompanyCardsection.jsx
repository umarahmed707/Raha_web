import React from 'react'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import CardLayouts from '../Layouts/CardLayouts';
import { Link } from 'react-router-dom';

export default function SoftwareCardsection() {
  return (
    <div><div className="mx-4 sm:mx-10 lg:mx-20 lg:my-15 flex flex-col lg:flex-row justify-between gap-10">
     
      <div className="text-start ml-5 mt-5 lg:text-left w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="text-[40px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] lg:leading-tight leading-9">
         Why <span className="text-4xl sm:text-[40px] lg:text-[50px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
      Restructuring is Necessary
        </span>
        </h1>
       
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mr-10">
      To help any business cope with losses and rise again, we offer a complete company restructuring service to reposition it for long-term success.
        </p>
     
             <Link to="/Consultationform">
    <button className="rounded-lg py-3 px-4 sm:py-4 mt-5 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto"
    data-aos="fade-up"
          data-aos-delay="700">
      Request Consultation
    </button>
    </Link>
      </div>
    
      
      <div className="flex flex-col w-full mb-5 lg:w-1/1 gap-6  lg:mt-0">
      
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Assessment and Diagnosis"
              parah="Evaluating the financial health and operational efficiency of your business."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img2}
              title="Strategy Development"
              parah="To address any underlying issue, we offer a complete plan."
            />
          </div>
        </div>
    
    
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img3}
              title="Implementation"
              parah="We help in the implementation of the plan and assist in any required changes to operations, finances, or organizational structure."
            />
          </div>
          <div className="w-full sm:w-1/1 flex justify-center" data-aos="fade-up">
            <CardLayouts
              img={img4}
              title="Monitoring and Evaluation"
              parah="We closely monitor all changes and make adjustments accordingly."
            />
          </div>
        </div>
      </div>
    </div></div>
  )
}
