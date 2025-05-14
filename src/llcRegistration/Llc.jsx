import React, { useEffect, useState } from 'react'

import Calculate from '../assets/image/Calculate.svg'

import Homeform from '../Home1/Homeform';
import LlcCardsection from './LlcCardsection';
import Llcmid from './Llcmid';
import { Link } from 'react-router-dom';
import DemoModal from '../Modelfile/DemoModel';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Llc() {
      useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
    const [showModal, setShowModal] = useState(false);
  return (
    <div className='overflow-hidden'>
   
   
       <div className='text-center items-center my-10'  data-aos="fade-up">
                  <h1 className='sm:text-[60px] text-5xl lg:text-[95px] tracking-tighter font-semibold '><span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px]  tracking-[-0.06em]'>LLC</span> Registration</h1>
                  <p className='mt-3 mx-2'>An LLC is a legal business structure that offers liability protection and tax flexibility.
                  </p>
              </div>
          

    <div className="flex justify-center gap-5 lg:my-5">
      <div>
        <Link to="/Consultationform">
          <button
            className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto"
            data-aos="fade-up" // Apply fade-up animation on scroll
            data-aos-duration="1000" // Customize the duration of the animation
          >
            Request Consultation
          </button>
        </Link>
      </div>

      <div className="flex justify-center z-15">
        <button
          onClick={() => setShowModal(true)}
          className="py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] border bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border text-white rounded-lg"
          data-aos="fade-up" // Apply fade-up animation to this button as well
          data-aos-duration="1000"
        >
          Book A Demo
        </button>

        {/* Full-screen modal */}
        {showModal && (
          <div
            className="fixed inset-0  flex justify-center items-center z-50" // Full screen overlay
            onClick={() => setShowModal(false)} // Close modal when clicking outside
          >
            <div
              className="bg-white w-full h-full sm:w-10/12 sm:h-10/12 md:w-8/12 md:h-8/12 lg:w-6/12 lg:h-6/12 xl:w-5/12 xl:h-5/12 p-6 overflow-auto rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
            >
              <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
            
            <form action="">
        <div className="flex flex-col md:flex-row gap-5 w-full justify-center p-5 "  data-aos="fade-up">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="bg-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1445C2] w-full md:w-64"
            required 
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            className="bg-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1445C2] w-full md:w-64"
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="bg-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1445C2] w-full md:w-64"
            required 
          />
          <button 
            className="text-white font-bold p-4 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:bg-transparent hover:text-[#1445C2] hover:border-[#1445C2] transition duration-300 w-full md:w-auto"
          >
            Book Appointment
          </button>
        </div>
      </form>
      
    
              <section>
        <img src={Calculate} alt="" className="w-full h-auto lg:mt-10 pr-10"  data-aos="fade-up" />
      </section>
     
     

     <LlcCardsection/>
 
      <Llcmid/>
            <Homeform/>
          
          
      
      
    
    </div>
  )
}
