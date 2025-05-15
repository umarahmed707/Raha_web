import React, { useState } from 'react'
import img1 from '../assets/image/Construction.jpg'
import { useNavigate } from 'react-router-dom';

export default function Construction() {
    const [selected, setSelected] = useState(0); // Start from Page 1
         const totalPages = 8; // Total number of pages
         const navigate = useNavigate();
       
         // Navigate to the next page
         const goToNextPage = () => {
           if (selected < totalPages - 1) {
             setSelected(selected + 1); // Update the state
             navigate(`/Hospita`); // Navigate to the next page
           }
         };
         const goToPreviousPage  = () => {
             if (selected < totalPages +1) {
               setSelected(selected + 1); // Update the state
               navigate(`/Agriculture`); // Navigate to the next page
             }
           };
  return (
    <div className='lg:mx-25 p-8 '> 
    <div className='text-center mb-5 lg:my-10'>
            <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-bold '>Construction and <span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'>Infrastructure</span></h1>
            
        </div>
<div className='bg-repeat-round'>
  <img src={img1} alt="" className='rounded-4xl' />
</div>
<h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">
        Build a Solid Foundation with Raha Financials' Construction Expertise
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financial's infamous team provides comprehensive planning and completes your job with total dedication. The construction business is complex, with
        a wide range of projects. Whether it is a project related to general construction or complex engineering management, our team is here to take care of
        everything for you. Raha Financials takes care of all your financial needs from finance management to HR and audit.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Residential Construction</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials knows how difficult it is for construction companies to manage everything, hence why we offer financing solutions for residential
        development projects. These projects can include construction of apartments, condominiums, and single-family homes. We can help you with Profitability
        Analysis, Cash Flow Management, and Financial Forecasting.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Commercial Construction</h3>
      <p className="text-lg text-gray-700 mb-6">
        Commercial Construction projects include complex financial landscapes and need detailed budgeting, resource allocation, and risk management. Raha
        Financials can help your business by optimizing its budgets, managing cash flow, and mitigating risks or changes in market conditions.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Infrastructure Development</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials offers wide financial support for construction management firms, design-build firms, and PPP projects involving both public and private
        sectors. With this diverse range of financial solutions, we help construction and infrastructure companies in the management of their finances and achieve
        their goals.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Engineering Services</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials understands the importance of engineering services in the construction industry. We will help you in the development of detailed
        financial plans, cost estimation, and assist you in enforcing contingency plans to handle unexpected events and minimize economic losses.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        By choosing us as your financial partners, rest assured that all your financial troubles will be the talk of the past. We help your construction company
        achieve freedom from finance management stress. Contact us today for a free consultation and discuss how we can fuel your construction business’s success.
      </p>
      <div className="pagination flex justify-between">
        <button
          onClick={goToPreviousPage}
          
          className="previous-button border text-[#1445C2] p-2 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-full sm:w-auto md:w-auto lg:w-auto"
        >
          Previous
        </button>

        <button
          onClick={goToNextPage}
          disabled={selected === totalPages - 1}
          className="next-button border text-[#1445C2] p-2 px-4 text-[16px] sm:text-[18px] md:text-[20px] rounded-lg bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:text-white hover:to-[#587EDB] w-full sm:w-auto md:w-auto lg:w-auto"
        >
          Next
        </button>
      </div>
</div>
  )
}
