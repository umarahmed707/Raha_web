import React, { useState } from 'react'
import img1 from '../assets/image/Farming.jpg'
import { useNavigate } from 'react-router-dom';

export default function Agriculture() {
    const [selected, setSelected] = useState(0); // Start from Page 1
         const totalPages = 8; // Total number of pages
         const navigate = useNavigate();
       
         // Navigate to the next page
         const goToNextPage = () => {
           if (selected < totalPages - 1) {
             setSelected(selected + 1); // Update the state
             navigate(`/Construction`); // Navigate to the next page
           }
         };
         const goToPreviousPage  = () => {
             if (selected < totalPages +1) {
               setSelected(selected + 1); // Update the state
               navigate(`/Energy`); // Navigate to the next page
             }
           };
  return (
    <div> <div className='lg:mx-25 p-8 '> 
                  <div className='text-center mb-5 lg:my-10'>
                          <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-semibold '>Agriculture and <span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Farming</span></h1>
                          
                      </div>
              <div className='bg-repeat-round'>
                <img src={img1} alt="" className='rounded-4xl' />
              </div>
              <h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">Cultivate Your Farming Success with Raha Financials</h2>
      <p className="text-lg text-gray-700 mb-6">
        Farming and agriculture businesses come with their own set of financial needs. At Raha Financials, our talented team works closely with you to provide
        services designed to help you sow the seeds for a prosperous future. Our team will ensure your business's success in various sectors.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Crop Production</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our team understands the ups and downs of the crop production business, and we are always ready with solutions. From operational costs to seasonal
        financing, we offer a complete package. Our team helps farmers on all scales, from purchasing seeds, fertilizers, and equipment to providing seasonal
        loans.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Livestock Farming</h3>
      <p className="text-lg text-gray-700 mb-6">
        Keeping livestock farm animals is not for the faint-hearted, but our team can offer financing solutions during tough times. We assist with accessing
        funding for the construction of livestock facilities, purchasing livestock equipment, and managing overall working capital.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Agribusiness</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials provides services for agribusinesses, such as food processing plants, agricultural supply companies, and agricultural technology firms.
        Our team offers support for your business by helping with finance management, tax returns, and audits.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Sustainable Agriculture</h3>
      <p className="text-lg text-gray-700 mb-6">
        While sustainable agriculture is comparatively new, our experience in providing support for such projects goes way back. We have expertise in preparing
        loan applications, tax returns, financial reports, and audits. We offer support in the development of sustainable agriculture technologies by helping
        you secure investors and funding.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Trust us at Raha Financials, as we have hundreds of happy customers. With years of experience in the finance business, we are ready to be your proud
        new partners.
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
              </div></div>
  )
}
