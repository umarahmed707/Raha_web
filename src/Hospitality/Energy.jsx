import React, { useState } from 'react' 
import img1 from '../assets/image/Energy.jpg'
import { useNavigate } from 'react-router-dom';

export default function Energy() {
   const [selected, setSelected] = useState(0); // Start from Page 1
        const totalPages = 8; // Total number of pages
        const navigate = useNavigate();
      
        // Navigate to the next page
        const goToNextPage = () => {
          if (selected < totalPages - 1) {
            setSelected(selected + 1); // Update the state
            navigate(`/Agriculture`); // Navigate to the next page
          }
        };
        const goToPreviousPage  = () => {
            if (selected < totalPages +1) {
              setSelected(selected + 1); // Update the state
              navigate(`/Healthcare`); // Navigate to the next page
            }
          };
  return (
    <div className='lg:mx-25 p-8 '> 
                  <div className='text-center mb-5 lg:my-10'>
                          <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-semibold '>Energy and<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Utilities</span></h1>
                          
                      </div>
              <div className='bg-repeat-round'>
                <img src={img1} alt="" className='rounded-4xl' />
              </div>
              <h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">Raha Financials: Empowering the Energy and Utilities Sector</h2>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials plays a pivotal role in your business success by supporting the growth and development of the energy and utilities sector.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Renewable Energy</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials offers services for renewable energy projects like funding for the construction of solar farms, wind turbines, and hydroelectric plants.
        Our experienced team can help your business manage its day-to-day operations and meet short-term financial needs. We also offer assistance in securing
        loans for the expansion of your business.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Oil and Gas Industry</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials helps businesses in the oil and gas industry by providing funding sources for oil and gas exploration and production activities, including
        seismic surveys, drilling, and well development. Our team also supports you in upgrading existing infrastructure, improving operational efficiency, and
        reducing environmental impact.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Utility Providers</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials provides solutions for people in the utility business. By offering funding solutions for the construction and upgrade of utility
        infrastructure, such as power plants, transmission lines, and distribution networks. We also assist utility providers in meeting regulatory requirements
        related to environmental protection, energy efficiency, and customer service.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Sustainable Technology</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials offers a wide range of services for the energy sector. We provide support for the development of innovative sustainable technologies and
        offer financial solutions to early-stage sustainable technology companies with high growth potential. Our team is skilled in helping companies
        commercialize their sustainable technology products.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        By offering a comprehensive range of financial solutions, Raha Financials can help energy and utilities companies navigate the challenges and
        opportunities of the sector, drive sustainable growth, and contribute to a more resilient and environmentally friendly energy future.
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
