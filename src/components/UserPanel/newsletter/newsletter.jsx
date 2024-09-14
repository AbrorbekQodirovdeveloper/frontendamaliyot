import React,{useState} from 'react';
import './newsletter.css';
import  axios  from 'axios';


function Newsletter() {
  const [newsletter, setProduct] = useState({
    email:'',

  })
   const hendleInput = (e) => {
       setProduct({...newsletter,[e.target.name]: e.target.value})
   }
   function hendleSubmit(event){
     event.preventDefault();



      axios.post("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Newsletter",{newsletter})
      .then(res => console.log(res))
      .catch(err => console.log(err.message))

       alert('add successfully added Newsletter')
       window.location.assign('http://localhost:3000/')

   }
  return (
<div className="newsletter">

     <div className="newsletterinp"  >
     <h1>Subscribe to our Newsletter</h1>
     <form onSubmit={hendleSubmit}>
    <input type="email" name="email" placeholder="Enter your email address" required onChange={hendleInput} />
    <button type="submit">Subscribe</button>
    </form>
     </div>

</div>

  );
}

export default Newsletter;
