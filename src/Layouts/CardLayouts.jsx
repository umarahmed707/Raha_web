import React from 'react'

export default function CardLayouts(props) {
  return (
    
    <div className='bg-[#DADADA] bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#1445C2] hover:to-[#587EDB]  w-auto pb-8 p-6 rounded-2xl shadow-2xl text-black hover:text-white'>

<div>
    <img src={props.img} alt="img" />

    <h1 className='font-bold text-[22px] mt-5'>{props.title}</h1>
    <p className='tracking-[0.1] leading-[22px]'>{props.parah}
    </p>
</div>

    </div>
  )
}
