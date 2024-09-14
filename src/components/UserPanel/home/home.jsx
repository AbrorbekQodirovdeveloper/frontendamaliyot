import React from 'react';
import Navbar from '../navbar.jsx';
import './home.css';
import headerimg from '../img/100% Natural Food.png';
import Homemain from './homemain/homemain.jsx';

import Footer from '../footer/footer.jsx';


function Home() {
  return (
     <div className="home">
<header className='homeheader'>
<Navbar/>
<div className="hometopheader">
  <img src={headerimg} alt="" />
      <h1>Choose the best
healthier way<br></br>
of life</h1>
<button>Explore Now</button>
</div>
</header>
<Homemain/>

<Footer/>
    </div>
  );
}

export default Home;
