import React from 'react'
import { Link } from 'react-router-dom'
import logoimge from "../../assets/Logo.svg"

const Header = () => {
  return (
    <header className='bg-[#1C1E53]'>
      <div className='container'>
        <nav className='flex items-center text-white justify-between h-[92px]'>
          <div>
            <Link to={"/"}>
            <img src={logoimge} alt="" />
            </Link>
          </div>
          <ul className='flex gap-10'>
            <li>
              <Link className='hover:text-white text-[#BBBBCB] duration-500' to={"/"}>Home</Link>
            </li>
            <li>
              <Link className='hover:text-white text-[#BBBBCB] duration-500' to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link className='hover:text-white text-[#BBBBCB] duration-500' to={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link className='hover:text-white text-[#BBBBCB] duration-500' to={"/work"}>Work</Link>
            </li>
            <li>
              <Link className='hover:text-white text-[#BBBBCB] duration-500' to={"/blog "}>Blog</Link>
            </li>
            <li>
              <Link className='hover:text-white text-[#BBBBCB] duration-500 border py-4 px-12 rounded-full' to={"/contact "}>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header