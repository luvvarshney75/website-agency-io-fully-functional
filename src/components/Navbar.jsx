import React from 'react'
import assets from "../assets/assets"
import { useState } from 'react'
import {useEffect} from 'react'

function Navbar({theme,setTheme}) {
  const [sidebaropen, setsidebaropen] = useState(false)


useEffect(() => { 
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme( theme || (prefersDarkMode ? "dark" : "light"))
}, [])

  
  useEffect(() => {
 if(theme === "dark"){
  document.documentElement.classList.add("dark")
 } else{
  document.documentElement.classList.remove("dark")
 }  

  localStorage.setItem("theme", theme)
}, [theme])
 

  return (
    <div className={`${theme==="light"?`bg-red-300`:`dark:bg-purple-700` } flex justify-between items-center px-4  sm:px-8 lg:px-16 xl:px-24 py-4 sticky top-0 z-20  backdrop-blur-xl  `}>
       
       <img src={theme=='dark'? assets.logo_dark:assets.logo} className="w-34 sm:w-40" alt="logo"/>
       <div className={`text-white dark:text-red sm:text-sm space-x-6  ${!sidebaropen?`max-sm:w-0  overflow-hidden`:`max-sm:w-40 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-purple-700 max-sm:text-white max-sm:pt-20 flex transition-all duration-500 ease-in-out
       max-sm:rounded-l-3xl sm:items-center gap-5  `} 

      `}> 
      
<img 
  src={assets.close_icon} 
  alt="" 
  className={`${!sidebaropen 
    ? "hidden" 
    : "w-4 h-4 absolute top-4 right-0 cursor-pointer max-sm:block"
  }`} 
  onClick={() => { setsidebaropen(false) }} 
/>



         <img src={theme=='dark'? assets.menu_icon_dark:assets.menu_icon} alt="" className={` ${!sidebaropen ? " w-4 h-4 absolute top-11 right-2 cursor-pointer max-sm:block hidden":
         "hidden" 
         }  `} onClick={()=>{setsidebaropen(true)}}   />



<a href='#' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3">Home</a>
<a href='#services' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3">services</a>
<a href='#contact-us' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3">Contact</a>
 <a href='#contact-us' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3 block sm:hidden">Connect</a>

       </div>
 <img src={assets.sun_icon}onClick={()=>{theme==="light"?setTheme("dark"):setTheme("light")}} className={`${theme==="light"?"":"hidden"}`}></img>

 <img src={assets.moon_icon}onClick={()=>{theme==="dark"?setTheme("light"):setTheme("dark")}} className={`${theme==="dark"?"":"hidden"}`}></img>
       <div>
        <a href="#contact-us" className="text-sm  flex items-center  bg-primary text-white px-4 py-2 rounded-full hover:scale-105 transition duration-300 max-sm:hidden ">Connect <img src={assets.arrow_icon} className="ml-2 w-4 h-4"/></a>
       </div>
    </div>
  )
}

export default Navbar
