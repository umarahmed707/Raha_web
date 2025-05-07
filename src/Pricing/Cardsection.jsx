import React from 'react'
import Pricing from '../../src/assets/image/Pricing.jpg'
import { FaCheck } from 'react-icons/fa';
import img1 from '../assets/image/pricing1.png'
import img2 from '../assets/image/pricing2.png'
import img3 from '../assets/image/pricing3.png'
import img4 from '../assets/image/pricing4.png'
import Homeform from '../Component/Homeform'

export default function Cardsection() {
  return (
    <div>
<div
  className="mt-6 px-4 py-10 text-white"
  style={{
    backgroundImage: `url(${Pricing})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  }}
>
  <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6">
    {/* Plan 1 */}
    <div className="Spot group w-full sm:w-[350px]">
      <div className="SpotCard p-6 bg-opacity-80 rounded-lg">
        <div className="bg-white w-[70px] h-[65px] group-hover:bg-[#1445C2] rounded-2xl p-3 flex justify-center">
          <img src={img1} alt="" width={35} />
        </div>
        <h2 className="text-xl font-semibold mt-2">Personal Plan</h2>
        <p className="text-white group-hover:text-gray-300">Starting From</p>
        <p>
          <span className="text-[30px] group-hover:text-[#1445C2]">$79</span>/mo
        </p>
        <ul className="text-sm space-y-2 mt-3 opacity-90">
          {[
            "Personal monetary evaluation",
            "Bookkeeping",
            "Financial statements preparation",
            "Budgeting and cashflow",
            "Financial Planning",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2 items-center">
              <FaCheck size={15} className="text-white group-hover:text-[#1445C2]" />
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-28 text-[#1445C2] font-bold py-3 w-full rounded-md bg-gradient-to-b from-[#ffffff] to-[#bebfc0] group-hover:from-[#1445C2] group-hover:to-[#587EDB] group-hover:text-white">
          Learn more
        </button>
      </div>
    </div>

    {/* Plan 2 */}
    <div className="Spot group w-full  sm:w-[350px]">
      <div className="SpotCard p-6 bg-opacity-80  rounded-lg">
        <div className="bg-white w-[70px] h-[65px] group-hover:bg-[#1445C2] rounded-2xl p-3 flex justify-center">
          <img src={img2} alt="" width={35} />
        </div>
        <h2 className="text-xl font-semibold mt-2">Standard Plan</h2>
        <p className="text-white group-hover:text-gray-300">Starting From</p>
        <p>
          <span className="text-[30px] group-hover:text-[#1445C2]">$149</span>/mo
        </p>
        <ul className="text-sm space-y-2 mt-3 opacity-90">
          {[
            "Bookkeeping",
            "Accounts receivable",
            "Accounts payable",
            "Monthly financials",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2 items-center">
              <FaCheck size={15} className="text-white group-hover:text-[#1445C2]" />
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-35 text-[#1445C2] font-bold py-3 w-full rounded-md bg-gradient-to-b from-[#ffffff] to-[#bebfc0] group-hover:from-[#1445C2] group-hover:to-[#587EDB] group-hover:text-white">
          Learn more
        </button>
      </div>
    </div>

    {/* Plan 3 */}
    <div className="Spot group w-full sm:w-[350px]">
      <div className="SpotCard p-6 bg-opacity-80 rounded-lg">
        <div className="bg-white w-[70px] h-[65px] group-hover:bg-[#1445C2] rounded-2xl p-3 flex justify-center">
          <img src={img3} alt="" width={35} />
        </div>
        <h2 className="text-xl font-semibold mt-2">Advanced Plan</h2>
        <p className="text-white group-hover:text-gray-300">Starting From</p>
        <p>
          <span className="text-[30px] group-hover:text-[#1445C2]">$299</span>/mo
        </p>
        <ul className="text-sm space-y-2 mt-3 opacity-90">
          {[
            "Bookkeeping",
            "Payroll services",
            "Sales tax",
            "Annual/ Quarterly/ Monthly filing",
            "Monthly financials",
            "Financial Analysis / KPI",
            "VAT",
            "IRS, HMRC etc notices",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2 items-center">
              <FaCheck size={15} className="text-white group-hover:text-[#1445C2]" />
              {item}
            </li>
          ))}
        </ul>
        <button className="mt-6 text-[#1445C2] font-bold py-3 w-full rounded-md bg-gradient-to-b from-[#ffffff] to-[#bebfc0] group-hover:from-[#1445C2] group-hover:to-[#587EDB] group-hover:text-white">
          Learn more
        </button>
      </div>
    </div>
  </div>

  {/* Enterprise Plan */}
  <div className="Spot group mt-10 px-4 md:px-10 mx-5 lg:mx-25">
  <div className="SpotCard p-6 md:p-8 bg-opacity-80 rounded-lg max-w-6xl mx-auto">
    <div className="bg-white w-[70px] h-[65px] group-hover:bg-[#1445C2] rounded-2xl p-3 flex justify-center">
      <img src={img4} alt="Enterprise Icon" width={40} />
    </div>
    <h2 className="text-xl font-semibold mt-3">Enterprise Plan</h2>

    <div className="flex flex-col md:flex-row md:gap-80 gap-6 mt-4">
      <ul className="text-[17px] space-y-2 opacity-90">
        {[
          "CFO-Level Advisory",
          "International Tax Planning",
          "Staff Outsourcing",
          "Budget Forecasting",
          "Financial Planning",
        ].map((item, idx) => (
          <li key={idx} className="flex gap-2 items-center">
            <FaCheck size={15} className="text-white group-hover:text-[#1445C2]" />
            {item}
          </li>
        ))}
      </ul>

      <ul className="text-[17px] space-y-2 opacity-90">
        {[
          "Financial Training",
          "Mergers and Acquisitions Support",
          "Financial Software Integration",
          "Custom Financial Solutions",
        ].map((item, idx) => (
          <li key={idx} className="flex gap-2 items-center">
            <FaCheck size={15} className="text-white group-hover:text-[#1445C2]" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    <button className="mt-6 text-[#1445C2] w-full md:w-[350px] font-bold py-3 px-8 rounded-md bg-gradient-to-b from-[#ffffff] to-[#bebfc0] group-hover:from-[#1445C2] group-hover:to-[#587EDB] group-hover:text-white transition-colors duration-300">
      Speak with a Consultant
    </button>
  </div>
</div>

</div>

<Homeform/>
    </div>
  )
}
