// import React from 'react'
// import Team1 from '../../../assets/Team1.svg';
// import Team2 from '../../../assets/Team2.svg';
// import Team3 from '../../../assets/Team3.svg';
// import { MdEmail } from "react-icons/md";
// import { FaLinkedinIn } from "react-icons/fa";

// function Team() {
//     return (
//         <>
//             <div>
//                 <div className='flex justify-center text-white text-3xl font-semibold'>Meet Our Team</div>
//                 <div className='flex justify-evenly'>
//                 <div className='w-[300px] h-[500px] rounded-full object-cover bg-[#C77DFF]'>
//                     <div>
//                         <img src={Team1} alt='' className='w-[325px] h-[255px] rounded-t-full object-cover' />
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <p className='text-xl font-bold text-[#3C096C]'>Nishant Chawla</p>
//                         <p className='text-sm font-normal text-[#3C096C]'>Chief Operating Officer</p>
//                         <p className='text-md font-normal text-white ml-5 mr-5'>He has a rather strategic mind and knows how to manage operations in the most efficient manner.</p>
//                     </div>
//                     <div className='flex justify-between ml-10 mr-10 mt-5'>
//                         <div className='bg-white/35 rounded-full'>
//                             <a
//                                 href="https://www.linkedin.com/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <MdEmail className='w-10 h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
//                             </a>
//                         </div>
//                         <div className='bg-white/35 rounded-full'>
//                             <a
//                                 href="https://www.linkedin.com/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <FaLinkedinIn className='w-10 h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-[300px] h-[500px] rounded-full object-cover bg-[#C77DFF]'>
//                     <div>
//                         <img src={Team2} alt='' className='w-[325px] h-[255px] rounded-t-full object-cover' />
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <p className='text-xl font-bold text-[#3C096C]'>Nishant Chawla</p>
//                         <p className='text-sm font-normal text-[#3C096C]'>Chief Operating Officer</p>
//                         <p className='text-md font-normal text-white ml-5 mr-5'>
//                             Bandhul Bansal is an Avid Investor who has been Working 
//                             the Space of Stock Market Education for the past 6 years having 
//                             Partnered with Banks such as ICICI bank he understands the 
//                             financial System and Has founded Finstreet to Spread his learning
//                         </p>
//                     </div>
//                     <div className='flex justify-between ml-10 mr-10 mt-5'>
//                         <div className='bg-white/35 rounded-full'>
//                             <a
//                                 href="https://www.linkedin.com/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <MdEmail className='w-10 h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
//                             </a>
//                         </div>
//                         <div className='bg-white/35 rounded-full'>
//                             <a
//                                 href="https://www.linkedin.com/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <FaLinkedinIn className='w-10 h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-[300px] h-[500px] rounded-full object-cover bg-[#C77DFF]'>
//                     <div>
//                         <img src={Team3} alt='' className='w-[325px] h-[255px] rounded-t-full object-cover' />
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <p className='text-xl font-bold text-[#3C096C]'>Nishant Chawla</p>
//                         <p className='text-sm font-normal text-[#3C096C]'>Chief Operating Officer</p>
//                         <p className='text-md font-normal text-white ml-5 mr-5'>
//                             Sahil is the head of Business Development and has been 
//                             doing justice to his position in the company for the 
//                             last three years. Despite being the youngest of us, he 
//                             has been the mind behind some of our most successful scalable ideas.
//                         </p>
//                     </div>
//                     <div className='flex justify-between ml-10 mr-10 mt-5'>
//                         <div className='bg-white/35 rounded-full'>
//                             <a
//                                 href="https://www.linkedin.com/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <MdEmail className='w-10 h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
//                             </a>
//                         </div>
//                         <div className='bg-white/35 rounded-full'>
//                             <a
//                                 href="https://www.linkedin.com/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <FaLinkedinIn className='w-10 h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Team

import React from 'react';
import Team1 from '../../../assets/Team1.svg';
import Team2 from '../../../assets/Team2.svg';
import Team3 from '../../../assets/Team3.svg';
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import BubbleBackground from '../BubbleBackground';

function Team() {
    return (
        <>
            <div className='p-10'>
            <div className='absolute'>
            <BubbleBackground/>
          </div>
                <p className='text-center text-white text-3xl font-semibold mb-8'>Meet Our Team</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center '>
                    {/* Team Member 1 */}
                    <div className='w-[200px] sm:w-[250px] lg:w-[300px] h-auto bg-[#C77DFF] rounded-full '>
                        <div>
                            <img src={Team1} alt='Team1' className='w-full h-[140px] sm:h-[180px] lg:h-[230px] rounded-t-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-end'>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl lg:text-2xl font-bold text-[#3C096C]'>Nishant Chawla</p>
                            <p className='text-sm lg:text-base font-normal text-[#3C096C]'>Chief Operating Officer</p>
                            <p className='text-xs sm:text-sm lg:text-sm font-normal text-white text-center mt-3  ml-5 mr-5'>
                                He has a strategic mind and excels at managing operations efficiently. 
                                His proactive approach streamlines processes, solves challenges early, and 
                                fosters team collaboration. His leadership has driven key projects, improved 
                                efficiency, and delivered significant cost savings.
                            </p>
                        </div>
                        <div className='flex justify-between ml-14 mr-14 p-10'>
                            <div className='bg-white/35 rounded-full'>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MdEmail className='w-8 sm:w-10 h-8 sm:h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
                                </a>
                            </div>
                            <div className='bg-white/35 rounded-full'>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className='w-8 sm:w-10 h-8 sm:h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='absolute px-16'>
            <BubbleBackground/>
          </div>

                    {/* Team Member 2 */}
                    <div className='w-[200px] sm:w-[250px] lg:w-[300px] h-auto bg-[#C77DFF] rounded-full '>
                        <div>
                            <img src={Team2} alt='Team2' className='w-full h-[140px] sm:h-[180px] lg:h-[230px] rounded-t-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl lg:text-2xl font-bold text-[#3C096C]'>Bandhul Bansal</p>
                            <p className='text-sm lg:text-base font-normal text-[#3C096C]'>Founder</p>
                            <p className='text-xs sm:text-sm lg:text-sm font-normal text-white text-center mt-3  ml-5 mr-5'>
                                Bandhul Bansal is an Avid Investor who has been Working 
                                the Space of Stock Market Education for the past 6 years having 
                                Partnered with Banks such as ICICI bank he understands the 
                                financial System and Has founded Finstreet to Spread his learning.
                            </p>
                        </div>
                        <div className='flex justify-between ml-14 mr-14 p-10'>
                            <div className='bg-white/35 rounded-full'>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MdEmail className='w-8 sm:w-10 h-8 sm:h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
                                </a>
                            </div>
                            <div className='bg-white/35 rounded-full'>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className='w-8 sm:w-10 h-8 sm:h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    {/* Team Member 3 */}
                    <div className='w-[200px] sm:w-[250px] lg:w-[300px] h-auto bg-[#C77DFF] rounded-full'>
                        <div>
                            <img src={Team3} alt='Team3' className='w-full h-[140px] sm:h-[180px] lg:h-[230px] rounded-t-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl lg:text-2xl font-bold text-[#3C096C]'>Sahil</p>
                            <p className='text-sm lg:text-base font-normal text-[#3C096C]'>Head of Business Development</p>
                            <p className='text-xs sm:text-sm lg:text-sm font-normal text-white text-center mt-3 ml-5 mr-5'>
                                Sahil is the head of Business Development and has been 
                                doing justice to his position in the company for the 
                                last three years. Despite being the youngest of us, he 
                                has been the mind behind some of our most successful scalable ideas.
                            </p>
                        </div>
                        <div className='flex justify-between ml-14 mr-14 p-10'>
                            <div className='bg-white/35 rounded-full'>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MdEmail className='w-8 sm:w-10 h-8 sm:h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
                                </a>
                            </div>
                            <div className='bg-white/35 rounded-full'>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className='w-8 sm:w-10 h-8 sm:h-10 p-2 text-[#3C096C] hover:-translate-y-2 transition-transform duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Team;
