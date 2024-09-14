import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';




function Register() {
  return (
      <div className="register">
           <div className="register-container">
           <div className="register-form">
           <form action="">
           <div className="registerinp">
                     <label htmlFor="">Fullname</label>
                     <input type="text"  name='fullname' placeholder='Your Fullname' required />
                 </div>
                 <div className="registerinp">
                     <label htmlFor="">Email </label>
                     <input type="email"  name='email' placeholder='Your Email' required />
                 </div>
                 <div className="registerinp">
                     <label htmlFor="">Password</label>
                     <input type="password" placeholder='Your Password'  name='password' required/>
                 </div>
                 <button>Sign up</button>
             </form>
                <div className="formlink">
                    <span><Link>Forget password</Link></span>
                    <span><Link to="/login">Login </Link></span>
                </div>
           </div>
           </div>
      </div>
  );
}

export default Register;
