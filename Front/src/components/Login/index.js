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

// Styles et assets
import './login.scss';

/*
 * Code
 */
const Login = () => {
  // Je récupère le focus d'un input
  const handleFocus = (e) => {
    // J'ajoute la classe focus à l'élément focus, ce qui passe sa bordure en violet.
    e.target.previousSibling.classList.add('open', 'focus');
    e.target.classList.add('focus');
  };

  // Je récupère le blur d'un input
  const handleBlur = (e) => {
    // Je remove la classe focus, ce qui redonnera à l'élément la bordure de base
    e.target.previousSibling.classList.remove('focus');
    e.target.classList.remove('focus');
  };

  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="login">
        <div className="login-container">
          <img src={MuseoLogoBW} alt="Museo" />
          <p className="login-container_subtitle">Application cartographique pour vos monuments et musées favoris </p>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" onClick={handleFocus} onBlur={handleBlur} />
            </div>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" name="password" placeholder="Mot de passe" onClick={handleFocus} onBlur={handleBlur} />
            </div>
            <p className="lost-password">
              <a href="#">J'ai perdu mon mot de passe</a>
            </p>
            <button type="submit">Me connecter</button>
            <Link to="/signin">Je souhaite m'inscrire</Link>
            <Link to="/map">Entrer en simple visite</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Login;
