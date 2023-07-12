import React from 'react'
import Wrapper from './components/Wrapper'
import Image from 'next/image'

export default function M2cteam() {
  return (
    <Wrapper>
      <div className='mx-[250px] flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-bold'><span className='text-lg'>I'm</span><br />Muhammad Qasim</h2>
          <p className='text-xl my-10'>Passionate Frontend developer building with NextJS. Proficient in HTML, CSS, and ReactJS</p>
          <button className='w-[150px] h-[35px] bg-[orange] hover:bg-white text-white hover:text-[orange] rounded-lg'>HIRE ME</button>
        </div>
        <div>
          <Image className='rounded-[100%]' src="/images/avatar2.png" alt='pic' width={400} height={400} />
        </div>
      </div>
    </Wrapper>
  )
}