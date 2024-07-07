import React from 'react'
import { useState } from 'react';
import ReferModal from './ReferModal';

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <nav>
                <div className='bg-blue-200 text-center py-4 text-md'>Navigate your ideal career path with tailored expert advice <button className='mx-4 text-blue-700 font-semibold'>Contact Expert</button></div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-14 mx-12 my-5'>
                        <img className='w-31 h-10 cursor-pointer' src="https://accredian.com/Rcimages/logo.png" alt="" />
                        <select className='bg-blue-700 rounded-md p-2 text-white font-bold cursor-pointer' id="" >
                            <option value="courses">Courses</option>
                            <option value="data science">Science</option>
                        </select>
                    </div>

                    <div className=''>
                    <ul className=' flex items-center gap-8  font-semibold text-md mx-10 '>
                            <li onClick={() => setModalIsOpen(true)} className='cursor-pointer'>Refer & Earn</li>
                            <ReferModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
                            <li className='cursor-pointer'>Resources</li>
                            <li className='cursor-pointer'>About</li>
                            <li><button className='bg-slate-300 p-2 px-4 rounded-md'>Login</button></li>
                            <li><button className='bg-blue-700 p-2 px-4 rounded-md text-white'>Try for free</button></li>
                        </ul>
                    </div>
                </div>
              
                <div className='flex justify-center'>
                <div className='w-1/2  flex items-center justify-center gap-10 bg-blue-200 p-2 rounded-xl text-gray-700 text-lg'>
                    <div className='cursor-pointer text-blue-700 hover:text-gray-700'>Refer</div>
                    <div className='cursor-pointer'>Benefits</div>
                    <div className='cursor-pointer'>FAQs</div>
                    <div className='cursor-pointer'>Support</div>
                </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar