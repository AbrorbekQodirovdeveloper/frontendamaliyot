import React from 'react';
import Newsletter from '../../newsletter/newsletter';
import Container from '../../../Container.jsx';

import ContactForm from './contactform/contactform.jsx';
import ContactBg from './contactbg/contactbg.jsx';
import Conection from './connection/connection.jsx';



function ContactMain(props) {



  return (
    <main className='contactmain'>
      <Container>
        <Conection/>
        <ContactBg/>
       <ContactForm/>
      <Newsletter/>
      </Container>

    </main>
  );
}

export default  ContactMain;
