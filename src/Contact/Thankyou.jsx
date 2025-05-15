import React from 'react'
import img1 from '../assets/image/Thank.svg'
export default function Thankyou() {
  return (
    <div >

        <img src={img1} alt="" className='w-50 flex justify-center items-center md:ml-140 ml-22 mt-25'  />
        <h1 className='bg-gradient-to-b from-[#1445C2] to-[#819ee6] bg-clip-text text-transparent text-center lg:text-8xl text-6xl font-bold'>Thank you!</h1>
   <p className='text-center mb-15'>We’ll get back to you as soon as possible.</p>
    </div>
  )
}
 