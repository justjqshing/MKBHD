import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BDlogo, BLlogo } from '../assets/Images'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { LN } from '../Constants'
import { motion } from "framer-motion";
import { RiSunFill, RiMoonClearFill, RiMoonFill} from "react-icons/ri";
const MobileNav = ({open, setNavopen, theme, setTheme}) => {
    const hide = () => {
        if (open === 'open') {
            setNavopen('animate-slidesideout');
            setTimeout(() => {
                setNavopen('hidden');
            }, 440);
        }
    }
    const DMtoggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme); 
        localStorage.setItem('theme', newTheme);
    }
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 70,
    }
   
  return (
    <div className=''>
        <div className={`flex-1 top-0 w-[50%] dark:bg-black bg-white pb-20 duration-200 min-h-screen z-40 overflow-y-auto max-h-screen ${open === 'open' ? 'absolute animate-slideside' : `absolute ${open}`} `}>
        <FontAwesomeIcon icon={faX} className='w-[1.5em] h-[1.5em] dark:text-white cursor-pointer p-4' onClick={hide}/>
        <div className='flex justify-center mt-[4em] flex-col items-center text-center'>
            <img src={theme === 'dark' ? BDlogo : BLlogo} className='flex justify-center max-sm:max-h-[3em] max-h-[3.5em] object-contain'/>
            <ul className='flex flex-col gap-3 mt-10'>
                {LN.map((item) => (
                    <li key={item.name}>
                        <h1 className='dark:text-white font-poppins font-semibold'>{item.name}</h1>
                    </li>
                ))}
            </ul>
            <div onClick={DMtoggle} className={`flex-start flex h-[2.5em] w-[4em] mt-6  rounded-[50px] dark:bg-zinc-100 p-[5px] items-center shadow-inner 
                    hover:cursor-pointer bg-zinc-700 ${theme === 'dark' ? 'place-content-end' : 'place-content-start'} `}>
                        <motion.div
                            className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white/20 dark:bg-black/90"
                            layout
                            transition={spring}
                        >
                            <motion.div  whileTap={{rotate: 360}} transition={{ duration: 10 }}>
                                {theme === 'light' ? (<RiSunFill className="h-5 w-5 text-slate-100" />) : (<RiMoonFill className="h-5 w-5 text-slate-100" />)}
                            </motion.div>

                        </motion.div>   
                </div>  
        </div>

        
    </div>
        <div className={` h-[523.4px] absolute flex flex-col justify-center w-[50%] pb-20 top-0 left-[50%] z-50 min-h-screen dark:bg-black/80 bg-white/80 duration-500  ${open === 'open' ? 'absolute animate-slideside' : `absolute ${open}` }`}>
            
        </div>  
    </div>
    
  )
}

export default MobileNav