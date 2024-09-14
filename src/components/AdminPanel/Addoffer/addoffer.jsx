import React from 'react';
import Header from '../header/header';
import Offer from './offermain/offer';



function Addoffer() {
  return (
    <div className="addoffer" style={{ display: 'flex' }}>
         <Header/>
         <Offer/>
    </div>

  );
}

export default Addoffer;
