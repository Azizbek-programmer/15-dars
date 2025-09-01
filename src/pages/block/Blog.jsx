import React from 'react'
import blogimage from "../../assets/blog.png"

const Blog = () => {
  return (
    <div>
        <div className='container'>
          <div className='w-full py-[130px] text-center justify-center'>
            <h1 className='text-[54px] font-semibold text-[#282938]'>A UX Case Study on Creating a Studious Environment for Students</h1>
            <p className='py-[16px]'>Andrew Jonson Posted on 27th January 2021</p>
            <img src={blogimage} alt="" />
            <p  className='py-[16px]  text-center justify-center text-[#282938]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the <br />stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the <br /> spectator on a hillside.</p>
            <p className='text-blue-600'>Read more</p>
          </div> 
        </div>
    </div>
  )
}

export default Blog