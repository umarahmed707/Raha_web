import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cardsimple from '../Layouts/Cardsimple';
import img1 from '../assets/image/Card1.jpg';
import img2 from '../assets/image/Card2.jpg';
import img3 from '../assets/image/Card3.png';
import img4 from '../assets/image/Card4.png';

export default function Card2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='justify-center text-center'>
      <div data-aos="fade-up">
        <h1 className='text-[50px] sm:text-[40px] lg:text-[55px] font-bold tracking-[-0.06em] leading-[1.1] sm:leading-[1.2] lg:leading-[1.3]'>
          Where We Make Waves:
          <br />
          <span className='text-4xl bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent sm:text-[55px] lg:text-[55px] font-bold tracking-[-0.06em]'>
            Our Industry Spectrum
          </span>
        </h1>
        <p className="mt-2 text-base sm:text-lg text-gray-600">
          Industry-specific accounting services for construction,<br />
          healthcare, hospitality, and non-profit organizations.
        </p>
      </div>

      {/* Carousel with AOS animations */}
      <div className="carousel1 px-4 py-8" data-aos="fade-up">
        <div className="carousel-wrapper overflow-x-auto scrollbar-hidden">
          <div className="carousel flex gap-4 w-max snap-x snap-mandatory scroll-smooth">
            {[img1, img2, img3, img4].map((img, idx) => (
              <div className="min-w-[250px] snap-start" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <Cardsimple
                  img={img}
                  title={
                    idx === 0 ? "Hospitality and Food Sector" :
                    idx === 1 ? "Ecommerce and Retail" :
                    idx === 2 ? "Real Estate" :
                    "Technology and Startups"
                  }
                  parah={
                    idx === 0 ? "In hospitality and food services, where guest experiences meet delectable creations, financial finesse is a must." :
                    idx === 1 ? "We understand the intricacies of e-commerce and retail financial management" :
                    idx === 2 ? "In the world of real estate, sound financial management is the cornerstone of success." :
                    "We help you create a robust financial strategy that aligns with your tech-driven goals."
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full flex-row justify-center gap-3 sm:gap-4 pb-5" data-aos="fade-up">
        <button className="rounded-lg py-1 sm:py-2 sm:px-6 text-xs sm:text-sm text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2] w-[25%] sm:w-auto">
          Request Consultation
        </button>
        <button className="border-2 border-[#1445C2] text-xs sm:text-sm rounded-lg py-1 sm:py-2 px-1 sm:px-6 text-[#1445C2] w-[48%] sm:w-auto">
          Call Us
        </button>
      </div>
    </div>
  );
}
