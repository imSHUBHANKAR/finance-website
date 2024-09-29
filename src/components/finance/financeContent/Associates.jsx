// import React from 'react';
// import Associates1 from '../../../assets/Associates1.png';
// import Associates2 from '../../../assets/Associates2.png';
// import Associates3 from '../../../assets/Associates3.png';
// import Associates4 from '../../../assets/Associates4.png';
// import Associates5 from '../../../assets/Associates5.png';

// function Associates() {
//   return (
//     <>
//       <div className='py-8'>
//         <p className='text-center text-white text-3xl font-semibold mb-8'>Our Associates</p>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 justify-items-center items-center'>
//           {/* Associate 1 */}
//           <div className='text-center'>
//             <img src={Associates1} alt='Economics Club IIT Delhi' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Economics Club IIT Delhi</p>
//           </div>
//           {/* Associate 2 */}
//           <div className='text-center'>
//             <img src={Associates2} alt='Finance Club IIT Bombay' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Bombay</p>
//           </div>
//           {/* Associate 3 */}
//           <div className='text-center'>
//             <img src={Associates3} alt='Finance Club IIT Roorkee' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Roorkee</p>
//           </div>
//           {/* Associate 4 */}
//           <div className='text-center'>
//             <img src={Associates4} alt='Finance Club IIT Kharagpur' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Kharagpur</p>
//           </div>
//           {/* Associate 5 */}
//           <div className='text-center'>
//             <img src={Associates5} alt='Finance Club IIT Kanpur' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Kanpur</p>
//           </div>
//         </div>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 py-8 justify-items-center items-center'>
//           {/* Associate 1 */}
//           <div className='text-center'>
//             <img src={Associates1} alt='Economics Club IIT Delhi' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Economics Club IIT Delhi</p>
//           </div>
//           {/* Associate 2 */}
//           <div className='text-center'>
//             <img src={Associates2} alt='Finance Club IIT Bombay' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Bombay</p>
//           </div>
//           {/* Associate 3 */}
//           <div className='text-center'>
//             <img src={Associates3} alt='Finance Club IIT Roorkee' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Roorkee</p>
//           </div>
//           {/* Associate 4 */}
//           <div className='text-center'>
//             <img src={Associates4} alt='Finance Club IIT Kharagpur' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Kharagpur</p>
//           </div>
//           {/* Associate 5 */}
//           <div className='text-center'>
//             <img src={Associates5} alt='Finance Club IIT Kanpur' className='w-32 h-32 mx-auto' />
//             <p className='text-white text-lg mt-4'>Finance Club IIT Kanpur</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Associates;
//----------------------------------------------------
import React from 'react';
import Associates1 from '../../../assets/Associates1.png';
import Associates2 from '../../../assets/Associates2.png';
import Associates3 from '../../../assets/Associates3.png';
import Associates4 from '../../../assets/Associates4.png';
import Associates5 from '../../../assets/Associates5.png';

const associatesData = [
  { imgSrc: Associates1, name: 'Economics Club IIT Delhi' },
  { imgSrc: Associates2, name: 'Finance Club IIT Bombay' },
  { imgSrc: Associates3, name: 'Finance Club IIT Roorkee' },
  { imgSrc: Associates4, name: 'Finance Club IIT Kharagpur' },
  { imgSrc: Associates5, name: 'Finance Club IIT Kanpur' },
  { imgSrc: Associates1, name: 'Economics Club IIT Delhi' },
  { imgSrc: Associates2, name: 'Finance Club IIT Bombay' },
  { imgSrc: Associates3, name: 'Finance Club IIT Roorkee' },
  { imgSrc: Associates4, name: 'Finance Club IIT Kharagpur' },
  { imgSrc: Associates5, name: 'Finance Club IIT Kanpur' },
];

function Associates() {
  return (
    <div className='py-8'>
      <p className='text-center text-white text-3xl font-semibold mb-8'>Our Associates</p>
      {/* Mapping through associates data */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 justify-items-center items-center'>
        {associatesData.map((associate, index) => (
          <div key={index} className='text-center'>
            <img src={associate.imgSrc} alt={associate.name} className='w-32 h-32 mx-auto' />
            <p className='text-white text-lg mt-4'>{associate.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Associates;
