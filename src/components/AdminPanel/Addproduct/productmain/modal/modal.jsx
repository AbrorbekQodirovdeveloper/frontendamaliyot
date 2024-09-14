
import React,{useState} from 'react';
import './modal.css';
import  axios  from 'axios';
import Admintopheader from '../../../admintopheader';

function Productmodal() {
const [product, setProduct] = useState({
  name:'',
  price:'',
  discount: '',
  title:'',
  categoryname:'',
  img: '',
})
 const hendleInput = (e) => {
     setProduct({...product,[e.target.name]: e.target.value})
 }
 function hendleSubmit(event){
   event.preventDefault();



    axios.post("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products",{product})
    .then(res => console.log(res))
    .catch(err => console.log(err.message))

    alert('add successfully added product')
    window.location.assign('http://localhost:3000/Product')
 }


  return (

   <div className="productmodal">
     <Admintopheader/>
                      <h1>Add to product</h1>

             <form onSubmit={hendleSubmit}>
                <input type="url" placeholder="img" name="img" required  onChange={hendleInput}/>
                <input type="text" placeholder="Name" name="name" required  onChange={hendleInput}/>
                <input type="number" placeholder="Price" name="price" required onChange={hendleInput} />
                <input type="number" placeholder="Discount" name="discount" required onChange={hendleInput}/>

                <input type="text" placeholder="CategoryName" name="categoryname" required  onChange={hendleInput}/>
                <input type="text" placeholder="Title" name="title" required  onChange={hendleInput}/>


                 <button >Submit</button>
             </form>
      </div>

  );
};

export default Productmodal;
