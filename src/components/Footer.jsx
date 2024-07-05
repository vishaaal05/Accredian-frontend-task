import React from 'react'

const Footer = () => {
    return (
        <div>
            <div style={{ backgroundColor: "#282828" }} className=''>
                <div className='flex items-center justify-around  py-7'>
                    <div>
                        <img className='w-1/2 ' src="https://s3-alpha-sig.figma.com/img/c893/aff7/4e95a6c2343887a2c618a82f142936cd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQiqxs9~Wuq8ADMG4EAym1SsiO7luy4~U66mxPNMCUDO8AlmvAQHh~EuygDJsDPMEKHS4Xae63B4W2j8gTQ6Db-koxTs9yqbScZgTTb3vtD7B9XaBYg2wEdk5F7FDv45kHRydUZSfAWCSuXq5RXVwbds5uxZ~fs7T4yLkIrO4u2eA6hjUGBQZEpKw0n0aleWPY-jU84n7jkbofuVIgkWUZDGO7N-7KrKZdXSXYh94W6NiEIxPtL84ZAjElBl~w9mRyUXrh4K44Y~xn8RrhsaSVnlJSyusl5AX0Dxuk-IoAUBsAx-4ePZs~Ac06dbjibVw8xBPsDmMEpZE8~JrXRPIw__" alt="" />
                    </div>
                    <div>
                        <button className='bg-blue-700 p-2 rounded-md text-white px-7'>Schedule 1-on-1 Call Now</button>
                        <div className='text-sm mx-5 text-white'>Speak with Our Learning Advisor</div>
                    </div>

                </div>
                <hr className='bg-white w-2/3 mx-auto' />
                <div className='flex items-center justify-around text-white mt-10'>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                            <h3 className="text-xl mb-2">Programs</h3>
                            <ul >
                                <li className='mt-7'><a href="#" className=" hover:underline ">Data Science & AI</a></li>
                                <li className='mt-7'><a href="#" className=" hover:underline ">Product Management</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Business Analytics</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Digital Transformation</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Business Management</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Project Management</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Strategy & Leadership</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Senior Management</a></li>
                                <li className='mt-7'><a href="#" className="hover:underline">Fintech</a></li>
                            </ul>
                        </div>
                        <div>
                            
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                            <h3 className="text-xl mb-2">Contact Us</h3>
                            <ul>
                                <li className='mt-7'>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="hover:underline">admissions@accredian.com</a></li>
                                <li className='mt-2'>Email us (For Product Management Queries): <a href="mailto:pmp@accredian.com" className="hover:underline">pmp@accredian.com</a></li>
                                <li className='mt-2'>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
                                <li className='mt-2'>Product Management Admission Helpline: +91 9625811095</li>
                                <li className='mt-2'>Enrolled Student Helpline: +91 7696222507</li>
                                <li className='mt-2'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
                                <li className='mt-2 text-lg hover:underline'><a href="">Why Accredian</a></li>
                                <li className='mt-2 text-xl'>Follow Us</li>
                                <div className='flex'>
                                <li className=''><img className='size-7 rounded-sm mt-3 cursor-pointer' src="\facebook.jpg" alt="" /></li>
                                <li><img className='size-7 rounded-sm ml-8 mt-3 cursor-pointer' src="\linkedin.png" alt="" /></li>
                                <li className=''><img className='size-7 rounded-sm ml-8 mt-3 cursor-pointer' src="\tweeter.png" alt="" /></li>
                                <li><img className='size-7 rounded-sm ml-8 mt-3 cursor-pointer' src="\instagram.png" alt="" /></li>
                                
                                </div>
                               
                            </ul>
                            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                    
                        </div>
                        </div>
                      
                        <div className=" w-full md:w-1/2 lg:w-1/4 mb-4">
                            <h3 className="text-xl mb-2">Accredian</h3>
                            <ul>
                                <li className='mt-7'><a href="#" className="hover:underline">About</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Career</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Blog</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Admission Policy</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Referral Policy</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Terms Of Service</a></li>
                                <li className='mt-1'><a href="#" className="hover:underline">Master FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-white pb-8">
                    &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer