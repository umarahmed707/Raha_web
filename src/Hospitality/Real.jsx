import React, { useState } from 'react'
import img1 from '../assets/image/Real.jpg'
import { useNavigate } from 'react-router-dom';

export default function Real() {
    const [selected, setSelected] = useState(0); // Start from Page 1
    const totalPages = 8; // Total number of pages
    const navigate = useNavigate();
  
    // Navigate to the next page
    const goToNextPage = () => {
      if (selected < totalPages - 1) {
        setSelected(selected + 1); // Update the state
        navigate(`/Technology`); // Navigate to the next page
      }
    };
    const goToPreviousPage  = () => {
        if (selected < totalPages +1) {
          setSelected(selected + 1); // Update the state
          navigate(`/Retail`); // Navigate to the next page
        }
      };
   


  return (
    <div className='lg:mx-25 p-8 '> 
                  <div className='text-center mb-5 lg:my-10'>
                          <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-semibold '>Real<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Estate</span></h1>
                          
                      </div>
              <div className='bg-repeat-round'>
                <img src={img1} alt="" className='rounded-4xl' />
              </div>
              <h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">Unlock Real Estate Opportunities with Raha Financials</h2>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials is committed to providing comprehensive financial solutions for your real estate business. Whether you are an investor or a developer,
        we have professionals who will take care of your financial processes and needs.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Real estate business is complicated, but with an experienced financial team, you can achieve freedom from financial management stress.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Residential Real Estate</h3>
      <p className="text-lg text-gray-700 mb-6">
        Raha Financials provides services in managing rental properties, tenant screening, rent collection, and property maintenance. Moreover, we excel in
        managing financial issues and providing solutions tailored to your business needs.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Commercial Real Estate</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our experienced team offers real-time assessment of property valuation for investment or sale. We help businesses manage commercial leases, rent
        collection, and tenant disputes. Raha Financials understands your business's needs and offers solutions that will help achieve long-term sustainability
        and prosperity.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Property Development</h3>
      <p className="text-lg text-gray-700 mb-6">
        Every business comes with its own set of challenges, but you don't have to worry when Raha Financials is your partner. We offer help in the acquisition
        of land for development projects. By providing insights on zoning and permits and offering financial support for construction projects, Raha Financials
        fuels your business to reach heights of success.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Real Estate Investment Trusts (REITs)</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our talented professionals have years of experience in the management of real estate businesses and we offer clients advice and insights on REIT
        investments and their tax implications. We also offer REIT portfolio management and ensure compliance with REIT regulations and reporting requirements.
      </p>

      <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Partner with Raha Financials</h4>
      <p className="text-lg text-gray-700 mb-6">
        By partnering with Raha Financials, you can unlock new doors to success and watch your real estate vision become a reality. Contact us today for a free
        consultation and discuss how we can fuel your real estate success.
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
