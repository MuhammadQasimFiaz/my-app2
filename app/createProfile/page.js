import React from 'react'

export default function CreateProfile() {
  return (
    <div className='mx-[250px] mt-10'>
      {/* <div className=''> */}
      <h1 className='text-4xl font-bold mb-10'>Create your Development Profile</h1>
        {/* <form className=''> */}
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <textarea className='rounded-[20px] border-2 border-black w-[300px] h-[200px]' name=""></textarea>
                </div>
                <div>
                    <input className='block border-2 border-black mb-2 w-[500px] p-2 rounded-lg' type="text" placeholder='Full Name' />
                    <input className='block border-2 border-black mb-2 w-[500px] p-2 rounded-lg' type="text" placeholder='Education' />
                    <input className='block border-2 border-black mb-2 w-[500px] p-2 rounded-lg' type="text" placeholder='Top Skills' />
                </div>
            </div>
            
                <textarea className='w-full rounded-[20px] p-2 text-black border-2 border-black' rows={10} name="textarea" id="#" placeholder='intro'></textarea>
            
        {/* </form> */}
    {/*   </div> */}
    </div>
  )
}
