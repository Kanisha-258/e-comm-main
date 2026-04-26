import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import bag from '../assets/bag.png'
import { Link, NavLink } from "react-router"


export default function Header() {
  const navLinks = [
    { name: "Home", route: "/" },
    { name: "Plant Type", route: "/plant-types" },
    { name: "More", route: "/more" },
    { name: "Contact", route: "/contact" }
  ]
  const amount = 0;
  return (
    <div className='flex px-4 py-4 justify-between items-center text-white'>
      <Link to={`/`} className='flex justify-center items-center gap-2'>
        <img src={logo} alt="" className='h-[44px]' />
        <span className='font-black'>FloraVision</span>
      </Link>

      <nav className='w-[804px] justify-evenly items-center indie-flower-regular text-2xl hidden md:flex'>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.route}>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className='flex gap-4 justify-center items-center'>

        <img src={search} alt="search-icon" className='w-6 h-6' />
        <img src={bag} alt="bag-icon" className='w-6 h-6' />

        <button className='flex flex-col justify-center items-center gap-2 text-white hover:cursor-pointer p-2'>
          <hr className='w-[31px]' />
          <hr className='w-[23px]' />
        </button>
      </div>
    </div>
  )
}
