import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cardtext from '../Layouts/Cardtext';
import img5 from '../assets/image/Icon1.png';
import img6 from '../assets/image/Icon2.png';
import img7 from '../assets/image/Icon3.png';
import img8 from '../assets/image/Icon4.png';

export default function Card3() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='justify-center text-center'>
      <div className="carousel1 px-4 py-8 mx-8 " data-aos="fade-up">
        <div className='pb-10' data-aos="fade-down">
          <h1 className='text-[50px] sm:text-[40px] lg:text-[55px] font-bold tracking-[-0.06em] leading-[1.1] sm:leading-[1.2] lg:leading-[1.3]'>
            Transforming Finances:
            <br />
            <span className='text-4xl bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent sm:text-[55px] lg:text-[55px] font-bold tracking-[-0.06em]'>
              RAHA Financials Client Experiences
            </span>
          </h1>
          <p className="mt-2">
            Don't just take our word for it. See what our satisfied customers have to <br /> say about our services.
          </p>
        </div>

        <div className="carousel-wrapper flex gap-5 overflow-x-hidden scrollbar-hide" data-aos="zoom-in">
          <div className="carousel flex gap-4 w-max">
            <Cardtext
              text="We've been working with Raha Financials for years and they've always provided us with top-notch service. Their expertise and attention to detail have been invaluable to our business."
              img={img8}
              title="Cody Fisher"
              parah="Deloitte"
            />
            <Cardtext
              text="I can't recommend Raha Financials enough! Their team is extremely knowledgeable and always available to answer any questions we have. They've made our lives so much easier."
              img={img5}
              title="Jenny Wilson"
              parah="Behance"
            />
            <Cardtext
              text="As a small business owner, I rely on Raha Financials to handle all my accounting needs. They're always up-to-date with the latest tax laws and regulations, which gives me peace of mind."
              img={img7}
              title="Ronald Richards"
              parah="Razer"
            />
            <Cardtext
              text="As a small business owner, I rely on Raha Financials to handle all my accounting needs. They're always up-to-date with the latest tax laws and regulations, which gives me peace of mind."
              img={img6}
              title="Eleanor Pena"
              parah="Wise"
            />
          </div>
        </div>
      </div>

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
