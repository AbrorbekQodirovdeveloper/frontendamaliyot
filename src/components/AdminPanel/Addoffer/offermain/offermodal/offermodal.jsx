
import React,{useState} from 'react';
import './offermodal.css';
import  axios  from 'axios';
import Admintopheader from '../../../admintopheader';
import Offer from '../offer';

function Offermodal() {
const [offer, setOffer] = useState({
  name:'',
  img: '',
})
 const hendleInput = (e) => {
     setOffer({...offer,[e.target.name]: e.target.value})
 }
 function hendleSubmit(event){
   event.preventDefault();
    axios.post("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Offer",{offer})
    .then(res => console.log(res))
    .catch(err => console.log(err.message))


 }


  return (

   <div className="offermodal">
     <Admintopheader/>
                      <h1>Add to Offer</h1>

             <form onSubmit={hendleSubmit}>
                <input type="url" placeholder="img" name="img" required  onChange={hendleInput}/>
                <input type="text" placeholder="Name" name="name" required  onChange={hendleInput}/>
                 <button onClick={() => <Offer/> } >Submit</button>
             </form>
      </div>

  );
};

export default Offermodal;
