import React from 'react'
import aboutimage from "../../assets/about.png"

const About = () => {
  return (
    <div className='w-full bg-white'>
      <div className='container'>
        <div className='flex py-[220px] gap-[47px]'>
          <div className='w-1/2'>
            <h3 className='text-[#282938]'>About us</h3>
            <h1 className='text-[54px] font-semibold text-[#282938]' >Our designs solve problems</h1>
            <p className='mt-[37px] text-[#282938]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div>
            <img className='w-[640px] h-[337px]' src={aboutimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About