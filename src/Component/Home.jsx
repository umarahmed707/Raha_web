import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import Typewriter from 'typewriter-effect';
import Card from './Card';
import Homeform from './Homeform';
import Card2 from './Card2';
import Card3 from './Card3';
import MidSection from './MidSection'

export default function Home() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <div className='HomeHero max-w-7xl mx-auto text-center items-center py-5 px-5' data-aos="fade-up">
        <p className="pb-5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="100">
          I am a
        </p>

        <div className="flex w-full flex-row justify-center sm:justify-center gap-3 sm:gap-4 pb-5">
          <button
            className="border-2 border-black text-xs sm:text-sm rounded-full py-1 sm:py-2 px-1 sm:px-6 text-[#1445C2] w-[48%] sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Individual/Small Business
          </button>
          <button
            className="rounded-full py-1 sm:py-2 sm:px-4 text-xs sm:text-sm text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2] w-[30%] sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Enterprise
          </button>
        </div>

        {/* Heading */}
        <h1
        className="text-[28px] sm:text-[80px] mt-15 lg:text-[95px] font-bold tracking-[-0.06em] leading-[0.1] sm:leading-[50px] lg:leading-[40px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Typewriter
          options={{
            strings: ['What our Accounting Offers'],
            autoStart: true,
            loop: true,
            cursor: "_",
            cursorStyle: "_",
            typeSpeed: 70,
            deleteSpeed: 50,
            delaySpeed: 1500,
            // adding the out effect with delete
            onStringTyped: (count) => {
              if (count === 1) {
                setTimeout(() => {
                  this.typewriter.deleteAll();
                }, 1000); // Pause before deleting
              }
            },
          }}
        />
        <br />
        <h1
          className="text-4xl bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px] font-bold tracking-[-0.06em]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          IRS Notice Resolution
        </h1>
      </h1>

        {/* Description */}
        <p
          className="text-[16px] sm:text-[19px] mt-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Let us take care of your books, taxes, and payroll while you focus on growing your
          <br /> business. Our expert accountants specialize in helping small businesses thrive.
        </p>

        {/* Book A Demo Button */}
        <button
          className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2]"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Book A Demo
        </button>

       
   
      </div>
      <Card/>
<Homeform/>
<MidSection/>
<Card2/>
<Card3/>
    </>
  );
}
