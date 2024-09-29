import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import FinanceContent from './financeContent/FinanceContent'

function FinancePage() {
  return (
    <>
    <div className='bg-[#5A189A]'>
    {/* <NavBar/> */}
    <FinanceContent/>
    <Footer/>
    </div>
    </>
  )
}

export default FinancePage