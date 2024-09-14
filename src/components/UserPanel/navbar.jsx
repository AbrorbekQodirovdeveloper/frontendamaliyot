import React, { useState } from 'react';
import logo  from './img/Logo.svg';
import { Link } from 'react-router-dom';
import './navbar.css';
import ProductSearch from './productsearch';


function Navbar() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className="navbar">
     <nav>
       <li>
        <Link to='/'>
          <img src={logo} alt="Logo"  />
        </Link>
       </li>
         <ul>
             <li>
                  <Link to='/'>Home</Link>
                  </li>
                  <li>
                  <Link to='/About'>About</Link>
                  </li>
                  <div
        className="nav-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li> <Link className="nav-link">Pages </Link></li>
        {isHovered && (
          <div className="dropdown-content">
             <li>
               <Link to="/Blog">Blog</Link>
             </li>
             <li>
               <Link to="/Team">Team</Link>
             </li>
          </div>
        )}
      </div>

                  <li>
                  <Link to='/Shop'>Shop</Link>
                  </li>

                  <li>
                  <Link to='/Contact'>Contact</Link>
             </li>
         </ul>
         <div class="navright">
              <ProductSearch/>
                 <div className="cart">
                       <li>
                        <Link to="/Cart"><i class="fas fa-cart-shopping"></i></Link>
                       </li>
                         <p>Cart(0)</p>
                 </div>
                 <li>
                        <Link to="/login"><i class="fas fa-user"></i></Link>
                       </li>
            </div>



     </nav>
    </div>
  );
}

export default Navbar;
