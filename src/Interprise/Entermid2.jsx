import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Entermid() {
     useEffect(() => {
                AOS.init({ duration: 1000 });
              }, []);
    return (
        <div>

            <div
                className=" relative bg-[url('./assets/image/Entermid2.png')] mb-15 mx-20 rounded-4xl bg-no-repeat py-25  bg-cover bg-center flex items-center justify-center text-white"
            >


                <div className="flex flex-col items-center justify-center relative z-10 text-center max-w-4xl px-4" data-aos="fade-up">
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-6">
                        Expansion and Market Infiltration Services
                    </h1>

                    <p className="text-lg lg:mx-25 md:text-xl tracking-tighter mb-8">
                        If you’re an international company considering expanding or diversifying into the US, or vice versa, and require assistance, reach out to us.
                    </p>

                 
          <Link to='/ContactUs'>
          <button className="Call-btn">
            Contact us
          </button>
          </Link>
                </div>
            </div>




        </div>
    )
}
