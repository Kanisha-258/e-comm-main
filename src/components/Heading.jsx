import React from 'react'

export default function Heading({ text, className }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <svg width="36" height="36" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M2.5 0V43C2.5 54.0457 11.4543 63 22.5 63H64" stroke="url(#paint0_linear_11_55)" stroke-width="5" />
        <defs>
          <linearGradient id="paint0_linear_11_55" x1="63.5" y1="63" x2="-4.5" y2="-6" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FBD300" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-white font-bold md:text-2xl text-xl text-nowrap">
        {text}
      </span>
      <svg width="36" height="36" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M61.5 65.5V22.5C61.5 11.4543 52.5457 2.50001 41.5 2.50001L1.09971e-05 2.50001" stroke="url(#paint0_linear_11_56)" stroke-width="5" />
        <defs>
          <linearGradient id="paint0_linear_11_56" x1="0.500012" y1="2.50001" x2="68.5" y2="71.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FBD300" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
