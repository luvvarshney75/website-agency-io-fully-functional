import React from 'react'
import { company_logos } from '../assets/assets'
const Trustedby = () => {
  return (
    <div >
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium text-grey-500 rounded-full p-2 mt-8 ">Trusted by 10k people</p>
      <div className="flex flex-wrap justify-center items-center mt-4 gap-4"> 
        {company_logos.map((logo,index)=>{
          return (
         <img src={logo} alt="company logo" className="w-20  mx-4 my-4 inline-block dark:drop-shadow-xl" key={index}/>
        )
        })}
      </div>
    </div>
  )
}

export default Trustedby
