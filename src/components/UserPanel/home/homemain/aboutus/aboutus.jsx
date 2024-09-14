import React from 'react';
import './aboutus.css';
import Container from '../../../../Container.jsx';
import fruitsimg from  '../../../img/aboutussection.png';
import organicimg from '../../../img/organic.png';
import Quentity from '../../../img/Quality.png';
import { Link } from 'react-router-dom';



function Aboutus(props) {
  return (
     <div className="aboutus">

     <Container>
       <div className="aboutrow">
        <div className="aboutfullimg">
             <img src={fruitsimg} alt=""/>
        </div>
            <div className="aboutustitle">
                  <h3>About Us</h3>
                  <h1>We Believe in Working
                  Accredited Farmers</h1>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                  <div className="aboutbox">
                     <div className="organic">
                         <div className="aboutusimagebox">
                                 <img src={organicimg} alt="" srcset="" />
                         </div>
                         <div className="aboutustitlebox">
                          <h2>Organic Foods Only</h2>
                          <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                         </div>

                     </div>
                     <div className="organic">
                           <div className="aboutusimagebox">
                                 <img src={Quentity} alt="" srcset="" />

                            </div>
                            <div className="aboutustitlebox">
                            <h2>Quality Standards</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                     </div>
                  </div>

                    <li>
                       <Link to="/Shop">Shop Now</Link>
                    </li>
            </div>
       </div>
     </Container>


    </div>
  );
}

export default Aboutus;
