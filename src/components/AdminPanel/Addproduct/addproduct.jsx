import React from 'react';
import Header from '../header/header';
import Productmain from './productmain/productmain.jsx';



function Addproduct() {
  return (
     <div className="addproduct" style={{ display: 'flex' }}>

     <Header/>
    <Productmain/>
    </div>
  );
}

export default Addproduct;
