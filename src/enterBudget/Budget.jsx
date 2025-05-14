import React, { useState } from 'react'
import Calculate from '../assets/image/interprise.png'
import Homeform from '../Home1/Homeform';
import BudgetCardsection from './BudgetCardsection';
import Budgetmid from './Budgetmid';
import { Link } from 'react-router-dom';
import DemoModal from '../Modelfile/DemoModel';


export default function Software() {
     const [showModal, setShowModal] = useState(false);
  return (
    <div className='overflow-hidden'>
       <div className='text-center mt-10 mx-5' data-aos="fade-up">
                  <h1 className='sm:text-[60px] text-5xl lg:text-[85px] tracking-tighter font-semibold '><span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[85px]  tracking-[-0.06em]'>Budget</span> Forecasting</h1>
                  <p className='mt-3 lg:mx-65'>Budget forecasting is the process of estimating future income and expenses.
                  </p>
              </div>
          
     
         <div>
                    
    <div className="flex justify-center mt-5 z-15">
        <button
          onClick={() => setShowModal(true)}
          className="py-3 px-4 sm:py-4 sm:px-6 text-xs sm:text-[18px] border bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border text-white rounded-lg"
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
                   <section>
                         <img
                         data-aos="fade-up"
                           src={Calculate}
                           alt=""
                           className="w-[1150px] h-auto my-10 lg:mx-25 md:flex justify-center hidden "
                         />
                       </section>      
      
      

     <BudgetCardsection/>
 
      <Budgetmid/>
            <Homeform/>
          
          </div>
      
      
    
    </div>
  )
}
