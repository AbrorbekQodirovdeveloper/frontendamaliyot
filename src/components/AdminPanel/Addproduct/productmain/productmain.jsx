import React,{useState,useEffect} from 'react';
import './productmain.css';
import  axios  from "axios";
import Productmodal from './modal/modal.jsx';
import Admintopheader from '../../admintopheader.jsx';


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>  



        <button className='closebtn' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
       <Productmodal/>
      </div>
    </div>
  );
};


const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,


};

const modalStyle = {

  borderRadius: '4px',
  padding: '20px',
  width:  '85%',
  position: 'absolute',
  left: '20rem',
  height: '100vh',
  backgroundColor: 'whitesmoke',
};

function Productmain() {


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

 const [ProductData,setproductData] = useState([])


useEffect(() => {
   axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products")
   .then(res => setproductData(res.data))
   .catch(err => console.log(err.message))
        console.log(ProductData);


},[]);
const handleDelete = (id) => {

  axios.delete(`https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Products/${id}`)
    .then(() => {

      setproductData(ProductData.filter(item => item.id !== id));
    })
    .catch(error => {
      console.error("There was an error deleting the data!", error);
    });
};




  return (
      <main className="productmain">

        <Admintopheader/>

    <div className="productbox">

    <h1 style={{  marginTop: "2rem", fontSize: "3rem" }}>Products</h1>
      <button className='openmodal' onClick={openModal}>Add Product</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />

      <div class="table-container">
        <table>
            <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Img</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>CategoryName</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>

                </tr>
            </thead>
            <tbody>

                {
                  ProductData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.product.name}</td>
                                  <td><img src={item.product.img} alt=""/></td>
                                <td>{item.product.title}</td>
                                <td>${item.product.price}</td>
                                <td>${item.product.discount}</td>
                                <td>{item.product.categoryname}</td>
                                 <td><button style={{ backgroundColor: "orange", padding: "10px 30px", border: "none" , borderRadius: "10px", color: "white" , cursor: "pointer" }}>UPDATE</button></td>

                                 <td>
                                   <button style={{ backgroundColor: "red", padding: "10px 30px", border: "none" , borderRadius: "10px", color: "white" , cursor: "pointer" }} onClick={() => handleDelete(item.id)}>DELETE</button>
                                    </td>

                            </tr>
                        )

                   })
                }


            </tbody>
        </table>
    </div>


    </div>


      </main>
  );
};

export default Productmain;
