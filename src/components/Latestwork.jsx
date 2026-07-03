import React from 'react'
import assets from '../assets/assets'
const Latestwork = () => {
  return (
    <>
    <div className="flex flex-col items-center text-center pt-28 px-4 sm:px-12 lg:px-24 xl:px-24 text-xl font-bold">
      <h1 className="text-3xl font-bold mb-10 "> Our latest works </h1>
   
    <p className="text-gray-600">Browse our portfolio of innovative projects that showcase creativity and excellence in design and development.</p>


    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'> 
      <div className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col">
    <img src={assets.work_mobile_app} alt="Latest Work" className=" h-54 object-cover rounded-lg mt-4 mb-4 " />
    <p className="text-gray-700">Mobile App</p>
    <p className="text-gray-600 text-sm mt-5" > We turn bold ideas into powerful digital solutions that connect, engage...</p>
</div>
     <div className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col">
    <img src={assets.work_fitness_app} alt="Latest Work" className=" h-54 object-cover rounded-lg mt-4 mb-4" />
    <p className="text-gray-700 text-xl">Fitness App</p>
    <p className="text-gray-600 text-sm mt-5" > We help you create a marketing strategy that drives results.</p>
</div>
    <div className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col"> 
    <img src={assets.work_dashboard_management} alt="Latest Work" className=" h-54 object-cover rounded-lg mt-4 mb-4" />
    <p className="text-gray-700">Dashboard Management</p>
    <p className="text-gray-600 text-sm mt-5" >We help you execute your plan and deliver results. </p>
</div>
    <div>
</div>
    </div>
    </div>
    </>
  )
}

export default Latestwork
