import React, { useState } from 'react'
import img1 from'../assets/image/Technology.jpg'
import { useNavigate } from 'react-router-dom';

export default function Technology() {
    const [selected, setSelected] = useState(0); // Start from Page 1
    const totalPages = 8; // Total number of pages
    const navigate = useNavigate();
  
    // Navigate to the next page
    const goToNextPage = () => {
      if (selected < totalPages - 1) {
        setSelected(selected + 1); // Update the state
        navigate(`/Healthcare`); // Navigate to the next page
      }
    };
    const goToPreviousPage  = () => {
        if (selected < totalPages +1) {
          setSelected(selected + 1); // Update the state
          navigate(`/Real`); // Navigate to the next page
        }
      };
   
  return (
    <div className=" lg:mx-25 p-8 ">
              <div className='text-center mb-5 lg:my-10'>
                     <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-semibold '>Technology and <span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Startups</span></h1>
                     
                 </div>
         <div className='bg-repeat-round'>
           <img src={img1} alt="" className='rounded-4xl' />
         </div>
         <h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">Raha Financials: Your Tech Startup Financial Partner</h2>
      <p className="text-lg text-gray-700 mb-6">
        It is no secret that startups and the technology industry face a unique set of challenges as well as exciting opportunities. Raha Financials offers
        solutions that can help you navigate the financial landscape, from securing funding to managing growth and ensuring compliance.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">AI and Machine Learning</h3>
      <p className="text-lg text-gray-700 mb-6">
        At Raha Financials, our team has exclusive experience with artificial intelligence and machine learning technologies. We can help you secure funding for
        your AI research and development projects while protecting your AI algorithms and models. By offering an overview of potential revenue streams for your
        startup, we can assist with financial planning.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cloud Computing</h3>
      <p className="text-lg text-gray-700 mb-6">
        At Raha Financials, we understand that investing in cloud infrastructure can be costly, that's why we can help you secure funding. By offering customer
        acquisition strategies and predicting your revenue streams and expenses, we can help you with financial forecasting.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cybersecurity</h3>
      <p className="text-lg text-gray-700 mb-6">
        Nowadays it is necessary for any business to make sure it is secure as cybersecurity is a real threat. There are several well-known cybersecurity
        companies helping people stay safe, and if you are one of them, you are at the right place. We have something to offer which will help you. Our
        experienced professionals will help your tech company manage its finances. We offer HR services, tax returns, and financial forecasting.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Internet of Things (IoT)</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials has a team of experienced professionals who will help you in securing funds for product development. We offer IP protection and financial
        planning for your IoT products. Contact us today at Raha Consultation for a free consultation and discuss how we can fuel your success.
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
