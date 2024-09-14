import React,{useState} from 'react';
import './contactform.css';
import  axios  from 'axios';






function ContactForm() {

  const [contact, setContact] = useState({
    fullname:'',
    email:'',
    company:'',
    subject:'',
    message:'',

  })
   const hendleInput = (e) => {
       setContact({...contact,[e.target.name]: e.target.value})
   }
   function hendleSubmit(event){
     event.preventDefault();



      axios.post("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Contact",{contact})
      .then(res => console.log(res))
      .catch(err => console.log(err.message))

       alert('add successfully added ContactForm')
       window.location.assign('http://localhost:3000/')
   }

  return (
   <div className="contactform">
       <form onSubmit={hendleSubmit}>
          <div className="allinputs">
          <div className="inp1">
               <label for="fname">Full Name*</label>
               <input type="text"  name="fullname" placeholder='Your Email Address' required onChange={hendleInput}/>
           </div>
           <div className="inp1">
               <label for="fname">Your Email*</label>
               <input type="text" name="email" placeholder='example@yourmail.com' required onChange={hendleInput}/>
           </div>
           <div className="inp1">
               <label for="fname">Company*</label>
               <input type="text" name="company" placeholder='yourcompany name here' required onChange={hendleInput}/>
           </div>
           <div className="inp1">
               <label for="fname">Subject*</label>
               <input type="text"  name="subject" placeholder="how can we help" required onChange={hendleInput}/>
           </div>


             <label>Message</label>
            <textarea rows={10} cols={10} placeholder='hello there,i would like to talk about how to...' name="message" onChange={hendleInput}></textarea>
            <button type='submit'>Submit</button>

          </div>

       </form>
   </div>
  );
}

export default  ContactForm;
