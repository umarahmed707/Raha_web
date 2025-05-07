import React from 'react'
import IndustrialCard from '../Layouts/IndustrialCard'
import img1 from '../assets/image/indutryIcon1.svg'
import img2 from '../assets/image/indutryIcon2.svg'
import img3 from '../assets/image/indutryIcon3.svg'
import img4 from '../assets/image/indutryIcon4.svg'
import img5 from '../assets/image/indutryIcon5.svg'
import img6 from '../assets/image/indutryIcon6.svg'
import img7 from '../assets/image/indutryIcon7.svg'
import img8 from '../assets/image/indutryIcon8.svg'

export default function Industrial() {
  return (
    <div>
<div className='text-center my-10 lg:my-15'>
      <h1
        className="text-[28px] sm:text-[30px]  lg:text-[55px]  font-semibold tracking-[-0.06em] leading-[1] sm:leading-[50px] lg:leading-[40px]">
        Where We Make Waves:
        </h1>
        <h1 className="text-4xl bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[30px] lg:text-[55px] font-semibold tracking-[-0.06em]">
          Our Industry Spectrum
        </h1>
        <p className='leading-[1.3]'>Industry-specific accounting services for construction,<br /> healthcare, hospitality, and non-profit organizations.</p>
      </div>
<div className='flex flex-wrap justify-center gap-3 mb-10'>
      <IndustrialCard img={img1} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img2} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img3} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img4} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img5} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img6} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img7} h1='Hospitality and Food Sector'/>
      <IndustrialCard img={img8} h1='Hospitality and Food Sector'/>
      </div>

      <div className="flex w-full flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pb-5 mb-10 lg:mb-35">
  <button className="rounded-lg py-2 px-6 lg:py-3 lg:px-8 text-sm sm:text-xl text-white 
                     bg-gradient-to-b from-[#1445C2] to-[#587EDB] 
                     hover:from-[#587EDB] hover:to-[#1445C2] 
                     w-[200px] sm:w-auto">
    Request Consultation
  </button>

  <button className="border border-[#1445C2] py-2 px-6 lg:py-3 lg:px-8 text-sm sm:text-xl 
                     rounded-lg bg-gradient-to-b 
                     hover:from-[#587EDB] hover:to-[#1445C2] 
                     hover:text-white text-[#1445C2] 
                     w-[150px] sm:w-auto">
    Call Us
  </button>
</div>



    </div>
  )
}
