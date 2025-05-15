import React, { useState } from 'react'
import img1 from '../assets/image/Healthcare.jpg'
import { useNavigate } from 'react-router-dom';

export default function Healthcare() {
   const [selected, setSelected] = useState(0); // Start from Page 1
      const totalPages = 8; // Total number of pages
      const navigate = useNavigate();
    
      // Navigate to the next page
      const goToNextPage = () => {
        if (selected < totalPages - 1) {
          setSelected(selected + 1); // Update the state
          navigate(`/Energy`); // Navigate to the next page
        }
      };
      const goToPreviousPage  = () => {
          if (selected < totalPages +1) {
            setSelected(selected + 1); // Update the state
            navigate(`/Technology`); // Navigate to the next page
          }
        };
  return (
    <div className='lg:mx-25 p-8 '> 
    <div className='text-center mb-5 lg:my-10'>
            <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-bold '>Healthcare and<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Medical Services</span></h1>
            
        </div>
<div className='bg-repeat-round'>
  <img src={img1} alt="" className='rounded-4xl' />
</div>
<h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">Raha Financials: Your Partner in Healthcare Financial Solutions</h2>
      <p className="text-lg text-gray-700 mb-6">
        At Raha Financials, we understand how challenging it is to run a healthcare practice in today's world. Healthcare providers are facing a new set of rules
        and financial challenges every day. But Raha Financials is here to take care of all of your financial challenges.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Hospitals</h3>
      <p className="text-lg text-gray-700 mb-6">
        Running hospitals can be hard when one isn't a pro in finance management, but now Raha Financials can help your hospital with revenue cycle management by
        streamlining patient billing, insurance claims, cost management, providing timely financial reports, payment collections, and minimizing tax liabilities.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Clinics</h3>
      <p className="text-lg text-gray-700 mb-6">
        Running a clinic requires constant attention and service. Raha Financials is here to take care of your clinic's financial stress. Partner with us, and we will
        help you with billing and insurance claims. We excel at optimizing expenses related to staffing, compliance with healthcare regulations, supplies, and
        overhead costs.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Dental Practices</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our financial experts will take care of your revenue cycle management by streamlining patient billing and insurance claims. We know how challenging it is to
        manage expenses and make accurate financial reports. That's why we take care of your practice cost management by optimizing expenses related to dental
        equipment, supplies, and staffing.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Veterinary Clinics</h3>
      <p className="text-lg text-gray-700 mb-6">
        We will help your veterinary clinics work at their full potential to save precious animals by managing patient billing and insurance claims. We also offer
        accurate and timely financial statements and help in cost management.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        By leveraging Raha Financials' expertise, these healthcare providers can improve their financial efficiency, reduce costs, and enhance patient care.
      </p>
    <div className="flex justify-between w-full ">
      {/* Previous Button */}
      <button
        onClick={goToPreviousPage}
        
        className="border text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-full sm:w-auto md:w-auto lg:w-auto"
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextPage}
        disabled={selected === totalPages - 1}
        className="border text-[#1445C2]  text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b px-4 from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-full sm:w-auto md:w-auto lg:w-auto"
      >
        Next
      </button>
    </div>
</div>
  )
}
