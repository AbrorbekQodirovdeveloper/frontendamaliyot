import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';




function Login() {
  return (
      <div className="login">
           <div className="login-container">
           <div className="login-form">
           <form action="">
                 <div className="logininp">
                     <label htmlFor="">Email </label>
                     <input type="email"  name='email' placeholder='Your Email' required />
                 </div>
                 <div className="logininp">
                     <label htmlFor="">Password</label>
                     <input type="password" placeholder='Your Password'  name='password' required/>
                 </div>
                 <button>Login</button>
             </form>
                <div className="formlink">
                    <span><Link>Forget password</Link></span>
                    <span><Link to="/Register">Create Account</Link></span>
                </div>
           </div>
           </div>
      </div>
  );
}

export default Login;
