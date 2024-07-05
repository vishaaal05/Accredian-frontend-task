import React from 'react'
import { useState } from 'react';
import ReferModal from './ReferModal';

const MainReactangle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      {/* parent div */}
    <div className="bg-blue-200  max-w-4xl shadow-lg rounded-3xl  flex justify-between my-10  ">
      {/* child div 1 */}
      <div className="w-1/3 mx-12 my-20" >
    
        <h2 className="text-5xl font-bold mb-2">Let's Learn <h1>& Earn</h1></h2>
        <p className="text-lg ">Get a chance to win <p>up-to <span className='text-3xl font-bold text-blue-700'>Rs. 15,000</span></p> </p>
        <button  onClick={() => setModalIsOpen(true)}
 className="bg-blue-700 mt-10 text-white px-7 py-2 rounded-lg">Refer Now</button>
  <ReferModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />

      </div>
      {/* child div 2 */}
      <div className="w-1/2 mt-6 mx-3" >
        <img  src="/image1.png" alt="Learn and Earn..." className="w-full h-full object-contain"
         />
         
      </div>
    </div>
  </div>

  )
}

export default MainReactangle