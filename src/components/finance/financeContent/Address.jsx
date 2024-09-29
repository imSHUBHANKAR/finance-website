// import React from 'react'
// import Img1 from '../../../assets/image3.svg'
// import BubbleBackground from '../BubbleBackground'

// function Address() {
//   return (
//     <>
//     <div className='p-10'>
//         <p className='flex justify-center text-white text-3xl font-semibold'>Need to Talk to us Personally? Come Visit us at</p>
//         <div className='absolute'>
//             <BubbleBackground/>
//           </div>
//         <div className='flex justify-around items-center gap-10'>
//             <ol className='list-decimal pl-5 text-2xl w-1/3'>
//                 <li>Chandigarh, Haryana</li>
//                 <li>Next57 co-working, Plot No. 57, Industrial Area Phase I, Chandigarh, 160002</li>
//                 <li>+91-7717303384</li>
//                 <li>events@finstreet.in</li>
//             </ol>
//             <div>
//                 <img src={Img1} alt='img' className='w-[351px] h-[557px] rounded-full object-cover'/>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Address

import React from 'react';
import Img1 from '../../../assets/image3.svg';
import BubbleBackground from '../BubbleBackground';

function Address() {
  return (
    <>
      <div className='p-10'>
        <p className='flex justify-center text-white text-3xl font-semibold mb-5'>
          Need to Talk to us Personally? Come Visit us at
        </p>
        <div className='absolute'>
          <BubbleBackground />
        </div>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-10'>
          <ol className='list-decimal pl-5 text-xl sm:text-2xl w-full lg:w-1/3'>
            <li>Chandigarh, Haryana</li>
            <li>Next57 co-working, Plot No. 57, Industrial Area Phase I, Chandigarh, 160002</li>
            <li>+91-7717303384</li>
            <li>events@finstreet.in</li>
          </ol>
          <div className='flex justify-center'>
            <img
              src={Img1}
              alt='img'
              className='w-[80%] sm:w-[351px] h-auto rounded-full object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
