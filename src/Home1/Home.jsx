import  { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import Typewriter from 'typewriter-effect';
import Card from './Card';
import Homeform from './Homeform';
import Card2 from './Card2';
import Card3 from './Card3';
import DemoModal from "../Modelfile/DemoModel";
import MidSection from './MidSection'
import { Link, useNavigate } from 'react-router-dom'


export default function Home() {
     const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
   const [animation, setAnimation] = useState(""); // State to control animation class
  const [overlayClass, setOverlayClass] = useState(""); // State for overlay visibility
  const navigate = useNavigate();

  const handleToggle = (value) => {
    setAnimation("slide-out"); // Trigger slide-out animation
    setOverlayClass("overlay-visible"); // Show the blue overlay

    setTimeout(() => {
      // After the animation completes, navigate to the target page
      if (value === 0) {
        navigate("/"); // Navigate to Home
      } else {
        navigate("/Index"); // Navigate to Index
      }
    }, 1000); // Delay navigation to match the duration of the slide-out animation
  };
  return (
    <>


     <div className={`page-container ${animation}`}>

      <div className='HomeHero max-w-7xl mx-auto text-center items-center py-5 px-5' data-aos="fade-up">
        <p className="pb-5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="100">
          I am a
        </p>
      <div className="page-content flex flex-row px-4 md:ml-[400px] py-3 lg:w-[400px] ml-5 w-[300px] rounded-[2.4375rem] bg-gradient-to-b from-[#1445C2] to-[#587EDB] justify-center gap-3 sm:gap-6 transition-all duration-300 ease-in-out">
        {/* Individual / Small Business */}
        <button
          onClick={() => handleToggle(0)}
          className="text-xs text-white bg-transparent sm:text-sm rounded-full py-1 sm:py-2 px-2 sm:px-6 w-[auto] sm:w-auto transition-all duration-300 border-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Individual/Small Business
        </button>

        {/* Enterprise */}
        <button
          onClick={() => handleToggle(1)}
          className="rounded-full text-white bg-gray-400 py-3 px-6 sm:py-2 sm:px-6 text-xs sm:text-sm w-[auto] sm:w-auto transition-all duration-300"
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

        </h1>
        <h1
          className="text-4xl bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px] font-bold tracking-[-0.06em]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          IRS Notice Resolution
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
       <div className="p-6">
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border text-white rounded-lg"
      >
      Book A Demo
      </button>

      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>


      </div>
        </div>
      <Card />
      <Homeform />
      <MidSection />
      <Card2 />
      <Card3 />
    </>
  );
}
