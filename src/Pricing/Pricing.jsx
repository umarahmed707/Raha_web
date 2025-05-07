import React from 'react'
import Cardsection from './Cardsection';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

export default function Header() {
  return (
    <div>
  
        <div className='text-center my-10'>
            <h1 className='sm:text-[60px] text-5xl lg:text-[95px] tracking-tighter font-semibold '>Our<span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px]  tracking-[-0.06em]'> Pricing </span> Plans</h1>
            <p className='mt-3 text-[12px] lg:text-[14px] mx-5 lg:mx-80'>Our pricing plans provide affordable and flexible options to access expert financial support that streamlines operations and boosts productivity. We offer customizable packages for businesses of all sizes,  with transparent pricing and no hidden fees. From accounting and payroll to strategic financial planning,  we offer a range of services designed to drive your success</p>
            <button
          className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:border hover:bg-none hover:text-[#1445C2]"
       
        >
          Book A Demo
        </button>


 
        </div>

<Cardsection/>

    </div>
  )
}
