import React,{useState,useEffect} from 'react';
import './testimonial.css';
import  axios  from "axios";

import Admintopheader from '../../admintopheader.jsx';
import Testimonialmodal from './testimonialmodal/testimonialmodal.jsx';







const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>



        <button className='closebtn' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
       <Testimonialmodal/>
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

function Testimonial() {


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

 const [TesmoData,setTesmoData] = useState([])


useEffect(() => {
   axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Tesmo")
   .then(res => setTesmoData(res.data))
   .catch(err => console.log(err.message))
        console.log(TesmoData.error);


},[]);
const handleDelete = (id) => {

  axios.delete(`https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Tesmo/${id}`)
    .then(() => {

      setTesmoData(TesmoData.filter(item => item.id !== id));
    })
    .catch(error => {
      console.error("There was an error deleting the data!", error);
    });
};




  return (
      <main className="tesmo">

        <Admintopheader/>

    <div className="tesmobox">

    <h1 style={{  marginTop: "2rem", fontSize: "3rem" }}> Our Testimonial</h1>
      <button className='openmodal' onClick={openModal}>Add Testimonial</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />

      <div class="table-container">
        <table>
            <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Img</th>
                  <th>Title</th>
                  <th>Job Name</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>

                </tr>
            </thead>
            <tbody>

                {
                  TesmoData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.tesmo.name}</td>
                                  <td><img src={item.tesmo.img} alt=""/></td>
                                  <td>{item.tesmo.title}</td>

                                  <td>{item.tesmo.job}</td>


                                 <td><button style={{ backgroundColor: "orange", padding: "15px 30px", border: "none" , borderRadius: "10px", color: "white" , cursor: "pointer" }}>UPDATE</button></td>

                                 <td>
                                   <button style={{ backgroundColor: "red", padding: "15px 30px", border: "none" , borderRadius: "10px", color: "white" , cursor: "pointer" }} onClick={() => handleDelete(item.id)}>DELETE</button>
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

export default Testimonial;
