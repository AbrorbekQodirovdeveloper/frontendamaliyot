import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../navbar';
import './shopdetail.css';
import Footer from '../footer/footer';
import Newsletter from '../newsletter/newsletter';
import Container from '../../Container.jsx';
import  axios  from "axios";


function ProductDetail() {
        
    const [ProductData,setproductData] = useState([])
    const Product = ProductData.slice(0, 4);

  useEffect(() => {
     axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products")
     .then(res => setproductData(res.data))
     .catch(err => console.log(err.message))
          console.log(ProductData);

  },[]);
    const { id } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        fetch(`https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
         return
    }



    return (
      <div className="shopdetail">
            <header className='shopdetailheader'>
               <Navbar/>
               <div className="shopdetailheaderbox">
                   <h1>Shop Single</h1>
               </div>
         </header>

         <main >
             <Container>
                <div className="singlerow">
                     <div className="singlefullimg">
                            <div className="categoryname">
                                  <p>{product.product.categoryname}</p>
                            </div>
                              <img src={product.product.img} alt="" srcset="" />
                     </div>
                     <div className="detailtitle">
                          <div className="singletitle">
                               <h1>{product.product.name}</h1>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                                  <h4> Price: ${product.product.price}</h4>
                                  <p>{product.product.title}</p>
                                  <div className="singleinp">
                                       <h4>Quentity:</h4>
                                        <form action="" method="post">
                                             <input type="number" name='count' placeholder='1' required   />
                                              <button type='button' style={{ cursor: "pointer" }}>Add to cart</button>
                                        </form>
                                  </div>
                          </div>


                     </div>
                </div>
                <div className="relatedproduct">
                    <h1>Releated products</h1>
                           <div className="reletedrows">
                           {Product.map(item => (
             <div key={item.id} className='reletedproductitem'>
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
                </div>
               <Newsletter/>
             </Container>
         </main>
          <Footer/>
      </div>

    );
}

export default ProductDetail;