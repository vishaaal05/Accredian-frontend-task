import React from 'react'
import { useState } from 'react';

const Faq = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(1);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

    return (
        <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Frequently Asked <span className='text-blue-700'>Questions</span></h2>
        <div className="bg-white rounded-lg shadow-md flex justify-between mt-10">
          <div className="flex flex-row md:flex-col border-b font-semibold px-5 ">
            <button className="p-4 hover:bg-gray-200 focus:outline-none text-blue-700 shadow-md">Eligibility</button>
            <button className="p-4 hover:bg-gray-200 focus:outline-none hover:text-blue-700 shadow-md">How To Use?</button>
            <button className="p-4 hover:bg-gray-200 focus:outline-none hover:text-blue-700 shadow-md">Terms & Conditions</button>
          </div>
          <div className="p-4 w-full">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 cursor-pointer" onClick={() => toggleQuestion(1)}>
                Do I need to have prior Product Management and Project Management experience to enroll in the program?
              </h3>
              {selectedQuestion === 1 && (
                <p className="mt-2">
                  No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics,
                  making it suitable for individuals from any field of work.
                </p>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold cursor-pointer" onClick={() => toggleQuestion(2)}>
                What is the minimum system configuration required?
              </h3>
              {selectedQuestion === 2 && (
                <p className="mt-2">
                  The minimum system configuration should be here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
  
    )
}

export default Faq