import React from 'react'

export default function Button({ children, className }) {
  return (
    <button className={`border border-white rounded-lg px-6 py-2 hover:cursor-pointer ${className}`}>{children}</button>
  )
}
