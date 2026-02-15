import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
function App() {

  const [theme, setTheme] = useState('dark')
  return (
  <div className="relative">
   <Navbar theme={theme} setTheme={setTheme}/>
  </div>
  )
}

export default App