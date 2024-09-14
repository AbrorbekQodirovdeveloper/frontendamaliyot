import React from 'react';
import Header from './header/header';

import './admin.css';
import Dashboard from './dashboard/dashboard.jsx';




function Admin() {
  return (
     <div className="admin">
<Header/>

<Dashboard/>



    </div>
  );
}

export default Admin;
