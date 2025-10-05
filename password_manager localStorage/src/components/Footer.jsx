import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full">
      <div className="logo font-bold text-white text-2xl">
        <span className='text-green-700'>&lt;</span>
        Pass
        <span className='text-green-700'>OP/&gt;</span>
      </div>
      <div className="flex items-center gap-2 text-lg font-medium">
        Created with<img className="w-6 h-6 drop-shadow-[0_0_4px_rgba(255,0,0,0.5)] animate-pulse" src="/icons/heart.png" alt="heart" />by Pramod
      </div>
    </div>
  )
}

export default Footer