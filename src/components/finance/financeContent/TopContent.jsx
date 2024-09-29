// import React from 'react'
// import img1 from '../../../assets/image1.svg';
// import img2 from '../../../assets/image2.svg';
// import BubbleBackground from '../BubbleBackground';
// import Clouds from '../../../assets/Clouds.svg'

// function TopContent() {
//   return (
//     <>
//     <div>
//         <div className='flex justify-around p-10 relative'>
//           <div className='absolute'>
//             <BubbleBackground/>
//           </div>
//           <div className='absolute'>
//             <img src={Clouds} alt='Cloud'/>
//           </div>
//           <div className='w-96'>
//             <h1 className='text-4xl text-white pb-5 font-bold'>Why Choose Finstreet?</h1>
//             <p>
//               <strong className='text-white text-3xl'>F</strong>instreet Offers a Variety of Learning experiences in all fields of Investing, be it a <strong>High Capital Investment</strong> Like Real Estate Investing, or a <strong>Low Capital Investment</strong> Like Poker Staking. We have a Community of India's Top Investors who help each other grow their net Worth.
//             </p>
//           </div>
//           <div>
//             <img src={img1} alt='img1' className='w-[500px] h-[250px] rounded-full object-cover' />
//           </div>
//         </div>
//         <div className='flex justify-around items-center p-10'>
//           <div>
//             <img src={img2} alt='img1' className='w-[351px] h-[557px] rounded-full object-cover' />
//           </div>
//           <div className='w-2/3'>
//             <h1 className='text-4xl text-white pb-5 font-bold'>Why is Finstreet the best learning platform?</h1>
//             <ol className='list-decimal pl-5 text-lg'>
//               <li>
//                 The Best Teachers in India
//                 <p>Learn from the Best Teachers in India and get the right clarity you need for your Test Preparation.</p>
//               </li>
//               <li>
//                 A Hi-Tech Education Platform
//                 <p>A Hi-Tech Education Platform to further help you make your preparation more efficient.</p>
//               </li>
//               <li>
//                 Live One-on-One Guidance
//                 <p>Live One on One Guidance with our teachers to further boost your selection chances.</p>
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default TopContent

import React from 'react';
import img1 from '../../../assets/image1.svg';
import img2 from '../../../assets/image2.svg';
import BubbleBackground from '../BubbleBackground';
import Clouds from '../../../assets/Clouds.svg';

function TopContent() {
  return (
    <>
      <div>
        <div className='flex flex-col lg:flex-row justify-around p-10 relative'>
          <div className='absolute'>
            <BubbleBackground />
          </div>
          {/* <div className='absolute'>
            <img src={Clouds} alt='Cloud' className='w-full h-auto' />
          </div> */}
          <div className='w-full lg:w-1/3 mb-5 lg:mb-0'>
            <h1 className='text-3xl md:text-4xl text-white pb-5 font-bold'>Why Choose Finstreet?</h1>
            <p>
              <strong className='text-white text-2xl md:text-3xl'>F</strong>instreet Offers a Variety of Learning experiences in all fields of Investing, be it a <strong>High Capital Investment</strong> Like Real Estate Investing, or a <strong>Low Capital Investment</strong> Like Poker Staking. We have a Community of India's Top Investors who help each other grow their net Worth.
            </p>
          </div>
          <div className='flex justify-center'>
            <img src={img1} alt='img1' className='w-full sm:w-[400px] lg:w-[500px] h-auto rounded-full object-cover' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-around items-center p-10'>
          <div className='flex justify-center mb-5 lg:mb-0'>
            <img src={img2} alt='img2' className='w-full sm:w-[351px] h-auto rounded-full object-cover' />
          </div>
          <div className='w-full lg:w-2/3'>
            <h1 className='text-3xl md:text-4xl text-white pb-5 font-bold'>Why is Finstreet the best learning platform?</h1>
            <ol className='list-decimal pl-5 text-lg'>
              <li>
                The Best Teachers in India
                <p>Learn from the Best Teachers in India and get the right clarity you need for your Test Preparation.</p>
              </li>
              <li>
                A Hi-Tech Education Platform
                <p>A Hi-Tech Education Platform to further help you make your preparation more efficient.</p>
              </li>
              <li>
                Live One-on-One Guidance
                <p>Live One on One Guidance with our teachers to further boost your selection chances.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopContent;
