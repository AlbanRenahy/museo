/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants
// Styles et assets
import './signin.scss';

 /**
 * Code
 */
const Signin = () => (
  <div className="signin">
    <div className="signin-center">
      <h1>Museo, page d'inscription</h1>
      <form action="">
        <button type="submit">M'inscrire</button>
        <a href="#">J'ai déjà les identifiants</a>
      </form>
    </div>
  </div>
);

 /**
 * Export
 */
export default Signin;