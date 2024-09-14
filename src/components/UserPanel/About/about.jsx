import React from 'react';
import Navbar from '../navbar';

import Footer from '../footer/footer';
import './about.css';
import AboutMain from './Aboutmain/Aboutmain.jsx';

function About() {
  return (
     <div className="about">
<header className='aboutheader'>
<Navbar/>
<div className="aboutheaderbox">

</div>
</header>
   <AboutMain/>
   <Footer/>
    </div>
  );
}

export default About;
