import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-36 px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
        <div className='flex  '>
          <button className='rounded-md bg-white text-black border-black p-4 text-center cursor-pointer text-xl px-20 w-10 flex justify-center hover:opacity-80'>▶️Play</button>
          <button className='whitespace-nowrap mx-2 items-center  rounded-md bg-gray-500 text-white border-black p-4 text-center cursor-pointer text-xl opacity-80 px-20 w-10 flex justify-center hover:opacity-50 '>More Info</button>
        </div>
    </div>
  )
}
  
export default VideoTitle