import React from 'react';
import Navbar from '../navbar';
 import './checkout.css';
import Container from '../../Container';

 function Checkout() {
  return (
     <div className="checkoutpage">
            <header className="checkoutheader">
                      <Navbar/>
                      <div className="checkoutpagebox">
                             <h1>Checkout Page</h1>
                      </div>
            </header>
                   <main>
                      <Container>
                      <div className="checkoutmain" style={{ marginTop: "3rem" }}>
                                  <h1 style={{textAlign: "center" , fontSize:"3rem" }}>Checkout form</h1>
                                  <p style={{textAlign: "center" , fontSize:"2rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse cumque ex dolor eos fugiat a labore molestias accusamus similique</p>
                             <div className="checkoutmainbox">
                             <form>
                                    <div className="formgroup">
                                    <div className="formfirstname">
                                           <label>First Name</label>
                                           <input type="text" placeholder="First Name" required />
                                    </div>
                                    <div className="formlastname">
                                           <label>Last Name</label>
                                           <input type="text" placeholder="Last Name" required />
                                    </div>
                                    </div>
                                    <div className="formgroup">
                                           <label>Email Address</label>
                                           <input type="email" placeholder="Email Address" required />
                                    </div>

                                    </form>
                             </div>
                                    </div>
                      </Container>
                   </main>
     </div>
  );
}
export default Checkout;
