import React from 'react'
import { useState } from 'react';
import ReferModal from './ReferModal';

const programs = [
    { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
    { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
    { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
];

const ProgramList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className="">
            <div className='text-center'>
                <div className="text-3xl mt-12 font-semibold">
                    What Are The  <span className="text-blue-700">Referral Benefits?</span>
                </div>
            </div>
            <div className='flex  w-full justify-center items-center mt-10'>

                <div class="w-64 bg-white shadow-2xl rounded-md border p-4">
                    <div class="mb-4">
                        <button class="text-white bg-blue-500 hover:bg-blue-600 w-full py-2 rounded">
                            ALL PROGRAMS &gt;
                        </button>
                    </div>
                    <div class="space-y-2">
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">PRODUCT MANAGEMENT </a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">STRATEGY & LEADERSHIP</a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">BUSINESS MANAGEMENT</a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">FINTECH</a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">SENIOR MANAGEMENT</a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">DATA SCIENCE</a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">DIGITAL TRANSFORMATION</a>
                        <a href="#" class="block text-gray-700 py-2 px-3 rounded hover:bg-gray-200">BUSINESS ANALYTICS</a>
                    </div>
                </div>

                <div className="w-3/4 p-4 ">
                    <div className="bg-blue-100 p-2 shadow-2xl border-2 rounded-t-xl flex ">
                        <span className="w-3/5 p-2 font-bold">Programs</span>
                        <span className="w-1/5 p-2 font-bold">Referrer Bonus</span>
                        <span className="w-1/5 p-2 font-bold">Referee Bonus</span>
                    </div>
                    <div className="bg-white p-2 shadow-2xl rounded-b-xl">
                        {programs.map((program, index) => (
                            <div key={index} className="flex py-2 border-b last:border-b-0">
                                <span className="w-3/5 p-2">{program.name}</span>
                                <span className="w-1/5">{program.referrerBonus}</span>
                                <span className="w-1/5">{program.refereeBonus}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-row-reverse mx-12 my-2'>
                <select className=' rounded-md p-2 text-gray-500 border-2 border-gray-500 font-bold cursor-pointer px-5' id="" >
                    <option value="courses">Show More</option>

                </select>
            </div>
            <div className="text-center">
                <button onClick={() => setModalIsOpen(true)} className="bg-blue-700 text-white px-8 py-2 rounded-lg my-10">
                    Refer Now
                </button>
                <ReferModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
            </div>


        </div>
    )
}

export default ProgramList