// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import Logo from '../../assets/FinanceLogo.svg'


// function Footer() {
//   return (

//     <footer className='border-t-2 border-[#3C096C] text-white py-10'>
//       <div className='flex justify-between ml-10 items-center'>
//         <div>
//           <img src={Logo} alt='logo' className='w-24 h-10' />
//         </div>
//         <div className='flex gap-20 justify-start mr-20'>
//           <div>
//             <div><a href='#'>Home</a></div>
//             <div><a href='#'>Courses</a></div>
//             <div><a href='#'>FinStreet Media</a></div>
//             <div><a href='#'>Communities</a></div>
//             <div><a href='#'>About Us</a></div>
//             <div><a href='#'>Contact Us</a></div>
//           </div>
//           <div>
//             <div><a href='#'>Privacy Policy</a></div>
//             <div><a href='#'>Refund Policy</a></div>
//             <div><a href='#'>Site Map</a></div>
//             <div><a href='#'>T & C's</a></div>
//           </div>
//         </div>
//       </div>
//       {/* <hr className='ml-24 mr-24'/> */}
//       <div className='flex justify-around p-5'>
//         <p>© 2024 Your Company. All rights reserved.</p>
//         <div className='flex gap-8 '>
//           <div className='bg-white rounded-full'>
//             <a
//               href="https://www.youtube.com/channel/UC9uE3NWbpg09xN8H5pmT4gQ"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaYoutube className='w-10 h-10 p-2 text-red-600 hover:-translate-y-2 transition-transform duration-300' />
//             </a>
//           </div>
//           <div className='bg-white rounded-full'>
//             <a
//               href="https://www.instagram.com/finstreet.in/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <AiFillInstagram className='w-10 h-10 p-2 text-yellow-600 hover:-translate-y-2 transition-transform duration-300' />
//             </a>
//           </div>
//           <div className='bg-white rounded-full'>
//             <a
//               href="https://t.me/finstreetedu"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTelegramPlane className='w-10 h-10 p-2 text-sky-600 hover:-translate-y-2 transition-transform duration-300' />
//             </a>
//           </div>
//           <div className='bg-white rounded-full'>
//             <a
//               href="https://www.facebook.com/finstreet.in"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF className='w-10 h-10 p-2 text-blue-600 hover:-translate-y-2 transition-transform duration-300' />
//             </a>
//           </div>
//           <div className='bg-white rounded-full'>
//             <a
//               href="https://x.com/Finstreet_IN?t=9A3_TGHm_vq9rvPg-PT5HA&s=09"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaXTwitter className='w-10 h-10 p-2 text-gray-900 hover:-translate-y-2 transition-transform duration-300' />
//             </a>
//           </div>
//           <div className='bg-white rounded-full'>
//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedinIn className='w-10 h-10 p-2 text-blue-600 hover:-translate-y-2 transition-transform duration-300' />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>

//   )
// }

// export default Footer

import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from '../../assets/FinanceLogo.svg'


function Footer() {
  return (
    <footer className='border-t-2 border-[#3C096C] text-white py-10'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 px-6 lg:px-10'>
        {/* <div className='flex gap-10 items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15131.243422928985!2d73.835805!3d18.5374476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b6e8c4b32eb47%3A0x55dfd3a25335437!2sFinStreet%20Education!5e0!3m2!1sen!2sin!4v1727595556781!5m2!1sen!2sin"
            className="relative w-80 h-80 rounded-xl"
            style={{ border: 10 }}
            loading="lazy"
            allowFullScreen referrerPolicy="no-referrer-when-downgrade">
         </iframe>
         <div>
          <img src={Logo} alt='logo' className='w-24 h-10 mb-6 lg:mb-0' />
        </div>
        </div> */}
        <div className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:justify-start">
  {/* Google Maps */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15131.243422928985!2d73.835805!3d18.5374476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4b6e8c4b32eb47%3A0x55dfd3a25335437!2sFinStreet%20Education!5e0!3m2!1sen!2sin!4v1727595556781!5m2!1sen!2sin"
    className="relative w-full lg:w-80 h-60 lg:h-80 rounded-xl"
    style={{ border: 10 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Company Logo */}
  <div className="mt-4 lg:mt-0 lg:ml-6 flex justify-center">
    <img src={Logo} alt="Company Logo" className="w-32 h-auto lg:w-24 lg:h-10" />
  </div>
</div>


        {/* Navigation Links */}
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 justify-start'>
          <div className='flex flex-col items-start'>
            <div><a href='#' className='hover:text-gray-300'>Home</a></div>
            <div><a href='#' className='hover:text-gray-300'>Courses</a></div>
            <div><a href='#' className='hover:text-gray-300'>FinStreet Media</a></div>
            <div><a href='#' className='hover:text-gray-300'>Communities</a></div>
            <div><a href='#' className='hover:text-gray-300'>About Us</a></div>
            <div><a href='#' className='hover:text-gray-300'>Contact Us</a></div>
          </div>
          <div className='flex flex-col items-start'>
            <div><a href='#' className='hover:text-gray-300'>Privacy Policy</a></div>
            <div><a href='#' className='hover:text-gray-300'>Refund Policy</a></div>
            <div><a href='#' className='hover:text-gray-300'>Site Map</a></div>
            <div><a href='#' className='hover:text-gray-300'>T & C's</a></div>
          </div>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div className=' flex flex-col lg:flex-row justify-between items-center m-10 mb-0 gap-6 lg:gap-0'>
        <p className='text-center'>© 2024 Your Company. All rights reserved.</p>

        {/* Social Icons */}
        <div className='flex gap-4 lg:gap-8'>
          <div className='bg-white rounded-full p-2'>
            <a
              href="https://www.youtube.com/channel/UC9uE3NWbpg09xN8H5pmT4gQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className='w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-red-600 hover:-translate-y-2 transition-transform duration-300' />
            </a>
          </div>
          <div className='bg-white rounded-full p-2'>
            <a
              href="https://www.instagram.com/finstreet.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className='w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-yellow-600 hover:-translate-y-2 transition-transform duration-300' />
            </a>
          </div>
          <div className='bg-white rounded-full p-2'>
            <a
              href="https://t.me/finstreetedu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className='w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-sky-600 hover:-translate-y-2 transition-transform duration-300' />
            </a>
          </div>
          <div className='bg-white rounded-full p-2'>
            <a
              href="https://www.facebook.com/finstreet.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className='w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-blue-600 hover:-translate-y-2 transition-transform duration-300' />
            </a>
          </div>
          <div className='bg-white rounded-full p-2'>
            <a
              href="https://x.com/Finstreet_IN?t=9A3_TGHm_vq9rvPg-PT5HA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className='w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-gray-900 hover:-translate-y-2 transition-transform duration-300' />
            </a>
          </div>
          <div className='bg-white rounded-full p-2'>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className='w-4 h-4 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-blue-600 hover:-translate-y-2 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
