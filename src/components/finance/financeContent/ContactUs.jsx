import React, { useState } from 'react'
import Bank from '../../../assets/Bank.svg';
import FormLink from '../../../assets/Vector1.svg';

function ContactUs() {
  const [email, setEmail] = useState('');
  return (
    <>
      <div className='py-8 px-4'>
        <p className='text-center text-white text-2xl sm:text-3xl font-semibold'>Become a successful investor</p>
        <p className='text-center text-white text-lg sm:text-xl mb-8'>Join the network of expert traders.</p>
        
        <div className=' flex justify-around items-center flex-col lg:flex-row gap-10 lg:gap-12'>
        <div className='mb-8 lg:mb-0'>
          <img src={Bank} alt='Bank' className='w-40 sm:w-48 md:w-56 lg:w-64'/>
          </div>
          {/* <div className=' flex flex-col relative  lg:items-start'>
            <div className='relative w-full'>
            <div className='absolute w-5 h-5 ml-[19rem] mt-5 bg-white rounded-full'></div>
              <input
                type='text'
                name='Email'
                value={email}
                placeholder='Email/Mobile'
                onChange={(e) => setEmail(e.target.value)}
                className={`flex items-center bg-white w-80 sm:w-44 md:w-80 lg:w-96 p-5 h-18 md:h-18 rounded-full flex-grow mx-2 outline-none 
                  ${email ? 'text-yellow-400' : 'text-purple-400'} placeholder-purple-300 opacity-40 lg:w-[20rem] shadow-md focus:text-yellow-400`}
                style={{
                  color: email ? '#FACC15' : '#A855F7', // '#FACC15' is yellow and '#A855F7' is purple
                }}
              />
            </div>

            <img src={FormLink} alt='FormLink' className='absolute w-24 h-24 ml-[17.5rem] mt-4' />
            <div>
              <div className='absolute w-5 sm:w-4 md:w-4 lg:w-4 h-5 sm:h-4 md:h-4 lg:h-4 ml-[22.4rem] mt-4 bg-white rounded-full'></div>
              <button className='bg-[#3C096C] text-white  p-3  sm:text-base md:text-lg lg:text-xl rounded-xl w-1/4 sm:w-28 md:w-32 lg:w-36 ml-[22rem]'>Submit</button>
            </div>
          </div> */}
          <div className="flex flex-col relative items-center lg:items-start">
  <div className="relative w-full">
    <div className="absolute w-5 h-5 ml-[15rem] md:ml-[15rem] lg:ml-[19rem] mt-5 bg-white rounded-full"></div>
    <input
      type="text"
      name="Email"
      value={email}
      placeholder="Email/Mobile"
      onChange={(e) => setEmail(e.target.value)}
      className={`flex items-center bg-white w-64 sm:w-64 md:w-64 lg:w-[20rem] p-4 h-14 md:h-16 rounded-full flex-grow mx-2 outline-none 
        ${email ? 'text-yellow-400' : 'text-purple-400'} placeholder-purple-300 opacity-40 shadow-md focus:text-yellow-400`}
      style={{
        color: email ? '#FACC15' : '#A855F7', // '#FACC15' is yellow and '#A855F7' is purple
      }}
    />
  </div>

  <img
    src={FormLink}
    alt="FormLink"
    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ml-[14rem] sm:ml-[16rem] md:ml-[8rem] lg:ml-[17.5rem] mt-4"
  />
  
  <div>
    <div className="absolute w-4 h-4 ml-[19rem] sm md:ml-[18.1rem] lg:ml-[22.4rem] mt-4 bg-white rounded-full"></div>
    <button
      className="bg-[#3C096C] text-white p-3 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl w-40 sm:w-20 md:w-28 lg:w-32 ml-[10rem] sm:ml-[16rem] md:ml-[18rem] lg:ml-[22rem]">
      Submit
    </button>
  </div>
</div>

        </div>

      </div>
    </>
  )
}

export default ContactUs