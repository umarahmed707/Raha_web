import React, { useState } from 'react';
import img1 from '../assets/image/Hospitality.jpg'
import { useNavigate } from 'react-router-dom';

const Hospita = () => {
  const [selected, setSelected] = useState(0); // Current page (starts from Page 1)
  const totalPages = 8; // Total pages
  const navigate = useNavigate();

  // Navigate to the next page
  const goToNextPage = () => {
    if (selected < totalPages - 1) {
      // Update the state first and then navigate
      const nextPage = selected + 1;
      setSelected(nextPage);
      navigate(`/Retail`); // Navigate to the next page (Real1 -> Real2, etc.)
    }
  };

  // Navigate to the previous page
  const goToPreviousPage  = () => {
    if (selected < totalPages +1) {
      setSelected(selected + 1); // Update the state
      navigate(`/Construction`); // Navigate to the next page
    }
  };
  return (
    <div className=" lg:mx-25 p-8 ">
           <div className='text-center mb-5 lg:my-10'>
                  <h1 className='sm:text-[60px] text-5xl lg:text-[70px] tracking-tighter font-bold '>Hospitality and<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[70px]  tracking-[-0.06em]'> Food Sector</span></h1>
                  
              </div>
      <div className='bg-repeat-round'>
        <img src={img1} alt="" className='rounded-4xl' />
      </div>
      <h2 className="text-3xl mt-5 font-bold text-gray-800 mb-6">Hospitality & Food Sector Solutions</h2>
      <p className="text-lg text-gray-700 mb-6">
        At Raha Financials, we know how challenging the food and hospitality industry can be sometimes. Keeping that in mind, we excel in a wide range of
        hospitality industries whether you're a bustling restaurant, a charming bed and breakfast, or a thriving catering company, our experienced team is
        dedicated to delivering high-quality services.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">Here's how Raha Financials can be your trusted financial partner:</h3>
      <p className="text-lg text-gray-700 mb-6">
        We start by focusing on your business's financial needs and offer full support by understanding your personalized financial goals and developing
        customized plans. We help you with business loans which may be needed for finance expansion, renovations, equipment purchases, or operational needs.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        With our smart Inventory Financing, we ensure consistent inventory levels and manage cash flow efficiently. To cover any urgent cash need, we offer
        solutions like Merchant Cash Advances. Our experienced team offers a data-driven approach to help you in the allocation of budgets and make informed
        financial decisions.
      </p>

      <h4 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Restaurants</h4>
      <p className="text-lg text-gray-700 mb-6">
        In the Restaurants business, one may face high operating costs, including food purchases, labor expenses, and utility bills. With Raha Financials by
        your side, we can help by offering cash flow management by providing insights into revenue and expenditure and also assist in tracking food inventory.
        We offer payroll management services as well.
      </p>

      <h4 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Bed and Breakfasts</h4>
      <p className="text-lg text-gray-700 mb-6">
        Bed and breakfast comes with its own set of challenges but when you have professionals taking care of your finances, you can focus on providing the
        best service to the guests. Raha Financials can help your BNB by anticipating revenue trends and enabling effective financial planning. We offer
        assistance in managing guest reservations, payments, and property management.
      </p>
      <h4 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Catering Companies</h4>
      <p className="text-lg text-gray-700 mb-6">
      Raha Financials also offers Catering companies financial management solutions such as managing large-scale events, fluctuating demand, and ensuring food safety.
      </p>
      <p className="text-lg text-gray-700 mb-6">
      Raha Financials offers a wide range of financial solutions to businesses in the hospitality and food sectors. We also focus on identifying cost-saving opportunities, making financial reports to track key metrics and guiding your business strategy.
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
  );
};

export default Hospita;
