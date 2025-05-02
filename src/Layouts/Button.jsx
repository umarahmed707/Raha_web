import React from 'react'

export default function Button(props) {
  return (
    <div>
          <button type="submit" className="  text-white shadow-lg bg-gradient-to-b from-[#1445C2] to-[#587EDB]  hover:border hover:bg-none border hover:text-[#1445C2] py-3  px-5 rounded-lg transition duration-300">
               {props.Button}
              </button>
    </div>
  )
}
