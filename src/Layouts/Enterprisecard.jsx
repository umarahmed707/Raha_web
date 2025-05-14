import React from 'react'

export default function Enterprisecard(props) {
  return (
    <div>     
       

      <div className="group bg-white w-[350px] rounded-2xl shadow-2xl hover:text-white p-6 bg-gradient-to-b hover:from-[#1445C2] hover:to-[#ffffff]"
      >
        <h3 className="text-[19px] group-hover:text-white font-bold mb-3">{props.title}</h3>
        <p className="text-gray-600 group-hover:text-white mb-4">{props.description}</p>
        <img
          src={props.image}
          alt='img'
          className="w-full h-40 object-contain "
        />
      </div>

  </div>
  
  )
}
