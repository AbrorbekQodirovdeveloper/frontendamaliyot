import React from 'react';
import Navbar from '../navbar';
import './shop.css'
import Footer from '../footer/footer.jsx';
import Container from '../../Container.jsx';
import Newsletter from '../newsletter/newsletter.jsx';
import Allproduct from './allproducts/allproduct.jsx';

function Shoppage() {



  return (
   <div className="shoppage">
         <header className='shoppageheader'>
               <Navbar/>
               <div className="shopheaderbox">
                   <h1>Shop</h1>
               </div>
         </header>

           <main>
           <Container>
            <Allproduct/>
          <Newsletter/>
          </Container>
           </main>

           <Footer/>
   </div>
  );
}

export default  Shoppage;
