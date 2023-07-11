import React from 'react'

export default function Contact() {
  return (
    <div className='mx-[250px] mt-10'>
      <h1 className='text-3xl font-bold mb-10'>Feel free to contact me</h1>
      <form action="">
        <input className='w-full border-2 border-black mb-2 p-2 rounded-lg' type="text" placeholder='full name' />
        <input className='w-full border-2 border-black mb-2 p-2 rounded-lg' type="email" placeholder='email' />
        <input className='w-full border-2 border-black mb-2 p-2 rounded-lg' type="tel" placeholder='phone' />
        <textarea className='w-full border-2 border-black p-2 rounded-lg' name="" id="" rows="10" placeholder='Your message'></textarea>
      </form>
    </div>
  )
}
