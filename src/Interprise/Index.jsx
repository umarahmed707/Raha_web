

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

function Index () {
       const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      const [selected, setSelected] = useState(0); // 0: Individual, 1: Enterprise
      const navigate = useNavigate();
    
      const handleToggle = (value) => {
        setSelected(value);
        if (value === 0) {
          navigate("/");
        } else {
          navigate("/Index");
        }
      };
  return (
    <>

    
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

    
    <div className="flex  flex-row px-4 py-3 rounded-[2.4375rem] bg-[rgba(243,243,243,0.2)] justify-between gap-3 sm:gap-6 transition-all duration-300 ease-in-out">
      {/* Individual / Small Business */}
      <button
        onClick={() => handleToggle(0)}
        className='text-xs text-white border-[#1445C2] bg-transparent" sm:text-sm rounded-full py-1 sm:py-2 px-2 sm:px-6 w-[auto] sm:w-auto transition-all duration-300 border-2 '
      
       
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Individual/Small Business
      </button>

      {/* Enterprise */}
      <button
        onClick={() => handleToggle(1)}
        className='rounded-full text-[#1445C2] bg-gradient-to-b from-[#ffffff] to-[#DADADA] py-3 px-6 sm:py-2 sm:px-6 text-xs sm:text-sm w-[auto] sm:w-auto transition-all duration-300 '
      
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Enterprise
      </button>
    </div>

    </div>




      {/* Hero Section */}
      <div className="text-center text-white py-12 px-4" >
        <h1 className="text-4xl lg:text-7xl font-bold lg:mx-45 mb-2">What we Provide for the 
        Success of your Business</h1>
        <p className="text-lg mb-6">
        From consolidated reporting to industry expertise, we deliver data-driven insights <br /> and actionable strategies for success.
        </p>
             <div >
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 border bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:to-[#587EDB] hover:text-white hover:border text-[#1445C2] rounded-lg"
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
    </>
  );
};

export default Index;
