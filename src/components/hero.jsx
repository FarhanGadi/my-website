  import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

export default function Hero() {
  return (
   <>
   <div name='hero' className=' w-full h-screen bg-[#0a192f]'>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-500'> Hi, my name is </p>
      <h1 className='text-4xl sm:text-5xl   font-bold text-[#ccd6f6]'>Farhan Gadi</h1>
      <h2 className='text-4xl sm:text-5xl   font-bold text-[#8892b0]'>I,m a Full Stack Developer.</h2>
    <p  className='text-[#8892b0] py-4 max-w-[700px]' >I am full stack developer specializing in building (and occasionally designing) excetional 
      digital experiences. Currently, I'm focused on building responsive full-stack web applications.
    </p>
    <div>
    <button className='text-white group border-2 px-5 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
    <span className='group-hover:rotate-90 duration-300'>
     <HiArrowNarrowRight className='ml-3'/> 
    </span>
     
     </button>

    </div>
    </div> 
   </div>

   </>
  )
}

