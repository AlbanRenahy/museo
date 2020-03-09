import React from 'react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './finalizeRegister.scss';


const FinalizeRegister = () => (
  <Message floating className='finalMessage' color='purple' size='big'>
    <Message.Header>Il ne vous reste qu'une étape :</Message.Header>
    <p>Cliquez sur le lien que nous vous avons envoyé par Email</p>
    <Link to="/">Retour à la page d'accueil</Link>
  </Message>
);

export default FinalizeRegister;



