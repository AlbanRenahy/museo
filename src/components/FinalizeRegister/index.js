import React from 'react';
import { Message, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './finalizeRegister.scss';


const FinalizeRegister = () => (
  <Grid className="finalizeRegister" container columns={1}>
    <Grid.Column textAlign="center">
      <Message floating className="finalMessage" color="purple" size="big">
        <Message.Header>Il ne vous reste qu'une étape :</Message.Header><br />
        <p className="finalMessage-text">Cliquez sur le lien reçu par Email</p><br />
        <Link to="/" className="login-link">Retour à la page d'accueil</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default FinalizeRegister;
