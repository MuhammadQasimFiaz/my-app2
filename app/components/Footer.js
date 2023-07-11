import React from 'react'

export default function Footer() {
  return (
    <div className='text-center p-5 border-2 border-black rounded-lg mx-5'>
      <p>copyright - {new Date().getFullYear()} | Created With Love By <span className='font-bold'>Muhammad Qasim</span></p>
    </div>
  )
}
