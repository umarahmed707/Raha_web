import React from 'react'

export default function Cardtext(props) {
  return (
<div className=" w-full h-auto max-w-[380px] pb-8  text-black">
  <div>
    <p className="text-start text-[18px] bg-gradient-to-b from-[#ffffff] to-[#DADADA] p-4 rounded-lg">{props.text}</p>

    <div className="flex flex-row md:flex-row gap-4 mt-4">
      <div>
        <img src={props.img} alt="img" className="w-15 h-15 object-cover rounded-lg" />
      </div>

      <div className="text-start leading-[10px] sm:leading-[1.2] lg:leading-[1.3]">
        <h1 className="text-lg font-semibold p-0">{props.title}  </h1>
        <h5 className="text-sm mt-2">{props.parah}</h5>
       
      </div>
    </div>
  </div>
</div>

  
  )
}
