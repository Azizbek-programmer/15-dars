import React from 'react'
import workfacebook from "../../assets/facebook.svg"
import worktwitter from "../../assets/twitter.svg"
import workinsta from "../../assets/insta.svg"
import worklenkidin from "../../assets/lenkidin.svg"

const Work = () => {
  return (
    <div className='bg-[#F4F6FC]'>
        <div className='container'>
            <div className='text-center justify-center w-full h-[416px] py-[96px] text-[#282938]'>
            <h3 className='py-[4px]'>What we created</h3>
            <h1 className='text-[54px] font-semibold text-[#282938]'>Our Work Portfolio</h1>
            <p className='py-[24px] text-[#282938]'>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                <div className='flex text-center justify-center gap-4 text-[#282938]'>
                    <img src={workfacebook} alt="" />
                    <img src={worktwitter} alt="" />
                    <img src={workinsta} alt="" />
                    <img src={worklenkidin} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work