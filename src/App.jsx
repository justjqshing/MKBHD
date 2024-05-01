import Hero from "./Compdents/Hero";
import MobileNav from "./Compdents/MobileNav";
import Nav from "./Compdents/Nav";
import { useEffect, useState } from 'react';
import React from 'react'
import Shop from "./Compdents/Shop";
import Videos from "./Compdents/Videos";
import Slider from "./Compdents/Slider";
const App = () => {
  const [theme, setTheme] = useState(() => String(localStorage.getItem('theme') || 'dark'));
  const [navopen, setNavopen] = useState('hidden');
  
  
  
  return (
    <main className="dark:bg-zinc-900 bg-zinc-300">
    <div className="absolute z-10 athic:left-[50%] athic:-translate-x-[50%]">
      <Nav theme={theme} setTheme={setTheme} setNavopen={setNavopen} navopen={navopen}/>
    </div>
    <div className="z-10">
      <Hero/>
    </div>
    <div>
      <MobileNav open={navopen} setNavopen={setNavopen}  theme={theme} setTheme={setTheme}/>
    </div>
    <div className="shop-container">
      <Shop/>
    </div>
    <div>
      <Videos/>
    </div>
    <div>
      <Slider theme={theme}></Slider>
    </div>
    </main>
  )
}

export default App