import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex  '>
          <button className='rounded-md bg-gray-500 text-white border-black p-4 text-center cursor-pointer text-xl opacity-50 px-20 w-10 flex justify-center'>▶️Play</button>
          <button className='whitespace-nowrap mx-2 items-center  rounded-md bg-gray-500 text-white border-black p-4 text-center cursor-pointer text-xl opacity-50 px-20 w-10 flex justify-center'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle