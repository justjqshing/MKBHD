import React from 'react'
import { BDlogo, BLlogo } from '../assets/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { RN } from '../Constants'
const Slider = ( {theme} ) => {
  return (
    <div className='dark:bg-zinc-950 bg-white mt-10 relative pb-20'>
    <div className='flex overflow-hidden'>
       <div className='flex flex-row flex-nowrap py-32 max-sm:py-18 animate-loopscroll'>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
    </div>
    <div className='flex flex-row flex-nowrap py-32 max-sm:py-18 animate-loopscroll' aria-hidden={true}>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
      <h1 className='text-[10vw] xl:text-8xl dark:text-white font-poppins font-bold mr-4'>MATTEBLACKEVERYTHING</h1>
    </div>
    </div>
    <div className='w-20 h-20 bg-zinc-300 dark:bg-zinc-900 rotate-45 absolute -top-12  max-sm:hidden -left-12'></div>
    <div className='w-12 h-12 bg-zinc-300 dark:bg-zinc-900 rotate-45 absolute -top-6  -left-6'></div>
    <div className='flex justify-center flex-col items-center'>
      <img src={theme === 'dark' ? BDlogo : BLlogo} className='max-w-[5em] mb-5'></img>
      <div className='flex flex-row gap-10 mt-3'>
        {RN.map((item) => (
          <FontAwesomeIcon icon={item.icon} className='dark:text-white font-poppins dark:dark:text-white w-[1.5em] hover:text-red-600 hover:dark:text-red-600 h-[1.5em] duration-300 cursor-pointer'/>
        ))}
      </div>
      <div className='flex flex-row gap-5 mt-9 mb-10'>
        <FontAwesomeIcon icon={faPlus} className='dark:text-white dark:dark:text-white w-[1.5em]   h-[1.5em] duration-300 '/>
        <div className='flex flex-row gap-5 max-sm:flex-col max-sm:items-center'>

        <a href='#'>
          <h1 className='text-[1em] dark:dark:text-white font-poppins text-BLACK hover:dark:text-red-600 hover:text-red-600  duration-300'>Contact</h1>
        </a>
        <a href='#'>
          <h1 className='text-[1em] dark:dark:text-white font-poppins text-BLACK hover:dark:text-red-600  hover:text-red-600 duration-300'>Privacy Policy</h1>
        </a>
        <a href='#'>
          <h1 className='text-[1em] dark:dark:text-white font-poppins text-BLACK hover:dark:text-red-600  hover:text-red-600 duration-300'>Terms of Service</h1>
        </a>
        <a href='#'>
          <h1 className='text-[1em] dark:dark:text-white font-poppins text-BLACK hover:dark:text-red-600  hover:text-red-600 duration-300'>Returns & FAQ</h1>
        </a>

        </div>
        <FontAwesomeIcon icon={faPlus} className='dark:text-white dark:dark:text-white w-[1.5em] h-[1.5em] duration-300 '/>
      </div>
      <div className='flex flex-row gap-5'>
        <FontAwesomeIcon icon={faPlus} className='dark:text-white dark:dark:text-white w-[1.5em]   h-[1.5em] duration-300 '/>
        <h1 className='text-[1em] dark:dark:text-white font-poppins text-BLACK duration-300'>© 2024 MKBHD</h1>
        <h1 className='text-[1em] dark:dark:text-white font-poppins text-BLACK duration-300'>Powered by <span className='hover:dark:text-red-600  hover:text-red-600 duration-300 cursor-pointer'>Josh</span></h1>
        <FontAwesomeIcon icon={faPlus} className='dark:text-white dark:dark:text-white w-[1.5em]   h-[1.5em] duration-300 '/>
      </div>
    </div>
    </div>
   
  )
}

export default Slider