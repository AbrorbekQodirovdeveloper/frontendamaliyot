import React from 'react';
import Header from '../header/header';
import Team from './teammain/team.jsx';



function Addteam() {
  return (
    <div className="addteam" style={{ display: 'flex' }}>
         <Header/>
         <Team/>
    </div>

  );
}

export default Addteam;
