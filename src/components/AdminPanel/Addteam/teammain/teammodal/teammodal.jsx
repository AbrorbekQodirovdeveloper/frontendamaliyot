
import React,{useState} from 'react';
import './teammodal.css'
import  axios  from 'axios';
import Admintopheader from '../../../admintopheader';


function Teammodal() {
const [team, setTeam] = useState({
  name:'',
  img: '',
  job: '',
})
 const hendleInput = (e) => {
     setTeam({...team,[e.target.name]: e.target.value})
 }
 function hendleSubmit(event){
   event.preventDefault();
    axios.post("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Team",{team})
    .then(res => console.log(res))
    .catch(err => console.log(err.message))


 }


  return (

   <div className="teammodal">
     <Admintopheader/>
                      <h1>Add to Team</h1>

             <form onSubmit={hendleSubmit}>
                <input type="url" placeholder="img" name="img" required  onChange={hendleInput}/>
                <input type="text" placeholder="Name" name="name" required  onChange={hendleInput}/>
                <input type="text" placeholder="Job name" name="job" required  onChange={hendleInput}/>
                 <button>Submit</button>
             </form>
      </div>

  );
};

export default Teammodal;
