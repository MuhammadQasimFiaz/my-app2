import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 border-2 border-black rounded-lg mx-5 mt-5'>
      <div>
        <Link href='/' className='text-lg font-bold hover:text-[#eee2349c] ease-in-out duration-300'>m2cteam</Link>
      </div>
      <div>
        <Link href='./services' className='mx-5 text-lg font-bold hover:text-[#eee2349c] ease-in-out duration-300'>Services</Link>
        <Link href='/' className='mx-5 text-lg font-bold hover:text-[#eee2349c] ease-in-out duration-300'>Portfolio</Link>
        <Link href='./contact' className='mx-5 text-lg font-bold hover:text-[#eee2349c] ease-in-out duration-300'>contact</Link>
      </div>
      <div>
        <Link href='./createProfile' className=' text-lg font-bold hover:text-[#eee2349c] ease-in-out duration-300'>Create Profile</Link>
      </div>
    </div>
  )
}
