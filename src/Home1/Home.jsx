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


import ParticlesComponent from '../ParticlesComponent';

const texts = [
  "IRS Notice Resolution",
  "Tax Refunds",
  "Bookkeeping Services",
  "Payroll Processing",
];

export default function Home() {
const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);


     const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

    const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = (val) => {
    // Jab Enterprise button click ho
    setIsTransitioning(true);

    // Animation ke baad new page ya content load karo
    setTimeout(() => {
  window.location.href = '/EnterPrise';  // yahan apni dusri page ki URL lagao
}, 500);
  };
  return (
    <>
<div className={isTransitioning ? "fade-out" : ""} style={{ position: "relative", overflow: "hidden" }}>
      {/* Blue overlay */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: isTransitioning ? "0" : "100vw", // Slide to the right
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
      transition: "left 0.5s ease",
      zIndex: 9997,
    }}
  />

  {/* First Blue Layer */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: isTransitioning ? "0" : "100vw", // Slide to the right
      width: "100vw",
      height: "100vh",
      backgroundColor: "#1445C2",
      transition: "left 0.6s ease 0.2s",
      zIndex: 9998,
    }}
  />

  {/* Second Blue Layer */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: isTransitioning ? "0" : "100vw", // Slide to the right
      width: "100vw",
      height: "100vh",
      backgroundColor: "#0D2A7A",
      transition: "left 0.7s ease 0.4s",
      zIndex: 9999,
    }}
  />

<div >


<div  

      style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",  // sirf 400px height
    zIndex: 0,
    pointerEvents: "none",
  }}
>
        <ParticlesComponent id="particles"  />
      </div>
 
    <div style={{
        position: "relative",
        zIndex: 10,
      
        padding: "2rem",
      }}>
      <div className='HomeHero max-w-7xl mx-auto text-center flex flex-col items-center py-5 px-5' data-aos="fade-up">
        <p className="pb-5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="100">
          I am a
        </p>
 

      {/* Page content container with slide animation */}
      <div
        style={{
         transition: "transform 0.5s ease-in-out",
          transform: isTransitioning ? "translateX(-100%)" : "translateX(0)",
                    position: "relative",
          zIndex: 1,
        }}
      >
        <div className="page-content HomeEnterbg">
          {/* Individual / Small Business */}
          <button
            className="HomeIndividual "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Individual/Small Business
          </button>

          {/* Enterprise */}
          <button
            onClick={() => handleToggle(1)}
            className="HomeEnter text-[14px]"
            data-aos="fade-up"
            data-aos-delay="300" 
          >
            Enterprise
          </button>
        </div>
      </div>
    
      
  

        {/* Heading */}
        <h1
          className="text-[28px] sm:text-[80px] mt-10 lg:text-[95px] font-bold tracking-[-0.06em] leading-[1] sm:leading-[50px] lg:leading-[40px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
               What our Accounting Offers

        </h1>
     <div
      style={{
        position: "relative",
        height: "containerHeight",
        minHeight: "8rem",
        maxHeight: "1rem",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "0 1rem",
        boxSizing: "border-box",
      }}
    >
      
      {texts.map((text, index) => {
        const isCurrent = index === currentIndex;
        const isPrev = index === prevIndex;

        let style = {
          position: "absolute",
          top: "10%",
          left: 0,
          width: "100%",
          whiteSpace: "normal",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "7vw", // Responsive font size, adjusts with viewport width
          maxFontSize: "100px",
            background: "linear-gradient(to bottom, #1445C2, #587EDB)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
          userSelect: "none",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          pointerEvents: "none",
          opacity: 0,
          transform: "translateY(20px)", // Default: below view (for next text)
          zIndex: 1,
          padding: "0 0.5rem",
          boxSizing: "border-box",
          lineHeight: 1.2,
        };

        if (isCurrent) {
          style = {
            ...style,
            opacity: 1,
            transform: "translateY(0)",
            pointerEvents: "auto",
            zIndex: 10,
          };
        } else if (isPrev) {
          style = {
            ...style,
            opacity: 0,
            transform: "translateY(-50px)", // Slide up and fade out
            pointerEvents: "none",
            zIndex: 5,
          };
        }

        return (
          <div key={index} style={style}>
            {text}
          </div>
        );
      })}
    </div>

 
        <p
          className="text-[16px] sm:text-[19px] mt-[-30px] lg:mt-3 lg:mx-60"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Let us take care of your books, taxes, and payroll while you focus on growing your
           business. Our expert accountants specialize in helping small businesses thrive.
        </p>

        {/* Book A Demo Button */}
       <div className="p-6">
      <button
        onClick={() => setShowModal(true)}
        className='BlueBtn' > 
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
        </div>
        </div>
    </>
  );
}
