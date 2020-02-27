/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
// Composants
// Styles et assets
import './login.scss';

 /**
 * Code
 */
const Signin = () => (
  <div className="login">
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