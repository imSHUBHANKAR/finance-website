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
          <div className=' flex flex-col relative  lg:items-start'>
            <div className='relative w-full'>
            <div className='absolute w-5 h-5 ml-[19rem] mt-5 bg-white rounded-full'></div>
              <input
                type='text'
                name='Email'
                value={email}
                placeholder='Email/Mobile'
                onChange={(e) => setEmail(e.target.value)}
                className={`flex items-center bg-white w-80 sm:w-80 md:w-80 p-5 h-18 md:h-18 rounded-full flex-grow mx-2 outline-none 
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
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactUs