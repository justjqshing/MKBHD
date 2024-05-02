import React from 'react'
import { RN, products } from '../Constants' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
const Shop = () => {
  const [active, setActive] = useState()
  const rotate = (index) => {
    setActive(index)
  }
  return (
    <div className="w-[screen] h-[screen] max-sm:p-0 p-6 z-50 bg-zinc-300 dark:bg-zinc-900  overflow-hidden" >
     <div className='grid grid-cols-4 max-xl:grid-cols-2 mb-10'>
      {products.map((item, index) => (
         <div onMouseEnter={() => rotate(index)} onMouseLeave={() => setActive()} className={`flex relative flex-row md:hover:scale-110 duration-200 ${index > 15 ? 'hidden' : ''}`}>
          <FontAwesomeIcon  icon={faPlus} className={`w-[1.5em] max-sm:w-[0.9em]  h-[1.5em] dark:text-white cursor-pointer p-4  duration-500 ease-in-out ${index == active ? 'md:rotate-[225deg]' : ''}`}/>
          

         <div className='min-w-[150px] min-h-[280px] 2xl:w-[20rem] athic:h-[22vw] max-sm:h-[50vh] thic:h-[25vh] max-sm:w-[40vw] max-lg:h-[24rem] 2xl:h-[28rem] 3xl:w-[24vw] 3xl:h-[26vw] max-lg:w-[20rem] xl:h-[29rem] max-2sm:h-[60vw]  h-[39vw] w-[38rem] dark:bg-zinc-800 max-sm:-ml-4 bg-white mt-14 relative overflow-hidden'>
           <div className='w-full flex flex-col justify-center items-center max-sm:mt-5 mt-5'>
             <img className=' w-[20rem] athic:w-[30em] thic:w-[13vh] 3xl:w-[18vw] max-sm:w-[8rem] max-lg:w-[14rem] 2xl:w-[17rem] max-md:w-[12rem] xl:w-[15rem]' src={item.img}></img>
             <div className='xl:w-[15rem] thic:w-[13vh] athic:w-[30em] max-sm:w-[8rem] w-[20rem] max-md:w-[12rem] 2xl:w-[17rem] 3xl:w-[18vw] max-lg:w-[14rem] flex flex-col mt-4 max-sm:mt-2 flex-nowrap gap-4 justify-start'>
              <h1 className='dark:text-white  font-poppins max-sm:text-[0.9rem] max-md:text-[0.9em] max-lg:text-[0.9em] 2xl:text-[1vw] text-[1.2em] thic:text-[1.2vh] font-bold lg:-skew-x-12 uppercase'>{item.name}</h1>
              <h1 className='dark:text-white font-poppins text-[1.2em] max-sm:text-[0.9rem] 2xl:text-[1vw] font-semibold thic:text-[1.2vh] -skew-x-12 '>{item.price}</h1>
              
              </div>
              
             
           </div>
           
           
           
 
           
           <div className='w-12 h-12 max-sm:w-10 max-sm:h-10 dark:bg-zinc-900 bg-zinc-300 rotate-45 -top-6 absolute border-collapse -left-6'></div>
           <div className='w-12 h-12 dark:bg-zinc-900 bg-zinc-300 rotate-45 -bottom-6 absolute border-collapse -right-6'>
           </div>
           
           
           
         </div>
         <FontAwesomeIcon  icon={faPlus} className={` -bottom-14 absolute w-[1.5em] max-sm:w-[0.9em]  h-[1.5em] dark:text-white cursor-pointer p-4 hover:rotate-180 duration-500 ease-in-out ${index === 12 || index === 13 || index === 14 || index === 15 ? 'absolute' : 'hidden'} 
         ${index == active ? 'md:rotate-[225deg]' : ''}`}/>
       </div>
      ))}
     

     
     </div>
     
        <div className='w-[95vw] flex justify-center'>
          <NavLink to='All-Products/' className='flex flex-row gap-5'>
          <div className='bg-red-600 px-12 py-4 hover:opacity-60 duration-200 hover:cursor-pointer mt-10 mb-5'>
            <h1 className='text-white font-semibold font-poppins text-[1em]'>Browse All Products</h1>
          </div>  
          </NavLink>

        </div>
    </div>
  )
}

export default Shop
