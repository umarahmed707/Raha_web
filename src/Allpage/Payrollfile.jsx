import React from 'react'
import CardLayouts from '../Layouts/CardLayouts'
import Calculate from '../assets/image/Calculate.svg'
import img2 from '../assets/image/Service2.svg';
import img3 from '../assets/image/Service3.svg';
import img4 from '../assets/image/Service4.svg';
import Insights from '../assets/image/insightscard.png'
import Homeform from '../Component/Homeform';



export default function Payrollfile() {
  return (
    <div>
      
        <div className='text-center my-10'>
            <h1 className='sm:text-[60px] text-5xl lg:text-[95px] tracking-tighter font-semibold '><span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[95px]  tracking-[-0.06em]'>Payroll</span> Processing</h1>
            <p className='mt-3'>Calculating and distributing salaries and wages to employees,<br /> withholding and paying payroll taxes.
            </p>
            <button
          className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:border hover:bg-none hover:text-[#1445C2]"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Book A Demo
        </button>
        </div>
        <section>
  <img src={Calculate} alt="" className="w-full h-auto pr-10" />
</section>


<div className="mx-4 sm:mx-10 lg:mx-20 my-10 flex flex-col lg:flex-row justify-between gap-10">
  {/* Left Section */}
  <div className="text-center lg:text-left w-full lg:w-1/2" data-aos="fade-right">
    <h1 className="text-[32px] sm:text-[48px] lg:text-[55px] font-bold tracking-[-0.06em] leading-tight">
      Why do you need
    </h1>
    <h2 className="text-3xl sm:text-[40px] lg:text-[55px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
      Payroll Processing?
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
      Accurate and timely payroll processing is essential for small businesses to maintain employee trust,
      avoid legal issues, and focus on growth.
    </p>
    <button
      className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:border hover:bg-none hover:text-[#1445C2]"
      data-aos="fade-up"
      data-aos-delay="700"
    >
      Request Consultation
    </button>
  </div>

  {/* Right Section - Cards */}
  <div className="flex flex-col w-full lg:w-1/2 gap-6 mt-10 lg:mt-0">
    {/* Row 1 */}
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img4}
          title="Calculate Payroll"
          parah="Determine gross pay, deductions, and net pay based on hours, rate, and applicable laws."
        />
      </div>
      <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img2}
          title="Issue Payments"
          parah="Distribute checks or initiate direct deposits securely and on schedule. Maintain payment records."
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img3}
          title="File Taxes"
          parah="Withhold and remit income, social security, unemployment, and medicare taxes. File returns on time."
        />
      </div>
      <div className="w-full sm:w-1/2 flex justify-center" data-aos="fade-up">
        <CardLayouts
          img={img4}
          title="Maintain Records"
          parah="Securely store employee data, pay stubs, tax forms, and other payroll documents."
        />
      </div>
    </div>
  </div>
</div>

      <div className="w-full h-auto px-4 md:px-20 py-16 bg-cover bg-center rounded-lg~"
    style={{
      backgroundImage: `url(${Insights})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
>
    <div className="text-white text-center">
      <h1 className="font-bold text-[32px] md:text-[60px] tracking-[-0.06em]">How does it work?</h1>
      <p className="mt-4 text-sm md:text-lg">
      Streamline your payroll process in three simple steps. Set up your payroll system with employee <br /> information,  process payroll accurately and on time, and handle payroll taxes <br /> to maintain compliance.
      </p>
    </div>

    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
      
    <div className='Spot'>
<div className="SpotCard w-95 h-auto p-4">
  <div className="coloredNum">
    01.
  </div>
  <h2 className="text-lg font-semibold my-1" >Process payroll</h2>
  <ul className="text-sm space-y-1 opacity-90">
    <li>Process payroll</li>
    <li>Calculate pay, deductions, and taxes.</li>
    <li>Issue payments and maintain records.</li>
  </ul>
</div>
</div>


     <div className='Spot'>
<div className="SpotCard w-95 h-auto p-4">
  <div className="coloredNum">
    02.
  </div>
  <h2 className="text-lg font-semibold my-1">Process payroll</h2>
  <ul className="text-sm space-y-1 opacity-90">
    <li>Process payroll</li>
    <li>Calculate pay, deductions, and taxes.</li>
    <li>Issue payments and maintain records.</li>
  </ul>
</div>
</div>
<div className='Spot'>
<div className="SpotCard w-95 h-auto p-4">
  <div className="coloredNum">
    03.
  </div>
  <h2 className="text-lg font-semibold my-1">Process payroll</h2>
  <ul className="text-sm space-y-1 opacity-90">
    <li>Process payroll</li>
    <li>Calculate pay, deductions, and taxes.</li>
    <li>Issue payments and maintain records.</li>
  </ul>
</div>
</div>

    </div>
    <div className="flex w-full flex-row justify-center mt-15 sm:justify-center gap-3 sm:gap-4 pb-5">
          <button
            className=" bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:to-[#587EDB] pb-8 p-6  shadow-2xl  hover:text-white hover:border text-xs sm:text-sm rounded-lg py-1 font-semibold sm:py-2 px-1 sm:px-6 text-black w-[48%] sm:w-auto"
         
          >
            Request Consultation
          </button>
          <button
            className="rounded-lg border py-1 sm:py-2 sm:px-4 text-xs font-semibold sm:text-sm text-white hover:bg-white hover:text-black hover:border-none w-[30%] sm:w-auto"

          >
            Call Us
          </button>
        </div>
  </div>
  <div className='text-center mt-25'>
            <h1 className='sm:text-[45px] text-5xl lg:text-[75px] tracking-tighter font-semibold '>Did you find what you were <br /><span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent mt-0 sm:text-[60px] lg:text-[75px]  tracking-[-0.06em]'>looking for?</span></h1>
            <p className='mt-3'>Calculating and distributing salaries and wages to employees,<br /> withholding and paying payroll taxes.
            </p>
            <button
          className="text-white font-bold py-4 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] border hover:border hover:bg-none hover:text-[#1445C2]"
       
        >
          Request Consultation
        </button>
        </div>

      <Homeform/>
    <Footer/>
    </div>
  )
}
