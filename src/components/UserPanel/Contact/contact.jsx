import React from 'react';
import Navbar from '../navbar';
import './contact.css';
import Footer from '../footer/footer.jsx';
import Container from '../../Container.jsx';

import ContactMain from './Contactmain/contactmain.jsx';


function Contactpage() {



  return (
   <div className="contactpage">
         <header className='contactpageheader'>
               <Navbar/>
               <div className="contactheaderbox">
                     <h1>Contact Us</h1>
               </div>
         </header>

             <ContactMain/>
           <Container>
   
          </Container>


           <Footer/>
   </div>
  );
}

export default  Contactpage;
