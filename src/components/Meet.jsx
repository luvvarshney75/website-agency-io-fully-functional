import React from 'react'
import {teamData} from '../assets/assets'
import assets from '../assets/assets' 
const Meet = () => {
  return (
    <>
    <div className="flex flex-col items-center text-center pt-28 px-4 sm:px-12 lg:px-24 xl:px-24 text-xl font-bold">
<h1 className="text-3xl font-bold mb-10">Meet Our Team</h1>
<p className="text-gray-600"> A passionate team of digital experts dedicated to your brands success </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center mt-4 gap-4 border border-gray-300 p-4 rounded-lg shadow-md max-w-6xl mx-auto">
    {teamData.map((team, index )=> {

      return(<img src={team.image} alt={`Team Member` } className="w-10 h-10 rounded-full object-cover mb-4  " key={index}  value={team.name}/>
        

      )
    })
   
}
 


     
      
  
   


</div>
    <div> 




    </div>
    
    
    </>
  )
}

export default Meet