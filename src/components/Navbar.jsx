import React from 'react'
import assets from "../assets/assets"
import { useState } from 'react'
function Navbar({theme,setTheme}) {
  const [sidebaropen, setsidebaropen] = useState(false)
  return (
    <div className="flex justify-between items-center px-4  sm:px-8 lg:px-16 xl:px-24 py-4 sticky top-0 z-20 bg-white/50 dark:bg-gray-900/70 backdrop-blur-xl">
       
       <img src={theme=='dark'? assets.logo_dark:assets.logo} className="w-34 sm:w-40" alt="logo"/>
       <div className={`text-gray-800 dark:text-white sm:text-sm space-x-6  ${!sidebaropen?`max-sm:w-0  overflow-hidden`:`max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-gray-700 max-sm:text-white max-sm:pt-20 flex transition-all duration-500 ease-in-out
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



         <img src={theme=='dark'? assets.menu_icon_dark:assets.moon_icon} alt="" className={` ${!sidebaropen ? " w-4 h-4 absolute top-10 right-3 cursor-pointer max-sm:block hidden":
         "hidden" 
         }  `} onClick={()=>{setsidebaropen(true)}}   />



<a href='#' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3">Home</a>
<a href='#services' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3">services</a>
<a href='#contact-us' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3">Contact</a>
 <a href='#contact-us' className="sm:hover:border-b max-sm:border max-sm:border-white max-sm:rounded-lg max-sm:p-3 block sm:hidden">Connect</a>
       </div>

       <div>
        <a href="#contact-us" className="text-sm  flex items-center  bg-primary text-white px-4 py-2 rounded-full hover:scale-105 transition duration-300 max-sm:hidden ">Connect <img src={assets.arrow_icon} className="ml-2 w-4 h-4"/></a>
       </div>
    </div>
  )
}

export default Navbar
