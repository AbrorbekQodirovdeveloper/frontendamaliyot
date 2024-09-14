import React,{useState,useEffect} from 'react';
import './product.css';

import  axios  from "axios";
import Container from '../../../../Container.jsx';
import { Link } from 'react-router-dom';


function Product(props) {
  const [ProductData,setproductData] = useState([])
  const Product = ProductData.slice(0, 8);
  useEffect(() => {
     axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products")
     .then(res => setproductData(res.data))
     .catch(err => console.log(err.message))
          console.log(ProductData);

  },[]);
  return (
  <div className="product">
     <h3>Categories </h3>
     <h1>Our Products</h1>
     <Container>
     <div className="productrows">

           {Product.map(item => (
             <div key={item.id} className='productitem'>
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
                 <div className="productitembootom">

                   <p>Price: ${item.product.price}</p>
                 </div>


             </div>
           ))}
             <div className="btn">
             <button>Load more</button>
             </div>
     </div>
     </Container>
  </div>
  );
}

export default Product;
