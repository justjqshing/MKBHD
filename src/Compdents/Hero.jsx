import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'
const Hero = () => {
  return (
    <div  className='dark:bg-gradient-to-r dark:from-zinc-700 dark:to-zinc-100 bg-gradient-to-r from-slate-400 to-gray-300 h-[46em] w-[vw] relative z-5 overflow-hidden '>
      <video autoPlay loop muted className='absolute bg-black w-[100vw] h-[46em] object-cover dark:invert '
      src='https://storage.googleapis.com/popshopprod-shop-renderer-assets-q9gk7sc6/themes/assets/74253f59-c16d-4728-9ad6-803da8ffdc5e/assets/hero-video-with-multiple-buttons-1700666646-video-ab4ceb1e95742187fe677bf9070cf092638955e28eec6d5b87a3db7455d9948b.mp4'>
      </video>
      <div className='absolute w-[98vw] items-center text-center justify-center flex flex-col h-[42em]'>
        <h1 className='flex max-sm:max-w-[400px] dark:text-white  text-black text-[5em] font-bold mt-[1em] max-xl:mt-[2.5em] max-sm:text-[2.5em] font-poppins'>QUALITY TECH VIDEOS</h1>
        <div className='flex flex-row flex-wrap max-sm:flex-col max-w-[1400px] gap-5 mt-8 justify-center items-center'>
          <h1 className='text-white py-4 px-14 bg-red-600 font-bold font-poppins -skew-x-[17deg] ml-4 w-[15em] max-sm:w-[20em] max-sm:mr-2 hover:opacity-60 duration-200 text-mf '>MKBHD MERCH</h1>
          <h1 className='text-white flex justify-center items-center dark:text-black py-4 px-14 bg-black dark:bg-white font-bold font-poppins -skew-x-[17deg] max-sm:w-[20em] hover:opacity-60 duration-200'>
            <FontAwesomeIcon icon={faYoutube} className='w-[1.4em] h-[1.5em] dark:text-black dark:hover:text-red-600 text-white hover:text-red-600 duration-300 mr-2 cursor-pointer'/>
            WATCH NOW
          </h1>
          <h1 className='text-white flex justify-center items-center dark:text-black py-4 px-14 bg-black dark:bg-white font-bold font-poppins -skew-x-[17deg] max-sm:w-[20em] hover:opacity-60 duration-200'>
            <FontAwesomeIcon icon={faYoutube} className='w-[1.5em] h-[1.5em] dark:text-black dark:hover:text-red-600 text-white hover:text-red-600 duration-300 mr-2 cursor-pointer'/>
            The STUDIO
          </h1>
          <h1 className='text-white flex justify-center items-center dark:text-black py-4 px-14 bg-black dark:bg-white font-bold font-poppins -skew-x-[17deg] max-sm:w-[20em] hover:opacity-60 duration-200'>
            <FontAwesomeIcon icon={faSpotify} className='w-[1.5em] h-[1.5em] dark:text-black dark:hover:text-red-600 text-white hover:text-red-600 duration-300 mr-2 cursor-pointer'/>
            PODCAST
          </h1>
          <h1 className='text-white flex justify-center items-center dark:text-black py-4 px-14 bg-black dark:bg-white font-bold font-poppins -skew-x-[17deg] mr-2 max-sm:w-[20em] hover:opacity-60 duration-200'>
            <FontAwesomeIcon icon={faYoutube} className='w-[1.5em] h-[1.5em] dark:text-black dark:hover:text-red-600 text-white hover:text-red-600 duration-300 mr-2 cursor-pointer'/>
            Auto Focus
          </h1>
        </div>
       
      </div>
      <div className='w-24 h-24 bg-zinc-300 dark:bg-zinc-900 rotate-45 absolute -bottom-12  max-sm:hidden -right-12'></div>
      <div className='w-12 h-12 bg-zinc-300 dark:bg-zinc-900 rotate-45 absolute -bottom-6  -right-6'></div>
    </div>
  )
}
export default Hero