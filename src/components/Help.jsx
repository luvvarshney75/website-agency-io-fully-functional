import React from 'react'

const Help = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-12">Help Center</h1>
      <p className="text-center mt-4 text-gray-600">How can we assist you?</p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"> 
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">How do I create an account?</li>
            <li className="mb-2">What payment methods do you accept?</li>
            <li className="mb-2">How can I contact customer support?</li>
            <li className="mb-2">What is your refund policy?</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Help
