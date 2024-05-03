import React, { Profiler } from 'react'
import Products from './Products'
import Nav from '../Compdents/Nav'
import ScrollToTop from '../Compdents/ScrollToTop'
import { useState, useEffect } from 'react'
import Slider from '../Compdents/Slider'
import { useLocation } from 'react-router-dom'
const Main = () => {
    const [theme, setTheme] = useState(() => String(localStorage.getItem('theme') || 'dark'));
  const [navopen, setNavopen] = useState('hidden');
  
  return (
    <main className="dark:bg-zinc-900 bg-zinc-300">
    
        <div className=" absolute z-10 top-0 athic:left-[50%] athic:-translate-x-[50%]">
      <Nav theme={theme} setTheme={setTheme} setNavopen={setNavopen} navopen={navopen} bgcolor={'dark:bg-zinc-950'}/>
    </div>
    <div className="z-10">
      <Products/>
    </div>
    <div>
        <Slider theme={theme}/>
    </div>
            
</main>

  )
}

export default Main