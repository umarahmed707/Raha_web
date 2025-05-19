

import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Entermid from "./Entermid";
import Entermid2 from "./Entermid2";
import Card3 from "../Home1/Card3";
import EnterNavbar from "./EnterNavbar";
import EnterCard from "./EnterCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DemoModal from '../Modelfile/DemoModel';
import Particlesinterprise from '../Particlesinterprise';

function EnterPrise () {
       const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
     const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = (val) => {
    // Jab Enterprise button click ho
    setIsTransitioning(true);

    // Animation ke baad new page ya content load karo
    setTimeout(() => {
  window.location.href = '/';  // yahan apni dusri page ki URL lagao
}, 500);
  };
  return (
    <>

    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Blue overlay */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: isTransitioning ? 0 : "-100vw",
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
      left: isTransitioning ? 0 : "-100vw",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#1445C2",
      transition: "left 0.7s ease 0.2s",
      zIndex: 9998,
    }}
  />

  {/* Second Blue Layer */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: isTransitioning ? 0 : "-100vw",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#0D2A7A",
      transition: "left 0.9s ease 0.4s",
      zIndex: 9999,
    }}
  />
    <div className="bg-[url('./assets/image/Enterprisebg.png')] bg-cover bg-no-repeat  h-200 lg:h-200 ">
    <EnterNavbar/>
    <div >


<div style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}>
        <Particlesinterprise id="particles"  />
      </div>
 
    <div style={{
        position: "relative",
        zIndex: 0,
      
        padding: "2rem",
      }}>
<div data-aos="fade-up">


    <div className="flex flex-col items-center justify-center  px-4">
      <p
        className="pb-3 text-white text-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        I am a
      </p>

    
 <div
        style={{
         transition: "transform 0.5s ease-in-out",
          transform: isTransitioning ? "translateX(-100%)" : "translateX(0)",
                    position: "relative",
          zIndex: 1,
        }}
      >
        <div className="page-content EnterBtn">
          {/* Individual / Small Business */}
          <button
          onClick={() => handleToggle(1)}
            className="text-xs text-[#ffffff] sm:text-[17px] rounded-full py-1 sm:py-2 px-2 sm:px-4 w-[auto] sm:w-auto "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Individual/Small Business
          </button>

          {/* Enterprise */}
          <button
            
            className="Enter text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Enterprise
          </button>
        </div>
      </div>

    </div>




      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center text-white py-12 px-4" >
        <h1 className="text-4xl lg:text-7xl font-bold lg:mx-45 mb-2">What we Provide for the 
        Success of your Business</h1>
        <p className="text-lg mb-6">
        From consolidated reporting to industry expertise, we deliver data-driven insights <br /> and actionable strategies for success.
        </p>
             <div >
      <button
        onClick={() => setShowModal(true)}
        className="Call-btn"
      >
      Book A Demo
      </button>

      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
    </div>
    </div>
      </div>
      </div>
<EnterCard/>
    </div>
    <Entermid/>
    <Card3/>
<Entermid2/>
</div>
    </>
  );
};

export default EnterPrise;
