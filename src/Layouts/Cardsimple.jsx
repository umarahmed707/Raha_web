import React from 'react'

export default function Cardsimple(props) {
  return (
    <div className='bg-[#ffffff]  w-[450px] h-[400px] pb-8 p-4 rounded-2xl shadow-lg text-black'>

<div>
    <img src={props.img} alt="img" className='w-full h-60 rounded-lg' />

    <h1 className='font-bold text-[22px] mt-5 text-start'>{props.title}</h1>
    <p className=' text-start '>{props.parah}
    </p>
</div>

    </div>
  )
}
