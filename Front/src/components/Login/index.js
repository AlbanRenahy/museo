/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';


// Composants
import WelcomeMap from '../WelcomeMap';
// Styles et assets
import './login.scss';

 /**
 * Code
 */
const Signin = () => (
  <div className="login">
    <WelcomeMap />
    <div className="login-center">
      <h1>Museo, page de connexion</h1>
      <form action="">
        <button type="submit">Me connecter</button>
        <p><Link to="/signin">Je souhaite m'inscrire</Link></p>
        <p><Link to="/map">Entrer sur la carte en visiteur</Link></p>
      </form>
    </div>
  </div>
);

 /**
 * Export
 */
export default Signin;