import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Entermid() {
    useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);
  return (
    <div>




    <div
      className=" relative w-full h-screen overflow-hidden  bg-no-repeat py-25 mt-610 lg:mt-250 bg-cover bg-center flex items-center justify-center text-white"
    >
       
      {/* Background Video */}
      <video
        src="/EnterVedio.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      ></video>
      

      <div className="relative z-10 text-center max-w-4xl px-4" data-aos="fade-up">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-6">
          Connecting the dots. It's <br /> what we do.
        </h1>

        <p className="text-lg lg:mx-25 md:text-xl tracking-tighter mb-8">
          Since the beginning, we have been about creating connections. With our clients,
          our team, and our communities. Connecting accounting has, for and, been
          changing the world's leading enterprises into partners.
        </p>

      <div className="flex flex-wrap gap-4 mt-6 justify-center" data-aos="zoom-in-up">
        <Link to='/About'>
          <button className="Call-btn">
            Who we are
          </button>
          </Link>
        <button
  onClick={() => {
    const element = document.getElementById('Service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="Call-btn"
>
  Our Services
</button>

          <Link to='/ContactUs'>
          <button className="Call-btn">
            Contact us
          </button>
          </Link>
        </div>
      </div>
    </div>




    </div>
  )
}
