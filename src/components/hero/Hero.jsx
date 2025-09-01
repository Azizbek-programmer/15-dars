import React from 'react'
import heroimge from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className='w-full bg-[#1C1E53]'>
      <div className='container'>
        <div className='flex py-[126px] text-white'>
          <div className='w-1/2'>
            <h1 className='text-[54px] font-semibold'>Building stellar websites for early startups</h1>
            <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className='w-1/2'>
          <img className='w-full' src={heroimge} alt="" /></div>
        </div>
      </div>

    </div>
  )
}

export default Hero