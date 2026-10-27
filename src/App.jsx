import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Hero from './components/Hero'
import './index.css'
import Trustedby from './assets/Trustedby'
import Services from './components/Services'
import Help from './components/Help'
import Latestwork from './components/Latestwork'
import Meet from './components/Meet'
function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme")||"light")
  return (
  <div className="min-h-screen">
   <Navbar theme={theme} setTheme={setTheme}/>
   <Hero></Hero>
   <Trustedby></Trustedby>
 
   <Services></Services>
    
    <Latestwork/>
    <Meet/>
    <Help></Help>
  </div>
  )
}

export default App
//name change 