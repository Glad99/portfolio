import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' pt-5 lg:pt-9 pb-10 bg-gradient-to-t from-slate-100' >
      <div className='mx-[1rem] lg:mx-[15rem] flex flex-col justify-center items-center'>
      <h3 className='text-2xl font-bold md:text-3xl text-gray-500 text-center'>Contact</h3>
      <p className='md:text-xl md:w-[40rem] text-center'>Ready to take your web projects to the next <span className='text-purple-900'> level?</span> <br />
Let's collaborate and create exceptional user experiences together. <br />
Contact me now and let's discuss how I can contribute to your frontend development needs. Reach out and let's build something amazing!</p>
      <div className='flex flex-col gap-2 *:text-lg '>
        <p className='mt-5 font-semibold'>Write me a message!</p>
        <div >
          <p>Your Name</p>
          <input type="text" placeholder='Name' className='p-1 border-2 border-gray-400 rounded w-[20rem] md:w-[25rem] '  />
        </div>
        <div>
          <p>Your Email</p>
          <input type="text" placeholder='Email'className='p-1 rounded border-2 border-gray-400 w-[20rem] md:w-[25rem]'  />
        </div>
        <div>
          <p>Message</p>
        <textarea name="" id="" cols="30" rows="10" placeholder='Write here...' className='p-1 border-2 border-gray-400 rounded w-[20rem] md:w-[25rem] h-[10rem]'></textarea>
        </div>
        <button className='p-1 rounded border-4 shadow-xl border-purple-900 w-[20rem] md:w-[25rem] font-bold hover:bg-slate-700 hover:text-white hover:border-none hover:py-[7.5px] hover:px-4 cursor-pointer text-purple-900'>Send</button>
      </div>
      </div>
    </div>
  )
}

export default Contact