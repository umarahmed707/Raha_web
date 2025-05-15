
import { Link } from 'react-router-dom';
import About from '../assets/image/About.png'
import CardLayouts from '../Layouts/CardLayouts';
import img1 from '../assets/image/Group1.png';
import img2 from '../assets/image/Group 2.svg';
import img3 from '../assets/image/Group3.svg';
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Homeform from '../Home1/Homeform';
import DemoModal from '../Modelfile/DemoModel';


export default function AboutUs() {
   const [counterKey, setCounterKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const section = document.getElementById("stats-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCounterKey((prev) => prev + 1); // re-trigger CountUp
          AOS.refresh();
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

     const [showModal, setShowModal] = useState(false);
      
  return (
   
    <div className='overflow-hidden' >
       <div data-aos="fade-up">
      <div className='text-center mt-10 ' >
        <h1 className='sm:text-[60px] text-5xl lg:text-[85px] tracking-tighter font-semibold '><span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[85px]  tracking-[-0.06em]'>About</span> us</h1>
        <p className='mt-3 lg:mx-90'>Raha Financial’s payroll advisory service provides top-notch services with quickbooks enhanced payroll and adp payroll.
        </p>
      </div>


            <div className="p-6" >
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-gradient-to-b lg:ml-145 mb-5 from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border text-white rounded-lg"
      >
      Book A Demo
      </button>

      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
               <section data-aos="fade-up">
                <img src={About} alt="" className="w-[1250px] h-auto  lg:my-10 lg:pl-25" />
              </section>
              </div>
   <div className='text-center lg:my-20 my-8' data-aos="fade-up">
        <h1 className='sm:text-[60px] text-5xl lg:text-[85px] tracking-tighter font-semibold '>Value we bring to you</h1>
        <p className='mt-3 lg:mx-90'>With RAHA Financials as your partner, outsourced accounting becomes a strategic asset for your business. Our three-step approach ensures that your financial management is personalized, streamlined, and empowered by actionable insights.
        </p>
      </div>

              <div className="flex flex-wrap justify-center gap-5 mt-5 mx-5">
                <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
                
                      <CardLayouts
                        img={img1}
                        title="Personalized Consultation"
                        parah="Your journey with RAHA Financials begins with a deep dive into your business’s unique financial landscape. We start by understanding your goals, challenges, and specific requirements."
                      />
                   
                  </div>
                
                  {/* Software Selection Card */}
                  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
                    
                      <CardLayouts
                        img={img2}
                        title="Streamlined Financial Management"
                        parah="Once we have a clear picture of your needs, our team gets to work. We employ cutting-edge accounting software to streamline processes and ensure data accuracy."
                      />
                   
                  </div>
                
                  {/* LLC Registration */}
                  <div className="w-full sm:w-1/3 md:w-1/4 flex justify-center" data-aos="fade-up">
                   
                      <CardLayouts
                        img={img3}
                        title="Strategic Insights and Support"
                        parah="We provide comprehensive reports that empower you to make informed business decisions and drive growth. RAHA Financials goes beyond number-crunching."
                      />
                    
                  </div>
              </div>
                <div className="flex w-full flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5 sm:gap-4 pb-5" data-aos="zoom-in">
                   <Link to="/Consultationform">
                  <button className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-[auto] sm:w-auto">
                    Request Consultation
                  </button>
                  </Link>
                  <button
                  onClick={() => window.location.href = 'tel:+16282004141'}
                  className="border text-[#1445C2] text-xs sm:text-[18px] rounded-lg py-1 sm:py-4 sm:px-4 bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#587EDB] hover:to-[#1445C2] hover:text-white w-[30%] sm:w-[10%]">
                    Call Us
                  </button>
                </div>


     <div className="px-4 py-[80px] md:p-[100px]">
      <section
        id="stats-section"
        className="flex flex-col px-4 md:px-[70px] items-center gap-[50px] w-full"
      >
        <span
          className="font48500 text-center font-semibold text-lg md:text-6xl"
          data-aos="fade-up"
        >
          High quality for affordable price
        </span>

        <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-6 md:gap-0 w-full">
          {/* Stat 1 */}
          <div className="border-box flex flex-col items-center gap-[20px] flex-1" data-aos="fade-up" data-aos-delay="100">
             <span className="font16500">DELIVERING OVER</span>
            <span className="font48500 text-5xl font-semibold">
              <CountUp key={counterKey + "-1"} end={10500} separator="," duration={2} />+
            </span>
            <div className="flex justify-center items-center gap-[10px] opacity-[0.5]">
              
              <span className="font16500">Accounting and Financial Strategies</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="border-box flex flex-col items-center gap-[20px] flex-1" data-aos="fade-up" data-aos-delay="200">
           <span className="font16500">MANAGING PAYROLL FOR</span>
            <span className="font48500 text-5xl font-semibold">
              <CountUp key={counterKey + "-2"} end={7450} separator="," duration={2} />+
            </span>
            <div className="flex justify-center items-center gap-[10px] opacity-[0.5]">
            
              <span className="font16500">Employee Workforce</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="border-box flex flex-col items-center gap-[20px] flex-1" data-aos="fade-up" data-aos-delay="300">
           <span className="font16500">AVERAGE DECREASE OF</span>
            <span className="font48500 text-5xl font-semibold">
              <CountUp key={counterKey + "-3"} end={184} duration={2} />+
            </span>
            <div className="flex justify-center items-center gap-[10px] opacity-[0.5]">
             
              <span className="font16500">On Operating Expenses</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="NumberDiv flex flex-col items-center gap-[20px] flex-1" data-aos="fade-up" data-aos-delay="400">
            <span className="font16500">SERVICING CLIENTS IN</span>
            <span className="font48500 text-5xl font-semibold">
              <CountUp key={counterKey + "-4"} end={1000} duration={2} />+
            </span>
            <div className="flex justify-center items-center gap-[10px] opacity-[0.5]">

              <span className="font16500">Different Sectors</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Homeform/>
        </div>

  )
}
