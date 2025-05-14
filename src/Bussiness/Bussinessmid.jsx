import React, { useEffect } from 'react'
import Insights from '../assets/image/insightscard.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Bussinessmid() {
        useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
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
            <h1 className="font-bold text-[32px] md:text-[60px] tracking-[-0.06em]">How does it work?</h1>
            <p className="mt-4 text-sm md:text-lg">
            We assist in creating comprehensive budgets tailored to your business needs.
            </p>
          </div>
      
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            
          <div className='Spot'data-aos="zoom-in" data-aos-delay="0">
      <div className="SpotCard w-87 lg:w-90 h-auto p-4">
        <div className="coloredNum">
          01.
        </div>
        <h2 className="text-xl font-bold my-1" >Financial Data Analysis</h2>
        <p className="text-[16px] space-y-1 opacity-90">
        Review past financial performance to establish a baseline.
        </p>
      </div>
      </div>
      
      
           <div className='Spot' data-aos="zoom-in" data-aos-delay="100">
      <div className="SpotCard w-87 lg:w-90 h-auto p-4">
        <div className="coloredNum">
          02.
        </div>
        <h2 className="text-lg font-bold my-1">Budget Creation</h2>
        <p className="text-[16px] space-y-1 opacity-90">
        Develop a detailed budget outlining income and expenses.
        </p>
      </div>
      </div>
      <div className='Spot' data-aos="zoom-in" data-aos-delay="200">
      <div className="SpotCard w-87 lg:w-90 h-auto  p-4">
        <div className="coloredNum">
          03.
        </div>
        <h2 className="text-lg font-bold my-1">Monitoring and Adjustments</h2>
        <p className="text-[16px] space-y-1 opacity-90">
        Track actual performance against the budget and make necessary changes.
        </p>
      </div>
      </div>
      
          </div>
                 <div className="flex  flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5  pb-5" data-aos="zoom-in">
             <Link to="/Consultationform">
            <button className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto">
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
       <div className="text-center mt-25" data-aos="fade-up" data-aos-delay="200">
  <h1 className="sm:text-[45px] text-5xl lg:text-[75px] tracking-tighter font-semibold">
    Did you find what you were <br />
    <span className="bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[75px] tracking-[-0.06em]">
      looking for?
    </span>
  </h1>
  <p className="mt-3" data-aos="fade-up" data-aos-delay="400">
    Calculating and distributing salaries and wages to employees,
    <br /> withholding and paying payroll taxes.
  </p>
  <Link to="/Consultationform">
    <button
      className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:border hover:bg-none hover:text-[#1445C2]"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      Request Consultation
    </button>
  </Link>
</div>

    </div>
  )
}
