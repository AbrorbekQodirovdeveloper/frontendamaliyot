import React,{useState,useEffect} from 'react';
import './team.css'

import  axios  from "axios";

import Admintopheader from '../../admintopheader.jsx';
import Teammodal from './teammodal/teammodal.jsx';






const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>



        <button className='closebtn' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
       <Teammodal/>
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

function Team() {


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

 const [TeamData,setTeamData] = useState([])


useEffect(() => {
   axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Team")
   .then(res => setTeamData(res.data))
   .catch(err => console.log(err.message))
        console.log(TeamData.error);


},[]);
const handleDelete = (id) => {

  axios.delete(`https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Team/${id}`)
    .then(() => {

      setTeamData(TeamData.filter(item => item.id !== id));
    })
    .catch(error => {
      console.error("There was an error deleting the data!", error);
    });
};




  return (
      <main className="team">

        <Admintopheader/>

    <div className="teambox">

    <h1 style={{  marginTop: "2rem", fontSize: "3rem" }}> Our Teams</h1>
      <button className='openmodal' onClick={openModal}>Add Team</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />

      <div class="table-container">
        <table>
            <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Img</th>
                  <th>Job Name</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>

                </tr>
            </thead>
            <tbody>

                {
                  TeamData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.team.name}</td>
                                  <td><img src={item.team.img} alt=""/></td>
                                  <td>{item.team.job}</td>


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

export default Team;
