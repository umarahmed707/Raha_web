import React, { useEffect } from 'react'
import Enterprisecard from "../Layouts/Enterprisecard";
import img1 from '../assets/image/Enterprise1.png'
import img2 from '../assets/image/Enterprise2.png'
import img3 from '../assets/image/Enterprise3.png'
import img4 from '../assets/image/Enterprise4.png'
import img5 from '../assets/image/Enterprise5.png'
import img6 from '../assets/image/Enterprise6.png'
import img7 from '../assets/image/Enterprise7.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EnterCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();  // Refresh AOS after the component mounts
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5" >
        <Link to="/Audit" data-aos="fade-up" > <Enterprisecard title='Audit and Assurance' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img1} /></Link>
          <Link to="/EnterBussiness" data-aos="fade-up" > <Enterprisecard title='Business Payment Collection' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img2} /></Link>
        <Link to="/Hr" data-aos="fade-up"><Enterprisecard title='HR Management & Outsourcing' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img3} /></Link>
        <Link to="/EnterPayroll" data-aos="fade-up"> <Enterprisecard title='Payroll Advisory' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img4} /></Link>
        <Link to="/Company" data-aos="fade-up" ><Enterprisecard title='Company restructuring' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img5} /></Link>
        <Link to="/Budget" data-aos="fade-up"> <Enterprisecard title='Budget forecasting' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img6} /></Link>
        <Link to="/Risk" data-aos="fade-up"><Enterprisecard title='Risk Advisory' description='Set up your accounting software in a day through our checklist, for converting a client from your legacy software to Xero.' image={img7} /></Link>


      </div>
    </div>
  )
}
