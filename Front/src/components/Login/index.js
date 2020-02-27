/**
 * Import
 */
import React from 'react';
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
        <a href="#">Je souhaite m'inscrire</a>
      </form>
    </div>
  </div>
);

 /**
 * Export
 */
export default Signin;