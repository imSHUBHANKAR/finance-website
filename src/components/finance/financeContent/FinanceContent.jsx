import React from 'react';
import Team from './Team';
import Address from './Address';
import Associates from './Associates';
import ContactUs from './ContactUs';
import TopContent from './TopContent';

function FinanceContent() {
  return (
    <>
      <TopContent/>
      <Team/>
      <Address/>
      <Associates/>
      <ContactUs/>
    </>
  );
}

export default FinanceContent;
