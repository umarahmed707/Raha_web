import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import IndustrialCard from '../Layouts/IndustrialCard'
import img1 from '../assets/image/indutryIcon1.svg'
import img2 from '../assets/image/indutryIcon2.svg'
import img3 from '../assets/image/indutryIcon3.svg'
import img4 from '../assets/image/indutryIcon4.svg'
import img5 from '../assets/image/indutryIcon5.svg'
import img6 from '../assets/image/indutryIcon6.svg'
import img7 from '../assets/image/indutryIcon7.svg'
import img8 from '../assets/image/indutryIcon8.svg'
import { Link } from 'react-router-dom'

export default function Industrial() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <div>
<div className='text-center my-10 lg:my-15' data-aos="fade-up">
  <h1
    className="text-[28px] sm:text-[30px] lg:text-[55px] font-semibold tracking-[-0.06em] leading-[1] sm:leading-[50px] lg:leading-[40px]"
    data-aos="fade-right"
  >
    Where We Make Waves:
  </h1>
  
  <h1
    className="text-4xl bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[30px] lg:text-[55px] font-semibold tracking-[-0.06em]"
    data-aos="fade-left"
  >
    Our Industry Spectrum
  </h1>
  
  <p className='leading-[1.3] mx-5 md:mx-75' data-aos="fade-up" data-aos-delay="300">
    Industry-specific accounting services for construction,
    healthcare, hospitality, and non-profit organizations.
  </p>
</div>

<div className='flex flex-wrap justify-center md:mx-20 gap-3 mb-10' data-aos="fade-up">
  <Link to='/Hospita'>
    <IndustrialCard  img={img1}  h1='Hospitality and Food Sector' data-aos="zoom-in" data-aos-delay="100" />
  </Link>
  <Link to='/Retail'>
    <IndustrialCard img={img2} h1='Ecommerce and Retail' data-aos="zoom-in" data-aos-delay="200" />
  </Link>
  <Link to='/Real'>
    <IndustrialCard img={img3} h1='Real Estate' data-aos="zoom-in" data-aos-delay="300" />
  </Link>
  <Link to='/Technology'>
    <IndustrialCard img={img4} h1='Technology and Startups' data-aos="zoom-in" data-aos-delay="400" />
  </Link>
  <Link to='/Healthcare'>
    <IndustrialCard img={img5} h1='Healthcare and Medical Services' data-aos="zoom-in" data-aos-delay="500" />
  </Link>
  <Link to='/Energy'>
    <IndustrialCard img={img6} h1='Energy and Utilities' data-aos="zoom-in" data-aos-delay="600" />
  </Link>
  <Link to='/Agriculture'>
    <IndustrialCard img={img7} h1='Agriculture and Farming' data-aos="zoom-in" data-aos-delay="700" />
  </Link>
  <Link to='/Construction'>
    <IndustrialCard img={img8} h1='Construction and Infrastructures' data-aos="zoom-in" data-aos-delay="800" />
  </Link>
</div>

<div className="flex w-full flex-wrap justify-center mb-15 sm:justify-center gap-3 mt-5 sm:gap-2 pb-5" data-aos="fade-up" data-aos-delay="300">
  <Link to="/Consultationform">
    <button className="BlueBtn">
      Request Consultation
    </button>
  </Link>
  <button
    onClick={() => window.location.href = 'tel:+16282004141'}
    className="Call-btn"
  >
    Call Us
  </button>
</div>



    </div>
  )
}
