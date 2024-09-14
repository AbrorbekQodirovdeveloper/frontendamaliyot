
import React,{useState,useEffect} from 'react';
import './offer.css'


import  axios  from "axios";
import Container from '../../../../Container.jsx';
import { Link } from 'react-router-dom';

function Offer() {
  const [ProductData,setproductData] = useState([])
  const Offers = ProductData.slice(8, 12);
  useEffect(() => {
     axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products")
     .then(res => setproductData(res.data))
     .catch(err => console.log(err.message))
          console.log(ProductData);

  },[]);
  return (
<div className="homeoffer">
        <Container>
          <h3>Offer</h3>
          <div className="offertitle">
               <h1>We Offer Organic For You</h1>
               <button><Link to="/Shop">View All Product</Link></button>
          </div>
          <div className="offerrows">
          {Offers.map(item => (
             <div key={item.id} className='offeritem'>
                 <div className="categoryName">
                          <p>{item.product.categoryname}</p>
                 </div>
                <li>
                   <Link to={`/product/${item.id}`}>
                   <img src={item.product.img} alt={item.product.name} />
                   </Link>
                </li>


                 <li>
                     <Link to={ `/product/${item.id}`}> <h2>{item.product.name}</h2></Link>
                  </li>
                 <hr/>
                 <div className="offeritembootom">

                   <p>Price: ${item.product.price}</p>
                 </div>


             </div>
           ))}
          </div>
        </Container>

 </div>

  );
}

export default Offer;
