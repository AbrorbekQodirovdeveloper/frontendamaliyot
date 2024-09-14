
import React,{useState} from 'react';
import "./testimonialmodal.css"
import  axios  from 'axios';
import Admintopheader from '../../../admintopheader';


function Testimonialmodal() {
const [tesmo, setTesmo] = useState({
  name:'',
  img: '',
  title: '',
  job: '',
})
 const hendleInput = (e) => {
     setTesmo({...tesmo,[e.target.name]: e.target.value})
 }
 function hendleSubmit(event){
   event.preventDefault();
    axios.post("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Tesmo",{tesmo})
    .then(res => console.log(res))
    .catch(err => console.log(err.message))


 }


  return (

   <div className="tesmomodal">
     <Admintopheader/>
                      <h1>Add to Testimonial</h1>

             <form onSubmit={hendleSubmit}>
                <input type="url" placeholder="img" name="img" required  onChange={hendleInput}/>
                <input type="text" placeholder="Name" name="name" required  onChange={hendleInput}/>
                <input type="text" placeholder="Title" name="title" required  onChange={hendleInput}/>
                <input type="text" placeholder="Job name" name="job" required  onChange={hendleInput}/>
                 <button>Submit</button>
             </form>
      </div>

  );
};

export default Testimonialmodal;
