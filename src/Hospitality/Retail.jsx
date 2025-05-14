import React, { useState } from 'react'
import img1 from '../assets/image/Retail.jpg'
import { useNavigate } from 'react-router-dom';

export default function Retail() {
   const [selected, setSelected] = useState(0); // Start from Page 1
      const totalPages = 8; // Total number of pages
      const navigate = useNavigate();
    
      // Navigate to the next page
      const goToNextPage = () => {
        if (selected < totalPages - 1) {
          setSelected(selected + 1); // Update the state
          navigate(`/Real`); // Navigate to the next page
        }
      };
      const goToPreviousPage  = () => {
          if (selected < totalPages +1) {
            setSelected(selected + 1); // Update the state
            navigate(`/Hospita`); // Navigate to the next page
          }
        };
  return (
    <div className='lg:mx-25 p-8 '> 
              <div className='text-center mb-5 lg:my-10'>
                      <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-semibold '>Ecommerce and<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Retail</span></h1>
                      
                  </div>
          <div className='bg-repeat-round'>
            <img src={img1} alt="" className='rounded-4xl' />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 my-6">E-commerce Solutions for Growth-Minded Businesses</h2>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials offers solutions to help your e-commerce businesses flourish in a competitive online marketplace. To help your business grow, we
        offer financial services like inventory financing, line of credit, merchant cash advances, profitability analysis, and sales forecasting. Our service
        includes startups, established businesses, and businesses failing to decline in sales.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fashion and Apparel</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials excels in providing fashion and apparel businesses with high-end financial services like management of inventory levels, optimizing
        shipping costs, and ensuring compliance with tax regulations. Our talented team also offers help in managing returns, preventing fraud, and providing
        accurate financial reporting.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Electronics and Gadgets</h3>
      <p className="text-lg text-gray-700 mb-6">
        Electronics and gadgets businesses are really thriving in the e-commerce market. With the right skillset at Raha Financials, we offer solutions for
        inventory management, payment processing, and shipping logistics. Our talented team also offers risk management to protect against fraud and cyber
        threats.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Health and Wellness</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our services for health and wellness businesses are like none other. At Raha Financials, we believe in providing top-level financial solutions for
        your business, including inventory management, payment processing, and shipping logistics. Our experienced professionals can also assist with tax
        compliance, financial reporting, and risk management to ensure compliance with industry regulations and protect against fraud.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Online Marketplace</h3>
      <p className="text-lg text-gray-700 mb-6">
        The challenges of being an online seller and operating an e-commerce store are unmatched. At Raha Financials, we understand how your business needs
        different financial services to ease its operations. We offer financial solutions including inventory management, payment processing, and shipping
        logistics. We can also help with tax compliance, financial reporting, and risk management.
      </p>

      <h4 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Partner with Raha Financials</h4>
      <p className="text-lg text-gray-700 mb-6">
        To achieve financial success, partner with Raha Financials and let us take care of your financial needs. Contact us today and let’s create a plan for
        your success.
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
