import React from 'react'

export default function Die(props) {
  return (
    <div onClick={()=>props.freeze(props.id)} className={`  w-[16%]  h-[30%]  lg:my-0 my-[2%] mx-[2%]  ${props.isHeald?'bg-red-500 lg:hover:bg-red-600 shadow-red-800':'bg-gray-300 lg:hover:bg-gray-400 shadow-gray-600'} rounded-lg shadow-md `}>
        <button  className='h-[100%] w-[100%] font-bold'>{props.value}</button>

    </div>
  )
}
