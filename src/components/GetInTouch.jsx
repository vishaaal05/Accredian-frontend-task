import React from 'react'

const GetInTouch = () => {
    return (
        <div>
            <div className="bg-blue-500 w-4/5 py-10 mx-auto text-white rounded-lg shadow-md p-6 flex justify-between items-center mt-12 mb-12">
                <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c1.038 0 2.003.186 2.863.52a1 1 0 011.261-.326l.001.001a1 1 0 01.63.865v5.145a1 1 0 01-.63.865 1.002 1.002 0 01-1.261-.326 10.014 10.014 0 00-2.863-.519c-1.038 0-2.003.186-2.863.52a1 1 0 01-1.261-.326l-.001-.001a1 1 0 01-.63-.865V9.929a1 1 0 01.63-.865 1.002 1.002 0 011.261.326A10.014 10.014 0 0012 8z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.293 6.707a1 1 0 011.414 0L7 8.586V6a1 1 0 011-1h1V3.5a1.5 1.5 0 113 0V5h1a1 1 0 011 1v2.586l1.293-1.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0L16 15.414V18a1 1 0 01-1 1h-1v1.5a1.5 1.5 0 11-3 0V19H9a1 1 0 01-1-1v-2.586l-1.293 1.293a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4z"
                            />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Want to delve deeper into the program?</h3>
                        <p>Share your details to receive expert insights from our program team!</p>
                    </div>
                </div>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-gray-100 focus:outline-none">
                    Get in touch &rarr;
                </button>
            </div>

        </div>
    )
}

export default GetInTouch