import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribe Button Clicked")
    // logic for form Submission
  }
  return (
    <footer className='p-4 md:p-12'>
      <div className="grid md:grid-cols-3 gap-6 ">
        <div className="flex flex-col h-44">
          <div className="flex">
            <Link to={`/`} className='flex justify-center items-center gap-2'>
              <img src={logo} alt="logo" className='h-16' />
              <span className='font-black text-2xl'>FloraVision</span>
            </Link>
          </div>
          <p className='md:text-base text-xs font-thin py-4'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
        </div>

        <div className="flex flex-col h-44 gap-4">
          <h2 className='text-semibold text-xl'>Quick Link's</h2>
          <ul className='underline text-sm md:text-base'>
            <li>Home</li>
            <li>Type's Of Plant's</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="flex flex-col h-44 gap-4">
          <h2 className='text-semibold md:text-xl'>For Every Update.</h2>
          <form className='md:border md:rounded-xl w-fit p-0.5 md:gap-0 gap-4 flex flex-wrap' onSubmit={handleSubmit}>
            <input type="text" className='md:focus:outline-none outline-2 md:outline-none md:p-0 p-2 outline-white focus:outline-2 rounded-xl' />
            <button className='bg-white px-4 py-2 text-[#1B2316] rounded-lg'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-2">
        <div className="flex gap-18 font-bold">
          <span>FB</span>
          <span>TW</span>
          <span>LI</span>
        </div>

        <>
          {"FloraVision © all right reserve"}
        </>
      </div>

    </footer>
  )
}
