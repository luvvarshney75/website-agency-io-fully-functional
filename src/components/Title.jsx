import React from 'react'

const Title = ({title, description }) => {
  return (
    <>
    
    <h2 className="text-2xl font-medium sm:text-5xl">{title}</h2>
    <p className="text-gray-600 text-center max-w-lg">{description}</p>
    
    
    </>
  )
}

export default Title