import React, { useEffect } from 'react'
import Insightsfilter from './Insightsfilter'
import Card3 from '../Home1/Card3'
import FAQSection from './FAQSection'
import { Link } from 'react-router-dom'

import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import Insightcard from './InsightCard';

export default function Insight() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <>
<div 
  className="px-4 md:px-20 my-5 lg:mt-10 w-full flex flex-col items-center" 
  data-aos="fade-up" 
  data-aos-duration="1000"
>
  <h1 
    className="text-center font-semibold  bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent text-[40px] md:text-[70px]" 
    data-aos="zoom-in" 
    data-aos-delay="200"
  >
    News & Insights
  </h1>
</div>

  <div
  className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mb-20 bg-gradient-to-b from-[#ffffff] to-[#DADADA] rounded-2xl shadow-lg overflow-hidden"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <div 
    className="w-full md:w-1/2 h-[250px] md:h-[480px] bg-cover bg-center bg-[url('./assets/image/Headerimage.png')]" 
    data-aos="fade-right" 
    data-aos-delay="200"
  >
    <div className="flex flex-wrap gap-2 p-4">
      <button className="bg-white px-4 py-2 rounded-lg text-blue-600 border-2 font-semibold">Feature</button>
      <button className="bg-white px-4 py-2 rounded-lg text-blue-600 border-2 font-semibold">Insights</button>
    </div>
  </div>

  <div 
    className="w-full md:w-1/2 p-6 flex flex-col" 
    data-aos="fade-left" 
    data-aos-delay="400"
  >
    <p className="text-gray-400 text-sm mb-2">Feb 5, 2024</p>
    <h2 className="text-2xl md:text-[40px] font-bold text-gray-900 mb-4">
      A new tariff paradigm: How businesses can respond
    </h2>
    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
      As tariffs reshape the economic landscape, businesses must adapt swiftly. This new paradigm presents both
      challenges and opportunities for growth. Discover strategies to navigate these changes effectively.
    </p>
    <Link to="/BlogArticle">
      <button className="underline text-blue-600 mt-25 text-2xl font-semibold">Read More</button>
    </Link>
  </div>
</div>


  

<Insightcard/>
<Insightsfilter/>
<Card3/>
<FAQSection/>
    </>
  )
}
