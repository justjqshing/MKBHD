import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const Videos = () => {
  const [activeone, setActiveone] = useState(false)
  const [activetwo, setActivetwo] = useState(false)
  const [activethree, setActivethree] = useState(false)
  const hoverone = () => {
    if (activeone === false) {
      setActiveone(true)
    }else{
      setActiveone(false)
    }
  }
  const hovertwo = () => {
    if (activetwo === false) {
      setActivetwo(true)
    }else{
      setActivetwo(false)
    }
  }
  const hoverthree = () => {
    if (activethree === false) {
      setActivethree(true)
    }else{
      setActivethree(false)
    }
  }
  return (
    <div className="flex flex-col justify-between  p-6 max-sm:px-10 px-20 dark:bg-zinc-900 bg-zinc-300">
      <h1 className='dark:dark:text-white text-4xl font-poppins max-sm:text-[15vw] font-semibold -skew-x-6 mb-10
      '>
        Featured Videos
      </h1>
      <div className='flex flex-row gap-14 max-sm:gap-4 max-md:flex-col'>
      <div onMouseEnter={hoverone} onMouseLeave={hoverone} className='flex flex-col justify-start items-start relative'>
        <a href='https://www.youtube.com/watch?v=ddTV12hErTc' target='_blank'>
        <div className='flex flex-row justify-between w-full'> 
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm flex -ml-8 mb-5 duration-300 ${activeone ? 'md:rotate-[225deg]' : ''}`}/>
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm hidden duration-300 ${activeone ? 'md:rotate-[225deg]' : ''} -mr-8 lg:hidden max-md:flex`}/>
        </div>
        <img  src='https://i.ytimg.com/vi/ddTV12hErTc/maxresdefault.jpg' 
        className={` rounded-md max-w-[full] duration-300 ${activeone ? 'md:scale-105' : ''}`}/>
        <div className='flex flex-row justify-between w-full'> 
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm flex -ml-8 mt-4 mb-5 duration-300 ${activeone ? 'md:rotate-[225deg]' : ''}`}/>
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm  hidden duration-300 ${activeone ? 'md:rotate-[225deg]' : ''} -mr-8 max-md:flex`}/>
        </div>
        <FontAwesomeIcon icon={faYoutube} className={`text-white absolute top-[50%] left-[50%] text-4xl duration-300 translate-x-[-50%] translate-y-[-50%] opacity-0 ${activeone ? 'opacity-80' : ''}`}/>
        </a>
      </div>
      


      <div onMouseEnter={hovertwo} onMouseLeave={hovertwo} className='flex flex-col justify-start items-start relative'>
        <div  className='flex flex-row justify-between w-full'> 
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white max-sm:text-sm text-xl flex -ml-8 mb-5 duration-300 ${activetwo ? 'md:rotate-[225deg]' : ''}`}/>
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white max-sm:text-sm text-xl hidden -mr-8 max-md:flex duration-300 ${activetwo ? 'md:rotate-[225deg]' : ''}`}/>
        </div>
        <img src='https://i.ytimg.com/vi/Ct2zo1cuzPQ/maxresdefault.jpg' className={`max-w-[full] rounded-md duration-300 ${activetwo ? 'md:scale-105' : ''}`}/>
        <div className='flex flex-row justify-between w-full'> 
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white max-sm:text-sm text-xl flex mt-4 -ml-8 mb-5 duration-300 ${activetwo ? 'md:rotate-[225deg]' : ''}`}/>
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white max-sm:text-sm text-xl hidden duration-300 ${activetwo ? 'md:rotate-[225deg]' : ''} -mr-8 max-md:flex`}/>
        </div>
        <FontAwesomeIcon icon={faYoutube} className={`text-white absolute top-[50%] left-[50%] text-4xl duration-300 translate-x-[-50%] translate-y-[-50%] opacity-0 ${activetwo ? 'opacity-80' : ''}`}/>
      </div>
      
      

      
      <div onMouseEnter={hoverthree} onMouseLeave={hoverthree} className='flex flex-col justify-start items-start relative'>
        <div className='flex flex-row justify-between w-full'> 
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm flex -ml-8 mb-5 duration-300 ${activethree ? 'rotate-[225deg]' : ''}`}/>
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm flex -mr-8 duration-300 ${activethree ? 'rotate-[225deg]' : ''}`}/>
        </div>
        <img src='https://i.ytimg.com/vi/1KEtxTQUzxY/maxresdefault.jpg' className={`max-w-[full]  rounded-md duration-300 ${activethree ? 'scale-105' : ''}`}/>
        <div className='flex flex-row justify-between w-full'> 
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm flex -ml-8 mt-5 duration-300 ${activethree ? 'rotate-[225deg]' : ''}`}/>
          <FontAwesomeIcon icon={faPlus} className={`dark:text-white text-xl max-sm:text-sm flex -mr-8 mt-5 duration-300 ${activethree ? 'rotate-[225deg]' : ''}`}/>
        </div>
        <FontAwesomeIcon icon={faYoutube} className={`text-white absolute top-[50%] left-[50%] text-4xl duration-300 translate-x-[-50%] translate-y-[-50%] opacity-0 ${activethree ? 'opacity-80' : ''}`}/>
      </div>
    
    </div>
    
    </div>
  );
};

export default Videos;