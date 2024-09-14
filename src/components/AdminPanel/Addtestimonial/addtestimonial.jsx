import React from 'react';
import Header from '../header/header';

import Testimonial from './maintestimonial/testimonial.jsx';



function AddTestimonial() {
  return (
    <div className="addtestimonial" style={{ display: 'flex' }}>
         <Header/>
         <Testimonial/>
    </div>

  );
}

export default AddTestimonial;
