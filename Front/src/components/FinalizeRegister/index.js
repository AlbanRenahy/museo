import React from 'react';
import { Message } from 'semantic-ui-react'

import Welcome from 'src/components/Welcome';

import './finalizeRegister.scss';


const FinalizeRegister = () => (
    <>
     <div className="welcome"> <Welcome />
   
   <Message className='finalMessage' color='teal' size='big'>
        <Message.Header>Il ne vous reste qu'une dernière étape avant la visite :</Message.Header>
        <p>Cliquez sur le lien que nous vous avons envoyé par Email</p>
    </Message>

     </div>
   </>
);

export default FinalizeRegister;



