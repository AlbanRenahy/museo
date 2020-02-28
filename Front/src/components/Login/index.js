/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';

// images
// import MuseoLogoBW from '../../styles/images/museo_logo.png';
import MuseoLogoBW from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';

// Composants
import WelcomeMap from '../WelcomeMap';

// Styles et assets
import './login.scss';

/*
 * Code
 */
const Login = () => (
  <div className="home-container" src={Background} >
    <WelcomeMap />
    <div className="login">
      <div className="login-container">
        <img src={MuseoLogoBW} className="museo-logo" alt="Logo Museo" />
        <p className="login-container_subtitle">Application cartographique </p>
        <p className="login-container_subtitle-2">pour vos monuments et musées favoris</p>
        <form action="">
          <div>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" id="password" name="password" placeholder="Mot de passe" />
          </div>
          <p className="lost-password">
            <a href="#">J'ai perdu mon mot de passe</a>
          </p>
          <button type="submit">ME CONNECTER</button>
          <button type="button"><Link to="/signin">M'INSCRIRE</Link></button>
          <p className="map-link"><Link to="/map">Entrer sur la carte en visiteur</Link></p>
        </form>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Login;
