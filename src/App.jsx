// import Finance from './components/finance/FinancePage'

// function App() {

//   return (
//     <div className='bg-[#5A189A]'>
//       <Finance/>
//     </div>
//   )
// }

// export default App

// import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
// import FinancePage from './components/finance/FinancePage'
// import Courses from './components/finance/courses/Courses'
// import FinStreetMedia from './components/finance/finStreetMedia/FinStreetMedia'
// import Communities from './components/finance/communities/Communities'
// import AboutUs from './components/finance/aboutUs/AboutUs'
// import ContactUs from './components/finance/financeContent/ContactUs'
// import NavBar from './components/finance/NavBar'

// function App() {

//   return (
//     <BrowserRouter>
//     <NavBar/>
//     {/* <Router> */}
//       <Routes>
//         <Route path='/' element={<FinancePage/>}/>
//         <Route path='/courses' element={<Courses/>}/>
//         <Route path='/fin-street-media' element={<FinStreetMedia/>}/>
//         <Route path='/communities' element={<Communities/>}/>
//         <Route path='/about-us' element={<AboutUs/>}/>
//         <Route path='/contact-us' element={<ContactUs/>}/>
//       </Routes>
//       <div>
//         <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/courses'>Home</Link></li>
//           <li><Link to='/fin-street-media'>Home</Link></li>
//           <li><Link to='/communities'>Home</Link></li>
//           <li><Link to='/about-us'>Home</Link></li>
//           <li><Link to='/contact-us'>Home</Link></li>
//         </ul>
//       </div>
//     {/* </Router> */}
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import FinancePage from './components/finance/FinancePage'
import Courses from './components/finance/courses/Courses'
import FinStreetMedia from './components/finance/finStreetMedia/FinStreetMedia'
import Communities from './components/finance/communities/Communities'
import AboutUs from './components/finance/aboutUs/AboutUs'
//import ContactUs from './components/finance/financeContent/ContactUs'
import ContactUs from './components/finance/contactUs/ContactUs'
import NavBar from './components/finance/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<FinancePage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/fin-street-media' element={<FinStreetMedia />} />
        <Route path='/communities' element={<Communities />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      {/* Optional Footer Links */}
      {/* <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link to='/fin-street-media'>FinStreet Media</Link></li>
          <li><Link to='/communities'>Communities</Link></li>
          <li><Link to='/about-us'>About Us</Link></li>
          <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
      </div> */}
    </BrowserRouter>
  )
}

export default App
