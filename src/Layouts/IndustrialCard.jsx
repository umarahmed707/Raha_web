import React from 'react'

export default function IndustrialCard(props) {
  return (
    <div>
        <div className='p-5 rounded-2xl bg-gradient-to-b from-[#f5efef] to-[#ffffff] hover:from-[#ffffff] hover:to-[#b3c1e0] hover:border-[#1445C2] border border-gray-300 w-90 h-65'>
<img src={props.img} alt="img" className='w-25 h-25' />
<h2 className='text-[25px] font-semibold mt-1'>{props.h1}</h2>
<p className='text-[25px] text-[#1445C2] font-semibold underline mt-1'>Read More</p>
        </div>
    </div>
  )
}
