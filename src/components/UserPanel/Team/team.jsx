import React,{useState,useEffect} from 'react';
import Navbar from '../navbar';
import './team.css';
import Footer from '../footer/footer';
import Container from '../../Container';
import Newsletter from '../newsletter/newsletter';
import axios from 'axios';

 function Team() {
   const [TeamData,setTeamData] = useState([])

   useEffect(() => {
      axios.get("https://66d6dd72006bfbe2e64ee358.mockapi.io/user/Team")
      .then(res => setTeamData(res.data))
      .catch(err => console.log(err.message))
           console.log(TeamData);

   },[]);
  return (
     <div className="team">
             <header className="teampageheader">
                <Navbar/>
                <div className="teampagebox">
                        <h1>Our Team</h1>
                </div>
              </header>
                <main>
                   <Container>
                      <div className="teams">
                             <h3 style={{  textAlign: "center" , margin: "1", }}>Team</h3>
                             <h1 style={{ textAlign: "center", fontSize: "3.5rem" , color: "#274C5B" }}>Our Organic Experts</h1>
                              <p style={{    fontSize: "1.8rem", width: "90%" , textAlign:"center", marginTop: "2rem" }}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                              <div className="teamrows">
                              {TeamData.map(item => (
             <div key={item.id} className='teamitem'>

                     <img src={item.team.img} alt={item.team.name} />
                     <h2 style={{fontSize: "2rem" ,marginTop: "20px" }}>{item.team.name}</h2>
                     <h3 style={{ margin: '0', }}>{item.team.job}</h3>

             </div>
           ))}

                              </div>
                      </div>
                      <Newsletter/>
                   </Container>
                </main>
              <Footer/>
     </div>
  );
}
export default Team;