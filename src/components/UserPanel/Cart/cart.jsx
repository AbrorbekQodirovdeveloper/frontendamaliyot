import React from 'react';
import Navbar from '../navbar';
import './cart.css';

 function Cart() {
  return (
     <div className="cartpage">
            <header className="cartheader">
                      <Navbar/>
                      <div className="cartpagebox">
                             <h1>Cart Page</h1>


                      </div>
            </header>

    <main>
    <div class="cart-container">
        <div class="cart-header">
            <div>PRODUCT DETAILS</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>SHIPPING</div>
            <div>SUBTOTAL</div>
            <div>ACTION</div>
        </div>


        <div class="cart-item">
            <div class="product-details">
                <img src="https://via.placeholder.com/70" alt="Product Image"/>
                <div>
                    <span>Blue Flower Print Crop Top</span>
                    <span>Color: Yellow, Size: M</span>
                </div>
            </div>
            <div class="price">$29.00</div>
            <div class="quantity-control">
                <button>-</button>
                <input type="number" />
                <button>+</button>
            </div>
            <div class="shipping">FREE</div>
            <div class="subtotal">$29.00</div>
            <div class="remove">
                <button><i className='fas fa-trash-alt'></i></button>
            </div>
        </div>



    </div>
    </main>

     </div>
  );
}

export default Cart;