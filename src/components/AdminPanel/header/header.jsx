import React from 'react';
import './header.css';
import logo from '../../UserPanel/img/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="adminheader">
    <nav>
         <li>
           <Link to="/Admin"><img src={logo} alt="logo"/></Link>
         </li>

        <ul>
            <li><Link  to="/Admin"><i class="fas fa-solid fa-house"></i>Dashboard</Link></li>

        </ul>

        <ul>
            <li><Link to="/Product"><i
                    class="fa-solid fa-bag-shopping"></i>Products</Link></li>
        </ul>
        <ul>
            <li><Link to="/Offer"><i
                    class="fas fa-brands fa-product-hunt"></i>Offer</Link></li>
        </ul>
        <ul>
            <li><Link to="/AddTeam"><i
                    class="fa-solid fa-user-plus"></i>Team</Link></li>
        </ul>
        <ul>
            <li><Link to="/Testimonial"><i
                    class="fa-solid fa-user-plus"></i>Testimonial</Link></li>
        </ul>
    </nav>
</header>

  );
}

export default Header;
