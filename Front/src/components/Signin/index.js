/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';

// Composants
import WelcomeMap from '../WelcomeMap';
// Styles et assets
import './signin.scss';

 /**
 * Code
 */
const Signin = () => (
  <div className="signin">
    <WelcomeMap />
    <div className="signin-center">
      <h1>Museo, page d'inscription</h1>
      <form action="">
        <button type="submit">M'inscrire</button>
        <a href="#"><Link to="/">J'ai déjà mes identifiants</Link></a>
      </form>
    </div>
  </div>
);

 /**
 * Export
 */
export default Signin;