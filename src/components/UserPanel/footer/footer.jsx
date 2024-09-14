import React from 'react';
import Container from '../../Container.jsx';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.svg';



function Footer() {
  return (
     <footer>
<Container>

<div className="footerbox">
       <div className="contactus">
        <div className="contactbox">
        <h1>Contact Us</h1>
          <div className="email">
             <h2>Email</h2>
             <p>abrorbekdev07@gmail.com</p>
          </div>
          <div className="phone">
          <h2>Phone</h2>
          <p>+998333733085 | +998950233085</p>

          </div>
           <div className="address">
              <h2>Address</h2>
              <p>Andijon viloyat Asaka tuman</p>
           </div>
        </div>
       </div>
       <hr/>
       <div className="logo">
             <div className="footerlogo">
             <img src={logo} alt="" srcset="" />
             </div>
            <p>Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing </p>
               <div className="footericons">


             <div className="icon">
               <li><Link to="https://instagram.com/abror_07_dev" target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
             </div>
             <div className="icon">
             <li><Link to="https://facabook.com/AbrorbekQodirov" target='_blank'><i className="fa-brands fa-facebook"></i></Link></li>
                </div>
                <div className="icon">
                <li><Link to="https://x.com/Abror_dev_07" target='_blank'><i className="fa-brands fa-twitter"></i></Link></li>
                </div>
                <div className="icon">
                <li><Link to="https://t.me/dasturchi_07" target='_blank'><i className="fa-brands fa-telegram"></i></Link></li>
                </div>
                </div>
       </div>
       <hr/>
       <div className="unity">
          <h1>Utility Pages</h1>
          <li><Link to="/">Style Guide</Link></li>
          <li><Link to="/404 Not Found">404 Not Found</Link></li>
          <li><Link to="/Password Protected">Password Protected</Link></li>
          <li><Link to="/Licences">Licences</Link></li>
          <li><Link to="/Changelog">Changelog</Link></li>
       </div>
</div>
<hr/>
</Container>

     </footer>
  );
}

export default Footer;
