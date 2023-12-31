import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-sm w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-2 px-6 text-lg rounded-lg hover:bg-opacity-80'>▶ Play</button>
        <button className=' mx-2 bg-gray-500 text-black p-2 px-6 text-lg bg-opacity-50 rounded-lg'>❕ More info</button>
      </div>
    </div>
  )
};

export default VideoTitle;
