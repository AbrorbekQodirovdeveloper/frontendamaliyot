import React from 'react';
import './homemain.css';
import Container from '../../../Container.jsx';
import Aboutus from './aboutus/aboutus.jsx';
import Product from './product/product.jsx';
import Offer from './offer/offer.jsx';
import Ecofrendly from './ecofrendly/ecofrendly.jsx';
import Ads from './ads/ads.jsx';
import News from './news/news.jsx';
import Newsletter from '../../newsletter/newsletter.jsx';



function Homemain(props) {
  return (
     <div className="homemain">

     <Container>
     <div className="onesection">
           <div className="bg">
               <div className="bgtitle">
                 <h3>Natural!!</h3>
                 <h1>Get Garden Fresh Fruits</h1>
               </div>
           </div>
           <div className="bg">
            <div className="bgtitle2">
                <h3>Offer!!</h3>
                <h1>Get 10% off <br/>on Vegetables</h1>
            </div>
           </div>
      </div>
     </Container>
    <Aboutus/>

   <Product/>
   <Offer/>
   <Ecofrendly/>
   <Ads/>

   <Container>
     <News/>
     <Newsletter/>
   </Container>

    </div>
  );
}

export default Homemain;
