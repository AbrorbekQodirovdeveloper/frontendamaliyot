import React,{useState,useEffect} from 'react';
import './allproduct.css'
import  axios  from "axios";
import { Link } from 'react-router-dom';

function Allproduct() {
  const [ProductData,setproductData] = useState([])

  useEffect(() => {
     axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products")
     .then(res => setproductData(res.data))
     .catch(err => console.log(err.message))
          console.log(ProductData);

  },[]);


  return (
    <div className="allproduct">
          {ProductData.map(item => (
             <div key={item.id} className='allproductitem'>
                 <div className="categoryName">
                          <p>{item.product.categoryname}</p>
                 </div>

                 <li>
                   <Link to={`/product/${item.id}`}>
                   <img src={item.product.img} alt={item.product.name} />
                   </Link>
                </li>

                <li>
                   <Link to={`/product/${item.id}`}>
                     <h2>{item.product.name}</h2>
                   </Link>
                </li>
                 <hr/>
                 <div className="productitembootom">

                   <p>Price: ${item.product.price}</p>
                 </div>


             </div>
           ))}
    </div>

  );
}

export default  Allproduct;
