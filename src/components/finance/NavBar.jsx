// import React from 'react'
// import FinanceLogo from '../../assets/FinanceLogo.svg'
// import ProfileImg from '../../assets/ProfileImg.jpg'
// import { IoIosSearch } from "react-icons/io";
// import { CiMicrophoneOn } from "react-icons/ci";
// import { FaSearch, FaMicrophone } from 'react-icons/fa';



// function NavBar() {
//   return (
//     <navBar className='flex justify-around items-center bg-[#3C096C] gap-5 sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-70 border-b-2 border-[#3C096C]'>
//         <div className=''>
//             <img src={FinanceLogo}  sizes={5} alt='Logo' className='w-28 h-14'/>
//         </div>
//         <div className='flex text-white gap-5'>
//             <ul className='flex gap-10'>
//                 <li>
//                   <a href='#'>Home</a>
//                 </li>
//                 <li>
//                   <a href='#'>Courses</a>
//                 </li>
//                 <li>
//                   <a href='#'>FinStreet Media</a>
//                 </li>
//                 <li>
//                   <a href='#'>Communities</a>
//                 </li>
//                 <li>
//                   <a href='#'>About Us</a>
//                 </li>
//                 <li>
//                   <a href='#'>Contact Us</a>
//                 </li>
//             </ul>
//         </div>
//         <div className='flex items-center gap-5'>
//           {/* <div className='flex items-center justify-between w-full '>
//             <IoIosSearch className="text-purple-400 text-2xl"/>
//           <input className='w-max h-8 rounded-2xl' placeholder='search me'/>
//           <CiMicrophoneOn className="text-purple-400 text-2xl"/>
//           </div> */}
//           {/* --------------------------------------- */}
//           <div className="flex items-center justify-between w-full max-w-xs mx-auto bg-white rounded-full px-2 py-1 shadow-lg">
//       {/* Search Icon */}
//       <FaSearch className="text-purple-400 text-xl" />

//       {/* Input Field */}
//       <input 
//         type="text" 
//         placeholder="Search" 
//         className="flex-grow mx-2 outline-none text-purple-400 placeholder-purple-300 bg-transparent"
//       />

//       {/* Microphone Icon */}
//       <div className='bg-purple-400 rounded-full'>
//       <FaMicrophone className="text-white m-1 text-xl cursor-pointer" />
//       </div>
//     </div>
//     {/* --------------------------------------- */}
//           {/* <div >
//             <img src={ProfileImg} alt='profile'  />
//           </div> */}
//           <div className="w-10 h-10 rounded-full overflow-hidden">
//   <img 
//     src={ProfileImg} 
//     alt="profile" 
//     className="w-full h-full object-cover"
//   />
// </div>
//         </div>
//     </navBar>
//   )
// }

// export default NavBar

import React, { useState } from 'react';
import FinanceLogo from '../../assets/FinanceLogo.svg';
import ProfileImg from '../../assets/ProfileImg.jpg';
import { FaBars, FaTimes, FaSearch, FaMicrophone } from 'react-icons/fa';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='flex justify-around items-center bg-[#5A189A] sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-90 border-b-2 border-[#3C096C] gap-5'>
      {/* Logo */}
      <div className='flex items-center'>
        <img src={FinanceLogo} alt='Logo' className='w-28 h-14' />
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex text-white gap-5'>
        <ul className='flex sm:gap-2 md:gap-3 lg:gap-10'>
          <li><a href='/'>Home</a></li>
          <li><a href='/courses'>Courses</a></li>
          <li><a href='/fin-street-media'>FinStreet Media</a></li>
          <li><a href='/communities'>Communities</a></li>
          <li><a href='/about-us'>About Us</a></li>
          <li><a href='/contact-us'>Contact Us</a></li>
        </ul>
      </div>

      {/* Search Bar & Profile */}
      <div className='hidden md:flex items-center gap-5'>
        <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-lg">
          <FaSearch className="text-purple-400 text-xl sm:text-xs md:text-base lg:text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow mx-2 outline-none text-purple-400 placeholder-purple-300 bg-transparent sm:w-10 md:w-16 lg:w-28"
          />
          <div className='bg-purple-400 rounded-full'>
            <FaMicrophone className="text-white m-1 cursor-pointer sm:text-xs md:text-base lg:text-xl" />
          </div>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={ProfileImg} alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className='flex md:hidden'>
        <button onClick={toggleMobileMenu} className='text-white'>
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className='absolute top-16 left-20 right-20 bg-[#3C096C] text-white flex flex-col items-center gap-5 py-5 md:hidden bg-opacity-80  backdrop-filter backdrop-blur-sm  rounded-b-3xl border-2 border-[#3C096C]'>
          <ul className='flex flex-col gap-5 '>
            <li><a href='/'>Home</a></li>
            <li><a href='/courses'>Courses</a></li>
            <li><a href='/fin-street-media'>FinStreet Media</a></li>
            <li><a href='/communities'>Communities</a></li>
            <li><a href='/about-us'>About Us</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
          </ul>
          <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-lg w-10/12">
            <FaSearch className="text-purple-400 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow mx-2 outline-none text-gray-900 placeholder-gray-900"
            />
            <div className='bg-purple-400 rounded-full'>
              <FaMicrophone className="text-white m-1 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
