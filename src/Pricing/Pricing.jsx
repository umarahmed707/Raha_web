import React, { useEffect, useState } from 'react'
import Cardsection from './Cardsection';

import DemoModal from '../Modelfile/DemoModel';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
 
export default function Header() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
     const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div>
  <div>
      <div className="text-center my-25" data-aos="fade-up" data-aos-duration="1000">
  <h1 
    className="sm:text-[60px] text-5xl lg:text-[95px] tracking-tighter font-semibold" 
    data-aos="zoom-in" 
    data-aos-delay="200"
  >
    Our
    <span 
      className="bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px] tracking-[-0.06em]" 
      data-aos="fade-left" 
      data-aos-delay="400"
    >
      {" "}Pricing{" "}
    </span>
    Plans
  </h1>

  <p 
    className="mt-5 text-[12px] lg:text-[14px] mx-5 lg:mx-80" 
    data-aos="fade-up" 
    data-aos-delay="600"
  >
    Our pricing plans provide affordable and flexible options to access expert financial support that streamlines operations and boosts productivity. We offer customizable packages for businesses of all sizes, with transparent pricing and no hidden fees. From accounting and payroll to strategic financial planning, we offer a range of services designed to drive your success.
  </p>

    <div className="p-6 " >
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 z-10 mt-10 bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border text-white rounded-lg"
      >
      Book A Demo
      </button>

      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
      

</div>
<Cardsection/>


</div>
</div>
    </>
  )
}
