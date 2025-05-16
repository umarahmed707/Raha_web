import React from 'react'

export default function CardLayouts(props) {
  return (
    
    <div  className='simple-box'>

<div>
    <img src={props.img} alt="img" />

    <h1 className='font-bold text-[22px] leading-[25px] mt-5'>{props.title}</h1>
    <p className='tracking-[0.1] leading-[18px] mt-2 text-[18px]'>{props.parah}
    </p>
</div>

    </div>
  )
}
