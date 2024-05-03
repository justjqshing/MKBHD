import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { RN, LN } from '../Constants/index';
import { RiSunFill, RiMoonClearFill, RiMoonFill} from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BLlogo, BDlogo } from '../assets/Images/index';
import { NavLink } from 'react-router-dom';
const Nav = ({ theme, setTheme, navopen, setNavopen, bgcolor}) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const DMtoggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme); 
        localStorage.setItem('theme', newTheme);
    };
    const menutoogle = () => {
        const newNav = navopen === 'open' ? 'close' : 'open';
        setNavopen(newNav);

        
    }
    useEffect(() => {
        if (navopen === 'hidden') {
            document.body.classList.remove('overflow-y-hidden')
        }else{
            document.body.classList.add('overflow-y-hidden')
        }
    }, [navopen]);
    
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 70,
    }
    addEventListener('scroll', () => {
        if(window.scrollY >= 50){
            setScroll(true);
        }else{
            setScroll(false);
        }
    });

  return (
    <>
    <nav className={`w-[100vw] flex fixed max-sm:justify-center justify-between ${bgcolor ? `${bgcolor}` : 'bg-transparent'} items-center max-sm:hidden max-lg:hidden shop-container ${scroll ? 'dark:bg-zinc-900 bg-zinc-300' : ''}`} >
        <ul className={`flex flex-1 gap-7 items-center max-lg:py-7 max-lg:px-0 p-7 ${scroll ? 'py-3' : ''} `}>
            <li className='ml-10 items-center overflow-y-hidden'>
                <div onClick={DMtoggle} className={`flex-start flex h-[2.5em] w-[4em]  rounded-[50px] dark:bg-zinc-100 p-[5px] items-center shadow-inner 
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
            </li>
           {RN.map((item) => ( 
            <li key={item.name}>
                <FontAwesomeIcon icon={item.icon} className={`hover:text-red-600 dark:hover:text-red-600 w-[1.5em] h-[1.5em]  max-lg:text-[0.5em] max-md:text-[0.8em] text-[1em] duration-300 cursor-pointer dark:text-white`}/>
            </li>
           ))}
        </ul>
        <NavLink to='/MKBHD'>
        <img src={theme === 'dark' ? BDlogo : BLlogo} className={`flex justify-center max-sm:max-h-[3em] max-h-[3.5em] ${scroll ? 'max-h-[3em]' : ''} `}/>
        </NavLink>

        
        <ul className={`flex flex-1 items-center gap-7 justify-end p-7 max-xl:gap-3 cursor-pointer ${scroll ? 'py-0' : ''}  `}>
        {LN.map((item) => ( 
            <li key={item.name}>
                <a href='#'><h1 className={`font-poppins  ${item.name === 'The Studio' ? 'max-xl:text-[0.8em] font-semibold max-2xl:text-[1em] text-[1em]' : 'font-semibold'} max-xl:text-[0.93em] max-2xl:text-[1.09em] text-[1em] hover:text-red-600 dark:hover:text-red-600 dark:text-white duration-200 max-lg:hidden flex`}>{item.name}</h1></a>
            </li>
           ))}
           <li><FontAwesomeIcon icon={faBasketShopping} className='hover:text-red-600  max-xl:text-[1em] max-2xl:text-[0.8em] text-[1em]  dark:hover:text-red-600 w-[1.5em] h-[1.5em] duration-300 cursor-pointer mr-10 dark:text-white'/></li>
        </ul>
        
        
    </nav>
    <nav className='w-[96vw] max-lg:flex hidden max-sm:justify-center justify-between bg-transparent items-center'>
    <ul className='flex-1 flex justify-between '>
        <li onClick={menutoogle} ><FontAwesomeIcon icon={faBars} className='w-[1.5em] p-4 h-[1.5em] dark:text-white cursor-pointer'/></li>
        <li><img src={theme === 'dark' ? BDlogo : BLlogo} className='flex justify-center max-sm:max-h-[3em] pt-3 max-h-[2.5em]'/></li>
        <li><FontAwesomeIcon icon={faBasketShopping} className='hover:text-red-600 dark:hover:text-red-600 w-[1.5em] h-[1.5em] duration-300 cursor-pointer p-4  dark:text-white'/></li>
    </ul>
    </nav>
    </>
  )
}

export default Nav